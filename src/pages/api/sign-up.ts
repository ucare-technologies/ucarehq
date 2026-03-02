import type { APIRoute } from 'astro';

export const prerender = false;

const signUpUrl = 'https://crm.ucareapp.com/signup';
const turnstileVerifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface TurnstileVerifyResponse {
	success: boolean;
	'error-codes'?: string[];
}

function toErrorResponse(errors: Record<string, string[]>, status = 400) {
	return new Response(JSON.stringify({ Errors: errors }), {
		status,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store',
		},
	});
}

async function proxyToSignUp(method: 'PUT' | 'POST', payload: Record<string, unknown>) {
	try {
		const response = await fetch(signUpUrl, {
			method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});
		const responseText = await response.text();
		return new Response(responseText, {
			status: response.status === 204 ? 200 : response.status,
			headers: {
				'Content-Type': response.headers.get('content-type') || 'application/json',
				'Cache-Control': 'no-store',
			},
		});
	} catch {
		return toErrorResponse({ tenant: ['Unable to process sign-up. Please try again later.'] }, 502);
	}
}

async function parseJsonBody(request: Request) {
	try {
		return (await request.json()) as Record<string, unknown>;
	} catch {
		return null;
	}
}

async function verifyCaptcha(request: Request, token: string) {
	const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
	if (!secretKey) {
		return false;
	}

	const formData = new URLSearchParams();
	formData.set('secret', secretKey);
	formData.set('response', token);

	const forwardedFor = request.headers.get('x-forwarded-for') || request.headers.get('x-nf-client-connection-ip');
	const remoteIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '';
	if (remoteIp) {
		formData.set('remoteip', remoteIp);
	}

	try {
		const response = await fetch(turnstileVerifyUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData.toString(),
		});

		if (!response.ok) {
			return false;
		}

		const body = (await response.json()) as TurnstileVerifyResponse;
		return !!body.success;
	} catch {
		return false;
	}
}

export const PUT: APIRoute = async ({ request }) => {
	const payload = await parseJsonBody(request);
	if (!payload) {
		return toErrorResponse({ tenant: ['Invalid request body.'] });
	}
	return proxyToSignUp('PUT', payload);
};

export const POST: APIRoute = async ({ request }) => {
	const payload = await parseJsonBody(request);
	if (!payload) {
		return toErrorResponse({ tenant: ['Invalid request body.'] });
	}

	const captchaToken = typeof payload.captchaToken === 'string' ? payload.captchaToken : '';
	if (!captchaToken) {
		return toErrorResponse({ captchaToken: ['Please complete the security check.'] });
	}

	const verified = await verifyCaptcha(request, captchaToken);
	if (!verified) {
		return toErrorResponse({ captchaToken: ['Security check failed. Please try again.'] });
	}

	const { captchaToken: _captchaToken, ...signUpPayload } = payload;
	signUpPayload.token = import.meta.env.UCARE_SIGN_UP_TOKEN;
	return proxyToSignUp('POST', signUpPayload);
};

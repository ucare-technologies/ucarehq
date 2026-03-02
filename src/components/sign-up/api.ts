import type { SignUpFields, SignUpServerErrors } from './fields';

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
interface ErrorResponse {
	Errors: Record<string, string[]>;
}
async function thenErrorResponse(promise: Promise<Response>) {
	const res = await promise;
	if (res.ok) {
		return {} as SignUpServerErrors;
	}
	if ((res.headers.get('content-type') || '').includes('application/json')) {
		return res
			.json()
			.then((errors: ErrorResponse) => {
				if (!errors || !errors.Errors) {
					return { tenant: 'An error has occurred, please try again later' };
				}
				const serverErrors = {} as SignUpServerErrors;
				Object.keys(errors.Errors).forEach(key => {
					serverErrors[key as keyof SignUpServerErrors] = errors.Errors[key].join(', ');
				});
				return serverErrors;
			})
			.catch(() => ({ tenant: 'An error has occurred, please try again later' }));
	}
	return { tenant: 'An error has occurred, please try again later' };
}
const signUpUrl = '/api/sign-up';
export function checkTenant(tenant: string) {
	return thenErrorResponse(
		fetch(signUpUrl, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ tenant }),
		})
	);
}
export function createTenant(fields: SignUpFields & { captchaToken: string }) {
	return thenErrorResponse(
		fetch(signUpUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(fields),
		})
	);
}

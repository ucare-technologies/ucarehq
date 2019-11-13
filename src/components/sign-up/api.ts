import { Fields, ServerErrors } from './fields';

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
interface ErrorResponse {
	Errors: Record<string, string[]>;
}
function thenErrorResponse(promise: Promise<Response>) {
	return promise.then(res => {
		if (res.status === 400) {
			// eslint-disable-next-line promise/no-nesting
			return res.json().then((errors: ErrorResponse) => {
				if (!errors || !errors.Errors) {
					return { tenant: 'An error has occurred, please try again later' };
				}
				const serverErrors = {} as ServerErrors;
				Object.keys(errors.Errors).forEach(key => {
					serverErrors[key as keyof ServerErrors] = errors.Errors[key].join(', ');
				});
				return serverErrors;
			});
		}
		return {} as ServerErrors;
	});
}
const signUpUrl = 'https://crm.ucareapp.com/signup';
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
export function createTenant(fields: Fields) {
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

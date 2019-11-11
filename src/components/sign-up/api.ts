import { Fields, ServerErrors } from './fields';

interface ErrorResponse {
	Errors: Record<string, string[]>;
}
function thenErrorResponse(promise: Promise<Response>) {
	return promise.then(res => {
		if (res.status === 400) {
			return res.json().then((errors: ErrorResponse) => {
				if (!errors || !errors.Errors) {
					return { tenant: 'An error has occurred, please try again later' };
				}
				const serverErrors = {} as ServerErrors;
				for (const key in errors.Errors) {
					serverErrors[key as keyof ServerErrors] = errors.Errors[key].join(', ');
				}
				return serverErrors;
			});
		}
		return {} as ServerErrors;
	});
}
const verifyUrl = 'http://localhost:35610/signup'; //'https://crm.ucareapp.com/signup'
export function checkTenant(tenant: string) {
	return thenErrorResponse(
		fetch(verifyUrl, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ tenant }),
		})
	);
}
const createUrl = 'http://localhost:35610/signup'; //'https://crm.ucareapp.com/signup'
export function createTenant(fields: Fields) {
	return thenErrorResponse(
		fetch(createUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(fields),
		})
	);
}

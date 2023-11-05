export function required(value: string) {
	return !value ? 'This is required' : undefined;
}
// eslint-disable-next-line no-useless-escape
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export function email(value: string) {
	return !emailRegex.test(value) ? 'A valid email address is required' : undefined;
}
// eslint-disable-next-line no-useless-escape
const tenantRegex = /^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
export function tenant(value: string) {
	return (
		required(value) ||
		(value.length < 3
			? 'The address is too short, it must be more than 2 characters.'
			: value.length > 63
			? 'The address is too long, it must be less than 64 characters.'
			: !tenantRegex.test(value)
			? 'The address must start and end with a letter or number, and contain only letters, numbers or dash (-).'
			: undefined)
	);
}

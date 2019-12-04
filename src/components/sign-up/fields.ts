/* eslint-disable import/prefer-default-export */
export const defaultSignUpFields = {
	firstName: '',
	lastName: '',
	email: '',
	country: 'Australia',
	mobile: '',
	tenant: '',
	edition: 'growth',
	size: '500',
};
export type SignUpFields = typeof defaultSignUpFields;
export type SignUpFieldErrors = Partial<SignUpFields>;
export interface SignUpServerErrors extends SignUpFieldErrors {
	tenantAvailable?: string;
}
export const defaultContactFields = {
	firstName: '',
	lastName: '',
	email: '',
	country: 'Australia',
	mobile: '',
	message: '',
};
export type ContactFields = typeof defaultContactFields;
export type ContactFieldErrors = Partial<ContactFields>;

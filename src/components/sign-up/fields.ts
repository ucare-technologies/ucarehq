/* eslint-disable import/prefer-default-export */
export const defaultFields = {
	firstName: '',
	lastName: '',
	email: '',
	country: 'Australia',
	mobile: '',
	tenant: '',
};
export type Fields = typeof defaultFields;
export type FieldErrors = Partial<Fields>;
export interface ServerErrors extends FieldErrors {
	tenantAvailable?: string;
}

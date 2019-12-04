/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
import React from 'react';
import AnimateHeight from 'react-animate-height';

import { submitContact } from './api';
import CountryField from './country-field';
import Field from './field';
import { defaultContactFields, ContactFields, ContactFieldErrors } from './fields';
import { required, email } from './validation';

type contactStage = 'complete' | 'submitted';
export default function Form() {
	const [stage, setStage] = React.useState('complete' as contactStage);
	const [fields, setFields] = React.useState(defaultContactFields);
	const [errors, setErrors] = React.useState({} as ContactFieldErrors);
	const [validate, setValidate] = React.useState(false);
	const handleChange = React.useCallback((name: string, value: string) => {
		setFields(current => ({
			...current,
			[name as keyof ContactFields]: value,
		}));
	}, []);
	const handleMessageChange = React.useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('message', e.currentTarget.value),
		[handleChange]
	);
	const isValid = React.useCallback(() => {
		const newErrors = {
			firstName: required(fields.firstName),
			lastName: required(fields.lastName),
			email: required(fields.email) || email(fields.email),
			mobile: required(fields.mobile),
			country: required(fields.country),
		};
		setErrors(newErrors);
		return !Object.values(newErrors).some(value => !!value);
	}, [fields]);
	React.useLayoutEffect(() => {
		if (validate) {
			isValid();
		}
	}, [isValid, validate]);
	const handleSubmit = React.useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setValidate(true);
			window.setTimeout(() => {
				if (isValid()) {
					setStage('submitted');
					submitContact(fields)
						.then(serverErrors1 => {
							if (Object.keys(serverErrors1).length > 0) {
								setStage('complete');
							}
							return true;
						})
						.catch(() => setStage('complete'));
				}
			}, 0);
		},
		[isValid, fields]
	);
	return (
		<>
			<AnimateHeight height={stage === 'complete' ? 'auto' : 0} animateOpacity easing='ease-in-out'>
				<form onSubmit={handleSubmit} noValidate>
					<div className='form-row'>
						<div className='form-group col-md-6'>
							<Field
								value={fields.firstName}
								error={errors.firstName}
								name='firstName'
								placeholder='First name'
								onChange={handleChange}
								disabled={stage !== 'complete'}
							>
								Your name*
							</Field>
						</div>
						<div className='form-group col-md-6'>
							<Field
								value={fields.lastName}
								error={errors.lastName}
								name='lastName'
								placeholder='Last name'
								onChange={handleChange}
								disabled={stage !== 'complete'}
							>
								<span className='d-none d-md-block'>&nbsp;</span>
							</Field>
						</div>
					</div>
					<div className='form-group'>
						<Field
							value={fields.email}
							error={errors.email}
							name='email'
							placeholder='e.g. john@yourchurch.com'
							type='email'
							onChange={handleChange}
							disabled={stage !== 'complete'}
						>
							Your email*
						</Field>
					</div>
					<div className='form-group'>
						<Field
							value={fields.mobile}
							error={errors.mobile}
							name='mobile'
							placeholder='Required'
							type='tel'
							onChange={handleChange}
							disabled={stage !== 'complete'}
						>
							Your mobile phone*
						</Field>
					</div>
					<div className='form-group'>
						<CountryField value={fields.country} onChange={handleChange} disabled={stage !== 'complete'} noHelp />
					</div>
					<div className='form-group'>
						<label>
							Message
							<textarea
								value={fields.message}
								className='form-control'
								onChange={handleMessageChange}
								disabled={stage !== 'complete'}
								rows={3}
							/>
						</label>
					</div>
					<footer>
						<button type='submit' className='btn btn-success trial' disabled={stage !== 'complete'}>
							Get in touch
						</button>
					</footer>
				</form>
			</AnimateHeight>
			<AnimateHeight height={stage === 'submitted' ? 'auto' : 0} animateOpacity easing='ease-in-out'>
				<div className='mt-4 text-center'>
					<h1>Thanks, we'll be in touch soon</h1>
				</div>
			</AnimateHeight>
		</>
	);
}

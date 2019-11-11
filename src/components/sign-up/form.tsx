/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
import React from 'react';
import AnimateHeight from 'react-animate-height';

import AgreeField from './agree-field';
import { checkTenant, createTenant } from './api';
import CountryField from './country-field';
import Field from './field';
import { defaultFields, Fields, FieldErrors, ServerErrors } from './fields';
import TenantField from './tenant-field';
import { required, email, tenant } from './validation';

type signUpStage = 'create' | 'submit' | 'ready';
export default function SignUpForm() {
	const [stage, setStage] = React.useState('create' as signUpStage);
	const [fields, setFields] = React.useState(defaultFields);
	const [agreed, setAgreed] = React.useState(false);
	const [errors, setErrors] = React.useState({} as FieldErrors);
	const [serverErrors, setServerErrors] = React.useState({} as ServerErrors);
	const [validate, setValidate] = React.useState(false);
	const [validatingTenant, setValidatingTenant] = React.useState(false);
	const handleChange = React.useCallback((name: string, value: string) => {
		setFields(current => ({
			...current,
			[name as keyof Fields]: value,
		}));
	}, []);
	const validateTenant = React.useCallback((value: string) => {
		if (!tenant(value)) {
			setValidatingTenant(true);
			checkTenant(value)
				.then(serverErrors => {
					setValidatingTenant(false);
					setServerErrors(serverErrors);
				})
				.catch(error => {
					setValidatingTenant(false);
					setServerErrors({ tenant: (error || '').toString() });
				});
		}
	}, []);
	const [t, setT] = React.useState(0);
	const handleTenantChange = React.useCallback(
		(value: string) => {
			setFields(current => ({ ...current, tenant: value.toLowerCase().replace('--', '-') }));
			if (t) {
				window.clearTimeout(t);
			}
			setT(window.setTimeout(() => validateTenant(value), 300));
		},
		[t, validateTenant]
	);
	const isValid = React.useCallback(() => {
		const newErrors = {
			firstName: required(fields.firstName),
			lastName: required(fields.lastName),
			email: required(fields.email) || email(fields.email),
			country: required(fields.country),
			tenant: tenant(fields.tenant),
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
				if (!validatingTenant && isValid() && !serverErrors.tenant) {
					setStage('submit');
					createTenant(fields)
						.then(serverErrors => {
							setServerErrors(serverErrors);
							if (Object.keys(serverErrors).length > 0) {
								setStage('create');
							} else {
								setStage('ready');
								dataLayer.push({ userId: fields.tenant });
							}
						})
						.catch(error => {
							setStage('create');
							setServerErrors({ tenant: (error || '').toString() });
						});
				}
			}, 0);
		},
		[validatingTenant, isValid, fields, serverErrors]
	);
	return (
		<>
			<AnimateHeight height={stage === 'create' ? 'auto' : 0} animateOpacity easing='ease-in-out'>
				<form onSubmit={handleSubmit} noValidate>
					<div className='form-row'>
						<div className='form-group col-md-6'>
							<Field
								value={fields.firstName}
								error={errors.firstName}
								name='firstName'
								placeholder='First name'
								onChange={handleChange}
								disabled={stage !== 'create'}
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
								disabled={stage !== 'create'}
							>
								&nbsp;
							</Field>
						</div>
					</div>
					<div className='form-group'>
						<Field
							value={fields.email}
							error={errors.email}
							name='email'
							placeholder='This must be correct as we will email you with your sign in details'
							type='email'
							onChange={handleChange}
							disabled={stage !== 'create'}
						>
							Your email*
						</Field>
					</div>
					<div className='form-group'>
						<CountryField value={fields.country} onChange={handleChange} disabled={stage !== 'create'} />
					</div>
					<div className='form-group'>
						<Field
							value={fields.mobile}
							error={errors.mobile}
							name='mobile'
							placeholder='Required for sms features'
							type='tel'
							onChange={handleChange}
							disabled={stage !== 'create'}
						>
							Your mobile phone
						</Field>
					</div>
					<div className='form-group account-address'>
						<TenantField
							value={fields.tenant}
							error={errors.tenant || serverErrors.tenantAvailable}
							onChange={handleTenantChange}
							validating={validatingTenant}
							disabled={stage !== 'create'}
						/>
					</div>
					<div className='form-group'>
						<AgreeField checked={agreed} onChange={setAgreed} disabled={stage !== 'create'} />
					</div>
					<footer>
						<button type='submit' className='btn btn-success trial' disabled={!agreed || stage !== 'create'}>
							Start your free 30-day trial
						</button>
					</footer>
				</form>
			</AnimateHeight>
			<AnimateHeight height={stage === 'submit' ? 'auto' : 0} animateOpacity easing='ease-in-out'>
				<div className='mt-4 text-center'>
					<h2>Ready in under a minute</h2>
					<p>Please wait, we're just getting your account ready</p>
					<div className='spinner-border-block pt-4'>
						<div className='spinner-border text-success' role='status'>
							<span className='sr-only'>Creating...</span>
						</div>
					</div>
				</div>
			</AnimateHeight>
			<AnimateHeight height={stage === 'ready' ? 'auto' : 0} animateOpacity easing='ease-in-out'>
				<div className='mt-4 text-center'>
					<h1>Your UCare trial is ready!</h1>
					<br />
					<a
						href={`https://${fields.tenant}.ucareapp.com/account/new/${fields.email}`}
						target='_blank'
						className='btn btn-success trial'
					>
						Sign in to your free 30 day trial &rarr;
					</a>
				</div>
			</AnimateHeight>
		</>
	);
}

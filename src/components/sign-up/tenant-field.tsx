import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import FieldError from './field-error';

interface TenantFieldProps {
	value: string;
	error: string | undefined;
	onChange: (value: string) => void;
	validating: boolean;
	disabled: boolean;
}
const TenantField: React.FC<TenantFieldProps> = ({ value, error, onChange, validating, disabled }) => {
	const [focused, setFocused] = React.useState(false);
	const handleFocus = React.useCallback(() => setFocused(true), [setFocused]);
	const handleBlur = React.useCallback(() => setFocused(false), [setFocused]);
	const handleTenantChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value),
		[onChange]
	);
	return (
		<label style={{ display: 'inline-block' }}>
			Reserve your UCare site address*
			<small> — this is where you will sign-in</small>
			<div>
				<div className={`input-group ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
					<div className='input-group-prepend'>
						<span className='input-group-text'>
							<FontAwesomeIcon icon={faLock} />
						</span>
					</div>
					<input
						className='form-control'
						id='tenant'
						name='tenant'
						title='address'
						type='text'
						minLength={3}
						maxLength={63}
						value={value}
						placeholder='e.g. yourchurch'
						disabled={disabled}
						onChange={handleTenantChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					{validating && (
						<div className='spinner-border-block'>
							<div className='spinner-border spinner-border-sm' role='status'>
								<span className='sr-only'>Loading...</span>
							</div>
						</div>
					)}
					<div className='input-group-append'>
						<span className='input-group-text'>.ucareapp.com</span>
					</div>
				</div>
				<FieldError>{error}</FieldError>
			</div>
		</label>
	);
};
export default TenantField;

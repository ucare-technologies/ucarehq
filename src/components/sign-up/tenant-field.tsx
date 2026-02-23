// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Lock } from '../icons/lock';
import FieldError from './field-error';

const TenantField: React.FC<{
	value: string;
	error: string | undefined;
	onChange: (value: string) => void;
	validating: boolean;
	disabled: boolean;
}> = ({ value, error, onChange, validating, disabled }) => {
	const [focused, setFocused] = React.useState(false);
	const handleFocus = React.useCallback(() => setFocused(true), [setFocused]);
	const handleBlur = React.useCallback(() => setFocused(false), [setFocused]);
	const handleTenantChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value),
		[onChange]
	);
	return (
		<label>
			Reserve your UCare site address*
			<small> — this is where you will sign-in</small>
			<div>
				<div className={`input-group ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
					<span className='input-group-text tenant-prefix'>
						<Lock />
					</span>
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
								<span className='visually-hidden'>Loading...</span>
							</div>
						</div>
					)}
					<span className='input-group-text tenant-suffix'>.ucareapp.com</span>
				</div>
				<FieldError>{error}</FieldError>
			</div>
		</label>
	);
};
export default TenantField;

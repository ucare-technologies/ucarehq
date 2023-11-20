// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';

const AgreeField: React.FC<{
	checked: boolean;
	onChange: (checked: boolean) => void;
	disabled: boolean;
}> = ({ checked, onChange, disabled }) => {
	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.checked),
		[onChange]
	);
	return (
		<div className='custom-control custom-checkbox'>
			<input
				id='terms-agree'
				type='checkbox'
				className='custom-control-input'
				onChange={handleChange}
				checked={checked}
				disabled={disabled}
			/>
			<label className='custom-control-label' htmlFor='terms-agree'>
				I agree to the&nbsp;
				<Link to='/legal/terms'>terms</Link> and&nbsp;
				<Link to='/legal/privacy'>privacy policy</Link>.
			</label>
		</div>
	);
};
export default AgreeField;

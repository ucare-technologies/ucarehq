// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { Link } from 'gatsby';

interface AgreeFieldProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	disabled: boolean;
}
const AgreeField: React.FC<AgreeFieldProps> = ({ checked, onChange, disabled }) => {
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
				I agree to the
				<Link to='/legal/terms'> terms</Link> and
				<Link to='/legal/privacy'> privacy policy</Link>.
			</label>
		</div>
	);
};
export default AgreeField;

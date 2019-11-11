import React from 'react';
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
		<label>
			<input type='checkbox' onChange={handleChange} checked={checked} disabled={disabled} /> I agree to the
			<Link to='/terms'> terms</Link> and
			<Link to='/privacy'> privacy policy</Link>.
		</label>
	);
};
export default AgreeField;

import React from 'react';

import countryNames from './country-names';

interface CountryFieldProps {
	value: string;
	onChange: (name: string, value: string) => void;
	disabled: boolean;
	noHelp?: boolean;
}
const CountryField: React.FC<CountryFieldProps> = ({ value, onChange, disabled, noHelp }) => {
	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			onChange('country', e.currentTarget.value);
		},
		[onChange]
	);
	return (
		<label>
			Your country*
			{!noHelp && <small> — so we know where to store your data &amp; format phone numbers</small>}
			<select className='form-control' onChange={handleChange} name='country' value={value} disabled={disabled}>
				{countryNames.map(name => (
					<option key={name}>{name}</option>
				))}
			</select>
		</label>
	);
};
export default CountryField;

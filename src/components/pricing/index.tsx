import React from 'react';

import Details from './details';
import Editions from './editions';
import Estimate from './estimate';

export default function Pricing() {
	const [value, setValue] = React.useState(undefined as undefined | number);
	const handleChange = React.useCallback((newValue: number) => setValue(newValue), [setValue]);
	return (
		<div id='pricing' className='price-calc'>
			<Editions value={value} />
			<Estimate value={value || 500} onChange={handleChange} />
			<Details />
		</div>
	);
}

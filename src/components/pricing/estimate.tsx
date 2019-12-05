import React from 'react';

import Range from './range';

const PricingEstimate: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value, onChange }) => {
	const handleValueChange = React.useCallback((newValue: number) => onChange(newValue), [onChange]);
	return (
		<div className='pricing-estimate text-center'>
			<header>
				<h3>Which edition?</h3>
				<p>* Our recommendation is based on how may people are regularly connected to your church.</p>
			</header>
			<Range value={value} onChange={handleValueChange} />
		</div>
	);
};
export default PricingEstimate;

import React from 'react';
import * as Scroll from 'react-scroll';

import Range from './range';
import Badge from '../badge';

const PricingEstimate: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value, onChange }) => {
	const handleValueChange = React.useCallback((newValue: number) => onChange(newValue), [onChange]);
	return (
		<div className='pricing-estimate text-center'>
			<header>
				<h3>Which edition?</h3>
				<p>
					* Recommended edition is based on{' '}
					<Badge type='primary'>
						{value.toLocaleString()}
						{value >= 2000 ? '+' : ''}
					</Badge>{' '}
					<Scroll.Link to='faq' href='#faq' smooth duration={500}>
						active profiles
					</Scroll.Link>{' '}
					(use the slider to adjust).
				</p>
			</header>
			<Range value={value} onChange={handleValueChange} />
		</div>
	);
};
export default PricingEstimate;

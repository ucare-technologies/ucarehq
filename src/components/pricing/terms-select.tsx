import * as React from 'react';

import { Badge } from '../badge';

export type Terms = 'monthly' | 'yearly';
export const TermsSelect: React.FC<{
	value: Terms;
	yearlyDiscountPercentage: number;
	onChange: (terms: Terms) => void;
}> = ({ value, onChange, yearlyDiscountPercentage }) => {
	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value as Terms),
		[onChange]
	);
	return (
		<div className='text-center my-4'>
			<div className='custom-control custom-radio custom-control-inline'>
				<input
					type='radio'
					id='monthlyOption'
					className='custom-control-input'
					checked={value === 'monthly'}
					value='monthly'
					onChange={handleChange}
				/>
				<label className='custom-control-label' htmlFor='monthlyOption'>
					Billed Monthly
				</label>
			</div>
			<div className='custom-control custom-radio custom-control-inline'>
				<input
					type='radio'
					id='yearlyOption'
					className='custom-control-input'
					checked={value === 'yearly'}
					value='yearly'
					onChange={handleChange}
				/>
				<label className='custom-control-label' htmlFor='yearlyOption'>
					Billed Annually{' '}
					<Badge type={value === 'yearly' ? 'success' : 'light'}>{`SAVE ${yearlyDiscountPercentage}%`}</Badge>
				</label>
			</div>
		</div>
	);
};

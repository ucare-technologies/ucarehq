import * as React from 'react';

import { discussEdition } from './discuss-edition';
import * as styles from './price-estimate.module.scss';
import { Terms } from './terms-select';

export const PriceEstimate: React.FC<{
	base: number;
	people: number;
	step: number;
	stepPrice: number;
	yearlyDiscountPercentage: number;
	terms: Terms;
	edition: string;
}> = ({ base, people, step, stepPrice, yearlyDiscountPercentage, terms, edition }) => {
	const extraPeople = Math.max(0, (people || 0) - 500);
	const extra = Math.ceil(extraPeople / step) * stepPrice;
	const price = base + extra;
	const discount = 1 - yearlyDiscountPercentage / 100;
	const termsPrice = terms === 'yearly' ? Math.floor(price * discount) : price;
	return discussEdition(edition, people) ? (
		<>
			{
				<div className={styles.price}>
					Let’s discuss
					<br /> your unique needs
				</div>
			}
		</>
	) : (
		<div className={styles.price}>
			<div>
				<small>from...</small>
			</div>
			<sup>$</sup>
			{termsPrice} <small>AUD/month</small>
		</div>
	);
};

import * as React from 'react';

import { Link } from 'gatsby';

import { Badge } from '../badge';
// import { BookCall } from './book-call';
// import { discussEdition } from './discuss-edition';
import * as styles from './editions.module.scss';
import { PriceEstimate } from './price-estimate';
import { Terms } from './terms-select';

export type FeatureCardType = {
	className: string;
	title: string;
	price: number;
	step: number;
	stepPrice: number;
	descriptionHtml: string;
	buttonText: string;
	features: {
		bold: boolean;
		description: string;
		addOnText: string;
		newText: string;
	}[];
};
export const Editions: React.FC<{
	value?: number;
	yearlyDiscountPercentage: number;
	terms: Terms;
	cards: FeatureCardType[];
	// calendlyUrl: string;
}> = ({ value, yearlyDiscountPercentage, terms, cards }) => {
	const people = value || 500;
	const edition = getEdition(people);
	return (
		<div className='row mx-0'>
			{cards.map((item, index) => {
				const recommend = edition === item.className;
				return (
					<section className={`col-md ${styles.edition} ${recommend ? styles.recommend : ''}`} key={index}>
						<div className={`${styles.top} ${recommend ? styles.topRecommend : ''}`}>
							{recommend ? `recommended for you*` : <br />}
						</div>
						<header className='text-center'>
							<h3>{item.title}</h3>
							<p dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />

							<PriceEstimate
								base={item.price}
								people={people}
								step={item.step}
								stepPrice={item.stepPrice}
								terms={terms}
								yearlyDiscountPercentage={yearlyDiscountPercentage}
								edition={item.className}
							/>
						</header>
						<ul>
							{item.features.map(({ bold, description, newText, addOnText }, idx) => (
								<li key={idx} className={`${recommend ? styles.recommendLi : ''}`}>
									{bold ? <strong>{description}</strong> : description}
									{!!newText && (
										<>
											{' '}
											<Badge type='success'>{newText}</Badge>
										</>
									)}
									{!!addOnText && (
										<>
											{' '}
											<Badge type='light'>{addOnText}</Badge>
										</>
									)}
								</li>
							))}
						</ul>
						<footer>
							{/*discussEdition(item.className, people) ? (
								<BookCall
									calendlyUrl={calendlyUrl}
									className={`btn ${recommend ? `btn-primary` : `btn-outline-secondary`} ${styles.button}`}
								/>
							) : (*/}
								<Link
									to={`/sign-up/?size=${people}&edition=${item.className}`}
									className={`btn ${recommend ? `btn-primary` : `btn-outline-secondary`} ${styles.button}`}
									role='button'
								>
									{item.buttonText}
								</Link>
							{/*})*/}
						</footer>
					</section>
				);
			})}
		</div>
	);
};
function getEdition(value: number) {
	if (value <= 200) return 'Essentials';
	if (value <= 1000) return 'Growth';
	return 'Lighthouse';
}

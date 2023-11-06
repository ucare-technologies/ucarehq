import React from 'react';

import { handleLinkClick } from '../../utils/handleLinkClick';
import { FadeIn } from '../fade-in';
import * as styles from './all-features.module.scss';
import { Feature } from './feature';

export const AllFeatures: React.FC<{
	part?: boolean;
	title?: string;
	descriptionHtml?: string;
	cards: {
		slug: string;
		title: string;
		image: {
			className: string;
			url: string;
		};
	}[];
}> = ({ part, title, descriptionHtml, cards }) => (
	<div className={`row m-0 ${styles.features} ${part ? styles.featuresPart : ''}`}>
		<div className='container text-center'>
			{!!title && <h2>{title}</h2>}
			{!!descriptionHtml && (
				<div
					className={`row ${styles.summary}`}
					dangerouslySetInnerHTML={{ __html: descriptionHtml }}
					onClick={handleLinkClick}
				/>
			)}
			<FadeIn className='row' fade='up'>
				{cards.map(item => (
					<Feature to={item.slug} className={item.image.className} label={item.title} key={item.slug}>
						<img src={item.image.url} alt={item.title} width='50' height='50' />
					</Feature>
				))}
			</FadeIn>
		</div>
	</div>
);

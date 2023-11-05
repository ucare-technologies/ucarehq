// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';

import heartLogo from '../../../content/assets/ucare-heart2.svg';
import { FadeIn } from '../fade-in';
import { Feature } from '../features/feature';
import { ChevronRight } from '../icons/chevron-right';
import * as styles from './features.module.scss';

export const Features: React.FC<{
	title: string;
	buttonText: string;
	cards: {
		slug: string;
		title: string;
		image: {
			className: string;
			url: string;
		};
	}[];
}> = ({ title, buttonText, cards }) => (
	<div className={`container-fluid ${styles.features}`}>
		<div className='container p-0 text-center'>
			<FadeIn fade='up'>
				<h2 className={`text-center ${styles.title}`}>
					{title}
					<img src={heartLogo} alt='UCare Heart Logo' />
				</h2>
			</FadeIn>
			<FadeIn className='row' fade='up'>
				{cards.map((item, index) =>
					!item.slug ? null : (
						<Feature to={item.slug} className={item.image.className} label={item.title} key={index}>
							<img src={item.image.url} alt={item.title} width='50' height='50' />
						</Feature>
					)
				)}
			</FadeIn>
			<FadeIn className={styles.exploreMore} fade='up'>
				<Link to='/features' className={styles.exploreMoreButton}>
					{buttonText}
					<ChevronRight className='ml-2' />
				</Link>
			</FadeIn>
		</div>
	</div>
);

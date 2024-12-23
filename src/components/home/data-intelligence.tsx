// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

import { handleLinkClick } from '../../utils/handleLinkClick';
import { FadeIn } from '../fade-in';
import * as styles from './data-intelligence.module.scss';

export const DataIntelligence: React.FC<{
	firstImage?: IGatsbyImageData | null;
	titleHtml: string;
	descriptionHtml: string;
}> = ({ firstImage, titleHtml, descriptionHtml }) => {
	const image = firstImage && getImage(firstImage);
	return (
		<section className={`container-fluid ${styles.intelligence}`}>
			<div className='row'>
				<div className={`col-lg-6 col-md-6 ${styles.wrapper}`}>
					<FadeIn fade='left'>
						<h2
							dangerouslySetInnerHTML={{
								__html: titleHtml.replace(/\n/g, '<br>'),
							}}
						/>

						<div dangerouslySetInnerHTML={{ __html: descriptionHtml }} onClick={handleLinkClick} />
					</FadeIn>
				</div>
				<div className={`col-lg-6 col-md-6 ${styles.photo}`}>
					<FadeIn fade='right'>
						{!!image && (
							<GatsbyImage image={image} alt='Data Intelligence' loading='lazy' style={{ overflow: 'visible' }} />
						)}
					</FadeIn>
				</div>
			</div>
		</section>
	);
};

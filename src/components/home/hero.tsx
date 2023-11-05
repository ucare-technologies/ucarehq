// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

import { trimPTag } from '../../utils/trimTag';
import * as styles from './hero.module.scss';

export const Hero: React.FC<{
	backgroundImage?: IGatsbyImageData | null;
	titleHtml: string;
}> = ({ backgroundImage, titleHtml }) => {
	const heroImage = backgroundImage && getImage(backgroundImage);
	return (
		<>
			{!!heroImage && (
				<GatsbyImage image={heroImage} alt='People using UCare' loading='eager' className={styles.hero} />
			)}

			<div className={styles.wrapper}>
				<div className={`${styles.title} text-center`}>
					<h1
						className={`${styles.header} text-white`}
						dangerouslySetInnerHTML={{
							__html: trimPTag(titleHtml),
						}}
					/>
				</div>
			</div>
		</>
	);
};

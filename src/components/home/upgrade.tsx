// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

import { FadeIn } from '../fade-in';
import { Play } from '../icons/play';
import { WaveLogoWhite } from '../wave/wave-logo-white';
import * as styles from './upgrade.module.scss';

export const Upgrade: React.FC<{
	backgroundImage?: IGatsbyImageData | null;
	titleHtml: string;
	buttonText: string;
	linkTo: string;
}> = ({ backgroundImage, titleHtml, buttonText, linkTo }) => {
	const heroImage = backgroundImage && getImage(backgroundImage);
	return (
		<div className={`container-fluid ${styles.background}`}>
			{!!heroImage && <GatsbyImage image={heroImage} alt='Wave' loading='lazy' className={styles.hero} />}

			<FadeIn fade='up'>
				<div className={`container text-center text-white ${styles.logo}`}>
					<h1>
						<div>
							<WaveLogoWhite />
						</div>
						<div dangerouslySetInnerHTML={{ __html: titleHtml }} className={styles.title} />
					</h1>
					<footer>
						<div>
							{!!linkTo && (
								<Link className={`btn btn-outline-white btn-lg ${styles.more}`} role='button' to={linkTo}>
									{buttonText} <Play className='ml-2' />
								</Link>
							)}
						</div>
					</footer>
				</div>
			</FadeIn>
		</div>
	);
};

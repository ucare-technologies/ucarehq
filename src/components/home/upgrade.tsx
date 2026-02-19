// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { FadeIn } from '../fade-in';
import { Play } from '../icons/play';
import { Link } from '../link';
import { WaveLogoWhite } from '../wave/wave-logo-white';
import * as styles from './upgrade.module.scss';

export const Upgrade: React.FC<{
	backgroundImageUrl?: string;
	titleHtml: string;
	buttonText: string;
	linkTo: string;
}> = ({ backgroundImageUrl, titleHtml, buttonText, linkTo }) => (
	<div className={`container-fluid ${styles.background}`}>
		{!!backgroundImageUrl && <img src={backgroundImageUrl} alt='Wave' loading='lazy' className={styles.hero} />}

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

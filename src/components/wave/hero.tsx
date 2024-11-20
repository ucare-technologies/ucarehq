import React from 'react';

import Scroll from 'react-scroll';

import { FadeIn } from '../fade-in';
import { Play } from '../icons/play';
import * as styles from './hero.module.scss';
import { WaveLogoWhite } from './wave-logo-white';

export const Hero: React.FC<{
	backgroundImageUrl: string;
	titleHtml: string;
	onPlayClick: () => void;
}> = ({ backgroundImageUrl, titleHtml, onPlayClick }) => (
	<section
		style={{ backgroundImage: `url(${backgroundImageUrl})` }} // TODO: <GatsbyImage
		className={`justify-content-center ${styles.waveHero}`}
	>
		<FadeIn className={`text-center ${styles.title}`} fade='up'>
			<h1 className='text-white'>
				<div>
					<WaveLogoWhite />
				</div>
				<div dangerouslySetInnerHTML={{ __html: titleHtml }} />
			</h1>

			<footer>
				<Scroll.Link
					to='video'
					className='btn btn-outline-white btn-lg'
					role='button'
					href='#video'
					smooth
					duration={500}
					onClick={onPlayClick}
				>
					Watch Video <Play className='ml-2' />
				</Scroll.Link>
			</footer>
		</FadeIn>
	</section>
);

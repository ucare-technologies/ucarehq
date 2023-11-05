// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import * as Scroll from 'react-scroll';

import { FadeIn } from '../fade-in';
import * as styles from './wave-video.module.scss';

export const WaveVideo: React.FC<{ autoPlay: boolean }> = ({ autoPlay }) => (
	<Scroll.Element type='div' className={styles.video} name='video'>
		<div className={`container-fluid p-0 ${styles.container}`}>
			<div className='container px-0 text-center'>
				<FadeIn fade='up'>
					<div className={`embed-responsive e16by9 ${styles.embed}`}>
						<iframe
							src={`https://www.youtube.com/embed/PCogeHdoBQI?feature=oembed&autoplay=${
								autoPlay === false ? 0 : 1
							}&start&end&wmode=opaque&loop=0&controls=1&mute=0&showinfo=1&rel=0&modestbranding=0`}
							title='UCare Wave'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					</div>
				</FadeIn>
			</div>
		</div>
		<WaveSection />
	</Scroll.Element>
);

const WaveSection: React.FC = () => (
	<svg viewBox='0 0 1440 204' style={{ fill: '#fff', width: '100%' }} preserveAspectRatio='none'>
		<path
			d='M6.05022984e-08,204 C0.00535896441,203.997351 356.00274,28.000572 720,104 C1084,180 1440,4 1440,4 L0,4 L0,204 L0,4 L1440,4 L1440,204 L0,204 Z'
			filter='url(#filter1)'
		/>
		<defs>
			<filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter1'>
				<feOffset dx='0' dy='-5' in='SourceAlpha' result='offset1' />
				<feGaussianBlur stdDeviation='3' in='offset1' result='blur1' />
				<feColorMatrix
					values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0'
					in='blur1'
					type='matrix'
					result='matrix1'
				/>
				<feMerge>
					<feMergeNode in='matrix1' />
					<feMergeNode in='SourceGraphic' />
				</feMerge>
			</filter>
		</defs>
	</svg>
);

import React from 'react';
import * as Scroll from 'react-scroll';

import FadeIn from '../fade-in';
import YouTube from '../youtube';

export default function WaveVideo({ autoPlay }: { autoPlay: boolean }) {
	return (
		<Scroll.Element type='div' className='wave-section wave-video' name='video'>
			<div className='container-fluid video-container p-0'>
				<div className='container px-0 text-center'>
					<FadeIn fade='up'>
						<YouTube id='PCogeHdoBQI' autoPlay={autoPlay} />
					</FadeIn>
				</div>
			</div>
			<WaveSection />
		</Scroll.Element>
	);
}

function WaveSection() {
	return (
		<svg
			viewBox='0 0 1440 204'
			style={{ fill: '#fff', width: '100%' }}
			preserveAspectRatio='none'
			className='section-divide-video'
		>
			<path
				d='M6.05022984e-08,204 C0.00535896441,203.997351 356.00274,28.000572 720,104 C1084,180 1440,4 1440,4 L0,4 L0,204 L0,4 L1440,4 L1440,204 L0,204 Z'
				filter='url(#filter1)'
			></path>
			<defs>
				<filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter1'>
					<feOffset dx='0' dy='-5' in='SourceAlpha' result='offset1'></feOffset>
					<feGaussianBlur stdDeviation='3' in='offset1' result='blur1'></feGaussianBlur>
					<feColorMatrix
						values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0'
						in='blur1'
						type='matrix'
						result='matrix1'
					></feColorMatrix>
					<feMerge>
						<feMergeNode in='matrix1'></feMergeNode>
						<feMergeNode in='SourceGraphic'></feMergeNode>
					</feMerge>
				</filter>
			</defs>
		</svg>
	);
}

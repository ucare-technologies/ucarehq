// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const waves = [
	'M0,320L48,298.7C96,277,192,235,288,202.7C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,320L48,298.7C96,277,192,235,288,202.7C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	'M0,320L48,277.3C96,235,192,149,288,101.3C384,53,480,43,576,58.7C672,75,768,117,864,144C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,320L48,277.3C96,235,192,149,288,101.3C384,53,480,43,576,58.7C672,75,768,117,864,144C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	'M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,144C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,144C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	'M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,117.3C672,149,768,203,864,240C960,277,1056,299,1152,282.7C1248,267,1344,213,1392,186.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,117.3C672,149,768,203,864,240C960,277,1056,299,1152,282.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
];
const WaveSection: React.FC<{ d: number; alt?: boolean }> = ({ d, alt = false }) => {
	const name = `filter${d + 2}`;
	return (
		<svg
			viewBox='0 0 1440 320'
			style={{ fill: '#fff', width: '100%', height: '22.222vw' }}
			preserveAspectRatio='none'
			className='section-divide-video'
		>
			<path d={waves[d]} filter={`url(#${name})`} />
			<defs>
				{alt ? (
					<filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id={name}>
						<feOffset dx='0' dy='5' in='SourceAlpha' result='offset1' />
						<feGaussianBlur stdDeviation='3' in='offset1' result='blur1' />
						<feColorMatrix
							values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0'
							in='blur1'
							type='matrix'
							result='matrix1'
						/>
						<feBlend in='SourceGraphic' in2='matrix1' mode='normal' />
					</filter>
				) : (
					<filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id={name}>
						<feOffset dx='0' dy='-5' in='SourceAlpha' result='offset1' />
						<feGaussianBlur stdDeviation='3' in='offset1' result='blur1' />
						<feColorMatrix
							values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0'
							in='blur1'
							type='matrix'
							result='matrix1'
						/>
						<feBlend in='SourceGraphic' in2='matrix1' mode='normal' />
					</filter>
				)}
			</defs>
		</svg>
	);
};
export default WaveSection;

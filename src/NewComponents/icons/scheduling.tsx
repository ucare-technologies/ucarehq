// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const SchedulingIcons: React.FC<{ style?: React.CSSProperties; height?: string }> = ({ style, height = '50px' }) => (
	<svg style={style} height={height} viewBox='0 0 24 24' fill='none' stroke='#fff' xmlns='http://www.w3.org/2000/svg'>
		<g>
			<polyline className='st0' points='18,11.5 10.5,19.5 7,16 ' />
			<polyline className='st0' points='4.5,2.5 0.5,2.5 0.5,23.5 23.5,23.5 23.5,2.5 19.5,2.5 ' />
			<rect x='4.5' y='0.5' className='st0' width='3' height='4' />
			<rect x='16.5' y='0.5' className='st0' width='3' height='4' />
			<line className='st0' x1='7.5' y1='2.5' x2='16.5' y2='2.5' />
			<line className='st0' x1='0.5' y1='7.5' x2='23.5' y2='7.5' />
		</g>
	</svg>
);
export default SchedulingIcons;

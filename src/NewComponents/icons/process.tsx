// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const Process: React.FC<{ style?: React.CSSProperties; height?: string }> = ({ style, height = '50px' }) => (
	<svg style={style} height={height} viewBox='0 0 24 24' fill='none' stroke='#fff' xmlns='http://www.w3.org/2000/svg'>
		<g>
			<path className='st0' d='M15.5,17.5h-9c-1.7,0-3-1.3-3-3l0,0v-8' />
			<path className='st0' d='M8.5,0.5h9c1.7,0,3,1.3,3,3v8' />
			<polyline className='st0' points='0.5,8.5 3.5,6.5 6.5,8.5 ' />
			<polyline className='st0' points='17.5,9.5 20.5,11.5 23.5,9.5 ' />
		</g>
	</svg>
);
export default Process;

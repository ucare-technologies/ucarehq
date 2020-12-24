// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const Giving: React.FC<{ style?: React.CSSProperties; height?: string }> = ({ style, height = '50px' }) => (
	<svg style={style} height={height} viewBox='0 0 24 24' fill='none' stroke='#fff' xmlns='http://www.w3.org/2000/svg'>
		<path className='st0' d='M11,22.4c0,0,10.5-8.1,10.5-15.8S12.2-1.7,11,6C9.8-1.7,0.5-1.1,0.5,7.2S11,22.4,11,22.4z' />
	</svg>
);
export default Giving;

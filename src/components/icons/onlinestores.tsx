// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const OnlineStoresIcon: React.FC<{ style?: React.CSSProperties; height?: string }> = ({ style, height = '50px' }) => (
	<svg style={style} height={height} viewBox='0 0 24 24' fill='none' stroke='#fff' xmlns='http://www.w3.org/2000/svg'>
		<g>
			<polygon className='st0' points='20.5,21.5 3.5,21.5 1.5,10.5 22.5,10.5 ' />
			<rect x='0.5' y='8.5' className='st0' width='23' height='2' />
			<line className='st0' x1='3.5' y1='6.5' x2='9.5' y2='0.5' />
			<line className='st0' x1='20.5' y1='6.5' x2='14.5' y2='0.5' />
			<line className='st0' x1='13.5' y1='12.5' x2='13.5' y2='18.5' />
			<line className='st0' x1='17.5' y1='12.5' x2='17.5' y2='18.5' />
			<line className='st0' x1='10.5' y1='12.5' x2='10.5' y2='18.5' />
			<line className='st0' x1='6.5' y1='12.5' x2='6.5' y2='18.5' />
		</g>
	</svg>
);
export default OnlineStoresIcon;

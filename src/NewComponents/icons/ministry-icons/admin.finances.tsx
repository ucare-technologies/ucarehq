// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const AdminFinanceIcon = ({ style = {}, height = '50px' }) => (
	<svg
		style={style}
		height={height}
		viewBox='0 0 24 24'
		fill='none'
		stroke='#323a46'
		className='admin-finaces'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g>
			<rect x='0.5' y='0.5' className='st0' width='7.5' height='23' />
			<rect x='2.5' y='2.5' className='st0' width='3' height='12' />
			<line className='st0' x1='2.5' y1='5.5' x2='5.5' y2='5.5' />
			<rect x='8' y='0.5' className='st0' width='8' height='23' />
			<rect x='10.5' y='2.5' className='st0' width='3' height='12' />
			<line className='st0' x1='10.5' y1='5.5' x2='13.5' y2='5.5' />
			<rect x='16' y='0.5' className='st0' width='7.5' height='23' />
			<rect x='18.5' y='2.5' className='st0' width='3' height='12' />
			<line className='st0' x1='18.5' y1='5.5' x2='21.5' y2='5.5' /> <circle className='st0' cx='4' cy='19' r='1.5' />
			<circle className='st0' cx='12' cy='19' r='1.5' /> <circle className='st0' cx='20' cy='19' r='1.5' />
		</g>
	</svg>
);
export default AdminFinanceIcon;

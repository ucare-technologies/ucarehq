import React from 'react';

const Remove: React.FC<{ style?: React.CSSProperties; height?: string }> = ({ style, height = '24px' }) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={style} height={height} className='remove-icon'>
		<path d='M18.67 6.67L6.7 18.7L5.3 17.3L17.3 5.3L18.67 6.67Z' />
		<path d='M17.33 18.7L5.3 6.73L6.7 5.33L18.7 17.33L17.33 18.7Z' />
	</svg>
);
export default Remove;

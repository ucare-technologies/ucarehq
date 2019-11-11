import React from 'react';
import hexToRgba from 'hex-to-rgba';

function bgImage(imageUrl: string | null, color?: string) {
	const rgbaColor = !color ? 'rgba(50, 58, 70, .5)' : color.indexOf('#') === 0 ? hexToRgba(color, 0.75) : color;
	return `linear-gradient(${rgbaColor}, ${rgbaColor}), url(${imageUrl})`;
}
function imageStyle(imageUrl: string | null, align = 'center', color?: string) {
	return {
		backgroundImage: bgImage(imageUrl, color),
		backgroundColor: color || '#323a46',
		backgroundPosition: align,
	} as React.CSSProperties;
}
interface PageHeaderProps {
	imageUrl: string | null;
	align?: string;
	color?: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ children, imageUrl, align, color }) => (
	<header className='container-fluid p-0 page-header' style={imageStyle(imageUrl, align, color)}>
		<div className='container text-center'>{children}</div>
	</header>
);
export default PageHeader;

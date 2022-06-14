// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import hexToRgba from 'hex-to-rgba';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';

import { FluidImageSrc } from '../types';

export type FluidObject = IFluidObject;
export type FluidImage = FluidImageSrc;
const className = 'container-fluid p-0 page-header';
const PageHeader: React.FC<{
	image?: FluidImageSrc | null;
	align?: string;
	color?: string;
}> = ({ children, image, align, color }) => {
	const rgbaColor = !color ? 'rgba(50, 58, 70, 0.5)' : color.indexOf('#') === 0 ? hexToRgba(color, 0.75) : color;
	const backgroundImage = `linear-gradient(${rgbaColor}, ${rgbaColor})`;
	const backgroundColor = color || '#323a46';
	const inner = <div className='container text-center'>{children}</div>;
	return !image ? (
		<header className={className} style={{ backgroundImage, backgroundColor }}>
			{inner}
		</header>
	) : (
		<BackgroundImage
			Tag='header'
			className={className}
			fluid={[backgroundImage, image.childImageSharp.fluid]}
			style={{ backgroundPosition: align || 'center center', backgroundColor }}
		>
			{inner}
		</BackgroundImage>
	);
};
export default PageHeader;

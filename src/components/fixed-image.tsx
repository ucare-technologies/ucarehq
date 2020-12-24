// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { FixedImageSrc } from '../types';

export type FixedImageProps = FixedImageSrc;
interface ImageProps {
	alt: string;
	className?: string;
	image: FixedImageProps;
}
const FixedImage: React.FC<ImageProps> = ({
	alt,
	className,
	image: {
		childImageSharp: { fixed },
	},
}) => (
	<picture>
		{fixed.srcSetWebp && <source srcSet={fixed.srcSetWebp} type='image/webp' />}
		<source srcSet={fixed.srcSet} />
		<img
			srcSet={fixed.srcSet}
			src={fixed.src}
			alt={alt}
			className={className}
			width={fixed.width}
			height={fixed.height}
			loading='lazy'
		/>
	</picture>
);
export default FixedImage;

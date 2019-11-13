import { IFluidObject, IFixedObject } from 'gatsby-background-image';

export interface FilePublicUrl {
	publicURL: string;
}
export interface FixedImageSrc {
	childImageSharp: {
		fixed: IFixedObject;
	};
}
export interface FluidImageSrc {
	childImageSharp: {
		fluid: IFluidObject;
	};
}

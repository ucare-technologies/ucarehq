import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface ImageProps {
	src: string;
	className: string;
	alt: string;
	style: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, ...rest }) => {
	type QueryShape = {
		allImageSharp: {
			edges: {
				node: {
					fluid: FluidObject & {
						originalName: string;
						src: string;
					};
				};
			}[];
		};
	};
	const images = useStaticQuery<QueryShape>(graphql`
		query {
			allImageSharp {
				edges {
					node {
						fluid(maxWidth: 375) {
							...GatsbyImageSharpFluid_withWebp
							originalName
							src
						}
					}
				}
			}
		}
	`);
	const image = images.allImageSharp.edges.find(edge => src.indexOf(edge.node.fluid.originalName) >= 0);
	if (image) {
		return <Img fluid={image.node.fluid} {...rest} />;
	}
	return null;
};
export default Image;

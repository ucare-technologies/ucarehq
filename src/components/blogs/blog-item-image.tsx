// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

const Image: React.FC<{
	src: string;
	className: string;
	alt: string;
	style: React.CSSProperties;
}> = ({ src, ...rest }) => {
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
						fluid(maxWidth: 800) {
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
	return !image ? null : <Img fluid={image.node.fluid} {...rest} />;
};
export default Image;

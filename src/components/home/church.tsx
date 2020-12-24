// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { FluidImageSrc } from '../../types';
import FadeIn from '../fade-in';

export default function ChurchManagement({ menuOpen, onClick }: { menuOpen: boolean; onClick: () => void }) {
	const { home } = useStaticQuery<{ home: FluidImageSrc }>(graphql`
		query {
			home: file(relativePath: { eq: "home/hero.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	const handleClick = React.useCallback(() => menuOpen && onClick(), [menuOpen, onClick]);
	return (
		<BackgroundImage
			Tag='section'
			className={`church-manage justify-content-center${menuOpen ? ` menu-open` : ''}`}
			fluid={home.childImageSharp.fluid}
			backgroundColor='#e10332'
			onClick={handleClick}
		>
			<FadeIn className='church-manage-title text-center' fade='up'>
				<h1 className='text-white'>
					<em>church management. &nbsp;</em>
					<strong>simplified.</strong>
				</h1>
			</FadeIn>
		</BackgroundImage>
	);
}

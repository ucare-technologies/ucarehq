import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { FluidImageSrc } from '../../types';
import FadeIn from '../fade-in';
import WaveLogoWhite from '../wave/wavetech-white';

export default function Testimonials() {
	const { hero } = useStaticQuery<{ hero: FluidImageSrc }>(graphql`
		query {
			hero: file(relativePath: { eq: "wave/hero.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
		}
	`);
	return (
		<BackgroundImage
			Tag='section'
			className='container-fluid'
			fluid={hero.childImageSharp.fluid}
			backgroundColor='#cccccc'
		>
			<FadeIn fade='up'>
				<div className='container text-center wave-home-logo text-white'>
					<h1>
						<div>
							<WaveLogoWhite />
						</div>
						<em>church management. &nbsp;</em>
						<strong>intellified.</strong>
					</h1>
					<footer>
						<div>
							<Link className='btn btn-outline-white btn-lg' role='button' to='/wave'>
								Learn more <FontAwesomeIcon icon={faPlay} className='ml-2' />
							</Link>
						</div>
					</footer>
				</div>
			</FadeIn>
		</BackgroundImage>
	);
}

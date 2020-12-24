// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import * as Scroll from 'react-scroll';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { FluidImageSrc } from '../../types';
import FadeIn from '../fade-in';

import WaveLogoWhite from './wavetech-white';

export default function Hero({ onPlayClick }: { onPlayClick: () => void }) {
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
			className='wave-hero justify-content-center'
			fluid={hero.childImageSharp.fluid}
			backgroundColor='#ffffff'
		>
			<FadeIn className='wave-hero-title text-center' fade='up'>
				<style>
					{`
					.navbar-trans .navbar-nav {
						text-shadow: 0 0 10px #000, 0 0 5px #000;
					}`}
				</style>
				<h1 className='text-white'>
					<div>
						<WaveLogoWhite />
					</div>
					<em>church management. &nbsp;</em>
					<strong>intellified.</strong>
				</h1>
				<footer>
					<div>
						<Scroll.Link
							to='video'
							className='btn btn-outline-white btn-lg'
							role='button'
							href='#video'
							smooth
							duration={500}
							onClick={onPlayClick}
						>
							Watch Video <FontAwesomeIcon icon={faPlay} className='ml-2' />
						</Scroll.Link>
					</div>
				</footer>
			</FadeIn>
		</BackgroundImage>
	);
}

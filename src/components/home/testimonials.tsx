import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FadeIn from '../fade-in';

/**
 *
 * @param {*} props
 * @see https://github.com/kenwheeler/slick/issues/245#issuecomment-315374816
 * about react-slick dot color change
 */
const arrowStyle = {
	position: 'absolute',
	display: 'block',
	height: '35px',
	width: '20px',
	top: '45%',
	color: '#fff',
	zIndex: 1,
	fontSize: '25px',
	opacity: 0.75,
	cursor: 'pointer',
} as React.CSSProperties;
const PrevArrow: React.FC = () => (
	<div className='slick-arrow-prev' style={arrowStyle}>
		<FontAwesomeIcon icon={faChevronLeft} />
	</div>
);
const NextArrow: React.FC = () => (
	<div className='slick-arrow-next' style={{ ...arrowStyle, right: 0 }}>
		<FontAwesomeIcon icon={faChevronRight} />
	</div>
);
export default function Testimonials() {
	const { bgImg, ourchurch, rcbc, flc, metro, kings } = useStaticQuery(graphql`
		query TestimonialQuery {
			bgImg: file(relativePath: { eq: "testimonials-bg.jpg" }) {
				publicURL
			}
			ourchurch: file(relativePath: { eq: "ourchurch.png" }) {
				publicURL
			}
			rcbc: file(relativePath: { eq: "rcbc.png" }) {
				publicURL
			}
			flc: file(relativePath: { eq: "flc.png" }) {
				publicURL
			}
			metro: file(relativePath: { eq: "metro.png" }) {
				publicURL
			}
			kings: file(relativePath: { eq: "kings.png" }) {
				publicURL
			}
		}
	`);
	return (
		<section className='container-fluid p-0 testimonial' style={{ backgroundImage: `url(${bgImg.publicURL})` }}>
			<FadeIn fade='up'>
				<div className='container text-center text-white'>
					<h2>Churches We Work With</h2>
				</div>
				<div className='row m-0'>
					<div className='container text-center my-5 slick-panel'>
						<Slider
							dots
							infinite
							speed={500}
							slidesToShow={3}
							slidesToScroll={3}
							autoplay
							prevArrow={<PrevArrow />}
							nextArrow={<NextArrow />}
							responsive={[
								{
									breakpoint: 992,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 2,
									},
								},
								{
									breakpoint: 768,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
									},
								},
							]}
						>
							<img src={ourchurch.publicURL} className='w-50' alt='ourchurch' />
							<img src={rcbc.publicURL} className='w-50' alt='ourchurch' />
							<img src={flc.publicURL} className='w-50' alt='ourchurch' />
							<img src={metro.publicURL} className='w-50' alt='ourchurch' />
							<img src={kings.publicURL} className='w-50' alt='ourchurch' />
						</Slider>
					</div>
				</div>
			</FadeIn>
		</section>
	);
}

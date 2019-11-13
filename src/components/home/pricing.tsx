import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Element } from 'react-scroll';

import { FluidImageSrc } from '../../types';
import FadeIn from '../fade-in';

import PricingRange from './pricing-range';

export default function Pricing() {
	const { pricing } = useStaticQuery<{ pricing: FluidImageSrc }>(graphql`
		query {
			pricing: file(relativePath: { eq: "home/pricing.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<Element id='pricing' name='pricing'>
			<BackgroundImage Tag='div' className='container-fluid pricing' fluid={pricing.childImageSharp.fluid}>
				<FadeIn className='row'>
					<div className='col-xl-5 offset-xl-1 only-pay-container'>
						<div className='only-pay'>
							<h2 className='text-white'>
								only pay for
								<br />
								what you need.
							</h2>
						</div>
					</div>
					<div className='col-xl-6 price-calc'>
						<h4 className='mt-3'>Prices start at $10/month &amp; no long-term contracts.</h4>
						<p>
							The monthly costs for UCare are just 10c per person, so for example if your church has 500 people
							regularly attending then UCare will cost only $50 each month. (
							<Link to='/sign-up/' className='faq'>
								FAQ
							</Link>
							)
						</p>
						<PricingRange />
					</div>
				</FadeIn>
			</BackgroundImage>
		</Element>
	);
}

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Element } from 'react-scroll';

import FadeIn from '../fade-in';

import PricingRange from './pricing-range';

export default function Pricing() {
	const { pricing } = useStaticQuery(graphql`
		query {
			pricing: file(relativePath: { eq: "home/pricing.jpg" }) {
				publicURL
			}
		}
	`);
	return (
		<Element id='pricing' name='pricing'>
			<div className='container-fluid pricing' style={{ backgroundImage: `url(${pricing.publicURL})` }}>
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
			</div>
		</Element>
	);
}

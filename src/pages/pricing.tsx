import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import PageHeader, { FluidImage } from '../components/page-header';
import FAQ from '../components/faq';
import Pricing from '../components/pricing';

const Features: React.FC = () => {
	const { file } = useStaticQuery<{ file: FluidImage }>(graphql`
		query {
			file(relativePath: { eq: "sign-up/pricing.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO title='Pricing Editions' />
			<main>
				<PageHeader image={file}>
					<h1>Pricing for every church</h1>
					<h3>Simplify church management with any of our fully customizable editions.</h3>
				</PageHeader>
				<div className='container pricing-page'>
					<Pricing />
				</div>
			</main>
			<FAQ />
		</Layout>
	);
};
export default Features;

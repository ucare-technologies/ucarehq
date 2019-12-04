import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import queryString from 'query-string';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader, { FluidImage } from '../components/page-header';
import FAQ from '../components/faq';
import SignUpForm from '../components/sign-up/sign-up-form';

const SingUp: React.FC<{ location: { search: string } }> = ({ location: { search } }) => {
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
	const searchProps = search ? queryString.parse(search) : {};
	const size = Number(searchProps.size) || 500;
	const edition = String(searchProps.edition) || 'growth';
	return (
		<Layout>
			<SEO title='30-day free trial' />
			<main>
				<PageHeader image={file}>
					<h1>30-day free trial</h1>
					<h3>No obligations and no credit card required.</h3>
				</PageHeader>
				<div className='container sign-up pb-5'>
					<div className='row sign-up-form'>
						<div className='col-lg-6 m-auto user-input-form'>
							<SignUpForm size={size} edition={edition} />
						</div>
					</div>
				</div>
			</main>
			<div className='container-fluid text-center latest-blog'>
				<div className='container'>
					<FAQ />
				</div>
			</div>
		</Layout>
	);
};
export default SingUp;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader, { FluidImage } from '../components/page-header';
import FAQ from '../components/faq';
import ContactForm from '../components/sign-up/contact-form';

const SingUp: React.FC = () => {
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
			<SEO title='Get in touch' />
			<main>
				<PageHeader image={file}>
					<h1>Get in touch</h1>
					<h3>We'd love to talk with you and discuss the unique needs of your church.</h3>
				</PageHeader>
				<div className='container sign-up pb-5'>
					<div className='row sign-up-form'>
						<div className='col-lg-6 m-auto user-input-form'>
							<p>
								Complete the form and one of our specialists will be in touch to help you with all your questions and
								help you see if we're a good fit.
							</p>
							<ContactForm />
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

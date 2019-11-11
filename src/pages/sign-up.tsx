import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LatestBlog from '../components/blogs/latest-blog';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import FAQ from '../components/faq';
import SignUpForm from '../components/sign-up/form';

const SingUp: React.FC = () => {
	const { signup } = useStaticQuery(graphql`
		query SignupImage {
			signup: file(relativePath: { eq: "sign-up/pricing.jpg" }) {
				publicURL
			}
		}
	`);
	return (
		<Layout>
			<SEO title='30-day free trial' />
			<main>
				<PageHeader imageUrl={signup.publicURL}>
					<h1>30-day free trial</h1>
					<h3>No obligations and no credit card required.</h3>
				</PageHeader>
				<div className='container sign-up'>
					<div className='row sign-up-form'>
						<div className='col-lg-8 user-input-form'>
							<SignUpForm />
						</div>
						<div className='col-lg-4 include'>
							<h4>Your trial includes everything</h4>
							<ul className='list-group pb-3'>
								<li>Unlimited users</li>
								<li>People &amp; households</li>
								<li>Child safety &amp; Check-in</li>
								<li>Giving &amp; stores</li>
								<li>Event registrations</li>
								<li>Group management</li>
								<li>Dashboards &amp; reports</li>
								<li>Custom forms</li>
								<li>Processes &amp; tasks</li>
								<li>Bulk email &amp; SMS</li>
								<li>Integrations &amp; API</li>
								<li>Email support &amp; help center</li>
							</ul>
						</div>
					</div>
					<FAQ />
				</div>
			</main>
			<LatestBlog />
		</Layout>
	);
};
export default SingUp;

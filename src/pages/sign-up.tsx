import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

import { FAQ } from '../components/faq';
import { HeadTags } from '../components/head-tags';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import SignUpForm from '../components/sign-up/sign-up-form';
import { Slice, isSlice } from '../components/slice';

const SignUp: React.FC<PageProps<Queries.SignUpPageQuery>> = ({ location, data }) => {
	const { size, edition } = getQueryStringValues(location.search);
	const sections = (data?.page?.sections ?? []).filter(isSlice);
	return (
		<>
			<Layout>
				<main>
					{sections.filter(isBannerSection).map((item, index) => (
						<PageHeader
							key={index}
							backgroundImageUrl={item.background_image?.file?.url || ''}
							titleHtml={item.rich_title?.childMarkdownRemark?.html || ''}
							subTitleHtml={item.bannerDescription?.childMarkdownRemark?.html || ''}
						/>
					))}

					<SignUpForm size={size} edition={edition} />

					{sections.filter(isCardSection).map((item, index) => (
						<FAQ
							key={index}
							title={item.title || ''}
							description={item.description || ''}
							cards={(item.cards ?? []).filter(Boolean).map(c => ({
								title: c!.title || '',
								descriptionHtml: c!.long_description?.childMarkdownRemark?.html || '',
							}))}
						/>
					))}
				</main>
			</Layout>
		</>
	);
};
export default SignUp;
export const Head: HeadFC<Queries.SignUpPageQuery> = ({ data }) => (
	<HeadTags title={data.page?.page_title || 'Free 21-day trial'} />
);

function getQueryStringValues(search: string) {
	if (!search) return { size: 500, edition: 'Growth' };
	const params = new URLSearchParams(search);
	const size = Number(params.get('size')) || 500;
	const edition = String(params.get('edition')) || 'Growth';
	return { size, edition };
}
function isBannerSection(item: Slice): item is Queries.SignUpBannerSectionFragment {
	return item.slice_name === 'sign_up_page_banner';
}
function isCardSection(item: Slice): item is Queries.SignUpCardSectionFragment {
	return item.slice_name === 'asked_questions';
}
export const pageQuery = graphql`
	query SignUpPage {
		page: contentfulPage(slug: { eq: "/sign-up" }) {
			page_title
			sections {
				... on ContentfulBannerSection {
					...SignUpBannerSection
				}
				... on ContentfulCardSection {
					...SignUpCardSection
				}
			}
		}
	}
	fragment SignUpBannerSection on ContentfulBannerSection {
		slice_name
		rich_title {
			childMarkdownRemark {
				html
			}
		}
		bannerDescription: description {
			childMarkdownRemark {
				html
			}
		}
		background_image {
			file {
				url
			}
		}
	}
	fragment SignUpCardSection on ContentfulCardSection {
		slice_name
		title
		description
		cards {
			card_name
			title
			long_description {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;

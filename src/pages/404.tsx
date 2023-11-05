import React from 'react';

import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby';

import { LatestBlog } from '../components/blogs/latest-blog';
import { HeadTags } from '../components/head-tags';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { Slice, isSlice } from '../components/slice';
import { trimPTag } from '../utils/trimTag';

const NotFound: React.FC<PageProps<Queries.Page404Query>> = ({ data }) => {
	const sections = data?.page?.sections ?? [];
	return (
		<Layout>
			<main>
				{sections.filter(isSlice).map((item, index) => {
					if (isBannerSection(item)) {
						return (
							<PageHeader
								key={index}
								backgroundImageUrl={item.background_image?.file?.url || ''}
								titleHtml={trimPTag(item.rich_title?.childMarkdownRemark?.html)}
							/>
						);
					}
					if (isFooterDetailsSection(item)) {
						return (
							<div className='container px-4 pb-5' key={index}>
								<div className='text-center lead'>
									<div
										dangerouslySetInnerHTML={{
											__html: item?.description?.childMarkdownRemark?.html || '',
										}}
									/>
								</div>
							</div>
						);
					}
					if (isCardSection(item)) {
						return (
							<LatestBlog
								key={index}
								title={item.title || ''}
								cards={(item.cards ?? []).filter(Boolean).map(c => ({
									title: c!.title || '',
									tag: c!.tag || '',
									slug: c!.blog_slug || '',
									date: c!.blog_date || '',
									html: trimPTag(c!.long_description?.childMarkdownRemark?.html),
									image: c!.card_image?.gatsbyImageData,
								}))}
							/>
						);
					}
					return null;
				})}
			</main>
		</Layout>
	);
};
export default NotFound;
export const Head: HeadFC<Queries.Page404Query> = ({ data }) => <HeadTags title={data.page?.page_title || '404'} />;

function isBannerSection(item: Slice): item is Queries.Page404BannerFragment {
	return item.slice_name === 'not_found_banner';
}
function isFooterDetailsSection(item: Slice): item is Queries.Page404FooterDetailsFragment {
	return item.slice_name === 'not_found_description';
}
function isCardSection(item: Slice): item is Queries.Page404CardFragment {
	return item.slice_name === 'latest_blog';
}
export const pageQuery = graphql`
	query Page404 {
		page: contentfulPage(slug: { eq: "/not-found" }) {
			page_title
			sections {
				... on ContentfulBannerSection {
					...Page404Banner
				}
				... on ContentfulCardSection {
					...Page404Card
				}
				... on ContentfulFooterDetailsPageSection {
					...Page404FooterDetails
				}
			}
		}
	}
	fragment Page404Banner on ContentfulBannerSection {
		slice_name
		rich_title {
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
	fragment Page404Card on ContentfulCardSection {
		slice_name
		title
		cards {
			title
			tag
			blog_slug
			blog_date
			long_description {
				childMarkdownRemark {
					html
				}
			}
			card_image {
				gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED, quality: 80)
			}
		}
	}
	fragment Page404FooterDetails on ContentfulFooterDetailsPageSection {
		slice_name
		description {
			childMarkdownRemark {
				html
			}
		}
	}
`;

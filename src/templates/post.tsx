import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

import { Content } from '../components/blogs/content';
import { LatestBlog } from '../components/blogs/latest-blog';
import { HeadTags } from '../components/head-tags';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { Slice, isSlice } from '../components/slice';
import { trimPTag } from '../utils/trimTag';

// TODO: open link in external tab
const Post: React.FC<PageProps<Queries.BlogPostBySlugQuery>> = ({ data }) => {
	const sections = (data?.page?.sections ?? []).filter(isSlice) as Slice[];
	return (
		<Layout>
			<main>
				{sections.map((item, index) => {
					if (isBannerSection(item)) {
						return (
							<PageHeader
								key={index}
								backgroundImageUrl={item.background_image?.file?.url || ''}
								titleHtml={trimPTag(item.rich_title?.childMarkdownRemark?.html)}
								blog_date={item.blog_date || ''}
							/>
						);
					}
					if (isDetailsSection(item)) {
						return <Content key={index} html={item.description?.childMarkdownRemark?.html || ''} />;
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
export default Post;
export const Head: HeadFC<Queries.BlogPostBySlugQuery> = ({ data }) => {
	const sections = (data?.page?.sections ?? []).filter(isSlice) as Slice[];
	const banner = sections.find(isBannerSection);
	return <HeadTags title={trimPTag(banner?.rich_title?.childMarkdownRemark?.html) || data.page?.seo_title || 'Post'} />;
};

function isBannerSection(item: Slice): item is Queries.BlogPostBySlugBannerSectionFragment {
	return item.slice_name === 'blog_banner';
}
function isDetailsSection(item: Slice): item is Queries.BlogPostBySlugDetailsSectionFragment {
	return item.slice_name === 'blog_description';
}
function isCardSection(item: Slice): item is Queries.BlogPostBySlugCardSectionFragment {
	return item.slice_name === 'latest_blog';
}
export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		page: contentfulBlogDetailsPage(slug: { eq: $slug }) {
			seo_title
			sections: blog_details_page_sections {
				... on ContentfulBannerSection {
					...BlogPostBySlugBannerSection
				}
				... on ContentfulBlogDetailsSection {
					...BlogPostBySlugDetailsSection
				}
				... on ContentfulCardSection {
					...BlogPostBySlugCardSection
				}
			}
		}
	}
	fragment BlogPostBySlugBannerSection on ContentfulBannerSection {
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
		blog_date
	}
	fragment BlogPostBySlugDetailsSection on ContentfulBlogDetailsSection {
		slice_name
		description {
			childMarkdownRemark {
				html
			}
		}
	}
	fragment BlogPostBySlugCardSection on ContentfulCardSection {
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
`;

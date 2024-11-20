import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

// import { LatestBlog } from '../components/blogs/latest-blog';
import { AllFeatures } from '../components/features/all-features';
import { HeadTags } from '../components/head-tags';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { Slice, isSlice } from '../components/slice';
// import { trimPTag } from '../utils/trimTag';

const Features: React.FC<PageProps<Queries.FeaturePageQueryQuery>> = props => (
	<Layout>
		<main>
			{(props?.data?.page?.sections ?? []).filter(isSlice).map((item, index) => {
				if (isBannerSection(item)) {
					return (
						<PageHeader
							key={index}
							backgroundImageUrl={item.background_image?.file?.url || ''}
							titleHtml={item.rich_title?.childMarkdownRemark?.html || ''}
							subTitleHtml={item.description?.childMarkdownRemark?.html || ''}
						/>
					);
				}
				if (isCardSection(item)) {
					return item.slice_name === 'all_features' ? (
						<AllFeatures
							key={index}
							descriptionHtml={item.rich_description?.childMarkdownRemark?.html || ''}
							cards={(item.cards ?? []).filter(Boolean).map(c => ({
								title: c!.title || '',
								slug: c!.feature_slug || '',
								image: {
									className: c!.image_className || '',
									url: c!.card_image?.file?.url || '',
								},
							}))}
						/>
					) : null;
					// <LatestBlog
					// 	key={index}
					// 	title={item.title || ''}
					// 	cards={(item.cards ?? []).filter(Boolean).map(c => ({
					// 		title: c!.title || '',
					// 		tag: c!.tag || '',
					// 		slug: c!.blog_slug || '',
					// 		date: c!.blog_date || '',
					// 		html: trimPTag(c!.long_description?.childMarkdownRemark?.html),
					// 		image: c!.card_image?.gatsbyImageData,
					// 	}))}
					// />
				}
				return null;
			})}
		</main>
	</Layout>
);
export default Features;
export const Head: HeadFC<Queries.FeaturePageQueryQuery> = ({ data }) => (
	<HeadTags title={data.page?.page_title || 'UCare’s Powerful Features'} />
);

function isBannerSection(item: Slice): item is Queries.FeaturePageBannerSectionFragment {
	return item.slice_name === 'feature_page_banner';
}
function isCardSection(item: Slice): item is Queries.FeaturePageCardSectionFragment {
	return item.slice_name === 'latest_blog' || item.slice_name === 'all_features';
}
export const pageQuery = graphql`
	query FeaturePageQuery {
		page: contentfulPage(slug: { eq: "/features" }) {
			page_name
			page_title
			sections {
				... on ContentfulBannerSection {
					...FeaturePageBannerSection
				}
				... on ContentfulCardSection {
					...FeaturePageCardSection
				}
			}
		}
	}
	fragment FeaturePageBannerSection on ContentfulBannerSection {
		slice_name
		rich_title {
			childMarkdownRemark {
				html
			}
		}
		description {
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
	fragment FeaturePageCardSection on ContentfulCardSection {
		slice_name
		title
		rich_description {
			childMarkdownRemark {
				html
			}
		}
		cards {
			title
			image_className
			card_image {
				gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED, quality: 80)
				file {
					url
				}
			}
			long_description {
				childMarkdownRemark {
					html
				}
			}
			tag
			blog_date
			blog_slug
			feature_slug
		}
	}
`;

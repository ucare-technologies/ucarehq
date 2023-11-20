import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

import { LatestBlog } from '../components/blogs/latest-blog';
import { AllFeatures } from '../components/features/all-features';
import { Content } from '../components/features/content';
import { HeadTags } from '../components/head-tags';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { Slice, isSlice } from '../components/slice';
import { trimPTag } from '../utils/trimTag';

const Feature: React.FC<PageProps<Queries.FeatureBySlugQuery>> = ({ data }) => {
	const sections = (data?.page?.sections ?? []).filter(isSlice) as Slice[];
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
								featureColor={item.feature_colour || ''}
								imageUrl={item.image?.file?.url || ''}
							/>
						);
					}
					if (isDetailsSection(item)) {
						return <Content key={index} html={item.description?.childMarkdownRemark?.html || ''} />;
					}
					if (isCardSection(item)) {
						return item.slice_name === 'more_features' ? (
							<AllFeatures
								key={index}
								part
								title={item.title || ''}
								cards={(item.cards ?? []).filter(Boolean).map(c => ({
									title: c!.title || '',
									slug: c!.feature_slug || '',
									image: {
										className: c!.image_className || '',
										url: c!.card_image?.file?.url || '',
									},
								}))}
							/>
						) : (
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
export default Feature;
export const Head: HeadFC<Queries.FeatureBySlugQuery> = ({ data }) => (
	<HeadTags title={data.page?.seo_title || 'Feature'} />
);

function isBannerSection(item: Slice): item is Queries.FeatureBannerSectionFragment {
	return item.slice_name === 'feature_banner';
}
function isDetailsSection(item: Slice): item is Queries.FeatureFeaturesDetailsSectionFragment {
	return item.slice_name === 'feature_description';
}
function isCardSection(item: Slice): item is Queries.FeatureCardSectionFragment {
	return item.slice_name === 'latest_blog' || item.slice_name === 'more_features';
}

export const pageQuery = graphql`
	query FeatureBySlug($slug: String!) {
		page: contentfulFeatureDetailsPage(slug: { eq: $slug }) {
			seo_title
			sections: feature_details_page_sections {
				... on ContentfulBannerSection {
					...FeatureBannerSection
				}
				... on ContentfulFeaturesDetailsSection {
					...FeatureFeaturesDetailsSection
				}
				... on ContentfulCardSection {
					...FeatureCardSection
				}
			}
		}
	}
	fragment FeatureBannerSection on ContentfulBannerSection {
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
		feature_colour
		image {
			file {
				url
			}
		}
	}
	fragment FeatureFeaturesDetailsSection on ContentfulFeaturesDetailsSection {
		slice_name
		description {
			childMarkdownRemark {
				html
			}
		}
	}
	fragment FeatureCardSection on ContentfulCardSection {
		slice_name
		title
		cards {
			title
			tag
			blog_date
			blog_slug
			feature_slug
			long_description {
				childMarkdownRemark {
					html
				}
			}
			card_image {
				gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED, quality: 80)
				file {
					url
				}
			}
			image_className
		}
	}
`;

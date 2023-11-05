import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

import { LatestBlog } from '../../components/blogs/latest-blog';
import { HeadTags } from '../../components/head-tags';
import { Layout } from '../../components/layout';
import { Footer } from '../../components/legal/footer';
import { PageHeader } from '../../components/page-header';
import { Slice, isSlice } from '../../components/slice';
import { trimPTag } from '../../utils/trimTag';

const GDPRPage: React.FC<PageProps<Queries.GDPRPageQuery>> = ({ data }) => (
	<Layout>
		<main>
			{(data?.page?.sections ?? []).filter(isSlice).map((item, index) => {
				if (isBannerSection(item)) {
					return (
						<PageHeader
							key={index}
							backgroundImageUrl={item.background_image?.file?.url || ''}
							titleHtml={item.rich_title?.childMarkdownRemark?.html || ''}
						/>
					);
				}
				if (isFooterDetailsPageSection(item)) {
					return <Footer key={index} html={item.description?.childMarkdownRemark?.html || ''} />;
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
export default GDPRPage;
export const Head: HeadFC<Queries.GDPRPageQuery> = ({ data }) => (
	<HeadTags title={data.page?.page_title || 'General Data Protection Regulations (GDPR)'} />
);

function isBannerSection(item: Slice): item is Queries.LegalBannerSectionFragment {
	return item.slice_name === 'gdpr_banner';
}
function isFooterDetailsPageSection(item: Slice): item is Queries.LegalFooterDetailsPageSectionFragment {
	return item.slice_name === 'footer_details_page_description';
}
function isCardSection(item: Slice): item is Queries.LegalCardSectionFragment {
	return item.slice_name === 'latest_blog';
}
export const pageQuery = graphql`
	query GDPRPage {
		page: contentfulPage(slug: { eq: "/legal/gdpr" }) {
			page_name
			page_title
			sections {
				... on ContentfulBannerSection {
					...LegalBannerSection
				}
				... on ContentfulFooterDetailsPageSection {
					...LegalFooterDetailsPageSection
				}
				... on ContentfulCardSection {
					...LegalCardSection
				}
			}
		}
	}
	fragment LegalBannerSection on ContentfulBannerSection {
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
	fragment LegalFooterDetailsPageSection on ContentfulFooterDetailsPageSection {
		slice_name
		description {
			childMarkdownRemark {
				html
			}
		}
	}
	fragment LegalCardSection on ContentfulCardSection {
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

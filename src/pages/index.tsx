import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

// import { LatestBlog } from '../components/blogs/latest-blog';
import { HeadTags } from '../components/head-tags';
import { CallToAction } from '../components/home/call-to-action';
import { Devices } from '../components/home/devices';
import { Features } from '../components/home/features';
import { Hero } from '../components/home/hero';
import { Ministry } from '../components/home/ministry';
import { Upgrade } from '../components/home/upgrade';
import { Layout } from '../components/layout';
import { Slice, isSlice } from '../components/slice';
import { trimPTag } from '../utils/trimTag';

const HomePage: React.FC<PageProps<Queries.HomeQueryQuery>> = ({ data }) => (
	<Layout>
		{(data?.page?.sections ?? []).filter(isSlice).map((item, index) => {
			if (isBannerSection(item)) {
				return item.slice_name === 'home_page_banner' ? (
					<Hero
						key={index}
						titleHtml={trimPTag(item.rich_title?.childMarkdownRemark?.html)}
						backgroundImage={item.background_image?.gatsbyImageData}
					/>
				) : (
					<Upgrade
						key={index}
						titleHtml={trimPTag(item.rich_title?.childMarkdownRemark?.html)}
						backgroundImage={item.background_image?.gatsbyImageData}
						buttonText={item.button_text || ''}
						linkTo={item.button_link || ''}
					/>
				);
			}
			if (isBasicInfoSection(item)) {
				return (
					<CallToAction
						key={index}
						title={item.section2_title}
						subTitle={item.sub_title}
						buttonText={item.button_text}
						linkTo={item.button_link}
					/>
				);
			}
			if (isCardSection(item)) {
				return item.slice_name === 'features' ? (
					<Features
						key={index}
						title={item.section3_title || ''}
						buttonText={item.button_text || ''}
						cards={(item.cards ?? []).filter(Boolean).map(c => ({
							title: c!.title || '',
							slug: c!.feature_slug || '',
							image: {
								className: c!.image_className || '',
								url: c!.card_image?.file?.url || '',
							},
						}))}
					/>
				) : item.slice_name === 'ministry_covered' ? (
					<Ministry
						key={index}
						title={item.section3_title || ''}
						description={item.section3_description || ''}
						cards={(item.cards ?? []).filter(Boolean).map(c => ({
							title: c!.title || '',
							description: c!.description || '',
							image: {
								url: c!.card_image?.file?.url || '',
							},
						}))}
					/>
				) : (null
					// <LatestBlog
					// 	key={index}
					// 	title={item.section3_title || ''}
					// 	cards={(item.cards ?? []).filter(Boolean).map(c => ({
					// 		title: c!.title || '',
					// 		tag: c!.tag || '',
					// 		slug: c!.blog_slug || '',
					// 		date: c!.blog_date || '',
					// 		html: trimPTag(c!.long_description?.childMarkdownRemark?.html),
					// 		image: c!.card_image?.gatsbyImageData,
					// 	}))}
					// />
				);
			}
			if (isDividedSection(item)) {
				return (
					<Devices
						key={index}
						titleHtml={trimPTag(item.title?.childMarkdownRemark?.html)}
						descriptionHtml={item.description?.childMarkdownRemark?.html || ''}
						firstImage={item.first_image?.gatsbyImageData}
						secondImageUrl={item.second_image?.file?.url || ''}
						thirdImageUrl={item.third_image?.file?.url || ''}
					/>
				);
			}
			return null;
		})}
	</Layout>
);
export default HomePage;
export const Head: HeadFC<Queries.HomeQueryQuery> = ({ data }) => (
	<HeadTags title={data.page?.page_title || 'Church management software simplified'} />
);

function isBannerSection(item: Slice): item is Queries.HomeBannerSectionFragment {
	return item.slice_name === 'home_page_banner' || item.slice_name === 'wave';
}
function isBasicInfoSection(item: Slice): item is Queries.HomeBasicInfoSectionFragment {
	return item.slice_name === 'try_free';
}
function isDividedSection(item: Slice): item is Queries.HomeDividedSectionFragment {
	return item.slice_name === 'what_you_need';
}
function isCardSection(item: Slice): item is Queries.HomeCardSectionFragment {
	return item.slice_name === 'features' || item.slice_name === 'ministry_covered' || item.slice_name === 'latest_blog';
}
export const pageQuery = graphql`
	query HomeQuery {
		page: contentfulPage(slug: { eq: "/" }) {
			page_title
			sections {
				... on ContentfulBannerSection {
					...HomeBannerSection
				}
				... on ContentfulBasicInfoSection {
					...HomeBasicInfoSection
				}
				... on ContentfulCardSection {
					...HomeCardSection
				}
				... on ContentfulDividedSection {
					...HomeDividedSection
				}
			}
		}
	}
	fragment HomeBannerSection on ContentfulBannerSection {
		slice_name
		banner_page_name
		button_text
		button_link
		section1_title: title {
			raw
		}
		rich_title {
			childMarkdownRemark {
				html
			}
		}
		background_image {
			gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 90)
		}
	}
	fragment HomeBasicInfoSection on ContentfulBasicInfoSection {
		slice_name
		basic_info_section_name
		section2_title: title
		sub_title
		button_text
		button_link
	}
	fragment HomeCardSection on ContentfulCardSection {
		slice_name
		card_section_name
		section3_title: title
		button_text
		button_link
		section3_description: description
		cards {
			card_name
			title
			card_image {
				gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED, quality: 80)
				file {
					# SVG images
					url
				}
			}
			image_className
			description
			button_text
			tag
			blog_date
			long_description {
				childMarkdownRemark {
					html
				}
			}
			feature_slug
			blog_slug
		}
	}
	fragment HomeDividedSection on ContentfulDividedSection {
		slice_name
		divided_section_name
		title {
			childMarkdownRemark {
				html
			}
		}
		description {
			childMarkdownRemark {
				html
			}
		}
		first_image {
			gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
		}
		second_image {
			file {
				url
			}
		}
		third_image {
			file {
				url
			}
		}
	}
`;

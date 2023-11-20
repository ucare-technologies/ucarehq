import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

import { FAQ } from '../components/faq';
import { HeadTags } from '../components/head-tags';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { EditionSelect } from '../components/pricing/edition-select';
import { FeatureSets } from '../components/pricing/feature-sets';
import { Slice, isSlice } from '../components/slice';
import { trimPTag } from '../utils/trimTag';

const PricingPage: React.FC<PageProps<Queries.PricingPageQuery>> = ({ data }) => {
	const sections = (data?.page?.sections ?? []).filter(isSlice);
	return (
		<Layout>
			<main>
				{sections.map((item, index) =>
					!isBannerSection(item) ? null : (
						<PageHeader
							key={index}
							backgroundImageUrl={item.background_image?.file?.url || ''}
							titleHtml={trimPTag(item.rich_title?.childMarkdownRemark?.html)}
							subTitleHtml={trimPTag(item.banner_description?.childMarkdownRemark?.html)}
						/>
					)
				)}

				<div className='container'>
					<div>
						{sections.map((item, index: number) => {
							if (isPlans(item)) {
								return (
									<EditionSelect
										key={index}
										activeProfiles={item.active_profiles || 500}
										titleHtml={item.editions_title?.childMarkdownRemark?.html || ''}
										subTitleHtml={trimPTag(item.sub_title?.childMarkdownRemark?.html)}
										subDescriptionHtml={trimPTag(item.sub_description?.childMarkdownRemark?.html)}
										yearlyDiscountPercentage={item.discount_percentage_yearly || 0}
										calendlyUrl={item.calendlyUrl || ''}
										cards={(item.cards ?? []).filter(Boolean).map(c => ({
											className: c!.class_name || '',
											title: c!.title || '',
											price: c!.price || 0,
											step: c!.step || 500,
											stepPrice: c!.stepPrice || 50,
											descriptionHtml: trimPTag(c!.description?.childMarkdownRemark?.html),
											buttonText: c!.button_text || '',
											features: (c!.feature_list ?? []).filter(Boolean).map(f => ({
												bold: !!f!.bold,
												description: f!.feature_text || '',
												addOnText: f!.addOnText || '',
												newText: f!.newText || '',
											})),
										}))}
									/>
								);
							}
							if (isPlanFeature(item)) {
								return (
									<FeatureSets
										key={index}
										title={item.plan_title || ''}
										descriptionHtml={trimPTag(item.plan_description?.childMarkdownRemark?.html)}
										featureSets={(item.feature_sets ?? []).filter(Boolean).map(g => ({
											title: g!.title || '',
											descriptionHtml: trimPTag(g!.description?.childMarkdownRemark?.html),
											features: (g?.features ?? []).filter(Boolean).map(f => ({
												description: f!.feature_text || '',
												essentialsText: f!.essentials_text || '',
												essentialsCheck: !!f!.essentials_check,
												growthText: f!.growth_text || '',
												growthCheck: !!f!.growth_check,
												lighthouseText: f!.lighthouse_text || '',
												lighthouseCheck: !!f!.lighthouse_check,
											})),
										}))}
									/>
								);
							}
							return null;
						})}
					</div>
				</div>
			</main>

			{sections.filter(isAskedQuestions).map((item, index) => (
				<FAQ
					key={index}
					title={item.faq_title || ''}
					description={item.faq_description || ''}
					cards={(item.cards ?? []).filter(Boolean).map(c => ({
						title: c!.title || '',
						descriptionHtml: c!.long_description?.childMarkdownRemark?.html || '',
					}))}
				/>
			))}
		</Layout>
	);
};

export default PricingPage;
export const Head: HeadFC<Queries.PricingPageQuery> = ({ data }) => (
	<HeadTags title={data.page?.page_title || 'Pricing Editions'} />
);

function isBannerSection(item: Slice): item is Queries.PricingPageBannerFragment {
	return item.slice_name === 'price_page_banner';
}
function isPlans(item: Slice): item is Queries.PricingPagePlansFragment {
	return item.slice_name === 'plans';
}
function isPlanFeature(item: Slice): item is Queries.PricingPagePlanFeatureFragment {
	return item.slice_name === 'plan_edition_details';
}
function isAskedQuestions(item: Slice): item is Queries.PricingPageCardFragment {
	return item.slice_name === 'asked_questions';
}
export const pageQuery = graphql`
	query PricingPage {
		page: contentfulPage(slug: { eq: "/pricing" }) {
			page_title
			sections {
				... on ContentfulBannerSection {
					...PricingPageBanner
				}
				... on ContentfulPlansSection {
					...PricingPagePlans
				}
				... on ContentfulPlanFeatureSection {
					...PricingPagePlanFeature
				}
				... on ContentfulCardSection {
					...PricingPageCard
				}
			}
		}
	}
	fragment PricingPageBanner on ContentfulBannerSection {
		slice_name
		rich_title {
			childMarkdownRemark {
				html
			}
		}
		banner_description: description {
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
	fragment PricingPagePlans on ContentfulPlansSection {
		slice_name
		editions_title: title {
			childMarkdownRemark {
				html
			}
		}
		sub_title {
			childMarkdownRemark {
				html
			}
		}
		sub_description {
			childMarkdownRemark {
				html
			}
		}
		discount_percentage_yearly
		active_profiles
		calendlyUrl
		cards {
			card_name
			class_name
			title
			price
			step
			stepPrice
			description {
				childMarkdownRemark {
					html
				}
			}
			button_text
			feature_list {
				feature_text
				bold
				addOnText
				newText
			}
		}
	}
	fragment PricingPagePlanFeature on ContentfulPlanFeatureSection {
		slice_name
		plan_title: title
		plan_description: description {
			childMarkdownRemark {
				html
			}
		}
		feature_sets: plan_feature_list {
			title
			description {
				childMarkdownRemark {
					html
				}
			}
			features: plan_feature_list {
				feature_text
				essentials_text
				essentials_check
				growth_text
				growth_check
				lighthouse_text
				lighthouse_check
			}
		}
	}
	fragment PricingPageCard on ContentfulCardSection {
		slice_name
		card_section_name
		faq_title: title
		faq_description: description
		cards {
			title
			long_description {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;

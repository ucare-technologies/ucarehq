import React from 'react';

import { FAQ } from '../components/faq';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { EditionSelect } from '../components/pricing/edition-select';
import { FeatureSets } from '../components/pricing/feature-sets';
import { asArray, assetUrl, markdownToHtml, markdownToInlineHtml, type ContentEntry } from '../lib/contentful/queries';

export const PricingPageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => {
	const sections = asArray(page?.sections);
	return (
		<Layout>
			<main>
				{sections
					.filter(section => section.slice_name === 'price_page_banner')
					.map((section, index) => (
						<PageHeader
							key={index}
							backgroundImageUrl={assetUrl(section.background_image)}
							titleHtml={markdownToInlineHtml(section.rich_title)}
							subTitleHtml={markdownToInlineHtml(section.description)}
						/>
					))}

				<div className='container'>
					<div>
						{sections.map((section, index) => {
							if (section.slice_name === 'plans') {
								return (
									<EditionSelect
										key={index}
										activeProfiles={(section.active_profiles as number | null) || 500}
										titleHtml={markdownToInlineHtml(section.title)}
										subDescriptionHtml={markdownToHtml(section.sub_description)}
										yearlyDiscountPercentage={(section.discount_percentage_yearly as number | null) || 0}
										cards={asArray(section.cards).map(card => ({
											className: (card.class_name as string | null) || '',
											title: (card.title as string | null) || '',
											price: (card.price as number | null) || 0,
											step: (card.step as number | null) || 500,
											stepPrice: (card.stepPrice as number | null) || 50,
											descriptionHtml: markdownToHtml(card.description),
											buttonText: (card.button_text as string | null) || '',
											features: asArray(card.feature_list).map(feature => ({
												bold: !!feature.bold,
												description: (feature.feature_text as string | null) || '',
												addOnText: (feature.addOnText as string | null) || '',
												newText: (feature.newText as string | null) || '',
											})),
										}))}
									/>
								);
							}
							if (section.slice_name === 'plan_edition_details') {
								return (
									<FeatureSets
										key={index}
										title={(section.title as string | null) || ''}
										descriptionHtml={markdownToHtml(section.description)}
										featureSets={asArray(section.plan_feature_list).map(group => ({
											title: (group.title as string | null) || '',
											descriptionHtml: markdownToHtml(group.description),
											features: asArray(group.plan_feature_list).map(feature => ({
												description: (feature.feature_text as string | null) || '',
												essentialsText: (feature.essentials_text as string | null) || '',
												essentialsCheck: !!feature.essentials_check,
												growthText: (feature.growth_text as string | null) || '',
												growthCheck: !!feature.growth_check,
												lighthouseText: (feature.lighthouse_text as string | null) || '',
												lighthouseCheck: !!feature.lighthouse_check,
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

			{sections
				.filter(section => section.slice_name === 'asked_questions')
				.map((section, index) => (
					<FAQ
						key={index}
						title={(section.title as string | null) || ''}
						description={(section.description as string | null) || ''}
						cards={asArray(section.cards).map(card => ({
							title: (card.title as string | null) || '',
							descriptionHtml: markdownToHtml(card.long_description),
						}))}
					/>
				))}
		</Layout>
	);
};

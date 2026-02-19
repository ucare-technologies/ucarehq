import React from 'react';

import { AllFeatures } from '../components/features/all-features';
import { Content } from '../components/features/content';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { type ContentEntry, asArray, assetUrl, markdownToHtml, markdownToInlineHtml } from '../lib/contentful/queries';

export const FeatureDetailPageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => {
	const sections = asArray(page?.feature_details_page_sections);
	return (
		<Layout>
			<main>
				{sections.map((section, index) => {
					if (section.slice_name === 'feature_banner') {
						return (
							<PageHeader
								key={index}
								backgroundImageUrl={assetUrl(section.background_image)}
								titleHtml={markdownToInlineHtml(section.rich_title)}
								featureColor={(section.feature_colour as string | null) || ''}
								imageUrl={assetUrl(section.image)}
							/>
						);
					}
					if (section.slice_name === 'feature_description') {
						return <Content key={index} html={markdownToHtml(section.description)} />;
					}
					if (section.slice_name === 'more_features') {
						return (
							<AllFeatures
								key={index}
								part
								title={(section.title as string | null) || ''}
								cards={asArray(section.cards).map(card => ({
									title: (card.title as string | null) || '',
									slug: (card.feature_slug as string | null) || '',
									image: {
										className: (card.image_className as string | null) || '',
										url: assetUrl(card.card_image),
									},
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

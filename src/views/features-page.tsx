import React from 'react';

import { AllFeatures } from '../components/features/all-features';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { type ContentEntry, asArray, assetUrl, markdownToHtml, markdownToInlineHtml } from '../lib/contentful/queries';

export const FeaturesPageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => (
	<Layout>
		<main>
			{asArray(page?.sections).map((item, index) => {
				if (item.slice_name === 'feature_page_banner') {
					return (
						<PageHeader
							key={index}
							backgroundImageUrl={assetUrl(item.background_image)}
							titleHtml={markdownToInlineHtml(item.rich_title)}
							subTitleHtml={markdownToInlineHtml(item.description)}
						/>
					);
				}
				if (item.slice_name === 'all_features') {
					return (
						<AllFeatures
							key={index}
							descriptionHtml={markdownToHtml(item.rich_description)}
							cards={asArray(item.cards).map(card => ({
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

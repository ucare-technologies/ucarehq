import React from 'react';

import { CallToAction } from '../components/home/call-to-action';
import { DataIntelligence } from '../components/home/data-intelligence';
import { Devices } from '../components/home/devices';
import { Features } from '../components/home/features';
import { Hero } from '../components/home/hero';
import { Ministry } from '../components/home/ministry';
import { Layout } from '../components/layout';
import { type ContentEntry, asArray, assetUrl, markdownToHtml, markdownToInlineHtml } from '../lib/contentful/queries';

export const HomePageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => (
	<Layout>
		{asArray(page?.sections).map((item, index) => {
			if (item.slice_name === 'home_page_banner') {
				return (
					<Hero
						key={index}
						titleHtml={markdownToInlineHtml(item.rich_title)}
						backgroundImageUrl={assetUrl(item.background_image)}
					/>
				);
			}
			if (item.slice_name === 'try_free') {
				return (
					<CallToAction
						key={index}
						title={(item.title as string | null) || null}
						subTitle={(item.sub_title as string | null) || null}
						buttonText={(item.button_text as string | null) || null}
						linkTo={(item.button_link as string | null) || null}
					/>
				);
			}
			if (item.slice_name === 'features') {
				return (
					<Features
						key={index}
						title={(item.title as string | null) || ''}
						buttonText={(item.button_text as string | null) || ''}
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
			if (item.slice_name === 'ministry_covered') {
				return (
					<Ministry
						key={index}
						title={(item.title as string | null) || ''}
						description={(item.description as string | null) || ''}
						cards={asArray(item.cards).map(card => ({
							title: (card.title as string | null) || '',
							description: (card.description as string | null) || '',
							image: {
								url: assetUrl(card.card_image),
							},
						}))}
					/>
				);
			}
			if (item.slice_name === 'ChMS_Meets_Data_Intelligence') {
				return (
					<DataIntelligence
						key={index}
						titleHtml={markdownToInlineHtml(item.title)}
						descriptionHtml={markdownToHtml(item.description)}
						firstImageUrl={assetUrl(item.first_image)}
					/>
				);
			}
			if (item.slice_name === 'Available_on_All_Your_Devices') {
				return (
					<Devices
						key={index}
						titleHtml={markdownToInlineHtml(item.title)}
						descriptionHtml={markdownToHtml(item.description)}
						firstImageUrl={assetUrl(item.first_image)}
						secondImageUrl={assetUrl(item.second_image)}
						thirdImageUrl={assetUrl(item.third_image)}
					/>
				);
			}
			return null;
		})}
	</Layout>
);

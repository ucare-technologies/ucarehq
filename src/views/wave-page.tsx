import React from 'react';

import { FAQ } from '../components/faq';
import { Layout } from '../components/layout';
import { Features } from '../components/wave/features';
import { Hero } from '../components/wave/hero';
import { WaveVideo } from '../components/wave/wave-video';
import { type ContentEntry, asArray, assetUrl, markdownToHtml, markdownToInlineHtml } from '../lib/contentful/queries';

export const WavePageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => {
	const [autoPlay, setAutoPlay] = React.useState(false);
	const sections = asArray(page?.sections);
	return (
		<Layout>
			{sections
				.filter(section => section.slice_name === 'wave_page_banner')
				.map((section, index) => (
					<Hero
						key={index}
						backgroundImageUrl={assetUrl(section.background_image)}
						titleHtml={markdownToInlineHtml(section.rich_title)}
						onPlayClick={() => setAutoPlay(true)}
					/>
				))}
			<WaveVideo autoPlay={autoPlay} />
			{sections
				.filter(
					section => section.slice_name === 'wave_features' || section.slice_name === 'frequently_asked_questions'
				)
				.map((section, index) =>
					section.slice_name === 'wave_features' ? (
						<Features
							key={index}
							cards={asArray(section.cards).map(card => ({
								name: (card.card_name as string | null) || '',
								title: (card.title as string | null) || '',
								cardImageUrl: assetUrl(card.card_image),
								descriptionHtml: markdownToHtml(card.long_description),
							}))}
						/>
					) : (
						<FAQ
							key={index}
							title={(section.title as string | null) || ''}
							cards={asArray(section.cards).map(card => ({
								title: (card.title as string | null) || '',
								descriptionHtml: markdownToHtml(card.long_description),
							}))}
						/>
					)
				)}
		</Layout>
	);
};

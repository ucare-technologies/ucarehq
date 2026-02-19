import React from 'react';

import { Layout } from '../components/layout';
import { Footer } from '../components/legal/footer';
import { PageHeader } from '../components/page-header';
import { asArray, assetUrl, markdownToHtml, markdownToInlineHtml, type ContentEntry } from '../lib/contentful/queries';

export const LegalPageView: React.FC<{
	page: ContentEntry | null;
	bannerSliceName: string;
}> = ({ page, bannerSliceName }) => (
	<Layout>
		<main>
			{asArray(page?.sections).map((section, index) => {
				if (section.slice_name === bannerSliceName) {
					return (
						<PageHeader
							key={index}
							backgroundImageUrl={assetUrl(section.background_image)}
							titleHtml={markdownToInlineHtml(section.rich_title)}
						/>
					);
				}
				if (section.slice_name === 'footer_details_page_description') {
					return <Footer key={index} html={markdownToHtml(section.description)} />;
				}
				return null;
			})}
		</main>
	</Layout>
);

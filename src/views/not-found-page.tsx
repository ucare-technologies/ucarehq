import React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { type ContentEntry, asArray, assetUrl, markdownToHtml, markdownToInlineHtml } from '../lib/contentful/queries';
import { handleLinkClick } from '../utils/handleLinkClick';

export const NotFoundPageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => (
	<Layout>
		<main>
			{asArray(page?.sections).map((section, index) => {
				if (section.slice_name === 'not_found_banner') {
					return (
						<PageHeader
							key={index}
							backgroundImageUrl={assetUrl(section.background_image)}
							titleHtml={markdownToInlineHtml(section.rich_title)}
						/>
					);
				}
				if (section.slice_name === 'not_found_description') {
					return (
						<div className='container px-4 pb-5' key={index}>
							<div className='text-center lead'>
								<div
									dangerouslySetInnerHTML={{
										__html: markdownToHtml(section.description),
									}}
									onClick={handleLinkClick}
								/>
							</div>
						</div>
					);
				}
				return null;
			})}
		</main>
	</Layout>
);

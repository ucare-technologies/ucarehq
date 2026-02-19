import React from 'react';

import { Content } from '../components/blogs/content';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import { asArray, assetUrl, markdownToHtml, markdownToInlineHtml, type ContentEntry } from '../lib/contentful/queries';

export const BlogPostPageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => {
	const sections = asArray(page?.blog_details_page_sections);
	return (
		<Layout>
			<main>
				{sections.map((section, index) => {
					if (section.slice_name === 'blog_banner') {
						return (
							<PageHeader
								key={index}
								backgroundImageUrl={assetUrl(section.background_image)}
								titleHtml={markdownToInlineHtml(section.rich_title)}
								blog_date={(section.blog_date as string | null) || ''}
							/>
						);
					}
					if (section.slice_name === 'blog_description') {
						return <Content key={index} html={markdownToHtml(section.description)} />;
					}
					return null;
				})}
			</main>
		</Layout>
	);
};

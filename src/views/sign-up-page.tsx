import React from 'react';

import { FAQ } from '../components/faq';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';
import SignUpForm from '../components/sign-up/sign-up-form';
import { type ContentEntry, asArray, assetUrl, markdownToHtml, markdownToInlineHtml } from '../lib/contentful/queries';

function getQueryStringValues(search: string) {
	if (!search) {
		return { size: 500, edition: 'Growth' };
	}
	const params = new URLSearchParams(search);
	const size = Number(params.get('size')) || 500;
	const edition = String(params.get('edition')) || 'Growth';
	return { size, edition };
}

export const SignUpPageView: React.FC<{ page: ContentEntry | null }> = ({ page }) => {
	const [queryValues, setQueryValues] = React.useState({ size: 500, edition: 'Growth' });
	React.useEffect(() => {
		setQueryValues(getQueryStringValues(window.location.search));
	}, []);

	const sections = asArray(page?.sections);
	return (
		<Layout>
			<main>
				{sections
					.filter(section => section.slice_name === 'sign_up_page_banner')
					.map((section, index) => (
						<PageHeader
							key={index}
							backgroundImageUrl={assetUrl(section.background_image)}
							titleHtml={markdownToInlineHtml(section.rich_title)}
							subTitleHtml={markdownToInlineHtml(section.description)}
						/>
					))}

				<SignUpForm size={queryValues.size} edition={queryValues.edition} />

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
			</main>
		</Layout>
	);
};

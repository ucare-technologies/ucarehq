import { fetchEntries } from './client';

export type ContentEntry = Record<string, any>;

export const SITE_METADATA = {
	title: 'UCare',
	description: 'Church management software simplified',
	author: 'UCare',
	siteUrl: 'https://ucarehq.com',
};

export async function getContentPage(slug: string) {
	const pages = await fetchEntriesWithFallback<ContentEntry>(['page'], {
		filters: {
			'fields.slug': slug,
		},
	});
	return pages[0] || null;
}

export async function getAllBlogsPage() {
	const allBlogs = await fetchEntriesWithFallback<ContentEntry>(['allBlogs', 'all_blogs']);
	return allBlogs[0] || null;
}

export async function getBlogDetailsPage(slug: string) {
	const pages = await fetchEntriesWithFallback<ContentEntry>(['blogDetailsPage', 'blog_details_page'], {
		filters: {
			'fields.slug': slug,
		},
	});
	return pages[0] || null;
}

export async function getFeatureDetailsPage(slug: string) {
	const pages = await fetchEntriesWithFallback<ContentEntry>(['featureDetailsPage', 'feature_details_page'], {
		filters: {
			'fields.slug': slug,
		},
	});
	return pages[0] || null;
}

export async function getBlogSlugs() {
	const page = await getAllBlogsPage();
	const posts = asArray(page?.single_blogs);
	return posts.map(post => String(post?.blog_slug || '')).filter(Boolean);
}

export async function getFeatureSlugs() {
	const page = await getContentPage('/features');
	const sections = asArray(page?.sections);
	const featuresSection = sections.find(section => section?.slice_name === 'all_features');
	const cards = asArray(featuresSection?.cards);
	return cards.map(card => String(card?.feature_slug || '')).filter(Boolean);
}

export async function getBlogPageData(pageNumber: number, limit = 5) {
	const page = await getAllBlogsPage();
	const allPosts = asArray(page?.single_blogs);
	const numPages = Math.max(1, Math.ceil(allPosts.length / limit));
	const boundedPage = Math.max(1, Math.min(pageNumber, numPages));
	const skip = (boundedPage - 1) * limit;
	return {
		blogsPageData: {
			all_blog_section: (page?.all_blog_section as string | null) || null,
			all_blogs_banner_section: {
				rich_title: markdownToHtml(page?.all_blogs_banner_section?.rich_title),
				description: markdownToHtml(page?.all_blogs_banner_section?.description),
				background_image: {
					file: {
						url: assetUrl(page?.all_blogs_banner_section?.background_image) || null,
					},
				},
			},
			single_blogs: allPosts.map(post => ({
				id: String(post?.sys?.id || ''),
				title: (post?.title as string | null) || null,
				blog_date: (post?.blog_date as string | null) || null,
				blog_slug: (post?.blog_slug as string | null) || null,
				card_image: {
					file: {
						url: assetUrl(post?.card_image) || null,
					},
				},
				long_description: markdownToHtml(post?.long_description),
			})),
		},
		currentPage: boundedPage,
		limit,
		numPages,
		skip,
	};
}

export function asArray<T>(value: T[] | null | undefined) {
	return Array.isArray(value) ? value.filter(Boolean) : [];
}

export function assetUrl(value: any) {
	const url = value?.file?.url || '';
	return typeof url === 'string' ? url : '';
}

export function markdownToHtml(value: unknown, options?: { wrapParagraphs?: boolean }): string {
	const wrapParagraphs = options?.wrapParagraphs ?? true;
	if (typeof value !== 'string') {
		return '';
	}
	const source = value.trim();
	if (!source) {
		return '';
	}
	if (source.includes('<') && source.includes('>')) {
		return source;
	}

	const blocks = source.split(/\n{2,}/).map(block => block.trim()).filter(Boolean);
	const htmlBlocks = blocks.map(block => {
		const listLines = block.split('\n').filter(line => /^[-*]\s+/.test(line.trim()));
		if (listLines.length > 0 && listLines.length === block.split('\n').length) {
			const items = listLines.map(line => `<li>${inlineMarkdown(line.replace(/^[-*]\s+/, '').trim())}</li>`).join('');
			return `<ul>${items}</ul>`;
		}
		const html = inlineMarkdown(block).replace(/\n/g, '<br />');
		return wrapParagraphs ? `<p>${html}</p>` : html;
	});
	return htmlBlocks.join('\n');
}

export function markdownToInlineHtml(value: unknown): string {
	return markdownToHtml(value, { wrapParagraphs: false });
}

function inlineMarkdown(value: string) {
	return value
		.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
		.replace(/\*(.+?)\*/g, '<em>$1</em>')
		.replace(/`(.+?)`/g, '<code>$1</code>')
		.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
}

async function fetchEntriesWithFallback<T extends ContentEntry>(
	contentTypes: string[],
	options?: {
		include?: number;
		filters?: Record<string, string | number | boolean>;
		order?: string;
		limit?: number;
		skip?: number;
	}
) {
	let lastError: unknown;
	for (const contentType of contentTypes) {
		try {
			const entries = await fetchEntries<T>(contentType, options);
			if (entries.length > 0) {
				return entries;
			}
		} catch (error) {
			lastError = error;
		}
	}
	if (lastError) {
		throw lastError;
	}
	return [] as T[];
}

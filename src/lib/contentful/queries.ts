import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

import { fetchEntries } from './client';
import type { ContentfulRawEntry } from './client';

export type ContentEntry = Record<string, any>;

const markdownProcessor = remark().use(remarkGfm).use(remarkHtml);

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
	const normalizedValue = resolveContentfulFieldValue(value);
	if (isRichTextJsonWrapper(normalizedValue)) {
		const html = documentToHtmlString(normalizedValue.json);
		return wrapParagraphs ? html : trimSingleParagraph(html);
	}
	if (isRichTextDocument(normalizedValue)) {
		const html = documentToHtmlString(normalizedValue);
		return wrapParagraphs ? html : trimSingleParagraph(html);
	}
	if (typeof normalizedValue !== 'string') {
		return '';
	}
	const source = normalizedValue.trim();
	if (!source) {
		return '';
	}
	const html = renderMarkdown(source);
	if (html) {
		return wrapParagraphs ? html : trimSingleParagraph(html);
	}
	if (looksLikeHtml(source)) {
		return wrapParagraphs ? source : trimSingleParagraph(source);
	}
	return wrapParagraphs ? escapeTextToParagraph(source) : escapeTextWithBreaks(source);
}

export function markdownToInlineHtml(value: unknown): string {
	return markdownToHtml(value, { wrapParagraphs: false });
}

function isRichTextDocument(value: unknown): value is { nodeType: 'document'; content: unknown[] } {
	return (
		typeof value === 'object' &&
		value !== null &&
		'nodeType' in value &&
		(value as { nodeType?: unknown }).nodeType === 'document' &&
		Array.isArray((value as { content?: unknown }).content)
	);
}

function isRichTextJsonWrapper(value: unknown): value is { json: { nodeType: 'document'; content: unknown[] } } {
	return (
		typeof value === 'object' &&
		value !== null &&
		'json' in value &&
		isRichTextDocument((value as { json?: unknown }).json)
	);
}

function trimSingleParagraph(html: string) {
	const match = html.trim().match(/^<p>([\s\S]*)<\/p>$/);
	return match ? match[1] : html;
}

function resolveContentfulFieldValue(value: unknown): unknown {
	if (typeof value !== 'object' || value === null || Array.isArray(value)) {
		return value;
	}

	const localeValue = pickLocaleValue(value);
	if (localeValue.found) {
		return localeValue.value;
	}

	return value;
}

function pickLocaleValue(value: object): { found: true; value: unknown } | { found: false } {
	const entries = Object.entries(value as Record<string, unknown>);
	if (entries.length === 0) {
		return { found: false };
	}
	if (!entries.every(([key]) => isLocaleKey(key))) {
		return { found: false };
	}

	const preferredLocales = [
		import.meta.env.CONTENTFUL_LOCALE,
		import.meta.env.CONTENTFUL_DEFAULT_LOCALE,
		'en-US',
	].filter((locale): locale is string => typeof locale === 'string' && locale.length > 0);
	const localeMap = value as Record<string, unknown>;

	for (const locale of preferredLocales) {
		if (locale in localeMap && localeMap[locale] != null) {
			return { found: true, value: localeMap[locale] };
		}
	}

	for (const [, localeValue] of entries) {
		if (localeValue != null) {
			return { found: true, value: localeValue };
		}
	}

	return { found: true, value: entries[0][1] };
}

function isLocaleKey(value: string) {
	return /^[a-z]{2,3}(?:-[A-Z][a-z]{3})?(?:-[A-Z]{2})?$/.test(value);
}

function looksLikeHtml(value: string) {
	return /<\/?[a-z][\w-]*(?:\s[^>]*)?>/i.test(value);
}

function renderMarkdown(source: string) {
	try {
		return String(markdownProcessor.processSync(source)).trim();
	} catch {
		return '';
	}
}

function escapeTextWithBreaks(source: string) {
	return source
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/\n/g, '<br />');
}

function escapeTextToParagraph(source: string) {
	return `<p>${escapeTextWithBreaks(source)}</p>`;
}

function normalizeAssetUrl(url: string) {
	return url.startsWith('//') ? `https:${url}` : url;
}

function hasFields(value: unknown): value is {
	sys: { type?: string };
	fields: Record<string, unknown>;
} {
	return (
		typeof value === 'object' &&
		value !== null &&
		'fields' in value &&
		typeof (value as { fields?: unknown }).fields === 'object' &&
		(value as { fields?: unknown }).fields !== null
	);
}

function flattenContentfulValue(value: unknown, seen = new WeakMap<object, unknown>()): unknown {
	if (Array.isArray(value)) {
		if (seen.has(value)) {
			return seen.get(value);
		}
		const out: unknown[] = [];
		seen.set(value, out);
		for (const item of value) {
			out.push(flattenContentfulValue(item, seen));
		}
		return out;
	}

	if (value && typeof value === 'object') {
		const normalized = resolveContentfulFieldValue(value);
		if (normalized !== value) {
			return flattenContentfulValue(normalized, seen);
		}

		if (seen.has(value)) {
			return seen.get(value);
		}

		const sysType = (value as { sys?: { type?: string } }).sys?.type;
		if (sysType === 'Link') {
			return null;
		}

		if (hasFields(value)) {
			const out: Record<string, unknown> = {
				sys: (value as { sys?: unknown }).sys,
			};
			seen.set(value, out);
			for (const [key, nested] of Object.entries(value.fields)) {
				out[key] = flattenContentfulValue(nested, seen);
			}
			if (sysType === 'Asset' && typeof (out.file as { url?: unknown } | undefined)?.url === 'string') {
				(out.file as { url: string }).url = normalizeAssetUrl((out.file as { url: string }).url);
			}
			return out;
		}

		const out: Record<string, unknown> = {};
		seen.set(value, out);
		for (const [key, nested] of Object.entries(value)) {
			out[key] = flattenContentfulValue(nested, seen);
		}
		return out;
	}

	return value;
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
			const entries = await fetchEntries<ContentfulRawEntry>(contentType, options);
			if (entries.length > 0) {
				return entries.map(entry => flattenContentfulValue(entry) as T);
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

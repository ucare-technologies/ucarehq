type ContentfulLink = {
	sys: {
		type: 'Link';
		linkType: 'Entry' | 'Asset';
		id: string;
	};
};

type ContentfulEntity = {
	sys: {
		id: string;
		type: string;
		contentType?: {
			sys: {
				id: string;
			};
		};
	};
	fields?: Record<string, unknown>;
};

type ContentfulEntriesResponse = {
	items: ContentfulEntity[];
	includes?: {
		Entry?: ContentfulEntity[];
		Asset?: ContentfulEntity[];
	};
};

function getEnv(name: 'CONTENTFUL_SPACE_ID' | 'CONTENTFUL_ACCESS_TOKEN' | 'CONTENTFUL_HOST') {
	return import.meta.env[name];
}

function getContentfulConfig() {
	const spaceId = getEnv('CONTENTFUL_SPACE_ID');
	const accessToken = getEnv('CONTENTFUL_ACCESS_TOKEN');
	const host = getEnv('CONTENTFUL_HOST') || 'cdn.contentful.com';
	const environment = import.meta.env.CONTENTFUL_ENVIRONMENT || 'master';
	if (!spaceId || !accessToken) {
		throw new Error('Missing Contentful environment variables.');
	}
	return { spaceId, accessToken, host, environment };
}

function isLink(value: unknown): value is ContentfulLink {
	return (
		typeof value === 'object' &&
		value !== null &&
		'sys' in value &&
		typeof (value as { sys?: { type?: string } }).sys?.type === 'string' &&
		(value as { sys?: { type?: string } }).sys?.type === 'Link'
	);
}

function isEntity(value: unknown): value is ContentfulEntity {
	return typeof value === 'object' && value !== null && 'sys' in value;
}

function normalizeAssetUrl(url: string) {
	return url.startsWith('//') ? `https:${url}` : url;
}

function resolveEntity(
	entity: ContentfulEntity,
	entitiesById: Map<string, ContentfulEntity>,
	cache: Map<string, ContentfulEntity>
): ContentfulEntity {
	const cached = cache.get(entity.sys.id);
	if (cached) {
		return cached;
	}

	const clone: ContentfulEntity = {
		...entity,
		fields: {},
	};
	cache.set(entity.sys.id, clone);

	for (const [key, value] of Object.entries(entity.fields || {})) {
		clone.fields![key] = resolveValue(value, entitiesById, cache);
	}

	if (clone.sys.type === 'Asset' && clone.fields?.file && typeof clone.fields.file === 'object') {
		const file = clone.fields.file as { url?: string };
		if (typeof file.url === 'string') {
			file.url = normalizeAssetUrl(file.url);
		}
	}

	return clone;
}

function resolveValue(
	value: unknown,
	entitiesById: Map<string, ContentfulEntity>,
	cache: Map<string, ContentfulEntity>
): unknown {
	if (Array.isArray(value)) {
		return value.map(item => resolveValue(item, entitiesById, cache));
	}
	if (isLink(value)) {
		const linked = entitiesById.get(value.sys.id);
		return linked ? resolveEntity(linked, entitiesById, cache) : null;
	}
	if (isEntity(value) && value.fields) {
		return resolveEntity(value, entitiesById, cache);
	}
	if (value && typeof value === 'object') {
		const output: Record<string, unknown> = {};
		for (const [key, nested] of Object.entries(value)) {
			output[key] = resolveValue(nested, entitiesById, cache);
		}
		return output;
	}
	return value;
}

function toPlainObject(value: unknown, seen = new WeakMap<object, unknown>()): unknown {
	if (Array.isArray(value)) {
		if (seen.has(value)) {
			return seen.get(value);
		}
		const output: unknown[] = [];
		seen.set(value, output);
		for (const item of value) {
			output.push(toPlainObject(item, seen));
		}
		return output;
	}
	if (value && typeof value === 'object' && seen.has(value)) {
		return seen.get(value as object);
	}
	if (isEntity(value) && value.fields) {
		const output: Record<string, unknown> = {
			sys: value.sys,
		};
		seen.set(value, output);
		for (const [key, nested] of Object.entries(value.fields)) {
			output[key] = toPlainObject(nested, seen);
		}
		return output;
	}
	if (value && typeof value === 'object') {
		const output: Record<string, unknown> = {};
		seen.set(value, output);
		for (const [key, nested] of Object.entries(value)) {
			output[key] = toPlainObject(nested, seen);
		}
		return output;
	}
	return value;
}

export async function fetchEntries<T extends Record<string, unknown>>(
	contentType: string,
	options?: {
		include?: number;
		filters?: Record<string, string | number | boolean>;
		order?: string;
		limit?: number;
		skip?: number;
	}
): Promise<T[]> {
	const { spaceId, accessToken, host, environment } = getContentfulConfig();
	const params = new URLSearchParams();
	params.set('content_type', contentType);
	params.set('include', String(options?.include ?? 10));
	if (options?.order) {
		params.set('order', options.order);
	}
	if (typeof options?.limit === 'number') {
		params.set('limit', String(options.limit));
	}
	if (typeof options?.skip === 'number') {
		params.set('skip', String(options.skip));
	}
	for (const [key, value] of Object.entries(options?.filters || {})) {
		params.set(key, String(value));
	}

	const endpoint = `https://${host}/spaces/${spaceId}/environments/${environment}/entries?${params.toString()}`;
	const response = await fetch(endpoint, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	if (!response.ok) {
		const message = await response.text();
		throw new Error(`Contentful request failed (${response.status}): ${message}`);
	}

	const json = (await response.json()) as ContentfulEntriesResponse;
	const entitiesById = new Map<string, ContentfulEntity>();
	for (const item of json.items) {
		entitiesById.set(item.sys.id, item);
	}
	for (const item of json.includes?.Entry || []) {
		entitiesById.set(item.sys.id, item);
	}
	for (const item of json.includes?.Asset || []) {
		entitiesById.set(item.sys.id, item);
	}

	return json.items.map(item => {
		const resolved = resolveEntity(item, entitiesById, new Map());
		return toPlainObject(resolved) as T;
	});
}

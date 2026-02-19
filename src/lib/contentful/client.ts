import { createClient, type EntryCollection } from 'contentful';

type ContentfulRawEntry = {
	sys: {
		id: string;
		type: string;
		contentType?: {
			sys: {
				id: string;
			};
		};
	};
	fields: Record<string, unknown>;
};

type ContentfulQueryOptions = {
	include?: number;
	filters?: Record<string, string | number | boolean>;
	order?: string;
	limit?: number;
	skip?: number;
};

function getEnv(name: 'CONTENTFUL_SPACE_ID' | 'CONTENTFUL_ACCESS_TOKEN' | 'CONTENTFUL_HOST') {
	return import.meta.env[name];
}

function getContentfulConfig() {
	const space = getEnv('CONTENTFUL_SPACE_ID');
	const accessToken = getEnv('CONTENTFUL_ACCESS_TOKEN');
	const host = getEnv('CONTENTFUL_HOST') || 'cdn.contentful.com';
	const environment = import.meta.env.CONTENTFUL_ENVIRONMENT || 'master';

	if (!space || !accessToken) {
		throw new Error('Missing Contentful environment variables.');
	}

	return { space, accessToken, host, environment };
}

let cachedClient: ReturnType<typeof createClient> | null = null;
let cachedClientKey = '';

function getContentfulClient() {
	const config = getContentfulConfig();
	const clientKey = `${config.space}:${config.environment}:${config.host}`;
	if (cachedClient && cachedClientKey === clientKey) {
		return cachedClient;
	}

	cachedClient = createClient({
		space: config.space,
		accessToken: config.accessToken,
		host: config.host,
		environment: config.environment,
	});
	cachedClientKey = clientKey;
	return cachedClient;
}

export async function fetchEntries<T extends Record<string, unknown>>(
	contentType: string,
	options?: ContentfulQueryOptions
): Promise<T[]> {
	const client = getContentfulClient();
	const query: Record<string, string | number | boolean> = {
		content_type: contentType,
		include: options?.include ?? 10,
	};

	if (options?.order) {
		query.order = options.order;
	}
	if (typeof options?.limit === 'number') {
		query.limit = options.limit;
	}
	if (typeof options?.skip === 'number') {
		query.skip = options.skip;
	}
	for (const [key, value] of Object.entries(options?.filters || {})) {
		query[key] = value;
	}

	const response = (await client.withoutUnresolvableLinks.getEntries(
		query as Parameters<typeof client.getEntries>[0]
	)) as EntryCollection<any, undefined, string>;
	return response.items as unknown as T[];
}

export type { ContentfulRawEntry };

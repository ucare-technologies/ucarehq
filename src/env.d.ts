/// <reference types='astro/client' />

interface ImportMetaEnv {
	readonly CONTENTFUL_SPACE_ID: string;
	readonly CONTENTFUL_ACCESS_TOKEN: string;
	readonly CONTENTFUL_HOST?: string;
	readonly CONTENTFUL_ENVIRONMENT?: string;
	readonly TURNSTILE_PUBLIC_SITE_KEY?: string;
	readonly TURNSTILE_SECRET_KEY?: string;
	readonly UCARE_SIGN_UP_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

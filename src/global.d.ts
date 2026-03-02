declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export = classes;
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string };
	export = classes;
}

declare module '*.svg';

interface TurnstileRenderOptions {
	sitekey: string;
	callback?: (token: string) => void;
	'expired-callback'?: () => void;
	'error-callback'?: () => void;
}

interface TurnstileApi {
	render(container: string | HTMLElement, options: TurnstileRenderOptions): string;
	reset(widgetId?: string): void;
	remove(widgetId: string): void;
}

interface Window {
	turnstile?: TurnstileApi;
}

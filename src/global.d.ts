/* eslint-disable */
declare const __PATH_PREFIX__: string;
declare module 'gatsby-plugin-mdx' {
	import * as React from 'react';
	export interface MDXRendererProps {
		scope?: any;
		components?: {
			[key: string]: React.ComponentType<any>;
		};
		children: string;
		[propName: string]: any;
	}
	export class MDXRenderer extends React.Component<MDXRendererProps> {}
}
declare module '@mdx-js/react' {
	import * as React from 'react';
	export type Components = {
		[key: string]: React.ComponentType<any>;
	};
	export interface MDXProviderProps {
		children: React.ReactNode;
		components: any;
	}
	export class MDXProvider extends React.Component<MDXProviderProps> {}
}
declare interface BlogPostNode {
	id: string;
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	body: string;
	type: string;
	categories: string;
	featured_image: {
		publicURL: string;
		relativePath: string;
	} | null;
}
interface GoogleDataLayer {
	push(vars: Record<string, string>): void;
}
declare global {
	var dataLayer: GoogleDataLayer;
}

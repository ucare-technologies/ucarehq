import React from 'react';
import { useScript } from './use-script';

export function useUCareEmbed() {
	const { loaded } = useScript('https://crm.ucareapp.com/Scripts/ucare.embed.js');
	React.useEffect(() => {
		if (loaded) {
			for (const el of document.querySelectorAll<HTMLDivElement>('div.ucare-embed')) {
				const { url, path, css } = el.dataset;
				if (path && !el.dataset.loaded) {
					el.dataset.loaded = 'true';
					window.UCareEmbed(el.id, url || crmUrl, path, css || cssUrl);
				}
			}
		}
	}, [loaded]);
}
const crmUrl = 'https://crm.ucareapp.com';
const cssUrl = 'https://ucarehq.com/form-styles.css'; // this file is in the static folder

declare global {
	interface Window {
		UCareEmbed: (elementId: string, url: string, path: string, cssUrl: string) => void;
	}
}

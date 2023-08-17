// eslint-disable-next-line no-use-before-define
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
	interface Window {
		UCareEmbed: (elementId: string, url: string, path: string, cssUrl: string) => void;
	}
}

function loaded() {
	return typeof window.UCareEmbed === 'function';
}
const cssUrl = 'https://ucarehq.com/form-styles.css'; // this file is in the static folder
const UCareEmbedComponent: React.FC<{ id: string; path: string }> = ({ id, path }) => {
	const divId = `ucare-embed-${id}`;
	const load = React.useCallback(() => {
		window.UCareEmbed(divId, 'https://crm.ucareapp.com', path, cssUrl);
	}, [divId, path]);
	React.useEffect(() => {
		if (loaded()) {
			load();
		} else {
			const script = document.createElement('script');
			script.async = true;
			script.onload = () => loaded() && load();
			script.src = 'https://crm.ucareapp.com/Scripts/ucare.embed.js';
			document.body.appendChild(script);
		}
	}, [divId, load]);
	return <div id={divId} style={{ maxWidth: 600, margin: '0 auto' }} />;
};
export default UCareEmbedComponent;

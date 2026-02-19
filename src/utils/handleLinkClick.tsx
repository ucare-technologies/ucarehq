import React from 'react';

export function handleLinkClick(e: React.MouseEvent<HTMLElement>) {
	const anchor = getAnchor(e.target);
	if (!anchor) return;

	if (isModifiedClick(e) || anchor.target === '_blank' || anchor.hasAttribute('download')) {
		return;
	}

	// Let Astro ClientRouter handle same-origin links for smooth view transitions.
	if (!isExternal(anchor)) {
		return;
	}

	e.preventDefault();
	e.stopPropagation();
	window.open(anchor.href, '_blank', 'noopener,noreferrer');
}

function getAnchor(target: EventTarget | null): HTMLAnchorElement | null {
	if (!(target instanceof Element)) return null;
	return target.closest('a');
}

function isModifiedClick(e: React.MouseEvent<HTMLElement>) {
	return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}

function isExternal(a: HTMLAnchorElement) {
	if (!a.href) return false;
	const protocol = a.protocol.toLowerCase();
	if (protocol !== 'http:' && protocol !== 'https:') {
		return false;
	}
	return a.origin !== window.location.origin;
}

import React from 'react';

import { navigate } from 'gatsby';

export function handleLinkClick(e: React.MouseEvent<HTMLElement>) {
	const { target } = e;
	if (isAnchor(target)) {
		if (isExternal(target)) {
			e.preventDefault();
			e.stopPropagation();
			window.open(target.href, '_blank');
		} else if (!e.ctrlKey) {
			e.preventDefault();
			e.stopPropagation();
			navigate(target.pathname);
		}
	}
}
function isAnchor(target: any): target is HTMLAnchorElement {
	return 'tagName' in target && typeof target.tagName === 'string' && target.tagName === 'A';
}
function isExternal(a: HTMLAnchorElement) {
	return a.hostname !== document.location.hostname;
}

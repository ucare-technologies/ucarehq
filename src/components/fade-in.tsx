import * as React from 'react';

import { useInView } from 'react-intersection-observer';

export const FadeIn: React.FC<
	React.PropsWithChildren<{
		as?: 'section';
		className?: string;
		fade?: 'left' | 'right' | 'up';
	}>
> = ({ as, className, fade, children }) => {
	const [inViewRef, inView] = useInView({ triggerOnce: true });
	return React.createElement(
		as || 'div',
		{
			ref: inViewRef,
			className: `${className || ''} ${fadeClassName(inView, fade)}`,
		},
		children
	);
};
function fadeClassName(inView: boolean, fade: string | undefined) {
	return inView ? (fade ? `fade-in-${fade}` : 'fade-in') : 'fade-in-hidden';
}

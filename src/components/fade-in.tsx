import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

function fadeClassName(inView: boolean, fade: string | undefined) {
	if (inView) {
		return fade ? `-${fade}` : '';
	}
	return '-hidden';
}

interface FadeInProps {
	as?: 'section';
	className?: string;
	fade?: 'left' | 'right' | 'up';
}
const FadeIn: React.FC<FadeInProps> = ({ as, className, fade, children }) => {
	const [inViewRef, inView] = useInView();
	return React.createElement(
		as || 'div',
		{
			ref: inViewRef,
			className: `${className || ''} fade-in${fadeClassName(inView, fade)}`,
		},
		children
	);
};
export default FadeIn;

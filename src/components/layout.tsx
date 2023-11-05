import * as React from 'react';

import { useInView } from 'react-intersection-observer';

import Footer from './footer';
import Header from './header';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const handleClick = React.useCallback(() => setMenuOpen(open => !open), []);
	const [isTopRef, isTop] = useInView();
	const refHeader = React.useRef<HTMLElement>(null); // to stop white bg flash
	return (
		<>
			<div ref={isTopRef} />
			<Header
				forwardRef={refHeader}
				isTop={!refHeader.current ? true : isTop}
				menuOpen={menuOpen}
				onClick={handleClick}
			/>
			{children}

			<Footer />
		</>
	);
};

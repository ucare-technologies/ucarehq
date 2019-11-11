import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import FadeIn from '../fade-in';

export default function ChurchManagement({ menuOpen, onClick }: { menuOpen: boolean; onClick: () => void }) {
	const { home } = useStaticQuery(graphql`
		query {
			home: file(relativePath: { eq: "home/hero.jpg" }) {
				publicURL
			}
		}
	`);
	const handleClick = React.useCallback(() => menuOpen && onClick(), [menuOpen, onClick]);
	return (
		<section
			className={`church-manage justify-content-center ${menuOpen ? `menu-open` : ''}`}
			style={{ backgroundImage: `url(${home.publicURL})` }}
			onClick={handleClick}
		>
			<FadeIn className='church-manage-title text-center' fade='up'>
				<h1 className='text-white'>
					<em>church management. &nbsp;</em>
					<strong>simplified.</strong>
				</h1>
			</FadeIn>
		</section>
	);
}

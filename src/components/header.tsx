import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import HamburgerMenu from 'react-hamburger-menu';

import { FilePublicUrl } from '../types';

import { FeaturesLink, SupportLink, BlogLink, SignInLink, TrialLink, PricingLink } from './header-links';

interface HeaderProps {
	isTop: boolean;
	menuOpen: boolean;
	onClick: () => void;
	forwardRef: React.MutableRefObject<HTMLElement | null>;
}
const Header: React.FC<HeaderProps> = ({ isTop, menuOpen, onClick, forwardRef }) => {
	const { bigLogo, heartLogo } = useStaticQuery<{ bigLogo: FilePublicUrl; heartLogo: FilePublicUrl }>(graphql`
		query {
			heartLogo: file(relativePath: { eq: "ucare-heart.svg" }) {
				publicURL
			}
			bigLogo: file(relativePath: { eq: "ucare-logo.svg" }) {
				publicURL
			}
		}
	`);
	const navClassName = `nav-item ${!isTop && 'item-down'}`;
	const menuClassName = menuOpen ? 'hamburger-active' : 'hamburger-inactive';
	const menuButtonClassName = `text-center text-white hamburger ${menuClassName} ${!isTop && 'hamburger-below'}`;
	return (
		<nav
			className={`navbar navbar-expand-lg fixed-top text-center ${isTop || menuOpen ? 'navbar-trans' : 'bg-lights'}`}
			ref={forwardRef}
		>
			<div className='brand'>
				<div className={menuOpen ? 'hide-logo' : 'show-logo'}>
					<Link id='ucare-logo' to='/'>
						<img src={bigLogo.publicURL} alt='Logo' />
					</Link>
					<Link id='ucare-heart' to='/'>
						<img src={heartLogo.publicURL} alt='Logo' />
					</Link>
				</div>
			</div>
			<ul className='navbar-nav mx-auto d-none d-lg-flex d-xl-flex'>
				<li>
					<FeaturesLink className={navClassName} />
				</li>
				<li>
					<PricingLink className={navClassName} />
				</li>
				<li>
					<SupportLink className={navClassName} />
				</li>
				<li>
					<BlogLink className={navClassName} />
				</li>
				<li>
					<SignInLink className={navClassName} />
				</li>
			</ul>
			<TrialLink className={`btn trial-btn ${isTop || menuOpen ? 'trial-hide' : ''}`} />
			<button className={menuButtonClassName} onClick={onClick} type='button'>
				<div>
					<HamburgerMenu
						isOpen={menuOpen}
						menuClicked={onClick}
						width={24}
						height={12}
						strokeWidth={2}
						color={isTop ? '#fff' : '#000'}
					/>
				</div>
			</button>
			<div className={`sidebar ${menuOpen ? 'sidebar-active' : 'sidebar-inactive'}`}>
				<FeaturesLink className='sidebar-item' />
				<PricingLink className='sidebar-item' />
				<SupportLink className='sidebar-item' />
				<BlogLink className='sidebar-item' />
				<SignInLink className='sidebar-item' />
				<TrialLink className='sidebar-item trials-free-btn' />
			</div>
		</nav>
	);
};
export default Header;

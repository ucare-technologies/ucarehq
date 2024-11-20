// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';
import HamburgerMenu from 'react-hamburger-menu';

import ucareHeart from '../../content/assets/ucare-heart.svg';
import ucareLogo from '../../content/assets/ucare-logo.svg';
import { UpdatesLink, FeaturesLink, PricingLink, SignInLink, SupportLink, TrialLink } from './header-links';
import * as styles from './header.module.scss';

const Header: React.FC<{
	isTop: boolean;
	menuOpen: boolean;
	onClick: () => void;
	forwardRef: React.MutableRefObject<HTMLElement | null>;
}> = ({ isTop, menuOpen, onClick, forwardRef }) => {
	const navClassName = `${styles.navItem} ${!isTop ? styles.itemDown : ''}`;
	const menuClassName = menuOpen ? styles.hamburgerActive : styles.hamburgerInactive;
	const menuButtonClassName = `${styles.hamburger} ${menuClassName} ${!isTop ? styles.hamburgerBelow : ''}`;
	const topOrMenuOpen = isTop || menuOpen;
	const bgClassName = topOrMenuOpen ? styles.navbarTrans : styles.bgLights;
	return (
		<nav className={`navbar ${styles.navbar} navbar-expand-lg fixed-top text-center ${bgClassName}`} ref={forwardRef}>
			<div className={`${styles.brand} ${topOrMenuOpen ? '' : styles.hideBrand}`}>
				<div className={menuOpen ? styles.openMenu : ''}>
					<Link className={topOrMenuOpen ? styles.openLogo : styles.hideLogo} to='/'>
						<img src={ucareLogo} alt='UCare Logo' />
					</Link>
					<Link className={topOrMenuOpen ? styles.openHeart : styles.hideHeart} to='/'>
						<img src={ucareHeart} alt='UCare Logo' />
					</Link>
				</div>
			</div>
			<ul className={`navbar-nav mx-auto d-none d-lg-flex d-xl-flex`}>
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
					<UpdatesLink className={navClassName} />
				</li>
				<li>
					<SignInLink className={navClassName} />
				</li>
			</ul>
			<TrialLink className={`btn ${styles.trialBtn} ${isTop || menuOpen ? styles.trialHide : ''}`} />
			<button
				className={`text-center text-white ${menuButtonClassName}`}
				onClick={onClick}
				type='button'
				role='menu'
				area-label='Open Menu'
			>
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
			<div className={`${styles.sidebar} ${menuOpen ? styles.sidebarActive : styles.sidebarInactive}`}>
				<FeaturesLink className={styles.sidebarItem} />
				<PricingLink className={styles.sidebarItem} />
				<SupportLink className={styles.sidebarItem} />
				<UpdatesLink className={styles.sidebarItem} />
				<SignInLink className={styles.sidebarItem} />
				<TrialLink className={`${styles.sidebarItem} ${styles.trialsFreeBtn}`} />
			</div>
		</nav>
	);
};
export default Header;

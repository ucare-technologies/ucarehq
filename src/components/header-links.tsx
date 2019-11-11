/* eslint-disable no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';

interface LinkProps {
	className?: string;
}
const FeaturesLink: React.FC<LinkProps> = ({ className }) => (
	<Link to='/features' className={className}>
		Features
	</Link>
);
const SupportLink: React.FC<LinkProps> = ({ className }) => (
	<a href='https://help.ucareapp.com/hc/en-us' className={className}>
		Support
	</a>
);
const BlogLink: React.FC<LinkProps> = ({ className }) => (
	<Link to='/blog' className={className}>
		Blog
	</Link>
);
const SignInLink: React.FC<LinkProps> = ({ className }) => (
	<a href='https://connect.ucareapp.com/signin' className={className}>
		Sign In
	</a>
);
const TrialLink: React.FC<LinkProps> = ({ className }) => (
	<Link to='/sign-up' className={className}>
		Free 30-day trial
		<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
	</Link>
);
interface PricingLinkProps extends LinkProps {
	onClick?: () => void;
}
const PricingLink: React.FC<PricingLinkProps> = ({ className, onClick }) => {
	const location = typeof window !== 'undefined' ? window.location.pathname : null;
	return location === '/' ? (
		<ScrollLink
			href='#pricing'
			to='pricing'
			smooth
			spy
			hashSpy
			duration={500}
			className={className}
			activeClass='pricing-active-class'
			onClick={onClick}
		>
			Pricing
		</ScrollLink>
	) : (
		<Link to='/#pricing' className={className} onClick={onClick}>
			Pricing
		</Link>
	);
};
export { FeaturesLink, SupportLink, BlogLink, SignInLink, TrialLink, PricingLink };

/* eslint-disable no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

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
	<Link to='/pricing' className={className}>
		Free trial
		<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
	</Link>
);
const PricingLink: React.FC<LinkProps> = ({ className }) => (
	<Link to='/pricing' className={className}>
		Pricing
	</Link>
);
export { FeaturesLink, SupportLink, BlogLink, SignInLink, TrialLink, PricingLink };

// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';

import { ChevronRight } from './icons/chevron-right';

interface LinkProps {
	className?: string;
}
export const FeaturesLink: React.FC<LinkProps> = ({ className }) => (
	<Link to='/features' className={className}>
		Features
	</Link>
);
export const SupportLink: React.FC<LinkProps> = ({ className }) => (
	<a href='https://help.ucareapp.com/hc/en-us' className={className}>
		Support
	</a>
);
export const UpdatesLink: React.FC<LinkProps> = ({ className }) => (
	<a href='https://help.ucareapp.com/hc/en-us/categories/11296398536207-Updates' className={className}>
		Updates
	</a>
);
export const SignInLink: React.FC<LinkProps> = ({ className }) => (
	<a href='https://connect.ucareapp.com/signin' className={className}>
		Sign In
	</a>
);
export const TrialLink: React.FC<LinkProps> = ({ className }) => (
	<Link to='/pricing' className={className}>
		Free trial
		<ChevronRight className='ml-2' />
	</Link>
);
export const PricingLink: React.FC<LinkProps> = ({ className }) => (
	<Link to='/pricing' className={className}>
		Pricing
	</Link>
);

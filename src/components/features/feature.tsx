// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { Link } from 'gatsby';

const Feature: React.FC<{ to: string; label: string; className: string }> = ({ to, label, className, children }) => (
	<Link to={`/features/${to}/`} className='col-lg-4 col-md-6 feature-el'>
		<div className={`circle ${className}`}>{children}</div>
		<h3>{label}</h3>
	</Link>
);
export default Feature;

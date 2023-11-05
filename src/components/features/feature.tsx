// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';

import * as styles from './feature.module.scss';

export const Feature: React.FC<
	React.PropsWithChildren<{
		to: string;
		label: string;
		className: string;
	}>
> = ({ to, label, className, children }) => (
	<Link to={`/features/${to}/`} className={`col-lg-4 col-md-6 ${styles.feature}`}>
		<div className={`${styles.circle} ${className}-background`}>{children}</div>
		<h3>{label}</h3>
	</Link>
);

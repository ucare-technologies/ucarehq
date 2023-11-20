// eslint-disable-next-line no-use-before-define
import * as React from 'react';

type BadgeType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export const Badge: React.FC<React.PropsWithChildren<{ type?: BadgeType }>> = ({ children, type }) => (
	<span className={`badge badge-${type}`}>{children}</span>
);

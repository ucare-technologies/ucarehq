import * as React from 'react';

type BadgeType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
const Badge: React.FC<{ type?: BadgeType }> = ({ children, type }) => (
	<span className={`badge badge-${type}`}>{children}</span>
);
export default Badge;

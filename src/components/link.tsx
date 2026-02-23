import * as React from 'react';

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
	to: string;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, ...props }, ref) {
	return <a ref={ref} href={to} {...props} />;
});

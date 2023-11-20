import * as React from 'react';

import { Phone } from '../icons/phone';
import { useCalendly } from '../use-calendly';

export const BookCall: React.FC<{
	calendlyUrl: string;
	className: string;
}> = ({ calendlyUrl, className }) => {
	const { loaded, error, show } = useCalendly();
	const handleClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (error) {
			if (confirm('The "Book a call" tool failed, please try again after the page reloads')) {
				document.location.reload();
			}
		} else {
			!!calendlyUrl && show(calendlyUrl);
		}
	}, []);
	return !loaded && !error ? null : (
		<a href='#' onClick={handleClick} className={className} role='button'>
			Book a call{' '}
			<span className='ml-2'>
				<Phone className='flipX' />
			</span>
		</a>
	);
};

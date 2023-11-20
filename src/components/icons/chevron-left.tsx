import * as React from 'react';

export const ChevronLeft: React.FC<{ className?: string }> = ({ className }) => (
	<svg
		aria-hidden='true'
		focusable='false'
		data-prefix='fas'
		data-icon='chevron-left'
		className={`svg-inline--fa fa-chevron-left ${className}`}
		role='img'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 320 512'
	>
		<path
			fill='currentColor'
			d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z'
		></path>
	</svg>
);

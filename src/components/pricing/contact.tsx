import * as React from 'react';

import { BookCall } from './book-call';
import * as styles from './contact.module.scss';

export const Contact: React.FC<{
	title: string;
	description: string;
	calendlyUrl: string;
}> = ({ title, description, calendlyUrl }) => (
	<div className={`pb-4 text-center ${styles.contact}`}>
		<header>
			<h3 dangerouslySetInnerHTML={{ __html: title }} />
			<p dangerouslySetInnerHTML={{ __html: description }} />
		</header>
		<BookCall calendlyUrl={calendlyUrl} className='btn btn-outline-primary btn-lg' />
	</div>
);

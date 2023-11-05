import React from 'react';

import { useUCareEmbed } from '../use-ucare-embed';
import * as styles from './content.module.scss';

export const Content: React.FC<{ html: string }> = ({ html }) => {
	useUCareEmbed();
	return (
		<div className='container posts px-4 pb-5'>
			<div className={`pages post ${styles.content}`}>
				<div dangerouslySetInnerHTML={{ __html: html }} className='blog_description_wrapper' />
			</div>
		</div>
	);
};

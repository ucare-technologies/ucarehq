import React from 'react';

import { handleLinkClick } from '../../utils/handleLinkClick';
import { useUCareEmbed } from '../use-ucare-embed';
import * as styles from './content.module.scss';

export const Content: React.FC<{ html: string }> = ({ html }) => {
	useUCareEmbed();
	return (
		<div className='container px-4 pb-5'>
			<div className={`pages ${styles.content}`}>
				<div dangerouslySetInnerHTML={{ __html: html }} onClick={handleLinkClick} />
			</div>
		</div>
	);
};

import React from 'react';

import { handleLinkClick } from '../../utils/handleLinkClick';
import * as styles from './footer.module.scss';

export const Footer: React.FC<{ html: string }> = ({ html: descriptionHtml }) =>
	!descriptionHtml ? null : (
		<div className='container px-4 pb-5'>
			<div className={styles.footer}>
				<div dangerouslySetInnerHTML={{ __html: descriptionHtml }} onClick={handleLinkClick} />
			</div>
		</div>
	);

import * as React from 'react';

import { handleLinkClick } from '../../utils/handleLinkClick';
import { FadeIn } from '../fade-in';
import * as styles from './devices.module.scss';

export const DevicesContent: React.FC<{
	titleHtml: string;
	descriptionHtml: string;
}> = ({ titleHtml, descriptionHtml }) => (
	<div className={`col-lg-6 col-md-6 ${styles.wrapper}`}>
		<FadeIn fade='left'>
			<h2
				dangerouslySetInnerHTML={{
					__html: titleHtml.replace(/\n/g, '<br>'),
				}}
			/>

			<div dangerouslySetInnerHTML={{ __html: descriptionHtml }} onClick={handleLinkClick} />
		</FadeIn>
	</div>
);

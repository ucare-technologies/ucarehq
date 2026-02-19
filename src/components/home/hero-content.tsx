import * as React from 'react';

import { trimPTag } from '../../utils/trimTag';
import * as styles from './hero.module.scss';

export const HeroContent: React.FC<{
	titleHtml: string;
}> = ({ titleHtml }) => (
	<div className={styles.wrapper}>
		<div className={`${styles.title} text-center`}>
			<h1
				className={`${styles.header} text-white`}
				dangerouslySetInnerHTML={{
					__html: trimPTag(titleHtml).replace(/\n/g, '<br>'),
				}}
			/>
		</div>
	</div>
);

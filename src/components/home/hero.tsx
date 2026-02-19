// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { trimPTag } from '../../utils/trimTag';
import * as styles from './hero.module.scss';

export const Hero: React.FC<{
	backgroundImageUrl?: string;
	titleHtml: string;
}> = ({ backgroundImageUrl, titleHtml }) => (
		<>
			{!!backgroundImageUrl && <img src={backgroundImageUrl} alt='People using UCare' loading='eager' className={styles.hero} />}

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
		</>
);

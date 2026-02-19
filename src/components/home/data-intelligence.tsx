// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { handleLinkClick } from '../../utils/handleLinkClick';
import { FadeIn } from '../fade-in';
import * as styles from './data-intelligence.module.scss';

export const DataIntelligence: React.FC<{
	firstImageUrl?: string;
	titleHtml: string;
	descriptionHtml: string;
}> = ({ firstImageUrl, titleHtml, descriptionHtml }) => (
		<section className={`container-fluid ${styles.intelligence}`}>
			<div className='row'>
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
				<div className={`col-lg-6 col-md-6 ${styles.photo}`}>
					<FadeIn fade='right'>
						{!!firstImageUrl && (
							<img src={firstImageUrl} alt='Data Intelligence' loading='lazy' style={{ overflow: 'visible' }} />
						)}
					</FadeIn>
				</div>
			</div>
		</section>
);

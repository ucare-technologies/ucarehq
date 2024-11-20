// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import Scroll from 'react-scroll';

import { handleLinkClick } from '../utils/handleLinkClick';
import * as styles from './faq.module.scss';

export const FAQ: React.FC<{
	title: string;
	description?: string;
	cards: {
		title: string;
		descriptionHtml: string;
	}[];
}> = props => (
	<Scroll.Element type='div' name='faq'>
		<div className={`container-fluid text-center p-0 ${styles.faqContainer}`}>
			<div className={`container ${styles.container}`}>
				<div className={`row mx-auto ${styles.faq}`}>
					<div className='text-center'>
						<header className={`px-3 ${styles.faqTitle}`}>
							<h2>{props.title}</h2>
							{!!props.description && <p>{props.description}</p>}
						</header>
						<div className='row text-left mx-auto'>
							{(props.cards ?? [])?.map((item, index) =>
								!item ? null : (
									<div className='col-lg-4 py-2 px-3 d-inline' key={index}>
										<h4>{item.title}</h4>
										<div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} onClick={handleLinkClick} />
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	</Scroll.Element>
);

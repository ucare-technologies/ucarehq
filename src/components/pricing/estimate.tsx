// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import * as Scroll from 'react-scroll';

import { trimPTag } from '../../utils/trimTag';
import { Badge } from '../badge';
import * as styles from './estimate.module.scss';
import { PricingRange } from './range';

export const Estimate: React.FC<{
	titleHtml: string;
	value: number;
	onChange: (value: number) => void;
}> = ({ titleHtml, value, onChange }) => (
	<div className={`text-center ${styles.estimate}`}>
		<header>
			<h3 dangerouslySetInnerHTML={{ __html: trimPTag(titleHtml) }} />

			<p>
				* Recommended edition is based on{' '}
				<Badge type='primary'>
					{value.toLocaleString()}
					{value >= 2000 ? '+' : ''}
				</Badge>{' '}
				<Scroll.Link to='faq' href='#faq' smooth duration={500}>
					active profiles
				</Scroll.Link>{' '}
				(use the slider to adjust).
			</p>
		</header>
		<PricingRange value={value} onChange={onChange} />
	</div>
);

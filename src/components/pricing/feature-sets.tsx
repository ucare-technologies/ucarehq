// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { handleLinkClick } from '../../utils/handleLinkClick';
import { Check } from '../icons/check';
import { Remove } from '../icons/remove';
import * as styles from './feature-sets.module.scss';

export const FeatureSets: React.FC<{
	title: string;
	descriptionHtml: string;
	featureSets: {
		title: string;
		descriptionHtml: string;
		features: {
			description: string;
			essentialsText: string;
			essentialsCheck: boolean;
			growthText: string;
			growthCheck: boolean;
			lighthouseText: string;
			lighthouseCheck: boolean;
		}[];
	}[];
}> = props => (
	<div className={styles.featureSets} onClick={handleLinkClick}>
		<header className='text-center'>
			<h2>{props.title}</h2>
			<p dangerouslySetInnerHTML={{ __html: props.descriptionHtml }} />
		</header>

		{props.featureSets.map((item, index) => (
			<section key={index}>
				<details open>
					<summary>
						<h2>{item.title}</h2>
						<p dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
					</summary>

					<table>
						<thead>
							<tr>
								<th scope='col' className={styles.visuallyHidden}>
									Features
								</th>
								<th scope='col'>
									<span>Essentials</span>
								</th>
								<th scope='col'>
									<span>Growth</span>
								</th>
								<th scope='col'>
									<span>Lighthouse</span>
								</th>
							</tr>
						</thead>

						<tbody>
							{item.features.map((f, idx) => (
								<tr key={idx}>
									<th scope='row'>{f.description}</th>
									<td>
										<EditionFeature check={f.essentialsCheck} text={f.essentialsText} />
									</td>
									<td>
										<EditionFeature check={f.growthCheck} text={f.growthText} />
									</td>
									<td>
										<EditionFeature check={f.lighthouseCheck} text={f.lighthouseText} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</details>
			</section>
		))}
	</div>
);
const EditionFeature: React.FC<{ text: string; check: boolean }> = ({ text, check }) =>
	check ? (
		<>
			<Check className={styles.checkIcon} /> {text}
		</>
	) : text ? (
		text
	) : (
		<Remove className={styles.removeIcon} />
	);

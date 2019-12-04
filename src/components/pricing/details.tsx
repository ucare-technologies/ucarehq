import React from 'react';

import { features } from './features';

const PricingDetails: React.FC = () => {
	const featureSets = features();
	return (
		<div className='feature-sets'>
			<header>
				<h2>Edition details</h2>
				<p>Only pay for what you need.</p>
			</header>
			{featureSets.map(set => (
				<section key={set.name}>
					<details open>
						<summary>
							<h2>{set.name}</h2>
							<p>{set.description}</p>
						</summary>
						<table>
							<thead>
								<tr>
									<th scope='col' className='visually-hidden'>
										Features
									</th>
									<th scope='col' className='edition'>
										<span>Essentials</span>
									</th>
									<th scope='col' className='edition'>
										<span>Growth</span>
									</th>
									<th scope='col' className='edition'>
										<span>Lighthouse</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{set.features.map(f => (
									<tr key={f.name}>
										<th scope='row'>{f.name}</th>
										<td className='edition'>{f.essentials}</td>
										<td className='edition'>{f.growth}</td>
										<td className='edition'>{f.lighthouse}</td>
									</tr>
								))}
							</tbody>
						</table>
					</details>
				</section>
			))}
		</div>
	);
};
export default PricingDetails;

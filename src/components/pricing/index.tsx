import React from 'react';

import Details from './details';
import EditionSelect from './editions';

export default function Pricing() {
	return (
		<div id='pricing' className='price-calc'>
			<EditionSelect />
			<Details />
		</div>
	);
}

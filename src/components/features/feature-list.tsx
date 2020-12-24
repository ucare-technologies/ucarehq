// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import FadeIn from '../fade-in';

const FeatureList: React.FC = ({ children }) => (
	<div className='feature-list'>
		<FadeIn className='row' fade='up'>
			{children}
		</FadeIn>
	</div>
);
export default FeatureList;

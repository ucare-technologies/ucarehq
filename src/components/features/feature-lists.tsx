import React from 'react';

import FadeIn from '../fade-in';

const FeatureLists: React.FC = ({ children }) => (
	<div className='feature-list'>
		<FadeIn className='row' fade='up'>
			{children}
		</FadeIn>
	</div>
);
export default FeatureLists;

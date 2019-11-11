import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import FadeIn from '../fade-in';
import FeatureLists from '../features/feature-lists';
import FeatureList1 from '../features/feature-list1';

export default function Features() {
	const { file } = useStaticQuery(graphql`
		query FeaturesQuery {
			file(relativePath: { eq: "favicon.png" }) {
				publicURL
			}
		}
	`);
	return (
		<div className='container-fluid features'>
			<div className='container p-0 text-center'>
				<FadeIn fade='up'>
					<h2 className='features-title text-center'>
						Features you will
						<img src={file.publicURL} alt='features you will love' className='ml-2' />
					</h2>
				</FadeIn>
				<FeatureLists>
					<FeatureList1 />
				</FeatureLists>
				<FadeIn className='explore-more' fade='up'>
					<a href='/features' className='explore-more-btn'>
						Explore More Features
						<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
					</a>
				</FadeIn>
			</div>
		</div>
	);
}

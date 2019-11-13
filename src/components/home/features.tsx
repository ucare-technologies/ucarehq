import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import FadeIn from '../fade-in';
import FixedImage, { FixedImageProps } from '../fixed-image';
import FeatureList from '../features/feature-list';
import {
	AttendanceFeature,
	CheckInFeature,
	EventsFeature,
	GroupsFeature,
	ProcessesFeature,
	GivingFeature,
} from '../features/features';

export default function Features() {
	const { file } = useStaticQuery<{ file: FixedImageProps }>(graphql`
		query FeaturesQuery {
			file(relativePath: { eq: "favicon.png" }) {
				childImageSharp {
					fixed(width: 60) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
		}
	`);
	return (
		<div className='container-fluid features'>
			<div className='container p-0 text-center'>
				<FadeIn fade='up'>
					<h2 className='features-title text-center'>
						Features you will
						<FixedImage alt='features you will love' image={file} />
					</h2>
				</FadeIn>
				<FeatureList>
					<AttendanceFeature />
					<CheckInFeature />
					<EventsFeature />
					<GroupsFeature />
					<ProcessesFeature />
					<GivingFeature />
				</FeatureList>
				<FadeIn className='explore-more' fade='up'>
					<Link to='/features' className='explore-more-btn'>
						Explore More Features
						<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
					</Link>
				</FadeIn>
			</div>
		</div>
	);
}

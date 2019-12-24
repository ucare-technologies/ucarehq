import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FilePublicUrl } from '../../types';
import FadeIn from '../fade-in';
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
	const { heartLogo } = useStaticQuery<{ heartLogo: FilePublicUrl }>(graphql`
		query FeaturesQuery {
			heartLogo: file(relativePath: { eq: "ucare-heart2.svg" }) {
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
						<img src={heartLogo.publicURL} alt='Logo' />
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

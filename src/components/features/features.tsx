import React from 'react';

import AttendanceIcon from '../icons/attendance';
import ChildIcon from '../icons/child';
import EventBooking from '../icons/eventbooking';
import Group from '../icons/groups';
import Process from '../icons/process';
import Giving from '../icons/giving';
import SurveysIcons from '../icons/surveys';
import OnlineStoresIcons from '../icons/onlinestores';
import DashboardsIcons from '../icons/dashboards';
import SchedulingIcons from '../icons/scheduling';
import PeopleIcons from '../icons/people';
import SecurityIcons from '../icons/security';

import Feature from './feature';

const AttendanceFeature: React.FC = () => (
	<Feature to='attendance-tracking' className='attendance' label='Attendance Tracking'>
		<AttendanceIcon />
	</Feature>
);
const CheckInFeature: React.FC = () => (
	<Feature to='check-in-child-safety' className='child' label='Check-in &amp; Child Safety'>
		<ChildIcon />
	</Feature>
);
const EventsFeature: React.FC = () => (
	<Feature to='event-ticket-booking' className='event-booking' label='Event Bookings'>
		<EventBooking />
	</Feature>
);
const GroupsFeature: React.FC = () => (
	<Feature to='groups' className='groups' label='Groups'>
		<Group />
	</Feature>
);
const ProcessesFeature: React.FC = () => (
	<Feature to='processes-automation' className='process' label='Processes &amp; Automation'>
		<Process />
	</Feature>
);
const FormsFeature: React.FC = () => (
	<Feature to='forms-and-surveys' className='surveys' label='Forms &amp; Surveys'>
		<SurveysIcons />
	</Feature>
);
const StoresFeature: React.FC = () => (
	<Feature to='online-stores' className='online-stores' label='Online Stores &amp; POS'>
		<OnlineStoresIcons />
	</Feature>
);
const GivingFeature: React.FC = () => (
	<Feature to='giving-finances' className='giving' label='Giving &amp; Finances'>
		<Giving />
	</Feature>
);
const DashboardsFeature: React.FC = () => (
	<Feature to='dashboards' className='dashboards' label='Dashboards'>
		<DashboardsIcons />
	</Feature>
);
const SchedulingFeature: React.FC = () => (
	<Feature to='scheduling-reservations' className='scheduling' label='Scheduling &amp; Reservations'>
		<SchedulingIcons />
	</Feature>
);
const PeopleFeature: React.FC = () => (
	<Feature to='people' className='people' label='People'>
		<PeopleIcons />
	</Feature>
);
const SecurityFeature: React.FC = () => (
	<Feature to='security' className='security' label='Security'>
		<SecurityIcons />
	</Feature>
);
const AllFeatures: React.FC = () => (
	<>
		<AttendanceFeature />
		<CheckInFeature />
		<EventsFeature />
		<GroupsFeature />
		<ProcessesFeature />
		<FormsFeature />
		<StoresFeature />
		<GivingFeature />
		<DashboardsFeature />
		<SchedulingFeature />
		<PeopleFeature />
		<SecurityFeature />
	</>
);
export default AllFeatures;
export {
	AttendanceFeature,
	CheckInFeature,
	EventsFeature,
	GroupsFeature,
	ProcessesFeature,
	FormsFeature,
	StoresFeature,
	GivingFeature,
	DashboardsFeature,
	SchedulingFeature,
	PeopleFeature,
	SecurityFeature,
};

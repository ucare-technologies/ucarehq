import React from 'react';
import { Link } from 'gatsby';

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

const FeatureList2: React.FC = () => (
	<>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/attendance-tracking/'>
				<div className='circle attendance'>
					<AttendanceIcon />
				</div>
			</Link>
			<h3>Attendance Tracking</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/check-in-child-safety/'>
				<div className='circle child'>
					<ChildIcon />
				</div>
			</Link>
			<h3>Check-in &amp; Child Safety</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/event-ticket-booking/'>
				<div className='circle event-booking'>
					<EventBooking />
				</div>
			</Link>
			<h3>Event Bookings</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/groups/'>
				<div className='circle groups'>
					<Group />
				</div>
			</Link>
			<h3>Groups</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/processes-automation/'>
				<div className='circle process'>
					<Process />
				</div>
			</Link>
			<h3>Processes &amp; Automation</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/forms-and-surveys/'>
				<div className='circle surveys'>
					<SurveysIcons />
				</div>
			</Link>
			<h3>Forms &amp; Surveys</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/online-stores/'>
				<div className='circle online-stores'>
					<OnlineStoresIcons />
				</div>
			</Link>
			<h3>Online Stores &amp; POS</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/giving-finances/'>
				<div className='circle giving'>
					<Giving />
				</div>
			</Link>
			<h3>Giving &amp; Finances</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/dashboards/'>
				<div className='circle dashboards'>
					<DashboardsIcons />
				</div>
			</Link>
			<h3>Dashboards</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/scheduling-reservations/'>
				<div className='circle scheduling'>
					<SchedulingIcons />
				</div>
			</Link>
			<h3>Scheduling &amp; Reservations</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/people/'>
				<div className='circle people'>
					<PeopleIcons />
				</div>
			</Link>
			<h3>People</h3>
		</div>
		<div className='col-lg-4 col-md-6 feature-el'>
			<Link to='/features/security/'>
				<div className='circle security'>
					<SecurityIcons />
				</div>
			</Link>
			<h3>Security</h3>
		</div>
	</>
);
export default FeatureList2;

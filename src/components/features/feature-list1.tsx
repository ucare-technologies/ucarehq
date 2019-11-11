import React from 'react';
import { Link } from 'gatsby';

import AttendanceIcon from '../icons/attendance';
import ChildIcon from '../icons/child';
import EventBooking from '../icons/eventbooking';
import Group from '../icons/groups';
import Process from '../icons/process';
import Giving from '../icons/giving';

const FeatureList1: React.FC = () => (
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
			<Link to='/features/giving-finances/'>
				<div className='circle giving'>
					<Giving />
				</div>
			</Link>
			<h3>Giving &amp; Finances</h3>
		</div>
	</>
);
export default FeatureList1;

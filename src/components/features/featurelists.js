import React from 'react';
import AttendanceIcon from '../Icons/attendance';
import ChildIcon from '../Icons/child';
import EventBooking from '../Icons/eventbooking';
import Group from '../Icons/groups';
import Process from '../Icons/process';
import Giving from '../Icons/giving';
import SurveysIcons from '../Icons/surveys';

const FeatureList = (props) => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <div className="circle attendance">
          <a href="/features/attendance-tracking/">
            <AttendanceIcon />
          </a>
        </div>
        <h6>Attendance Tracking</h6>
      </div>
      <div className="col-md-4">
        <div className="circle child">
          <a href="/features/check-in-child-safety/">
            <ChildIcon />
          </a>
        </div>
        <h6>Check-in & Child Safety</h6>
      </div>
      <div className="col-md-4">
        <div className="circle event-booking">
          <a href="/features/event-ticket-booking/">
            <EventBooking />
          </a>
        </div>
        <h6>Event Bookings</h6>
      </div>
    </div>
    <div className="row my-4">
      <div className="col-md-4">
        <div className="circle groups">
          <a href="/features/groups/">
            <Group />
          </a>
        </div>
        <h6>Groups</h6>
      </div>
      <div className="col-md-4">
        <div className="circle process">
          <a href="/features/processes-automation/">
            <Process />
          </a>
        </div>
        <h6>Process & Automation</h6>
      </div>
      <div className="col-md-4">
        <div className={`circle ${props.location === 'root' ? 'giving': 'surveys'}`}>
          {
            props.location === `root`
            ? <a href="/features/giving-finances/">
                <Giving />
              </a>
            : <a href="/features/forms-and-surveys/">
                <SurveysIcons />
              </a>
          }
        </div>
        <h6>
          {
            props.location === `root` 
              ? 'Giving & Finances'
              : 'Forms & Surveys'
          }
          </h6>
      </div>
    </div>
  </div>
)

export default FeatureList;
import React from 'react';
import AttendanceIcon from '../Icons/attendance';
import ChildIcon from '../Icons/child';
import EventBooking from '../Icons/eventbooking';
import Group from '../Icons/groups';
import Process from '../Icons/process';
import Giving from '../Icons/giving';

const FeatureList = () => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <div className="circle attendance">
          <a href="/feature/attendance-tracking/">
            <AttendanceIcon />
          </a>
        </div>
        <h6>Attendance Tracking</h6>
      </div>
      <div className="col-md-4">
        <div className="circle child">
          <a href="/feature/check-in-child-safety/">
            <ChildIcon />
          </a>
        </div>
        <h6>Check-in & Child Safety</h6>
      </div>
      <div className="col-md-4">
        <div className="circle event-booking">
          <a href="/feature/event-ticket-booking/">
            <EventBooking />
          </a>
        </div>
        <h6>Event Bookings</h6>
      </div>
    </div>
    <div className="row my-4">
      <div className="col-md-4">
        <div className="circle groups">
          <a href="/feature/groups/">
            <Group />
          </a>
        </div>
        <h6>Groups</h6>
      </div>
      <div className="col-md-4">
        <div className="circle process">
          <a href="/feature/processes-automation/">
            <Process />
          </a>
        </div>
        <h6>Process & Automation</h6>
      </div>
      <div className="col-md-4">
        <div className="circle giving">
          <a href="/feature/giving-finances/">
            <Giving />
          </a>
        </div>
        <h6>Giving & Finances</h6>
      </div>
    </div>
  </div>
)

export default FeatureList;
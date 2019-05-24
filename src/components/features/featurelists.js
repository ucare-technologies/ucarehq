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
        <div className="circle">
          <a href="/attendance-tracking/">
            <AttendanceIcon />
          </a>
        </div>
        <h6>Attendance Tracking</h6>
      </div>
      <div className="col-md-4">
        <div className="circle">
          <a href="/check-in-child-safety/">
            <ChildIcon />
          </a>
        </div>
        <h6>Child-in & Child Safety</h6>
      </div>
      <div className="col-md-4">
        <div className="circle">
          <a href="/event-ticket-booking/">
            <EventBooking />
          </a>
        </div>
        <h6>Event Bookings</h6>
      </div>
    </div>
    <div className="row my-4">
      <div className="col-md-4">
        <div className="circle">
          <a href="/groups/">
            <Group />
          </a>
        </div>
        <h6>Groups</h6>
      </div>
      <div className="col-md-4">
        <div className="circle">
          <a href="/processes-automation/">
            <Process />
          </a>
        </div>
        <h6>Process & Automation</h6>
      </div>
      <div className="col-md-4">
        <div className="circle">
          <a href="/giving-finances/">
            <Giving />
          </a>
        </div>
        <h6>Giving & Finances</h6>
      </div>
    </div>
  </div>
)

export default FeatureList;
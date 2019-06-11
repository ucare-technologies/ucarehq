import React from 'react';

import OnlinestoresIcons from '../Icons/onlinestores';
import DashboardsIcons from '../Icons/dashboards';
import SchedulingIcons from '../Icons/scheduling';
import PeopleIcons from '../Icons/people';
import SecurityIcons from '../Icons/security';
import Giving from '../Icons/giving';

const FeatureList2 = (props) => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <div className="circle online-stores">
          <a href="/features/online-stores/">
            <OnlinestoresIcons />
          </a>
        </div>
        <h6>Online Stores & POS</h6>
      </div>
      <div className="col-md-4">
        <div className="circle giving">
          <a href="/features/giving-finances/">
            <Giving />
          </a>
        </div>
        <h6>Giving & Finances</h6>
      </div>
      <div className="col-md-4">
        <div className="circle dashboards">
          <a href="/features/dashboards/">
            <DashboardsIcons />
          </a>
        </div>
        <h6>Dashboards</h6>
      </div>
    </div>
    <div className="row my-4">
      <div className="col-md-4">
        <div className="circle scheduling">
          <a href="/features/scheduling-reservations/">
            <SchedulingIcons />
          </a>
        </div>
        <h6>Scheduling & Reservations</h6>
      </div>
      <div className="col-md-4">
        <div className="circle people">
          <a href="/features/people/">
            <PeopleIcons />
          </a>
        </div>
        <h6>People</h6>
      </div>
      <div className="col-md-4">
        <div className="circle security">
          <a href="/features/security/">
            <SecurityIcons />
          </a>
        </div>
        <h6>Security</h6>
      </div>
    </div>
  </div>
)
export default FeatureList2;
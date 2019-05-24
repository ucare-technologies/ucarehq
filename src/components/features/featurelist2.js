import React from 'react';

import SurveysIcons from '../Icons/surveys';
import OnlinestoresIcons from '../Icons/onlinestores';
import DashboardsIcons from '../Icons/dashboards';
import SchedulingIcons from '../Icons/scheduling';
import PeopleIcons from '../Icons/people';
import SecurityIcons from '../Icons/security';

const FeatureList2 = () => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <div className="circle surveys">
          <a href="/forms-and-surveys/">
            <SurveysIcons />
          </a>
        </div>
        <h6>Forms & Surveys</h6>
      </div>
      <div className="col-md-4">
        <div className="circle online-stores">
          <a href="/online-stores/">
            <OnlinestoresIcons />
          </a>
        </div>
        <h6>Online Stores & POS</h6>
      </div>
      <div className="col-md-4">
        <div className="circle dashboards">
          <a href="/dashboards/">
            <DashboardsIcons />
          </a>
        </div>
        <h6>Dashboards</h6>
      </div>
    </div>
    <div className="row my-4">
      <div className="col-md-4">
        <div className="circle scheduing">
          <a href="/scheduling-reservations/">
            <SchedulingIcons />
          </a>
        </div>
        <h6>Scheduling & Reservations</h6>
      </div>
      <div className="col-md-4">
        <div className="circle people">
          <a href="/people/">
            <PeopleIcons />
          </a>
        </div>
        <h6>People</h6>
      </div>
      <div className="col-md-4">
        <div className="circle security">
          <a href="/security/">
            <SecurityIcons />
          </a>
        </div>
        <h6>Security</h6>
      </div>
    </div>
  </div>
)
export default FeatureList2;
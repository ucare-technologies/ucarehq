import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';

import AttendanceIcon from '../Icons/attendance';
import ChildIcon from '../Icons/child';
import EventBooking from '../Icons/eventbooking';
import Group from '../Icons/groups';
import Process from '../Icons/process';
import Giving from '../Icons/giving';
import SurveysIcons from '../Icons/surveys';

class FeatureList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstLineView: false,
      secondLineView: false,
    }
    this.handleFirstLineView = this.handleFirstLineView.bind(this);
    this.handleSecondLineView = this.handleSecondLineView.bind(this);
  }
  handleFirstLineView(inView) {
    this.setState({ firstLineView: inView });
  }
  handleSecondLineView(inView) {
    this.setState({ secondLineView: inView });
  }
  render() { 
    return ( 
      <div className="featurelist1">
        <InView as="div" triggerOnce onChange={inView => this.handleFirstLineView(inView)}>
          <div className={`row row-up ${this.state.firstLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <div className="circle attendance">
                <a href="/features/attendance-tracking/">
                  <AttendanceIcon />
                </a>
              </div>
              <h6>Attendance Tracking</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className="circle child">
                <a href="/features/check-in-child-safety/">
                  <ChildIcon />
                </a>
              </div>
              <h6>Check-in & Child Safety</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className="circle event-booking">
                <a href="/features/event-ticket-booking/">
                  <EventBooking />
                </a>
              </div>
              <h6>Event Bookings</h6>
            </div>
          </div>
        </InView>
        <InView as="div" triggerOnce onChange={inView => this.handleSecondLineView(inView)}>
          <div className={`row row-down ${this.state.secondLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <div className="circle groups">
                <a href="/features/groups/">
                  <Group />
                </a>
              </div>
              <h6>Groups</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className="circle process">
                <a href="/features/processes-automation/">
                  <Process />
                </a>
              </div>
              <h6>Process & Automation</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className={`circle ${this.props.location === 'root' ? 'giving': 'surveys'}`}>
                {
                  this.props.location === `root`
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
                  this.props.location === `root` 
                    ? 'Giving & Finances'
                    : 'Forms & Surveys'
                }
                </h6>
            </div>
          </div>
        </InView>
      </div>
    );
  }
}
 
export default FeatureList;
import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';

import OnlinestoresIcons from '../Icons/onlinestores';
import DashboardsIcons from '../Icons/dashboards';
import SchedulingIcons from '../Icons/scheduling';
import PeopleIcons from '../Icons/people';
import SecurityIcons from '../Icons/security';
import Giving from '../Icons/giving';

class FeatureList2 extends Component {
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
      <div className="featurelist2">
        <InView as="div" triggerOnce onChange={inView => this.handleFirstLineView(inView)}>
          <div className={`row up ${this.state.firstLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <div className="circle online-stores">
                <a href="/features/online-stores/">
                  <OnlinestoresIcons />
                </a>
              </div>
              <h6>Online Stores & POS</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className="circle giving">
                <a href="/features/giving-finances/">
                  <Giving />
                </a>
              </div>
              <h6>Giving & Finances</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className="circle dashboards">
                <a href="/features/dashboards/">
                  <DashboardsIcons />
                </a>
              </div>
              <h6>Dashboards</h6>
            </div>
          </div>
        </InView>
        <InView as="div" triggerOnce onChange={inView => this.handleSecondLineView(inView)}>
          <div className={`row down ${this.state.secondLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <div className="circle scheduling">
                <a href="/features/scheduling-reservations/">
                  <SchedulingIcons />
                </a>
              </div>
              <h6>Scheduling & Reservations</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className="circle people">
                <a href="/features/people/">
                  <PeopleIcons />
                </a>
              </div>
              <h6>People</h6>
            </div>
            <div className="col-md-4 feature-el">
              <div className="circle security">
                <a href="/features/security/">
                  <SecurityIcons />
                </a>
              </div>
              <h6>Security</h6>
            </div>
          </div>
        </InView>
      </div>
    );
  }
}
 
export default FeatureList2;
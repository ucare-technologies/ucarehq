import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { InView } from 'react-intersection-observer';

class ChurchManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      navOpen: false,
      view: false,
    }
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleView = this.handleView.bind(this);
  }
  handleSidebar() {
    this.setState({ navOpen: !this.state.navOpen });
  }
  handleView(inView) {
    this.setState({
      view: inView
    })
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
            query {
              home: file(relativePath: { eq: "page/home/hero.jpg" }) {
                publicURL
              }
            }
        ` }
        render={ data => {
          return (
            <InView as="section" triggerOnce onChange={inView => this.handleView(inView)}>
              <section
                className="church-manage justify-content-center"
                style={ {
                  background: `url(${data.home.publicURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } }
              >
                <div className={`church-manage-title text-white text-center ${this.state.view ? `fade-in-up`: `fade-in-hidden`}`}>
                  <h1><em>church management.</em><strong>&nbsp;simplified.</strong></h1>
                </div>
              </section>
            </InView>
          )
        }}
      />
     );
  }
}
 
export default ChurchManagement;
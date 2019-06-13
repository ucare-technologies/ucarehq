import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

class ChurchManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      navOpen: false,
    }
    this.handleSidebar = this.handleSidebar.bind(this);
  }
  handleSidebar() {
    this.setState({ navOpen: !this.state.navOpen });
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
            <section
              className="church-manage justify-content-center"
              style={ {
                background: `url(${data.home.publicURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } }
            >
              <div className="church-manage-title text-white text-center">
                <h1><em>church management.</em><strong>&nbsp;simplified.</strong></h1>
              </div>
            </section>
          )
        }}
      />
     );
  }
}
 
export default ChurchManagement;
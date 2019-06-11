import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

class ChurchManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      navOpen: false,
    }
    this.handleCloseNav = this.handleCloseNav.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
  }
  handleCloseNav() {

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
                childImageSharp {
                  fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
        ` }
        render={ data => {
          const imageData = data.home.childImageSharp.fluid;
          return (
            <BackgroundImage
              Tag="section"
              className="churchmanagement"
              fluid={ imageData }
              backgroundColor={ `#ffffff` }
            >
              <section className="church-manage justify-content-center">
                <div className="text-center church-manage-title">
                  <h1>
                    church Management&nbsp;<strong>simplified</strong>
                  </h1>
                </div>
              </section>
            </BackgroundImage>
          )
        }}
      />
     );
  }
}
 
export default ChurchManagement;
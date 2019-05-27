import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ChurchManagement = ({className}) => (
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
          className={ className }
          fluid={ imageData }
          backgroundColor={ `#ffffff` }
        >
          <section className="church-manage">
            <div className="container">
              <div className="row text-center">
                <h1 className="church-title">
                
                </h1>
              </div>
            </div>
          </section>
        </BackgroundImage>
      )
    }}
  />
)

export default ChurchManagement
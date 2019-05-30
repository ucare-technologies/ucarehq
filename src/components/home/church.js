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
          <section className="church-manage justify-content-center">
            <div className="text-center church-manage-title">
              <h1>
                Church Management software.<strong>simplified</strong>
              </h1>
            </div>
          </section>
        </BackgroundImage>
      )
    }}
  />
)

export default ChurchManagement
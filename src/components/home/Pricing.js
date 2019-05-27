import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const Pricing = ({className}) => (
  <StaticQuery
    query={ graphql`
      query {
        pricing: file(relativePath: { eq: "page/home/pricing.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={ data => {
      const imageData = data.pricing.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={ imageData }
          backgroundColor={ `#ffffff` }
        >
          <div className="container-fluid pricing">
            <div className="row">
              <div className="col-md-4 offset-md-6 price-calc">
                <h5>Prices start at $10/month & no long-term contracts.</h5>
                <p>
                  The monthly costs for UCare are just 10c per person, so for example if your church has 500 people regularly attending then UCare will cost only $50 each month.
                  <a href="/sign-up/">FAQ</a>
                </p>
                <p>If you have <span>920</span> people in your church</p>
                <small>
                  Adjust the slider to represent the number of people regularly attending your church
                </small>
                <h5>
                  Your cost would be <span>$92/month</span>
                </h5>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }
    }
  />
)
const StyledPricingSection = styled(Pricing)`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
`

export default StyledPricingSection;
import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Element } from 'react-scroll';

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeMin: 100,
      rangeMax: 2001,
      monthlyCost: 10,
      rangeSlider: 0,
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
  }
  handleRangeChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() { 
    const { rangeMax, rangeMin, monthlyCost, rangeSlider } = this.state;
    return ( 
      <StaticQuery
        query={ graphql`
          query {
            pricing: file(relativePath: { eq: "page/home/pricing.jpg" }) {
              publicURL
            }
          }
        `}
        render={ data => {
          return (
            <React.Fragment>
              <Element id="pricing" name="pricing">
                <div className="container-fluid pricing" style={ {
                  background: `url(${data.pricing.publicURL})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s'
                } }>
                  <div className="row" id="pricing">
                    <div className="col-md-5 offset-md-1">
                      <div className="only-pay">
                        <h2 className="text-white">
                          only pay for 
                            <br></br>
                          what you need.
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-4 price-calc">
                      <h5>Prices start at $10/month & no long-term contracts.</h5>
                      <p>
                        The monthly costs for UCare are just 10c per person, so for example if your church has 500 people regularly attending then UCare will cost only $50 each month.
                        <a href="/sign-up/">FAQ</a>
                      </p>
                      <p>If you have <span>{ rangeSlider > 2000 ? '2000+': rangeSlider }</span> people in your church</p>
                      <div>
                        <input
                          type="range"
                          className="slider"
                          min={ rangeMin }
                          max={ rangeMax }
                          value={ rangeSlider }
                          name="rangeSlider"
                          onChange={this.handleRangeChange}
                        />
                      </div>
                      <small>
                        Adjust the slider to represent the number of people regularly attending your church
                      </small>
                      <h5>
                          <output>
                            {
                              rangeSlider / 10 > 200 ?
                                <output dangerouslySetInnerHTML={{__html: `Please contact <a href=\"support@ucarehq.com\" /> support@ucarehq.com</a> for information about our volume discounts.`}}></output>
                              :
                              `Your cost would be $${rangeSlider / 10}/month`
                            }
                          </output>
                      </h5>
                    </div>
                  </div>
                </div>
              </Element>
            </React.Fragment>
          )
          }
        }
      />
     );
  }
}
 
const StyledPricingSection = styled(Pricing)`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
`

export default StyledPricingSection;
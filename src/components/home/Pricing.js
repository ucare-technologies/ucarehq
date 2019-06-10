import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Range, getTrackBackground } from "react-range";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeMin: 100,
      rangeMax: 2001,
      monthlyCost: 10,
      rangeSlider: 0,
      values: [0],
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
                    <div className="col-md-5  col-sm-12 price-calc">
                      <h5>Prices start at $10/month & no long-term contracts.</h5>
                      <p>
                        The monthly costs for UCare are just 10c per person, so for example if your church has 500 people regularly attending then UCare will cost only $50 each month.&nbsp;
                        <a href="/sign-up/" className="faq">(FAQ)</a>
                      </p>
                      <p>If you have <span>{ this.state.values[0] > 2000 ? '2000+': this.state.values[0] }</span> people in your church</p>
                      <div>
                      <div
                        className="pricing-range-bar"
                      >
                        <Range
                          values={this.state.values}
                          step={10}
                          min={0}
                          max={2001}
                          onChange={values => this.setState({ values })}
                          renderTrack={({ props, children }) => (
                            <div
                              onMouseDown={props.onMouseDown}
                              onTouchStart={props.onTouchStart}
                              style={{
                                ...props.style,
                              } }
                              className="pricing-range-slider"
                            >
                              <div
                                ref={props.ref}
                                style={{
                                  height: "20px",
                                  width: "100%",
                                  borderRadius: "10px",
                                  paddingBottom: "20px",
                                  background: getTrackBackground({
                                    values: this.state.values,
                                    colors: ["#e10332", "rgba(50,58,70,.08)"],
                                    min: 0,
                                    max: 2001
                                  }),
                                } }
                                className="range-background"
                              >
                                {children}
                              </div>
                            </div>
                          )}
                          renderThumb={({ props, isDragged }) => (
                            <div
                              { ...props }
                              className="range-thumb"
                              style={{
                                ...props.style,
                                height: "42px",
                                width: "42px",
                                border: '1px solid #ccc',
                                borderRadius: "20px",
                                backgroundSize: '100%',
                                background: '#fff',
                                backgroundImage: isDragged
                                  ? "linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.12))"
                                  : "linear-gradient(hsla(0,0%,100%,0),rgba(0,0,0,.1))",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: '0 0 5px rgba(0,0,0,.2)',
                                cursor: "pointer",
                                touchAction: 'pan-y',
                                outline: 'none',
                              }}
                            >
                              <div
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  borderRadius: "10px",
                                  background: "linear-gradient(rgba(0,0,0,.13),hsla(0,0%,100%,0))",
                                }}
                              />
                            </div>
                          )}
                          />
                          <div style={ {
                            paddingTop: '20px',
                            paddingBottom: '20px',
                          }}>
                            <small>
                              Adjust the slider to represent the number of people regularly attending your church
                            </small>
                          </div>
                       
                      </div>
                    </div>
                      <h5>
                          <output>
                            {
                              this.state.values[0] / 10 > 200 ?
                              <output
                                dangerouslySetInnerHTML={ { __html: `Please contact <a href=\"support@ucarehq.com\" /> support@ucarehq.com</a> for information about our volume discounts.` } }
                                className="pricing-total"
                              >
                              </output>
                              :
                              <output>
                                Your cost would be
                                <span>{ `$${this.state.values[0] / 10} / month` }</span>
                                
                              </output>
                            }
                          </output>
                      </h5>
                      <h3>&nbsp;</h3>
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
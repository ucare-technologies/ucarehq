import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => (
  <StaticQuery
    query={ graphql`
      query Testnomial {
        bgImg: file(relativePath: { eq: "testimonials-bg.jpg" }) {
          publicURL
        }
        ourchurch: file(relativePath: { eq: "ourchurch.png" }) {
          publicURL
        }
        rcbc: file(relativePath: { eq: "rcbc.png" }) {
          publicURL
        }
        flc: file(relativePath: { eq: "flc.png" }) {
          publicURL
        }
      }
    `}
    render={ data => {
      const {
        bgImg,
        ourchurch,
        rcbc,
        flc,
      } = data;
      return (
        <section className="container-fluid p-0 testinomial" style={ {
          background: `url(${bgImg.publicURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          boxSizing: 'border-box',
          width: '100%',
          height: '500px'
        } }>
          <div className="container text-center">
            <h3>Church we work with</h3>
          </div>
          <div className="row m-0">
            <div className="container text-center my-5 slick-panel">
              <Slider
                dots={ true }
                infinite={ true }
                speed={ 100 }
                slidesToShow={ 3 }
                slidesToScroll={ 1 }
                autoplay={ true }
                centerMode={ true }
                responsive={ [
                  { breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]}
              >
                  <img src={ ourchurch.publicURL } className="w-50" alt="ourchurch" />
                  <img src={ rcbc.publicURL } className="w-50" alt="ourchurch" />
                  <img src={ flc.publicURL } className="w-50" alt="ourchurch" />
                  <img src={ ourchurch.publicURL } className="w-50" alt="ourchurch" />
                  <img src={ rcbc.publicURL } className="w-50" alt="ourchurch" />
                  <img src={ flc.publicURL } className="w-50" alt="ourchurch" />
              </Slider>
            </div>
          </div>
        </section>  
      )
    }}
  />
)

export default Testimonials;
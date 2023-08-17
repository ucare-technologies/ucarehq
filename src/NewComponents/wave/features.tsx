// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Img, { FluidObject } from 'gatsby-image'

// import { FluidImageSrc, FixedImageSrc } from '../../types'
import FadeIn from '../fade-in'
import FixedImage from '../fixed-image'

import WaveLogo from './wavetech'
import WaveHeart from './waveheart-white'
import WaveSection from './wave-section'

export default function Features(data: any) {
  //   const { planner, analytics, checkIn, automation, security, forms } =
  //     useStaticQuery<{
  //       planner: FixedImageSrc
  //       analytics: FixedImageSrc
  //       checkIn: FixedImageSrc
  //       automation: FluidImageSrc
  //       security: FluidImageSrc
  //       forms: FluidImageSrc
  //     }>(graphql`
  //       query {
  //         planner: file(relativePath: { eq: "wave/planner.png" }) {
  //           childImageSharp {
  //             fixed(width: 1280, quality: 100) {
  //               ...GatsbyImageSharpFixed_withWebp
  //             }
  //           }
  //         }
  //         analytics: file(relativePath: { eq: "wave/analytics.png" }) {
  //           childImageSharp {
  //             fixed(width: 1280, quality: 100) {
  //               ...GatsbyImageSharpFixed_withWebp
  //             }
  //           }
  //         }
  //         checkIn: file(relativePath: { eq: "wave/check-in.png" }) {
  //           childImageSharp {
  //             fixed(width: 1280, quality: 100) {
  //               ...GatsbyImageSharpFixed_withWebp
  //             }
  //           }
  //         }
  //         automation: file(relativePath: { eq: "wave/automation.png" }) {
  //           childImageSharp {
  //             fluid(maxWidth: 1600, quality: 100) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //         security: file(relativePath: { eq: "wave/security.png" }) {
  //           childImageSharp {
  //             fluid(maxWidth: 1600, quality: 100) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //         forms: file(relativePath: { eq: "wave/forms.png" }) {
  //           childImageSharp {
  //             fluid(maxWidth: 1600, quality: 100) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //       }
  //     `)

  // console.log('hhhh', data)

  const sections = data?.cards?.map((item: any, index: number) => {
    switch (item.card_name) {
      case 'Wave Feature Card':
        return (
          <div className="container-fluid wave-logo">
            <div className="container text-center">
              <FadeIn fade="up">
                <WaveLogo />
              </FadeIn>
              <FadeIn
                fade="up"
                className="col-lg-8 mx-auto pt-5 text-block text-left"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.long_description?.childMarkdownRemark?.html,
                  }}
                />
              </FadeIn>
            </div>
          </div>
        )

      case 'Analytics Wave Feature Card':
        return (
          <div className="container-fluid wave-analytics">
            <WaveSection d={4} alt />
            <div className="container">
              <FadeIn fade="up">
                <h2>{item?.title}</h2>
              </FadeIn>
              <div className="row pt-5">
                <div className="col-lg-9 mx-lg-auto col-xl-6 align-self-center">
                  <FadeIn fade="left" className="text-block">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.long_description?.childMarkdownRemark?.html,
                      }}
                    />
                  </FadeIn>
                </div>
                <div className="col-xl-6 pl-xl-5 align-self-center">
                  <FadeIn fade="right">
                    {/* <FixedImage
                  alt="Analytics"
                  image={analytics}
                  className="rounded-lg shadow"
                /> */}

                    <img src={item?.card_image?.file?.url} alt={item?.title} />
                  </FadeIn>
                </div>
              </div>
            </div>
            <WaveSection d={1} />
            <WaveHeart delay={1} />
          </div>
        )

      case 'Automation Studio Wave Feature Card':
        return (
          <div className="container-fluid automation-studio">
            <FadeIn fade="up">
              <div className="centered-image mx-auto">
                {/* <Img fluid={automation.childImageSharp.fluid as FluidObject} alt='Automation' /> */}
                <img src={item?.card_image?.file?.url} alt={item?.title} />
              </div>
              <div className="container">
                <h2>{item?.title}</h2>
                <div className="row pt-5">
                  <div className="col-lg-8 mx-auto text-block">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.long_description?.childMarkdownRemark?.html,
                      }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        )

      case 'Services & Teams Wave Feature Card':
        return (
          <div className="container-fluid services-teams">
            <WaveSection d={0} alt />
            <div className="container">
              <FadeIn fade="up">
                <h2>{item?.title}</h2>
              </FadeIn>
              <div className="row pt-5">
                <div className="col-lg-9 mx-lg-auto col-xl-6 align-self-center">
                  <FadeIn fade="left" className="text-block">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.long_description?.childMarkdownRemark?.html,
                      }}
                    />
                  </FadeIn>
                </div>
                <div className="col-xl-6 pl-xl-5 align-self-center">
                  <FadeIn fade="right">
                    {/* <FixedImage
                      alt="Service Multi-Planner"
                      image={planner}
                      className="rounded-lg shadow"
                    /> */}

                    <img src={item?.card_image?.file?.url} alt={item?.title} />
                  </FadeIn>
                </div>
              </div>
            </div>
            <WaveSection d={3} />
            <WaveHeart delay={0} />
          </div>
        )

      case 'Security Wave Feature Card':
        return (
          <div className="container-fluid wave-security">
            <FadeIn fade="up">
              <div className="centered-image mx-auto">
                {/* <Img
                  fluid={security.childImageSharp.fluid as FluidObject}
                  alt="Security"
                /> */}

                <img src={item?.card_image?.file?.url} alt={item?.title} />
              </div>
              <div className="container">
                <h2>{item?.title}</h2>
                <div className="row pt-5">
                  <div className="col-lg-8 mx-auto text-block">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.long_description?.childMarkdownRemark?.html,
                      }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        )

      case 'Check-in Wave Feature Card':
        return (
          <div className="container-fluid wave-check-in">
            <WaveSection d={2} alt />
            <div className="container">
              <FadeIn fade="up">
                <h2>{item?.title}</h2>
              </FadeIn>
              <div className="row pt-5">
                <div className="col-lg-9 mx-lg-auto col-xl-6 align-self-center">
                  <FadeIn fade="left" className="text-block">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.long_description?.childMarkdownRemark?.html,
                      }}
                    />
                  </FadeIn>
                </div>
                <div className="col-xl-6 pl-xl-5 align-self-center">
                  <FadeIn fade="right">
                    {/* <FixedImage
                      alt="CheckIn"
                      image={checkIn}
                      className="rounded-lg shadow"
                    /> */}

                    <img src={item?.card_image?.file?.url} alt={item?.title} />
                  </FadeIn>
                </div>
              </div>
            </div>
            <WaveSection d={5} />
            <WaveHeart delay={2} />
          </div>
        )

      case 'Forms Wave Feature Card':
        return (
          <div className="container-fluid wave-forms">
            <FadeIn fade="up">
              <div className="centered-image mx-auto">
                {/* <Img
                  fluid={forms.childImageSharp.fluid as FluidObject}
                  alt="Forms"
                /> */}

                <img src={item?.card_image?.file?.url} alt={item?.title} />
              </div>
              <div className="container">
                <h2>{item?.title}</h2>
                <div className="row pt-5">
                  <div className="col-lg-8 mx-auto text-block">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.long_description?.childMarkdownRemark?.html,
                      }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        )

      default:
        return null
    }
  })

  return <div className="wave-container">{sections}</div>
}

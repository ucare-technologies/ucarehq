// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import FadeIn from '../fade-in'
import FixedImage from '../fixed-image'

interface DataPropsTypes {
  slice_name: string
  description: {
    childMarkdownRemark: {
      html: string
    }
  }
  divided_section_name: string
  first_image: {
    file: {
      url: string
    }
  }
  second_image: {
    file: {
      url: string
    }
  }
  third_image: {
    file: {
      url: string
    }
  }
  title: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export default function Devices(data: DataPropsTypes) {
  // const { googleStore, devices } = useStaticQuery<{
  // 	googleStore: FixedImageProps;
  // 	devices: FixedImageProps;
  // }>(graphql`
  // 	query {
  // 		googleStore: file(relativePath: { eq: "home/en_badge_web_generic-300x89.png" }) {
  // 			childImageSharp {
  // 				fixed(width: 160) {
  // 					...GatsbyImageSharpFixed_withWebp
  // 				}
  // 			}
  // 		}
  // 		devices: file(relativePath: { eq: "home/iDevices2.png" }) {
  // 			childImageSharp {
  // 				fixed(width: 1000) {
  // 					...GatsbyImageSharpFixed_withWebp
  // 				}
  // 			}
  // 		}
  // 	}
  // `);

  // console.log('hhh', data)

  return (
    <section className="container-fluid devices">
      {data && (
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6 devices-text devices_text_wrapper">
              <FadeIn fade="left">
                {/* <h2>
                  What you need, <br className="hidden-xs" />
                  when you need it, <br className="hidden-xs" />
                  on all your devices.
                </h2> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.title?.childMarkdownRemark?.html,
                  }}
                  className="devices_text_title"
                />

                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.description?.childMarkdownRemark?.html,
                  }}
                  className="devices_text_description"
                />

                {/* <p>
                  No matter what your role in church, having access to the
                  people and information that’s most important to you can help
                  immensely. Being able to contact the right people, ensure
                  people are followed up and tasks are actioned right away can
                  help big churches feel less impersonal and small churches feel
                  better resourced.
                </p>
                <p>
                  Whether you love your Apple, Android or Windows device, we’ve
                  got you covered with full featured apps for when you’re not at
                  a desk. And if you’re a Mac, PC or Chromebook user you’re all
                  set, just fire up your web browser and you’ll have access to
                  the same info and features available on your mobile device.
                </p> */}
              </FadeIn>
            </div>
            <div className="col-lg-6 col-md-6 device-photo">
              <FadeIn fade="right">
                {/* <FixedImage
                  alt="iDevices"
                  image={data?.first_image?.file?.url}
                /> */}

                <picture>
                  <img
                    src={data?.first_image?.file?.url}
                    alt="img"
                    // className={className}
                    // width={fixed.width}
                    // height={fixed.height}
                    loading="lazy"
                  />
                </picture>
              </FadeIn>
            </div>
          </div>
          <FadeIn className="container apple-google-play" fade="up">
            <div className="col-md-6 text-center">
              <a
                href="https://itunes.apple.com/us/app/ucare./id905961512?mt=8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="button-center"
                  //   src="https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg"
                  src={data?.second_image?.file?.url}
                  alt="Download on the AppStore"
                />
              </a>
            </div>
            <div className="col-md-6 text-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.ucareapp.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FixedImage alt='Get it on Google Play' image={googleStore} className='button-center' /> */}

                <picture>
                  <img
                    src={data?.third_image?.file?.url}
                    alt="Get it on Google Play"
                    loading="lazy"
                    className="button-center"
                  />
                </picture>
              </a>
            </div>
          </FadeIn>
        </>
      )}
    </section>
  )
}

// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// import { FluidImageSrc } from '../../types'

// import { StaticImage } from 'gatsby-plugin-image'

import FadeIn from '../fade-in'
import WaveLogoWhite from '../wave/wavetech-white'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface DataPropsTypes {
  background_image: {
    file: {
      url: string
    }
  }
  banner_page_name: string
  slice_name: string
  button_link: string
  button_text: string
  rich_title: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export default function Testimonials(data: DataPropsTypes) {
  // console.log('hhh', data)

  return (
    <div className="wave_section_wrapper">
      {data && (
        <>
          {/* <StaticImage
            src="./images/hero2.jpg"
            src={data?.background_image?.file?.url}
            alt="heroImg"
            className="container-fluid"
            layout="fullWidth"
          /> */}

          <div
            style={{
              backgroundImage: `url(${data?.background_image?.file?.url})`,
            }}
            className={`container-fluid wave_bg_img`}
          />

          <div className="wave_fadin_wraper">
            <FadeIn fade="up">
              <div className="container text-center wave-home-logo text-white">
                <h1>
                  <div>
                    <WaveLogoWhite />
                  </div>
                  {/* <em>church management. &nbsp;</em>
                  <strong>intellified.</strong> */}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.rich_title?.childMarkdownRemark?.html,
                    }}
                    className="wave_title"
                  />
                </h1>
                <footer>
                  <div>
                    <Link
                      className="btn btn-outline-white btn-lg"
                      role="button"
                      to={data?.button_link}
                    >
                      {data?.button_text}{' '}
                      <FontAwesomeIcon icon={faPlay} className="ml-2" />
                    </Link>
                  </div>
                </footer>
              </div>
            </FadeIn>
          </div>
        </>
      )}
    </div>
  )
}

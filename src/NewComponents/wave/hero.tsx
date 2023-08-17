import React from 'react'
import * as Scroll from 'react-scroll'
import WaveLogoWhite from './wavetech-white'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import FadeIn from '../fade-in'

interface DataPropsTypes {
  background_image: {
    file: {
      url: string
    }
  }
  onPlayClick: () => void
  section1_title: {
    raw: string
  }
  rich_title: {
    childMarkdownRemark: {
      html: string
    }
  }
}

const Hero = (data: DataPropsTypes) => {
  // console.log('hhh', data)

  return (
    <div className="wave_hero_section_wrapper">
      <>
        <div
          style={{
            backgroundImage: `url(${data?.background_image?.file?.url})`,
          }}
          className={`wave_manage justify-content-center
        `}
        />

        <div className="wave_fadein_wrapper">
          <FadeIn className="wave-hero-title text-center" fade="up">
            <div className="wave_logo_white">
              <WaveLogoWhite />
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: data?.rich_title?.childMarkdownRemark?.html,
              }}
              className="wave_manage_title"
            />

            <div className="watch_video_button">
              <Scroll.Link
                to="video"
                className="btn btn-outline-white btn-lg"
                role="button"
                href="#video"
                smooth
                duration={500}
                onClick={data?.onPlayClick}
              >
                Watch Video <FontAwesomeIcon icon={faPlay} className="ml-2" />
              </Scroll.Link>
            </div>
          </FadeIn>
        </div>
      </>
    </div>
  )
}

export default Hero

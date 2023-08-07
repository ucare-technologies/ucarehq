// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image';
import { StaticImage } from 'gatsby-plugin-image'
import FadeIn from '../fade-in'
// import heroImg from './images/hero.jpg'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface DataPropsTypes {
  background_image: {
    file: {
      url: string
    }
  }
  banner_page_name: string
  slice_name: string
  section1_title: {
    raw: string
  }
  rich_title: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export default function ChurchManagement(data: DataPropsTypes) {
  // console.log('hhh', data)

  // const richText = JSON.parse(data?.section1_title?.raw)

  // const Bold = ({ children }) => <p className="bold">{children}</p>
  // const Text = ({ children }) => (
  //   <p className="align-center d-none">{children}</p>
  // )

  // const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  //   },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  //   },
  //   renderText: (text) => text.replace('!', '?'),
  // }

  return (
    <div className="hero_section_wrapper">
      <>
        {/* <StaticImage
          src="./images/hero.jpg"
          // src={data?.background_image?.file?.url}
          alt="heroImg"
          className={`church-manage justify-content-center
        `}
          layout="fullWidth"
        /> */}

        {data && (
          <>
            <div
              style={{
                backgroundImage: `url(${data?.background_image?.file?.url})`,
              }}
              className={`church-manage justify-content-center
        `}
            />

            <div className="fadein_wrapper">
              <FadeIn className="text-center" fade="up">
                {/* {documentToReactComponents(richText, options)} */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.rich_title?.childMarkdownRemark?.html,
                  }}
                  className="church-manage-title"
                />
              </FadeIn>
            </div>
          </>
        )}
      </>
    </div>
  )
}

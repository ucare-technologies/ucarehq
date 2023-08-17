import React from 'react'
import Layout from '../../NewComponents/layout'
import SEO from '../../NewComponents/seo'
import Hero from '../../NewComponents/wave/hero'
import { graphql } from 'gatsby'
import WaveVideo from '../../NewComponents/wave/wave-video'
import Features from '../../NewComponents/wave/features'
import FAQ from '../../NewComponents/faq'

const WavePage = (props) => {
  const { data }: any = props

  // console.log('data', data)

  const [autoPlay, setAutoPlay] = React.useState(false)

  const handlePlayClick = React.useCallback(
    () => setAutoPlay(true),
    [setAutoPlay]
  )

  const sections = data?.contentfulPage?.sections?.map(
    (item: any, index: number) => {
      switch (item.slice_name) {
        case 'wave_page_banner':
          return <Hero key={index} {...item} onPlayClick={handlePlayClick} />

        default:
          return null
      }
    }
  )

  const otherSections = data?.contentfulPage?.sections?.map(
    (item: any, index: number) => {
      switch (item.slice_name) {
        case 'wave_features':
          return <Features key={index} {...item} />

        case 'frequently_asked_questions':
          return <FAQ key={index} {...item} />

        default:
          return null
      }
    }
  )

  return (
    <>
      <Layout>
        <SEO title="UCare Wave" />

        {sections}

        <WaveVideo autoPlay={autoPlay} />

        {/* <Features /> */}

        {otherSections}
      </Layout>
    </>
  )
}

export default WavePage

export const pageQuery = graphql`
  query WavePageQuery {
    contentfulPage(slug: { eq: "/wave" }) {
      page_name
      slug
      sections {
        ... on ContentfulBannerSection {
          id
          slice_name
          banner_page_name
          rich_title {
            childMarkdownRemark {
              html
            }
          }
          background_image {
            file {
              url
            }
          }
          image {
            file {
              url
            }
          }
          button_text
        }
        ... on ContentfulCardSection {
          id
          slice_name
          card_section_name
          cards {
            card_name
            title
            long_description {
              childMarkdownRemark {
                html
              }
            }
            card_image {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`

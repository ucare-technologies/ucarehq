import React from 'react'
import Layout from '../NewComponents/layout'
import SEO from '../NewComponents/seo'
import ChurchManagement from '../NewComponents/home/church'
import Management from '../NewComponents/home/management'
import { graphql } from 'gatsby'
import Features from '../NewComponents/home/features'
import Devices from '../NewComponents/home/devices'
import WaveUpgrade from '../NewComponents/home/upgrade'
import Ministry from '../NewComponents/home/ministry'
import LatestBlog from '../NewComponents/blogs/latest-blog'

const HomePage: React.FC = (props) => {
  const { data }: any = props

  // console.log('data', data)

  const sections = data?.contentfulPage?.sections?.map(
    (item: any, index: number) => {
      switch (item.slice_name) {
        case 'home_page_banner':
          return <ChurchManagement key={index} {...item} />

        case 'try_free':
          return <Management key={index} {...item} />

        case 'features':
          return <Features key={index} {...item} />

        case 'what_you_need':
          return <Devices key={index} {...item} />

        case 'wave':
          return <WaveUpgrade key={index} {...item} />

        case 'ministry_covered':
          return <Ministry key={index} {...item} />

        case 'latest_blog':
          return <LatestBlog key={index} {...item} />

        default:
          return null
      }
    }
  )

  return (
    <Layout>
      <SEO title="Church management software simplified" />

      {sections}
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(slug: { eq: "/" }) {
      page_name
      slug
      sections {
        ... on ContentfulBannerSection {
          slice_name
          banner_page_name
          button_text
          button_link
          section1_title: title {
            raw
          }
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
        }
        ... on ContentfulBasicInfoSection {
          slice_name
          basic_info_section_name
          section2_title: title
          sub_title
          button_text
          button_link
        }
        ... on ContentfulCardSection {
          slice_name
          card_section_name
          section3_title: title
          button_text
          button_link
          section3_description: description
          cards {
            card_name
            title
            card_image {
              file {
                url
              }
            }
            image_classname
            description
            button_text
            tag
            blog_date
            long_description {
              childMarkdownRemark {
                html
              }
            }
            feature_slug
          }
        }
        ... on ContentfulDividedSection {
          slice_name
          divided_section_name
          title {
            childMarkdownRemark {
              html
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          first_image {
            file {
              url
            }
          }
          second_image {
            file {
              url
            }
          }
          third_image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import Layout from '../NewComponents/layout'
import SEO from '../NewComponents/seo'
import { graphql } from 'gatsby'
import PageHeader from '../NewComponents/page-header'
// import FeatureList from '../NewComponents/features/feature-list'
// import AllFeatures from '../NewComponents/features/features'
// import Feature from '../NewComponents/features/feature'
import NewFeature from '../NewComponents/features/new-feature'
import LatestBlog from '../NewComponents/blogs/latest-blog'

const Features = (props: any) => {
  //   console.log('props', props)

  const { page_name, sections, slug }: any =
    props?.data?.allContentfulPage?.edges[0]?.node

  //   console.log('sections', sections)

  const PageSections = sections?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'feature_page_banner':
        return <PageHeader key={index} {...item} />
      case 'all_features':
        return <NewFeature key={index} {...item} />
      case 'latest_blog':
        return <LatestBlog key={index} {...item} />

      default:
        return null
    }
  })

  return (
    <>
      <Layout>
        <SEO title="UCare’s Powerful Features" />

        <main>{PageSections}</main>
      </Layout>
    </>
  )
}

export default Features

export const pageQuery = graphql`
  query FeaturePageQuery {
    allContentfulPage(filter: { slug: { eq: "/features" } }) {
      edges {
        node {
          id
          page_name
          slug
          sections {
            ... on ContentfulBannerSection {
              slice_name
              banner_page_name
              rich_title {
                childMarkdownRemark {
                  html
                }
              }
              section1_des: description {
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
            ... on ContentfulCardSection {
              slice_name
              card_section_name
              title
              rich_description {
                childMarkdownRemark {
                  html
                }
              }
              cards {
                card_name
                title
                image_classname
                button_text
                card_image {
                  file {
                    url
                  }
                }
                long_description {
                  childMarkdownRemark {
                    html
                  }
                }
                tag
                blog_date
                feature_slug
                blog_slug
              }
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import Layout from '../../NewComponents/layout'
import SEO from '../../NewComponents/seo'
import { graphql } from 'gatsby'
import PageHeader from '../../NewComponents/page-header'
import LatestBlog from '../../NewComponents/blogs/latest-blog'

const SlaPage = (props: any) => {
  const { page_name, sections, slug }: any =
    props?.data?.allContentfulPage?.edges[0]?.node

  const PageSections = sections?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'sla_banner':
        return <PageHeader key={index} {...item} />
      case 'footer_details_page_description':
        return (
          <>
            {item?.description && (
              <div className="container posts px-4 pb-5">
                <div className="pages post feature_des footer_des">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.description?.childMarkdownRemark?.html,
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )
      case 'latest_blog':
        return <LatestBlog key={index} {...item} />

      default:
        return null
    }
  })

  return (
    <>
      <Layout>
        <SEO title="Terms & Conditions" />
        <main>{PageSections}</main>
      </Layout>
    </>
  )
}

export default SlaPage

export const pageQuery = graphql`
  query TermsPageQuery {
    allContentfulPage(filter: { slug: { eq: "/legal/sla" } }) {
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
              background_image {
                file {
                  url
                }
              }
            }
            ... on ContentfulCardSection {
              slice_name
              card_section_name
              section3_title: title
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
            ... on ContentfulFooterDetailsPageSection {
              slice_name
              section_name
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import Layout from '../NewComponents/layout'
import SEO from '../NewComponents/seo'
import PageHeader from '../NewComponents/page-header'
import { graphql } from 'gatsby'
import Pricing from '../NewComponents/pricing'
import FAQ from '../NewComponents/faq'

const PricingPage: React.FC = (props: any) => {
  const { page_name, sections, slug }: any =
    props?.data?.allContentfulPage?.edges[0]?.node

  // console.log('sections', sections)

  //   console.log('props', props)

  const PageSections = sections?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'price_page_banner':
        return <PageHeader key={index} {...item} />

      default:
        return null
    }
  })

  const OtherPageSections = sections?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'asked_questions':
        return <FAQ key={index} {...item} />

      default:
        return null
    }
  })

  return (
    <>
      <Layout>
        <SEO title="Pricing Editions" />

        <main>
          {PageSections}

          <div className="container pricing-page">
            <Pricing sections={sections} />
          </div>
        </main>

        {OtherPageSections}
        {/* <FAQ /> */}
      </Layout>
    </>
  )
}

export default PricingPage

export const pageQuery = graphql`
  query PricingPageQuery {
    allContentfulPage(filter: { slug: { eq: "/pricing" } }) {
      edges {
        node {
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
            ... on ContentfulPlansSection {
              slice_name
              plan_section_name
              section2_title: title {
                childMarkdownRemark {
                  html
                }
              }
              section2_des: description {
                childMarkdownRemark {
                  html
                }
              }
              sub_title {
                childMarkdownRemark {
                  html
                }
              }
              sub_description {
                childMarkdownRemark {
                  html
                }
              }
              button_text
              discount_percentage_yearly
              active_profiles
              cards {
                card_name
                title
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                price
                button_text
                class_name
                is_recommend
                feature_list {
                  feature_text
                  is_add_on
                  is_new
                }
              }
            }
            ... on ContentfulPlanFeatureSection {
              slice_name
              plan_feature_section_name
              section3_title: title
              section3_des: description {
                childMarkdownRemark {
                  html
                }
              }
              plan_feature_list {
                title
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                plan_feature_list {
                  feature_text
                  essentials_text
                  essentials_check
                  growth_text
                  growth_check
                  lighthouse_text
                  lighthouse_check
                }
              }
            }
            ... on ContentfulCardSection {
              slice_name
              card_section_name
              title
              section4_des: description
              cards {
                card_name
                title
                long_description {
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
  }
`

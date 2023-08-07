import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../NewComponents/layout'
import SEO from '../NewComponents/seo'
import PageHeader from '../NewComponents/page-header'
import FAQ from '../NewComponents/faq'
import queryString from 'query-string'
import SignUpForm from '../NewComponents/sign-up/sign-up-form'

const SignUp = (props: any) => {
  // console.log('props', props)

  const {
    location: { search },
  } = props

  const { page_name, sections, slug }: any =
    props?.data?.allContentfulPage?.edges[0]?.node

  // console.log('sections', sections)

  const PageSections = sections?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'sign_up_page_banner':
        return <PageHeader key={index} {...item} />

      // case 'asked_questions':
      //   return <FAQ key={index} {...item} />

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

  const searchProps = search ? queryString.parse(search) : {}
  const size = Number(searchProps.size) || 500
  const edition = String(searchProps.edition) || 'growth'

  return (
    <>
      <Layout>
        <SEO title="Free 21-day trial" />

        <main>
          {PageSections}

          <div className="container sign-up pb-5">
            <div className="row sign-up-form">
              <div className="col-lg-6 m-auto user-input-form">
                <SignUpForm size={size} edition={edition} />
              </div>
            </div>
          </div>

          {OtherPageSections}
        </main>
      </Layout>
    </>
  )
}

export default SignUp

export const pageQuery = graphql`
  query SignUpPageQuery {
    allContentfulPage(filter: { slug: { eq: "/sign-up" } }) {
      edges {
        node {
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

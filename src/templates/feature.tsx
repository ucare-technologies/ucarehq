import React from 'react'
import { graphql } from 'gatsby'
import FeatureDetails from '../NewComponents/features/feature-details'

const Feature = ({ data }) => {
  // console.log('SingleFeature', data)

  return (
    <>
      {data &&
      data?.contentfulFeatureDetailsPage?.feature_details_page_sections ? (
        <FeatureDetails
          seo_title={data?.contentfulFeatureDetailsPage?.seo_title}
          data={
            data?.contentfulFeatureDetailsPage?.feature_details_page_sections ||
            []
          }
        />
      ) : (
        <h1>Static Data</h1>
      )}
    </>
  )
}

export default Feature

export const pageQuery = graphql`
  query FeatureBySlug($slug: String!) {
    contentfulFeatureDetailsPage(slug: { eq: $slug }) {
      slug
      page_name
      seo_title
      feature_details_page_sections {
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
          feature_colour
          image {
            file {
              url
            }
          }
        }
        ... on ContentfulFeaturesDetailsSection {
          slice_name
          section_name
          description {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulCardSection {
          slice_name
          card_section_name
          section3_title: title
          cards {
            card_name
            title
            feature_slug
            card_image {
              file {
                url
              }
            }
            image_classname
            blog_date
            blog_slug
            long_description {
              childMarkdownRemark {
                html
              }
            }
            tag
          }
        }
      }
    }
  }
`

import { graphql } from 'gatsby'
import React from 'react'
import SinglePost from '../NewComponents/blogs/post'

const Post = ({ data }) => {
  // console.log('SinglePost', pageContext)

  // console.log('SinglePost', data)

  // const { blog_details_page_sections, seo_title } =
  //   data?.contentfulBlogDetailsPage

  return (
    <>
      {data && data?.contentfulBlogDetailsPage?.blog_details_page_sections ? (
        <SinglePost
          seo_title={data?.contentfulBlogDetailsPage?.seo_title}
          data={
            data?.contentfulBlogDetailsPage?.blog_details_page_sections || []
          }
        />
      ) : (
        <h1>Static Data</h1>
      )}
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogDetailsPage(slug: { eq: $slug }) {
      slug
      page_name
      seo_title
      blog_details_page_sections {
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
          blog_date
        }
        ... on ContentfulBlogDetailsSection {
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
            blog_date
            blog_slug
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
          }
        }
      }
    }
  }
`

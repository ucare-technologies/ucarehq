import React from 'react'
import Layout from '../layout'
import SEO from '../seo'
import PageHeader from '../page-header'
import LatestBlog from '../../NewComponents/blogs/latest-blog'

// interface PropsDataTypes {

// }

const SinglePost = ({ seo_title, data }) => {
  // console.log('SinglePost', data)

  const BlogDescriptionSection: React.FC<{
    description: {
      childMarkdownRemark: {
        html: string
      }
    }
  }> = (data) => {
    // console.log('BlogDescriptionSection', data)

    return (
      <>
        <div className="container posts px-4 pb-5">
          <div className="pages post">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.description?.childMarkdownRemark?.html,
              }}
              className="blog_description_wrapper"
            />
          </div>
        </div>
      </>
    )
  }

  const PageSections = data?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'blog_banner':
        return <PageHeader key={index} {...item} />

      case 'blog_description':
        return <BlogDescriptionSection key={index} {...item} />

      case 'latest_blog':
        return <LatestBlog key={index} {...item} />

      default:
        return null
    }
  })

  return (
    <>
      <Layout>
        <SEO title={seo_title} />

        <main className="page">{PageSections}</main>
      </Layout>
    </>
  )
}

export default SinglePost

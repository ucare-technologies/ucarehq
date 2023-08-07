import React from 'react'
import Layout from '../layout'
import SEO from '../seo'
import PageHeader from '../page-header'
import LatestBlog from '../blogs/latest-blog'
import NewFeature from './new-feature'

const FeatureDetails = ({ seo_title, data }) => {
  // console.log('hh', data)

  const BlogDescriptionSection: React.FC<{
    description: {
      childMarkdownRemark: {
        html: string
      }
    }
  }> = (data) => {
    // console.log('data', data)

    return (
      <>
        {data?.description && (
          <div className="container posts px-4 pb-5">
            <div className="pages post feature_des">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.description?.childMarkdownRemark?.html,
                }}
              />
            </div>
          </div>
        )}
      </>
    )
  }

  const PageSections = data?.map((item: any, index: number) => {
    switch (item.slice_name) {
      case 'feature_banner':
        return <PageHeader key={index} {...item} />

      case 'feature_description':
        return <BlogDescriptionSection key={index} {...item} />

      case 'more_features':
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
        <SEO title={seo_title} />

        <main>{PageSections}</main>
      </Layout>
    </>
  )
}

export default FeatureDetails

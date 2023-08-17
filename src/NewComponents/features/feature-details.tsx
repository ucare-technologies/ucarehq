import React from 'react'
import Layout from '../layout'
import SEO from '../seo'
import PageHeader from '../page-header'
import LatestBlog from '../blogs/latest-blog'
import NewFeature from './new-feature'

declare global {
  interface Window {
    UCareEmbed: (
      elementId: string,
      url: string,
      path: string,
      cssUrl: string
    ) => void
  }
}

function loaded() {
  return typeof window.UCareEmbed === 'function'
}
const cssUrl = 'https://ucarehq.com/form-styles.css' // this file is in the static folder

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

    const divId = `ucare-embed-661505`
    const load = React.useCallback(() => {
      window.UCareEmbed(
        divId,
        'https://crm.ucareapp.com',
        '/forms/11/embed',
        cssUrl
      )
    }, [divId, '/forms/11/embed'])

    React.useEffect(() => {
      if (loaded()) {
        load()
      } else {
        const script = document.createElement('script')
        script.async = true
        script.onload = () => loaded() && load()
        script.src = 'https://crm.ucareapp.com/Scripts/ucare.embed.js'
        document.body.appendChild(script)
      }
    }, [divId, load])

    React.useEffect(() => {
      let FormWrap = document.getElementById('ucare-embed-661505')

      if (FormWrap) {
        FormWrap.style.maxWidth = `600px`
        FormWrap.style.margin = `0 auto`
      }

      let RowClass = document.getElementById('Row')
      if (RowClass) {
        RowClass.classList.add('three-up')
        RowClass.classList.add('row')
      }

      let Col1Class = document.getElementById('Col1')
      if (Col1Class) {
        Col1Class.classList.add('col-md-4')
      }

      let Col2Class = document.getElementById('Col2')
      if (Col2Class) {
        Col2Class.classList.add('col-md-4')
      }

      let Col3Class = document.getElementById('Col3')
      if (Col3Class) {
        Col3Class.classList.add('col-md-4')
      }
    }, [])

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

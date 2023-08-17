import React from 'react'
import Layout from './layout'
import SEO from './seo'
import ThreeUp from './features/three-up'
import UCareEmbed from './ucare-embed'
import YouTube from './youtube'
import { MDXProvider } from '@mdx-js/react'

const shortcodes = {
  ThreeUp,
  UCareEmbed,
  YouTube,
}

const Page = ({
  children,
  pageContext: {
    frontmatter: {
      title,
      type,
      featured_image,
      feature_colour,
      svg_code,
      header_alignment,
    },
  },
}: any) => {
  //   type QueryShape = {
  //     allImageSharp: {
  //       edges: {
  //         node: {
  //           image: any
  //         }
  //       }[]
  //     }
  //   }

  console.log('featured_image', featured_image)
  console.log('type', type)

  return (
    <>
      <Layout>
        <SEO
          // title={title}
          title="SEO"
        />

        <main className="page">
          <div className="container pages px-4 pb-5">
            <div className={`page ${type}`}>
              <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Page

const path = require('path')

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Define a template for blog post
//   const blogPost = path.resolve('./src/templates/blog-post.tsx')

//   const result = await graphql(
//     `
//       {
//         allContentfulPosts {
//           edges {
//             node {
//               title
//               slug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your Contentful posts`,
//       result.errors
//     )
//     return
//   }

//   const posts = result.data.allContentfulPosts.edges

//   // Create blog posts pages
//   // But only if there's at least one blog post found in Contentful
//   // `context` is available in the template as a prop and as a variable in GraphQL

//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previousPostSlug = index === 0 ? null : posts[index - 1].node.slug
//       const nextPostSlug =
//         index === posts.length - 1 ? null : posts[index + 1].node.slug

//       createPage({
//         path: `/blog/${post.node.slug}/`,
//         component: blogPost,
//         context: {
//           slug: post.node.slug,
//           previousPostSlug,
//           nextPostSlug,
//         },
//       })
//     })
//   }
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulAllBlogs(sort: { single_blogs: { blog_date: ASC } }) {
          edges {
            node {
              slice_name
              all_blog_section
              all_blogs_banner_section {
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
              single_blogs {
                id
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
              }
              others_all_blogs_section {
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
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const blogs =
    result?.data?.allContentfulAllBlogs?.edges[0]?.node?.single_blogs

  const SingleBlogTemplate = require.resolve(`./src/templates/post.tsx`)

  blogs.forEach((item) => {
    createPage({
      path: `/blog/${item.blog_slug}`,
      component: SingleBlogTemplate,
      context: {
        slug: item.blog_slug,
      },
    })
  })

  // console.log('blogs', blogs)

  const blogsPageData = result?.data?.allContentfulAllBlogs?.edges[0]?.node

  const postsPerPage = 5
  const numPages = Math.ceil(blogs.length / postsPerPage)

  const basePath = '/'

  // Create the Blogs page
  const BlogsTemplate = require.resolve(`./src/templates/posts.tsx`)

  for (let i = 0; i < numPages; i++) {
    createPage({
      path: i === 0 ? `${basePath}blog` : `${basePath}blog/page/${i + 1}`,
      component: BlogsTemplate,
      context: {
        blogsPageData,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const featuresListResult = await graphql(`
    {
      allContentfulPage(filter: { slug: { eq: "/features" } }) {
        edges {
          node {
            sections {
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
                }
              }
            }
          }
        }
      }
    }
  `)

  if (featuresListResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      featuresListResult.errors
    )
    return
  }

  // console.log('featuresListResult', featuresListResult)

  const blogsPageData =
    featuresListResult?.data?.allContentfulPage?.edges[0]?.node?.sections?.filter(
      (item) => item?.slice_name === 'all_features'
    )

  // Create the Feature details page
  const FeatureDetailsTemplate = require.resolve(`./src/templates/feature.tsx`)

  if (blogsPageData[0]?.cards.length > 0) {
    blogsPageData[0]?.cards.forEach((post, index) => {
      if (post.feature_slug !== null) {
        createPage({
          path: `/features/${post.feature_slug}`,
          component: FeatureDetailsTemplate,
          context: {
            slug: post.feature_slug,
          },
        })
      }
    })
  }

  // console.log('cards', blogsPageData[0]?.cards)
  // console.log('blogsPageData', blogsPageData)
  // console.log('length', blogsPageData?.cards.length)
}

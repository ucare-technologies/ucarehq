const path = require("path");
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              author
              url
              date
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.url,
          component: blogTemplate,
          context: {
            slug: node.fields.slug
          }
        })
      })
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
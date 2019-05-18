import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

/**
 * 
 * @param {*} props data from index.md via graphQL
 * @see https://codeburst.io/build-a-blog-using-gatsby-js-react-8561bfe8fc91 
 */
const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      { postList.edges.map(({ node }, i) => (
        <Link to={ node.fields.slug } className="link" key={ i }>
          <div className="post-list">
            <h1>{ node.frontmatter.title }</h1>
            <span>{ node.frontmatter.date }</span>
            <p>{ node.excerpt }</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [ frontmatter___date]}) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            url
          }
        }
      }
    }
  }
`

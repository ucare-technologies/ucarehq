import React from "react"
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"

/**
 * 
 * @param {*} props data from index.md via graphQL
 * @see https://codeburst.io/build-a-blog-using-gatsby-js-react-8561bfe8fc91 
 */
const IndexPage = (props) => {
  const homepage = props.data.allMarkdownRemark;
  const { html } = homepage.edges[0].node;
  const { title } = homepage.edges[0].node.frontmatter;
  document.title = `UCare | ${title}`;
  return (
    <Layout>
      {/* { postList.edges.map(({ node }, i) => (
        <Link to={ node.fields.slug } className="link" key={ i }>
          <div className="post-list">
            <h1>{ node.frontmatter.title }</h1>
            <span>{ node.frontmatter.date }</span>
            <p>{ node.excerpt }</p>
          </div>
        </Link>
      ))} */}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark( filter: { frontmatter: { url: { eq: "/home/"}}}) {
      edges {
        node {
          fields {
            slug
          }
          html
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
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import BlogList from '../components/blogs/bloglist';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      initImage: "",
      page : 0,
     }
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
          query {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
              filter: { frontmatter: { type: {eq: "post"}}}
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                  url
                  tagline
                  title
                  date,
                  featured_image {
                    id
                    name
                    extension
                    relativePath
                  }
                }
                  excerpt(pruneLength: 240)
                  fields {
                    slug
                  }
                }
              }
            }
            allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  sourceInstanceName:{ eq:"images" }}) {
              edges {
                node {
                  publicURL
                  relativePath
                  name
                  ext
                }
              }
            }
          }
        `}
        render={ data => {
          const { allMarkdownRemark, allFile } = data;
          const { page } = this.state;
          let imageArray = [];
          let pageLimit = 0;
          (page * 5 + 5) > allMarkdownRemark.totalCount ?
            pageLimit = allMarkdownRemark.totalCount
            :
            pageLimit = page * 5 + 5;
          for (let i = page * 5; i < pageLimit; i++) {
            const { date, title } = allMarkdownRemark.edges[i].node.frontmatter;
            const { slug } = allMarkdownRemark.edges[i].node.fields;
            let relativePath = null;
            allMarkdownRemark.edges[i].node.frontmatter.featured_image
            && (
              relativePath = allMarkdownRemark.edges[i].node.frontmatter.featured_image.relativePath
              );
            const { excerpt } = allMarkdownRemark.edges[i].node;
            allFile.edges.map((item, key) => (
              item.node.relativePath === relativePath && 
              imageArray.push({
                imageUrl: item.node.publicURL,
                url: slug,
                date,
                title,
                excerpt
              })
            ))
          }
          return (
            <Layout>
              <div className="container">
                <div className="row">

                </div>
                {
                  imageArray.map((item, key) => (
                    <BlogList
                    title={ item.title }
                    date={ item.date }
                    url={ item.url }
                    excerpt={ item.excerpt }
                    imageURL={ item.imageUrl }
                    key={key}
                  />
                  ))
                }
              </div>
            </Layout>
          )
        }}
      />
     );
  }
}
 
export default Blog;
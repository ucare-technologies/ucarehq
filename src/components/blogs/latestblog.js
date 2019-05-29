import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

const LatestBlog = () => (
  <StaticQuery
    query={ graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date]}
          limit: 3
          filter: { frontmatter: { type: {eq: "post"}}}
        ) {
            edges {
              node {
                frontmatter {
                url
                title
                date(formatString: "D MMMM YYYY"),
                featured_image {
                  publicURL
                }
    
              }
                excerpt(pruneLength: 240)
                fields {
                  slug
                }
              }
            } 
          }
      }
    `}
    render={ data => {
      const { edges } = data.allMarkdownRemark;
      return (
        <div className="container-fluid text-center latestblog">
          <div className="container">
            <h1>Latest From the Blog</h1>
            <div className="row latest-blog-wrapper">
              {
                edges.map((item, key) => {
                  const { slug } = item.node.fields;
                  const { publicURL } = item.node.frontmatter.featured_image;
                  const {
                    frontmatter: {
                      title,
                      date,
                    },
                    excerpt,
                  } = item.node;
                  return (
                    <div className="col-md-3 blogs p-0 mr-3" key={ key }>
                      <a href={ slug } className="latest-blog">
                        <img
                          src={ publicURL } alt={ title }
                          style={ {
                            width: '100%', height: 'auto'
                          }}
                        />
                        <h4>{ title }</h4>
                        <div className="blog-excerpt">
                          <p className="text-left">{ date }</p>
                          { excerpt }
                        </div>
                        <a href={ slug } className="read-more ml-4">Read More ></a>
                        </a>
                      </div>
                    
                    
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    } }
  />
)
export default LatestBlog;
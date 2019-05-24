import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const LatestBlog = () => (
  <StaticQuery
    query={ graphql`
      query {
        allFile(filter: { relativePath: { eq: "post/good-bie-old-friend/old-friend.jpg"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
      allMarkdownRemark(filter: { frontmatter: { url: {eq: "/good-bie-old-friend/"}}}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY Do MMMM")
            }
            excerpt(pruneLength: 500)
          }
        }
      }
    }
    `}
    render={ data => {
      const { publicURL } = data.allFile.edges[0].node;
      const { frontmatter: { date, title }, excerpt } = data.allMarkdownRemark.edges[0].node;
      return (
        <div className="container-fluid text-center latestblog">
          <div className="container">
          <h1>Latest From the Blog</h1>
            <div className="row">
              <div className="col-md-4 blogs">
                <img src={ publicURL } alt="publicURL" style={ { width: '350px', height: '200px' } } />
                <h2>{title}</h2>
                <p>{ date }</p>
                <div className="blog-excerpt">{ excerpt }</div>
                <a href="/features" className="read-more">Read More ></a>
              </div>
              <div className="col-md-4 blogs">
                <img src={ publicURL } alt="publicURL" style={ { width: '350px', height: '200px' } } />
                <h2>{title}</h2>
                <p>{ date }</p>
                <div className="blog-excerpt">{ excerpt }</div>
                <a href="/features" className="read-more">Read More ></a>
              </div>
              <div className="col-md-4 blogs">
                <img src={ publicURL } alt="publicURL" style={ { width: '350px', height: '200px' } } />
                <h2>{title}</h2>
                <p>{ date }</p>
                <div className="blog-excerpt">{ excerpt }</div>
                <a href="/features" className="read-more">Read More ></a>
              </div>
            </div>
          </div>
        </div>
      )
    } }
  />
)
export default LatestBlog;
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import FeatureList from '../components/features/featurelists';
import LatestBlog from '../components/blogs/latestblog';

const Features = () => (
  <StaticQuery
    query={ graphql`
      query FeaturesQuery {
        allMarkdownRemark(filter: { frontmatter: { url: { eq: "/pages/features/"}}}) {
          edges {
            node {
             frontmatter {
              url
              tagline
              title
            }
              html
            }
          }
        }
        allFile(filter: { relativePath: { eq: "page/features/tumblr_o6nnyriAcM1tubinno1_1280.jpg"}}) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={ data => {
      const { frontmatter: { tagline, title } } = data.allMarkdownRemark.edges[0].node;
      const { publicURL } = data.allFile.edges[0].node;
      return (
        <Layout>
          <div className="container-fluid p-0">
          <div className="row text-center feature-page">

          </div>
          <div className="container text-center">
            <div className="row">
              UCare provides effective and easy to use all-in-one church management solution that doesn’t cost the world so you can focus on ministry and loving people. Explore each powerful feature to find out how UCare handles the simplest to the most complex needs.
            </div>
            <div>
              <FeatureList />
            </div>
            <div>
              <LatestBlog />
            </div>
          </div>
        </div> 
        </Layout>
        
      )
    }}
  />
)

export default Features;
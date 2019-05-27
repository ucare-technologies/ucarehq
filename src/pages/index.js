import React from "react"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';
import ChurchManagement from '../components/home/church';
import Management from '../components/home/management';
import Features from '../components/home/features';
import Devices from '../components/home/devices';
import Testimonials from '../components/home/testimonials';
import Ministry from '../components/home/ministry';
import Pricing from '../components/home/Pricing';
import LatestBlog from '../components/blogs/latestblog';
import Layout from "../components/layout"

/**
 * 
 * @param {*} props data from index.md via graphQL
 * @see https://codeburst.io/build-a-blog-using-gatsby-js-react-8561bfe8fc91 
 */
const IndexPage = (props) => {
  // const homepage = props.data.allMarkdownRemark;
  // const { title } = homepage.edges[0].node.frontmatter;
  // document.title = `UCare | ${title}`;
  return (
    <Layout>
      <ChurchManagement/>
      <Management />
      <Features />
      <Devices
        fluid={ props.data.deviceImage.childImageSharp.fluid }
        // applefluid={ props.data.appleImage.childImageSharp.fluid }
        googlefluid={ props.data.googleImage.childImageSharp.fluid }
      />
      <Testimonials />
      <Ministry />
      <Pricing fluid={ props.data.pricingImage.childImageSharp.fluid } />
      <LatestBlog />
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
    deviceImage: file(relativePath: { eq: "page/home/iDevices2.png"}) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
    appleImage: file(relativePath: { eq: "page/home/badge_appstore-lrg.svg"}) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
    googleImage: file(relativePath: { eq: "page/home/en_badge_web_generic-300x89.png"}) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
    pricingImage: file(relativePath: { eq:  "page/home/pricing.jpg" }) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`
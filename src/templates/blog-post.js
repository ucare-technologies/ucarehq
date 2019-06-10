import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
// import moment from 'moment';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import LatestBlog from '../components/blogs/latestblog';
import FeatureList from '../components/features/featurelists';
import FeatureList2 from '../components/features/featurelist2';

import './_blogpost.scss';

const BlogPost = (props) => {
  const post = props.data.markdownRemark;
  const { title, url, svg_code } = post.frontmatter;
  const { featured_image } = post.frontmatter;
  let publicURL = null;
  featured_image && (publicURL = featured_image.publicURL);
  return (
    <Layout>
      <div
        className="container-fluid text-center p-0 blog-post"
        style={ {
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${publicURL})`,
          backgroundColor: '#323a46',
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
          maxWidth: '100%',
        } }>
        <div className="centered">
          
          { svg_code &&
            <div className="feature-circle">
              <span dangerouslySetInnerHTML={ { __html: `${svg_code}` } }></span>
            </div>
          }
          <h1>{ title }</h1>
          {/* <span>
            <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;&nbsp;
            { moment(date).format("D MMMM YYYY") }
          </span> */}
        </div>
      </div>
      <div className="container posts" >
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
      {
        url !== "/sla/" && url !== "/privacy/" && url !== "/terms/" &&
        <div className="row blog-feature-part">
          <div className="container text-center my-4">
            <h3>More Features</h3>
            <FeatureList location={ `feature` } />
            <FeatureList2 location={ `feature` } />
          </div>
        </div>
      }
      <div>
        <LatestBlog />
      </div>
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        type
        date
        url
        svg_code
        featured_image {
          id
          name
          ext
          relativePath
          publicURL
        }
      }
    }
  }
`
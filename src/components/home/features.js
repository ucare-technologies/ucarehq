import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { StaticQuery, graphql } from 'gatsby';

import FeatureList from '../features/featurelists';

const Features = () => (
  <StaticQuery
    query={ graphql`
      query {
        file(relativePath: { eq: "gatsby-icon.png" }) {
          publicURL
        }
      }
    `}
    render={ data => (
      <div className="container-fuild p-0 features">
        <div className="container text-center">
          <h2 className="features-title text-center">
            Features you will&nbsp;
            <img
              src={ data.file.publicURL }
              alt="features you will "
              style={ {
                width: '40px',
                marginTop: '30px',
              }}
            />
          </h2>
          <FeatureList location={ `root` }/>
          <div className="explore-more">
            <a href="/features" className="explore-more-btn">
              Explore More Features&nbsp;&nbsp;
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
      </div>  
    )}
  />
)

export default Features;
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import FeatureList from '../features/featurelists';

const Features = () => (
  <div className="container-fuild p-0 features">
    <div className="container text-center">
      <h2 className="features-title">Features you will</h2>
      <FeatureList location={ `root` }/>
      <div className="explore-more">
        <a href="/features" className="explore-more-btn">
          Explore more features&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </div>
  </div>
)

export default Features;
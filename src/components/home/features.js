import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import FeatureList from '../features/featurelists';

const Features = () => (
  <div className="container-fuild p-0 features">
    <div className="container text-center">
      <h2 className="features-title">Features you will</h2>
      <FeatureList />
      <div className="explore-more">
        <a href="/features" className="explore-more-btn">
          Explore more features
        </a>
      </div>
    </div>
  </div>
)

export default Features;
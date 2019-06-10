import React from 'react';
import Img from 'gatsby-image';

import AppleStoreIcon from '../Icons/applestore';

const Devices = (props) => (
  <section className="container-fluid devices">
    <div className="row">
      <div className="col-lg-4 offset-lg-2 col-sm-8 offset-sm-2">
        <h2>What you need</h2>
        <h2>when you need it</h2>
        <h2>on all you devices</h2>
        <p>
          No matter what your role in church, having access to the people and information that’s most important to you can help immensely. Being able to contact the right people, ensure people are followed up and tasks are actioned right away can help big churches feel less impersonal and small churches feel better resourced.

          Whether you love your Apple, Android or Windows device, we’ve got you covered with full featured apps for when you’re not at a desk. And if you’re a Mac, PC or Chromebook user you’re all set, just fire up your web browser and you’ll have access to the same info and features available on your mobile device.
        </p>
      </div>
      <div className="col-lg-6 device-photo">
        <Img fluid={props.fluid} />
      </div>
    </div>
    <div className="row apple-google-play">
      <div className="col-sm-1 offset-sm-3">
        <a href="https://itunes.apple.com/us/app/ucare./id905961512?mt=8">
          <AppleStoreIcon />
        </a>
        
      </div>
      <div className="col-sm-1 offset-sm-3">
        <a href="https://play.google.com/store/apps/details?id=com.ucareapp.app">
          <Img fluid={props.googlefluid} className="google-play" />
        </a>
      </div>
    </div>
  </section>
)

export default Devices;
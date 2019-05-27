import React, { Component } from 'react';
import "./bloglist.scss";

class bloglist extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { title, date, url, excerpt, imageURL } = this.props;
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="entry-image">
              <a href={ url } >
                <img src={imageURL} />
              </a>
            </div>
            <div className="entry-content">
              <article>
                <h2>
                  <a href={ url }>{ title }</a>
                </h2>
                <span>{ date }</span>
                <div className="entry-summary">
                  <p>{ excerpt }</p>
                </div>
              </article>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
     );
  }
}
 
export default bloglist;
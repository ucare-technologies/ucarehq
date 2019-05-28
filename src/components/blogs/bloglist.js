import React, { Component } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
/**
 * @see https://scotch.io/tutorials/using-font-awesome-5-with-react
 * Using fontawesome
 */
class bloglist extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { title, date, url, excerpt, imageURL } = this.props;
    return ( 
      <div className="container bloglist">
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
                  <a href={ url } className="blog-title">{ title }</a>
                </h2>
                <span>
                  <FontAwesomeIcon icon={ faCalendarAlt } />&nbsp;&nbsp;
                  { moment(date).format("D MMMM YYYY") }
                </span>
                <div className="entry-summary">
                  <p>{ excerpt }</p>
                </div>
              </article>
              <div>
                <a href={url} className="readmore">
                    Readmore&nbsp;&nbsp;<FontAwesomeIcon icon={ faChevronRight } />
                </a>                
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
     );
  }
}
 
export default bloglist;
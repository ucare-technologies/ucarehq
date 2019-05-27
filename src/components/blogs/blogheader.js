import React from 'react';
import BackgroundImage from 'gatsby-background-image';

class BlogHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { imageFluid } = this.props;
    return ( 
      <div className="container-fluid">
        {/* <BackgroundImage /> */}
      </div>
     );
  }
}
 
export default BlogHeader;
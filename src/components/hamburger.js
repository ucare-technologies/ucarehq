import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
  }
  handleMenuIconClick() {
    this.setState({
      open: true,
    })
  }
  render() { 
    return ( 
      <HamburgerMenu
        isOpen={ this.state.open }
        menuClicked={this.handleClick.bind(this)}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color='black'
        borderRadius={0}
        animationDuration={0.5}
      />
     );
  }
}
 
export default Hamburger;
import React, { Component } from "react"
import PropTypes from "prop-types"
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import HamburgerMenu from 'react-hamburger-menu';

import UcareIcons from './Icons/ucare';
import UcareExpandIcon from './Icons/ucareexpand';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "transparent",
      isTop: true,
      sizeScreen: null,
      menuOpen: false,
      location: null,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleHamburgerClose = this.handleHamburgerClose.bind(this);
    this.handleHamburgerOpen = this.handleHamburgerOpen.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }
  componentWillMount() {
    if (typeof window !== `undefined`) {
      this.setState({ location: window.location.pathname });
    } 
  }
  componentDidMount() {
    this.setState({
      sizeScreen: window.innerWidth,
    })
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 10;
      this.setState({ isTop });
      if (this.state.sizeScreen > 1000) {
        if (!isTop) {
          document.querySelector('.nav-features').style.color = "#323a46";
          document.querySelector('.nav-pricing').style.color = "#323a46";
          document.querySelector('.support').style.color = "#323a46";
          document.querySelector('.nav-blog').style.color = "#323a46";
          document.querySelector('.sign-in').style.color = "#323a46";
        } else {
          document.querySelector('.nav-features').style.color = "hsla(0,0%,100%,.9)";
          document.querySelector('.nav-pricing').style.color = "hsla(0,0%,100%,.9)";
          document.querySelector('.support').style.color = "hsla(0,0%,100%,.9)";
          document.querySelector('.nav-blog').style.color = "hsla(0,0%,100%,.9)";
          document.querySelector('.sign-in').style.color = "hsla(0,0%,100%,.9)";
        }
      }
      if (this.state.menuOpen) {
        document.body.style.overflow = 'hidden';
      }
    })
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleHamburgerOpen() {
    
  }
  handleHamburgerClose() {

  }
  handleHamburgerClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }
  handleResize() {
    this.setState({
      sizeScreen: window.innerWidth
    });
  }
  render() { 
    return ( 
      <Navbar
        collapseOnSelect 
        expand="lg"
        bg={ this.state.isTop ? 'transparent': 'light' }
        variant="transparent" 
        fixed="top"
        className={ `navbar ${!this.state.isTop && `navbar-below`}` }
        style={{
          paddingBottom: 0,
          paddingTop: 0,
        }}
      >
        <Navbar.Brand href="/">
          {
            !this.state.menuOpen && (
              this.state.isTop
                ? this.state.sizeScreen < 990 
                  ? this.state.sizeScreen < 770
                    ? <UcareExpandIcon height='40px' />
                    : <UcareExpandIcon height='50px' />
                  : <UcareExpandIcon height='70px' />
                : this.state.sizeScreen < 990
                  ? this.state.sizeScreen < 770
                    ? <UcareIcons height='40px' />
                    : <UcareIcons height='50px' />
                  : <UcareIcons height='50px' />
            )
          }
        </Navbar.Brand>
        {
          this.state.sizeScreen > 990
            ? (
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Item className="nav-item">
                    <Link to="/features" className="item nav-features">features</Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    {
                      this.state.location === "/"
                        ? (
                          <ScrollLink
                            to="pricing"
                            spy={ true }
                            smooth={ true }
                            hashSpy={ true }
                            duration={ 500 }
                            className={ `item nav-pricing` }
                            activeClass="pricing-active-class"
                          >
                            pricing
                          </ScrollLink>
                        )
                        : (
                          <Link to="/#pricing" className={ `item nav-pricing` }>
                            pricing
                          </Link>
                        )
                    }
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <a href="https://ucare.zendesk.com/hc/en-us" className="item support">support</a>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Link to="/blog" className="item nav-blog">blog</Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <a 
                      href="https://connect.ucareapp.com/signin?_ga=2.13867701.365518745.1558216565-1288942489.1557477004"
                      className="item sign-in"
                    >
                      sign in
                    </a>
                  </Nav.Item>                
              </Nav>
              <Nav>
                <Nav.Item className="nav-item">
                  <Link className={`trials-free-btn`} to="/sign-up">
                    free 30-day trial&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            )
            : (
              <Nav className="mx-auto d-inline-block">
                {
                  !this.state.isTop && (
                    <Nav.Item className={`nav-item`}>
                      <Link className={`trials-free-btn-mobile ${this.state.sizeScreen < 350? `smallest-trial` : `` }`} to="/sign-up">
                        free 30-day trial&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </Nav.Item>
                  )
                }
                <Nav.Item>
                  <button
                    className={
                      `text-center text-white hamburger 
                      ${this.state.menuOpen ? `hamburger-active` : `hamburger-inactive`}
                      ${!this.state.isTop && `hamburger-below`}`
                    }
                  >
                  {
                    this.state.menuOpen
                    ? <HamburgerMenu
                        isOpen={this.state.menuOpen}
                        menuClicked={this.handleHamburgerClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={2}
                        rotate={0}
                        borderRadius={0}
                        animationDuration={ 0.5 }
                        color={this.state.isTop ? `#fff`: `#000`}
                      />
                    : <HamburgerMenu
                        isOpen={this.state.menuOpen}
                        menuClicked={this.handleHamburgerClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={2}
                        rotate={0}
                        borderRadius={0}
                        animationDuration={ 0.5 }
                        color={this.state.isTop ? `#fff`: `#000`}
                      />
                  }
                  </button>
                </Nav.Item>
              </Nav>
            )
          }
        <div className={ `sidebar ${this.state.menuOpen ? `sidebar-active` : `sidebar-inactive`}` }>
          <Link to={ `/features` } className={ `subitems` }>Features</Link>
          {
            this.state.location === "/"
              ? (
                <ScrollLink
                  to="pricing"
                  smooth={ true }
                  hashSpy={ true }
                  duration={ 500 }
                  className={ `subitems` }
                  activeClass="pricing-active-class"
                >
                  pricing
                </ScrollLink>
              )
              : (
                <Link to="/#pricing" className={ `subitems` }>
                  pricing
                </Link>
              )
          }
          <a href="https://ucare.zendesk.com/hc/en-us" className={`subitems`}>support</a>
          <Link to="/blog" className={`subitems`}>blog</Link>
          <a 
            href="https://connect.ucareapp.com/signin?_ga=2.13867701.365518745.1558216565-1288942489.1557477004"
            className={`subitems`}
          >
            sign in
          </a>
          <Link className="trials-free-btn-mobile subitems" to="/sign-up">
            free 30-day trial&nbsp;&nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </Navbar>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

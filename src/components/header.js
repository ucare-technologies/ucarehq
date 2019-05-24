import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import UcareIcons from './Icons/ucare';

const Header = ({ siteTitle, menuLinks }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a href="/" className="navbar-brand">
      <div className="ucareicons">
        <UcareIcons />
      </div>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#ucarenavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="ucarenavbar">
      <ul className="navbar-nav mr-auto" style={ { display: 'flex', flex: 1, listStyle: 'none' }}>
        { menuLinks.map((link, key) => 
          <li key={link.link} className="nav-item">
            <a className="nav-link" href={link.link}>{link.name}</a>
          </li>
        ) }
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

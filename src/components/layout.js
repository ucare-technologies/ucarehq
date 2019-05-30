/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css";
const style = {
  color: '#fff',
  textDecoration: 'none',
}
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0`,
            maxWidth: '100%',
            padding: `0px 0rem 0px`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer className="footer text-center">
          <p>
            © Copyright UCare 2006-2019&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/privacy" style={style}>Privacy</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/terms" style={style}>Terms</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/sla" style={style}>SLA</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a
              href="http://status.ucarehq.com/?_ga=2.143113335.357659964.1558846064-1006824827.1558552278"
              style={style}
            >
              Status
            </a>
          </p>
        </footer>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

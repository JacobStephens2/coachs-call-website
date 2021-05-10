import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MainNav from "./mainNav"

const Header = ({ siteTitle }) => {
  return (
  <header
    style={{
      background: `#002856`, // dark blue
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 0.5rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#FFFFFF`, // white
            textDecoration: `none`,
          }}
        >

          <div dangerouslySetInnerHTML={{ __html: siteTitle }} />

        </Link>
      </h1>
    </div>
    <MainNav />
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

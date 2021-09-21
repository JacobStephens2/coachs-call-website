import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import MainNav from "./mainNav"
import "./header.css"

const Header = ({ siteTitle }) => {
  return (
  <header
  className="header"  
  style={{
      width: `100%`,
      zIndex: `2`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1rem 1rem 9px 0`,
      }}
    >
      <h1 style={{
        display: `inline-block`,
        margin: 0,
        }}>
        <Link
          to="/"
          style={{
            color: `var(--white)`, // white
            textDecoration: `none`,
          }}
        >

          <StaticImage
            src="../images/logo-no-tagline.png"
            alt="The Coach's Call crest"
            width={250}
            className="logo"
          />

        </Link>
      </h1>
        <MainNav style={{ zIndex: 99,}} />
    </div>
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

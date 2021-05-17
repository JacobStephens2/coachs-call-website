import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import MainNav from "./mainNav"

const Header = ({ siteTitle }) => {
  return (
  <header
    style={{
      background:  `var(--white)`,
      marginBottom: `1rem`,
      position: `fixed`,
      width: `100%`,
      zIndex: `2`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem 0 25px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--white)`, // white
            textDecoration: `none`,
          }}
        >

          <StaticImage
            src="../images/CoachsCall-Type-Logo-no-margin.png"
            alt="The Coach's Call crest"
            placeholder="blurred"
            width={250}
          />

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

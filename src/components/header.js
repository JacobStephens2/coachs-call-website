import * as React from "react"

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import PropTypes from "prop-types"

import MainNav from "./MainNav"

import Container from "react-bootstrap/Container"

import "../styles/style.scss"

const Header = ({ siteTitle }) => {
  return (
    <header className="header">
      <div
        style={{
          margin: `0 auto`,
          padding: `1rem 1rem 1rem 0`,
        }}
      >
        <Container>
          <div className="logo-box">
            <Link
              to="/"
              style={{
                color: `var(--white)`,
                textDecoration: `none`,
              }}
            >
              <StaticImage
                src="../images/logo-no-tagline.png"
                alt="The Coach's Call crest"
                width={390}
                className="logo"
              />
            </Link>
          </div>
        </Container>
        <MainNav style={{ zIndex: 99 }} />
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

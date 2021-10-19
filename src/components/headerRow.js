import * as React from "react"

import { Link } from "gatsby"

import Logo from "../../svg/logo-wide-no-tagline.svg"

import PropTypes from "prop-types"

import MainNavComponent from "./MainNavComponent"

import Container from "react-bootstrap/Container"

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
            <Link to="/">
              <Logo className="header-logo" />
            </Link>
          </div>
        </Container>
        <MainNavComponent style={{ zIndex: 99 }} />
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

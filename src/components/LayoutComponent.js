import * as React from "react"

import PropTypes from "prop-types"

import Header from "./headerRow"
import Footer from "./Footer"

import BottomBar from "../components/BottomBar"

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children, props }) => {
  return (
    <div id="outer-container">
      <Header siteTitle="Coach's Call" />
      <main id="page-wrap">
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <main>{children}</main>
          <BottomBar />
        </div>
        <Footer />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

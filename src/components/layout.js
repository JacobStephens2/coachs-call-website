import * as React from "react"

import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

 const Layout = ({ children }) => {
 
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
 
import * as React from "react"

import PropTypes from "prop-types"

import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/style.scss"
import "@wordpress/block-library/build-style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
	 query SiteTitleQuery {
	   wp {
		 generalSettings {
		   title
		 }
	   }
	 }
   `)
 
 return (
	 <div id="outer-container">
		<Header siteTitle={data.wp.generalSettings.title || `Title`} />
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
 
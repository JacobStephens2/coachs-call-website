/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"

import "./layout.css"
import "@wordpress/block-library/build-style/style.css"
 
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
	 <>
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
	 </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 
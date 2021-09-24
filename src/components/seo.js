/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

import { graphql } from "gatsby"
import { StaticQuery } from "gatsby"

function Seo({ description, lang, meta, title }) {

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => {
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={data.siteMetadata?.title}
          titleTemplate={data.siteMetadata.defaultTitle ? `%s | ${data.siteMetadata.defaultTitle}` : null}
          meta={[
            {
              name: `description`,
              content: data.sitemetaData.description,
            },
            {
              property: `og:title`,
              content: data.site.siteMetadatatitle,
            },
            {
              property: `og:description`,
              content: data.site.siteMetadata.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata?.author || ``,
            },
            {
              name: `twitter:title`,
              content: data.site.siteMetadatatitle,
            },
            {
              name: `twitter:description`,
              content: data.site.siteMetadata.description,
            },
            ].concat(meta)}
          >
          <script src="https://kit.fontawesome.com/5ebbfa01b2.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="https://use.typekit.net/fot1kfm.css"></link>
        </Helmet>
      }}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo

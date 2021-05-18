import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import * as style from "./single.module.css"
import "./style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from "../components/map"

const NamedPage = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Seo title={page.title} />
      <article className={style.article}>
        {page.featuredImage && (
          <figure className={style.featimg}>
            <Img
              fluid={page.featuredImage.node.localFile.childImageSharp.fluid}
              alt={page.featuredImage.node.altText}
            />
          </figure>
        )}
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        <Map />
      </article>
    </Layout>
  )
}

export default NamedPage;

export const query = graphql`
  query($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
      author {
        node {
          name
        }
      }
      date
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

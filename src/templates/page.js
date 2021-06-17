import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "./single.module.css"

const NamedPage = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Seo title={page.title} />
      <article className={style.pageArticle}>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
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
    }
  }
`

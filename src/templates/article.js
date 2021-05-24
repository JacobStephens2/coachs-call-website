import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

import Video from "../components/video"

import Layout from "../components/layout"
import * as style from "./article.module.css"

const Article = ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <article className={style.article}>
        {article.frontmatter.featimg && (
          <figure className={style.featimg}>
            <Img
              fluid={article.frontmatter.featimg.childImageSharp.fluid}
              alt={article.frontmatter.title}
            />
          </figure>
        )}

        <Video
          videoSourceURL={article.frontmatter.videoSourceURL}
          videoTitle={article.frontmatter.videoTitle}
        />
        <h1 className={style.article__title}>{article.frontmatter.title}</h1>

        <div className={style.article__meta}>
          by {article.frontmatter.author}. Published{" "}
          {new Date(article.frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </div>
        <div className={style.article__tax}>
          Filed under:{" "}
          {article.frontmatter.subject.map((subject, index) => [
            index > 0 && ", ",
            <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
              {subject}
            </Link>,
          ])}
        </div>
        <div
          className={style.article__content}
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </Layout>
  )
}

export default Article;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        videoSourceURL
        videoTitle
        subject
        author
        featimg {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

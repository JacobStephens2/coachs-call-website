import React from 'react';
import { graphql } from "gatsby"

import * as style from "./single.module.css"
import "./style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LocationsMap from "../components/locationsMap"
import { StaticImage } from "gatsby-plugin-image"


const NamedPage = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Seo title={page.title} />
      <article className={style.article}>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>
      <h2 className={style.center__text}>Locations</h2>
      <LocationsMap />
      <div className={style.container__top}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-track-119954823_Preview.jpeg"
          alt="Track"
          placeholder="blurred"
        />
        <h2 className={style.centered}>About</h2>
      </div>
      <div className={style.container}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-baseball_batting_spot-13720898_Preview.jpeg"
          alt="Baseball batting spot"
          placeholder="blurred"
        />
        <h2 className={style.centered}>Work</h2>
      </div>
      <div className={style.container}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-high_school_fields-296321889_Preview.jpeg"
          alt="Baseball batting spot"
          placeholder="blurred"
        />
        <h2 className={style.centered}>Contact</h2>
      </div>
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


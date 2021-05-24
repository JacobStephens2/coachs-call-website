import React from "react";
import { graphql } from "gatsby"

import * as style from "./single.module.css"
import "./style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LocationsMap from "../components/locationsMap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import GrassVideo from "../videos/AdobeStock-grass-lines-259971257_Video_HD_Preview.mp4"
import GoalPostVideo from "../videos/AdobeStock-football-goal-225268472_Video_HD_Preview.mp4"

const NamedPage = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Seo title={page.title} />
      <article className={style.article}>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>

      <div className={style.container}>
        <video className={style.dark__overlay} autoPlay muted loop>
          <source src={GrassVideo} type="video/mp4" />
        </video>

        <h2 className={style.centered}>Glorifying God and Experiencing Joy Through Sports</h2>
      </div>

      <h2 className={style.center__text}>Locations</h2>
      <LocationsMap />
      <div className={style.container__top}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-track-119954823_Preview.jpeg"
          alt="Track"
          placeholder="blurred"
        />
        <h2 className={style.centered}><Link to="/about">About</Link></h2>
      </div>
      <div className={style.container}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-baseball_batting_spot-13720898_Preview.jpeg"
          alt="Baseball batting spot"
          placeholder="blurred"
        />
        <h2 className={style.centered}><Link to="/work">Work</Link></h2>
      </div>
      <div className={style.container}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-high_school_fields-296321889_Preview.jpeg"
          alt="Baseball batting spot"
          placeholder="blurred"
        />
        <h2 className={style.centered}><Link to="/contact">Contact</Link></h2>
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

const isBrowser = typeof window !== "undefined"

if (isBrowser) {
  let videoSource = ["../videos/AdobeStock-grass-lines-259971257_Video_HD_Preview.mp4", "../videos/AdobeStock-football-goal-225268472_Video_HD_Preview.mp4"];
  let i = 0; // define i
  let videoCount = videoSource.length;

  function videoPlay(videoNum) {
      document.querySelector("video source").setAttribute("src", videoSource[videoNum]);
  }
  document.querySelector("video source").addEventListener("ended", myHandler, false);
  videoPlay(0); // play the video

  function myHandler() {
      i++;
      if (i == (videoCount - 1)) {
          i = 0;
          videoPlay(i);
      } else {
          videoPlay(i);
      }
  }
}

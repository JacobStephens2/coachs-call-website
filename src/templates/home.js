import React from "react";

import * as style from "./single.module.css"
import "./style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LocationsMap from "../components/locationsMap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import AthleticVideo from "../videos/AdobeStock_athletic-video-montage.mp4"

const NamedPage = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Seo title={page.title} />

      <div style={{height: "71px"}}></div>

      <div className={style.hero__container}>

        <video className={`${style.video}`} autoPlay playsInline muted loop>
          <source src={AthleticVideo} type="video/mp4" />
        </video>
        
        <div className={style.crest}>
          <StaticImage
              alt="Coach's Call logo crest"
              placeholder="blurred"
              loading="eager"
              src="../images/CoachsCall-Crest-Logo-icon-square.png"
          />
        </div>

        <h2 className={style.hero__text}>Glorifying God and Experiencing Joy Through&nbsp;Sports</h2>

      </div>

      <h2 className={style.center__text}>Locations</h2>
      
      <LocationsMap />

      <div className={style.container}>
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

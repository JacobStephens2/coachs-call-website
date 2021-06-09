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
  const cardHeight = 500;
  const cardWidth = 749;
  return (
    <Layout>
      <Seo title="Home" />

      <div className={style.topBar}></div>

      <div className={style.heroContainer}>

        <video className={`${style.video}`} autoPlay playsInline muted loop>
          <source src={AthleticVideo} type="video/mp4" />
        </video>
        
        <div className={style.crestContainer}>
          <StaticImage
              className={style.crest}
              alt="Coach's Call logo crest"
              placeholder="blurred"
              loading="eager"
              src="../images/CoachsCall-Crest-Logo-icon-square.png"
              height="330"
          />
        </div>

        <h2 className={style.heroHeader}>Partnering with athletic departments and coaches to worship God through&nbsp;sports</h2>

      </div>

      <div className={style.visionBlock}>
        <p className={style.visionParagraph}>My vision is for coaches to see the act of coaching, the pursuit of success, and the mentoring of athletes as acts of worship to the Creator. I envision the joy coaches take in their work as that of a composer creating masterpieces as unto the&nbsp;Lord.</p>
      </div>

      <h2 className={style.centerText}>Locations</h2>

      <div className={style.contentBlock}>
        <p className={style.standaloneParagraph}>Coach's Call operates in a variety of locations throughout the United States.</p>
      </div>

      <LocationsMap />

      <div className={style.cardGroup}>

        <div className={style.cardContainer}>
          <StaticImage 
            className={style.imageOverlay}
            src="../images/AdobeStock-track-119954823_Preview.jpeg"
            alt="Track"
            placeholder="blurred"
            height={cardHeight}
            width={cardWidth}
          />
          <h2 className={style.cardTitle}><Link to="/about">About</Link></h2>
        </div>

        <div className={style.cardContainer}>
          <StaticImage 
            className={style.imageOverlay}
            src="../images/AdobeStock-baseball_batting_spot-13720898_Preview.jpeg"
            alt="Baseball batting spot"
            placeholder="blurred"
            height={cardHeight}
            width={cardWidth}
          />
          <h2 className={style.cardTitle}><Link to="/work">Work</Link></h2>
        </div>

        <div className={style.cardContainer}>
          <StaticImage 
            className={style.imageOverlay}
            src="../images/AdobeStock-high_school_fields-296321889_Preview.jpeg"
            alt="Athletic field"
            placeholder="blurred"
            height={cardHeight}
            width={cardWidth}
          />
          <h2 className={style.cardTitle}><Link to="/contact">Contact</Link></h2>
        </div>
        
      </div>
    </Layout>
  )
}


export default NamedPage;

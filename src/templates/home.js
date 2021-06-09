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

      <section className={style.heroContainer}>

        <video className={`${style.video}`} autoPlay playsInline muted loop>
          <source src={AthleticVideo} type="video/mp4" />
        </video>
        
        <div className={style.gridOverVideo}>
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

          <div className={style.heroText}>
            <h2 className={style.heroHeader}>Partnering with athletic departments and coaches to worship God through&nbsp;sports</h2>
            <div className={style.visionParagraph}><h2>Partnering with athletic departments and coaches to worship God through&nbsp;sports</h2><p>"My vision is for coaches to see the act of coaching, the pursuit of success, and the mentoring of athletes as acts of worship to the Creator. I envision the joy coaches take in their work as that of a composer creating masterpieces as unto the Lord." John&nbsp;Levis</p></div>
          </div>

        </div>
        
      </section>

      <div className={style.visionBlockMobile}>
        <p className={style.visionParagraphMobile}>"My vision is for coaches to see the act of coaching, the pursuit of success, and the mentoring of athletes as acts of worship to the Creator. I envision the joy coaches take in their work as that of a composer creating masterpieces as unto the Lord." John&nbsp;Levis</p>
      </div>

      <section>
        <h2 className={style.centerText}>Locations</h2>

        <div className={style.contentBlock}>
          <p className={style.standaloneParagraph}>Coach's Call operates in a variety of locations throughout the United States.</p>
        </div>

        <div className={style.map}>
          <LocationsMap />
        </div>
      </section>

      <div className={style.cardGroup}>

        <div className={style.cardContainer}>
          <StaticImage 
            className={style.cardImage}
            src="../images/AdobeStock-track-119954823_Preview.jpeg"
            alt="Track"
            height={cardHeight}
            width={cardWidth}
          />
          <h2 className={style.cardTitle + ' ' + style.cardRight}><Link to="/about">About</Link></h2>
          <p className={style.cardTitle + ' ' + style.cardLeft + ' ' + style.cardText}>The mission and vision of Coach’s Call will be performed in two different types of delivery- professional development seminars and one on one or small group&nbsp;sessions.</p>
        </div>

        <div className={style.cardContainer}>
          <StaticImage 
            className={style.cardImage}
            src="../images/AdobeStock-baseball_batting_spot-13720898_Preview.jpeg"
            alt="Baseball batting spot"
            height={cardHeight}
            width={cardWidth}
          />
          <h2 className={style.cardTitle + ' ' + style.cardLeft}><Link to="/work">Work</Link></h2>
          <p className={style.cardTitle + ' ' + style.cardRight + ' ' + style.cardText}>The mission and vision of Coach’s Call will be performed in two different types of delivery- professional development seminars and one on one or small group&nbsp;sessions.</p>
        </div>

        <div className={style.cardContainer}>
          <StaticImage 
            className={style.cardImage}
            src="../images/AdobeStock-high_school_fields-296321889_Preview.jpeg"
            alt="Athletic field"
            height={cardHeight}
            width={cardWidth}
          />
          <h2 className={style.cardTitle + ' ' + style.cardRight}><Link to="/contact">Contact</Link></h2>
          <p className={style.cardTitle + ' ' + style.cardLeft + ' ' + style.cardText}>The mission and vision of Coach’s Call will be performed in two different types of delivery- professional development seminars and one on one or small group&nbsp;sessions.</p>
        </div>
        
      </div>
    </Layout>
  )
}


export default NamedPage;

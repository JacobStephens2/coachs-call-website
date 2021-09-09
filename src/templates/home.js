import React from "react";

import * as style from "./single.module.css"
import "./style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import AthleticVideo from "../videos/AdobeStock_athletic-video-montage.mp4"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NamedPage = ({ data }) => {
  const cardHeight = 500;
  const cardWidth = 749;
  return (
	<Layout>
	  <Seo title="Home" />

		<video className={`${style.video}`} autoPlay playsInline muted loop>
			<source src={AthleticVideo} type="video/mp4" />
		</video>
		<div className={style.gridOverVideo}>
			<Container>
				<Row>
					<Col className="order-lg-2" lg={5}>
						<StaticImage
							className={style.crest}
							alt="Coach's Call logo crest"
							placeholder="blurred"
							loading="eager"
							src="../images/CoachsCall-Crest-Logo-icon-square.png"
							height="330"
						/>
					</Col>
					<Col className="order-lg-1 introText" lg={7}>
						<h2>Deepening coach impact through one-on-one mentoring, consulting, and&nbsp;seminars.</h2>
						
						<p className="subhead">Founder and coach John Levis has 25 years experience in coaching, young life Ministry, and college&nbsp;administration.</p>
						<p className="subhead tagline">Glorifying God and Experiencing Joy Through Sports</p>
					</Col>
				</Row>
			</Container>
		</div>
			

		<div className={style.visionBlockMobile}>
			<p className={style.visionParagraphMobile}>"My vision is for coaches to see the act of coaching, the pursuit of success, and the mentoring of athletes as acts of worship to the Creator. I envision the joy coaches take in their work as that of a composer creating masterpieces as unto the Lord." John&nbsp;Levis</p>
		</div>


		{/* Map Text Block */}
		<h2 className={style.centerText}>Locations</h2>
		<div className={style.contentBlock}>
			<p className={style.standaloneParagraph}>Coach's Call operates in a variety of locations throughout the United States.</p>
		</div>


		{/* Card Group Container */}
		<div className={style.cardGroup}>




			{/* Work Card */}
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

			{/* About Card */}
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

			{/* Contact Card */}
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
			
		{/* End of Card Group Container */}
		</div>

	</Layout>
  )
}


export default NamedPage;

import * as React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Col from 'react-bootstrap/Col';
import * as style from "../pages/index.module.scss"
import AthleticVideo from "../videos/AdobeStock_athletic-video-montage.mp4"
import { StaticImage } from "gatsby-plugin-image"
import DonateButton from './DonateButton'

const IntroRowVideo = (props) => {
	var contactButton = '';
	if (props.contact === "no") {
		contactButton = '';
	} else {
		contactButton = 
			<Link to="/contact">
				<Button>CONTACT JOHN</Button>
			</Link>;
	}

	var donateButton = '';
	if (props.donateButton === "yes") {
		donateButton = <DonateButton />;
	} else {
		donateButton = '';
	}

	var logo = ''
	if (props.logo === "yes") {
		logo = 
			<Col className="order-lg-2" lg={4}>
					<StaticImage
							alt="Coach's Call logo crest"
							placeholder="blurred"
							loading="eager"
							src="../images/CoachsCall-Crest-Logo-icon-square.png"
							height="320"
					/>
			</Col>;
	} else {
		logo = '';
	}

	return (
		<div>
				{/* add or remove autoPlay as an attribute to start or stop video */}
				<video className={`${style.video}`} autoPlay playsInline muted loop>
            <source src={AthleticVideo} type="video/mp4" />
        </video>
        <div className={style.videoBackground}>
            <Container>
                <Row className="introRow">
                    {logo}
                    <Col className="order-lg-1 introText" lg={8}>
                        <h2>{props.heading}</h2>
                        <p className="subhead">{props.subhead}</p>
												<p className="intro-body">{props.body}</p>
												{donateButton}
												{contactButton}
                    </Col>
                </Row>
                <Row>
                <p className="subhead tagline">Glorifying God and Experiencing Joy Through Sports</p>
                </Row>
            </Container>
        </div>
	  </div>
	)
}

export default IntroRowVideo
import * as React from 'react'

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import DonateButton from './DonateButton'

import AthleticVideo from "../videos/AdobeStock_athletic-video-montage.mp4"

const IntroRow = (props) => {
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

	var logo = '';
	var textColumnWidth = 8;
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
		textColumnWidth = 9;
	}

	return (
		<div>
				{/* add or remove autoPlay as an attribute to start or stop video */}
				<video autoPlay playsInline muted loop>
            <source src={AthleticVideo} type="video/mp4" />
        </video>
        <div className="videoBackground">
            <Container>
                <Row className="introRow">
                    {logo}
                    <Col className="order-lg-1 introText" lg={textColumnWidth}>
                        <h1>{props.heading}</h1>
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

IntroRow.defaultProps = {
	contact: "no",
}

export default IntroRow
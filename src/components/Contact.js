import * as React from 'react'

import ContactText from './ContactText';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { StaticImage } from "gatsby-plugin-image"

const Contact = () => {
	return (
		<section className="dark-blue-section">
				<Container>
			<Row>
					<Col>
						<ContactText />
					</Col>
					<Col className="justify-end order-lg-2">
							<StaticImage
									alt="Coach's Call logo crest"
									placeholder="blurred"
									loading="eager"
									src="../images/CoachsCall-Crest-Logo-icon-square.png"
									height="150"
									className="white-shadow"
							/>
					</Col>
			</Row>
				</Container>
		</section>
	)
}

export default Contact;
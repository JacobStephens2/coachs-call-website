import * as React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoImages = (props) => {
	if (props.image === '') {
		return (
			''
		);
	} else {
		return (
			<span>
				<Row>
					<Col>
					<StaticImage
						className="drop-shadow"
						src="../images/WorkImage1.jpg"
						alt="The Coaching Pyramid"
						/>
					</Col>
					<Col>
					<StaticImage
						className="drop-shadow"
						src="../images/WorkImage2.jpg"
						alt="Joy and Performance slide"
					/>
					</Col>
				</Row>
			</span>
		);
	}
}

TwoImages.defaultProps = {
	image: {},
	imageAlt: {},
	imageTwo: {},
	imageAltTwo: {}
}

export default TwoImages;
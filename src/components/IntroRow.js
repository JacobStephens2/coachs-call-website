import * as React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "gatsby"
import Col from 'react-bootstrap/Col';

const IntroRow = (props) => {
	return (
		<section className="grey-section">
			<Container>
				<Row className="introRow">
					<Col xl={8}>
						<h1>{props.heading}</h1>
						<p className="subhead">{props.subhead}</p>
						<Link to="/contact"><Button>CONTACT JOHN</Button></Link>
					</Col>
				</Row>
				<Row>
					<p className="subhead tagline">Glorifying God and Experiencing Joy Through Sports</p>
				</Row>
			</Container>
	  </section>
	)
}

export default IntroRow
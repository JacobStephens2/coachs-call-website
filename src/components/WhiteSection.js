import * as React from 'react'
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const WhiteSection = (props) => {
	return (
		<section id={props.id}>
			<Container>
				<h2>{props.heading}</h2>
				<h3>{props.subheading}</h3>
				<p>{props.description}</p>
				<Link to={props.link}><Button>{props.buttonText}</Button></Link>
			</Container>
		</section>
	)
}

export default WhiteSection
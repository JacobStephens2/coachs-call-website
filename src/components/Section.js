import * as React from 'react'
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ListItemNoDivider from './ListItemNoDivider'
import TwoImages from './TwoImages'
import DonateButton from './DonateButton'

const Section = (props) => {
	
	var quote = ''
	if (props.quote === "no") {
		quote = '';
	} else {
		quote = 
			<Col lg={9}>
				<q className="quote-no-cite">{props.quote}</q>
			</Col>;
	}

	var list = ''
	if (props.list === "no") {
		list = '';
	} else {
		list = 
			<ListItemNoDivider
				bold={props.bold}
				description={props.description}
				boldTwo={props.boldTwo}
				descriptionTwo={props.descriptionTwo}
				boldThree={props.boldThree}
				descriptionThree={props.descriptionThree}
			/>
	}
	var button = ''
	if (props.button === "no") {
		button = '';
	} else if (props.button === "donate") {
		button = <DonateButton />;
	} else {
		button = <Link to={props.link}><Button>{props.buttonText}</Button></Link>;
	}
	
	return (
		<section id={props.id} className={props.sectionClass}>
			<Container>
				{props.children}
				<Col lg={7}>
				<h2>{props.heading}</h2>
				<h3>{props.subheading}</h3>
				<p>{props.description}</p>
				</Col>
				
				{list}
				<TwoImages
					image={props.image}
					imageAlt={props.imageAlt}
					imageTwo={props.imageTwo}
					imageAltTwo={props.imageAltTwo}
				/>
				{quote}
				{button}
			</Container>
		</section>
	)
}

export default Section
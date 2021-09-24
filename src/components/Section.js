import * as React from 'react'

import { Link } from "gatsby"

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
				<p className="quote-no-cite quote-no-marks">{props.quote}</p>
			</Col>;
	}

	var list = ''
	if (props.list === "no") {
		list = '';
	} else {
		list = 
			<ListItemNoDivider
				bold={props.boldList}
				description={props.descriptionList}
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
		button = <Link to={props.link}><Button className="section-button">{props.buttonText}</Button></Link>;
	}

	var belowImages = ''
	if (props.belowImages === "no" ) {
		belowImages = '';
	} else {
		belowImages = 
			<TwoImages
				image={props.image}
				imageAlt={props.imageAlt}
				imageTwo={props.imageTwo}
				imageAltTwo={props.imageAltTwo}
			/>;
	}
	
	var boldIntro = ''
	if (props.bold === "no" ) {
		boldIntro = '';
	} else {
		boldIntro = props.bold
	}

	if (props.endButton === "no") {
		return (
			<section id={props.id} className={props.sectionClass}>
				<Container>
					<Row gx={20}>
						<Col lg={7}>
						<h2>{props.heading}</h2>
						<p className="subhead">{props.subheading}</p>
						<p><strong>{boldIntro}</strong> {props.description}</p>
						{button}
						</Col>
	
						<Col lg={5}>
						{props.children}
						</Col>
					</Row>
					{list}
					{belowImages}
					{quote}
				</Container>
			</section>
		)		
	} else {
		return (
			<section id={props.id} className={props.sectionClass}>
				<Container>
					<Row gx={20}>
						<Col lg={7}>
						<h2>{props.heading}</h2>
						<p className="subhead">{props.subheading}</p>
						<p><strong>{boldIntro}</strong> {props.description}</p>
						</Col>
						<Col lg={5}>
						{props.children}
						</Col>
					</Row>
					{list}
					{belowImages}
					{quote}
					{button}
				</Container>
			</section>
		)
	}
}

Section.defaultProps = {
	belowImages: "no",
	quote: "no",
	list: "no",
	button: "no",
	bold: "no",
	endButton: "no"
}





export default Section
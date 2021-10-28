import * as React from "react"

import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import ListItemNoDivider from "./ListItemNoDivider"
import TwoImages from "./TwoImages"
import DonateButton from "./DonateButton"
import QuoteSection from "./QuoteSection"

const Section = props => {
  var quote = ""
  if (props.quote === "no") {
    quote = ""
  } else {
    quote = <QuoteSection quote={props.quote} citation={props.citation} />
  }

  var list = ""
  if (props.list === "no") {
    list = ""
  } else {
    list = (
      <ListItemNoDivider
        bold={props.boldList}
        description={props.descriptionList}
        boldTwo={props.boldTwo}
        descriptionTwo={props.descriptionTwo}
        boldThree={props.boldThree}
        descriptionThree={props.descriptionThree}
      />
    )
  }
  var button = ""
  if (props.button === "no") {
    button = ""
  } else if (props.button === "donate") {
    button = <DonateButton />
  } else {
    button = (
      <Link to={props.link}>
        <Button className="section-button">{props.buttonText}</Button>
      </Link>
    )
  }

  var belowImages = ""
  if (props.belowImages === "no") {
    belowImages = ""
  } else {
    belowImages = (
      <Col className="vertical-grey-rule" lg={5} xxl={6}>
        <TwoImages
          image={props.image}
          imageAlt={props.imageAlt}
          imageTwo={props.imageTwo}
          imageAltTwo={props.imageAltTwo}
        />
      </Col>
    )
  }

  var boldIntro = ""
  if (props.bold === "no") {
    boldIntro = ""
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
              <p>
                <strong>{boldIntro}</strong> {props.description}
              </p>
              {list}
              {button}
            </Col>

            <Col lg={5}>{props.children}</Col>
            {belowImages}
          </Row>
        </Container>
        {quote}
      </section>
    )
  } else {
    return (
      <section id={props.id} className={props.sectionClass}>
        <Container>
          <Row gx={20}>
            <Col className="sems-and-workshops" lg={7} xxl={6}>
              <h2>{props.heading}</h2>
              <p className="subhead">{props.subheading}</p>
              <p>
                <strong>{boldIntro}</strong> {props.description}
              </p>
              {list}
              {button}
            </Col>
            {belowImages}
            <Col lg={5}>{props.children}</Col>
          </Row>
        </Container>
        {quote}
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
  endButton: "no",
}

export default Section

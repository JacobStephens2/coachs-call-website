import * as React from "react"

import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import ListItemNoDivider from "./ListItemNoDivider"
import SeminarImages from "./SeminarImages"
import DonateButton from "./DonateButton"
import QuoteSection from "./QuoteSection"

const WorkSection = props => {
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

  var seminarImages = ""
  if (props.seminarImages === "no") {
    seminarImages = ""
  } else {
    seminarImages = (
      <Col className="vertical-grey-rule" md={6}>
        <SeminarImages />
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
            <Col lg={6}>
              <h2>{props.heading}</h2>
              <p className="subhead">{props.subheading}</p>
              <p>
                <strong>{boldIntro}</strong> {props.description}
              </p>
              {list}
              {button}
            </Col>

            <Col lg={6}>{props.children}</Col>
            {seminarImages}
          </Row>
        </Container>
        {quote}
      </section>
    )
  } else if (props.subClass === "sems-and-workshops") {
    return (
      <section id={props.id} className={props.sectionClass}>
        <Row gx={20}>
          <Col className="one-col-section sems-and-workshops" md={6}>
            <h2>{props.heading}</h2>
            <p className="subhead">{props.subheading}</p>
            <p>
              <strong>{boldIntro}</strong> {props.description}
            </p>
            {list}
            {button}
          </Col>
          {seminarImages}
          <Col lg={5}>{props.children}</Col>
        </Row>
        {quote}
      </section>
    )
  } else {
    return (
      <section id={props.id} className={props.sectionClass}>
        <Row gx={20}>
          <Col className="one-col-section" md={6}>
            <h2>{props.heading}</h2>
            <p className="subhead">{props.subheading}</p>
            <p>
              <strong>{boldIntro}</strong> {props.description}
            </p>
            {list}
            {button}
          </Col>
          {seminarImages}
          <Col lg={5}>{props.children}</Col>
        </Row>
        {quote}
      </section>
    )
  }
}

WorkSection.defaultProps = {
  seminarImages: "no",
  quote: "no",
  list: "no",
  button: "no",
  bold: "no",
  endButton: "no",
  subClass: "no",
}

export default WorkSection

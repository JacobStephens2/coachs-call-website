import * as React from "react"

import { Link } from "gatsby"

import Crest from "../../svg/crest-white-stars.svg"

import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

import DonateButton from "./DonateButton"

import "./IntroRowStyle.css"

const IntroRow = props => {
  var logo = ""
  var textColumnWidth = 8
  if (props.logo === "yes") {
    logo = (
      <Col className="order-lg-2 intro-row-crest" md={12} lg={4} xl={3}>
        <Crest />
      </Col>
    )
  } else {
    logo = ""
    textColumnWidth = 9
  }

  var contactButton = ""
  if (props.contact === "no") {
    contactButton = ""
  } else {
    contactButton = (
      <Link to="/contact">
        <Button>CONTACT JOHN</Button>
      </Link>
    )
  }
  var emailButton = ""
  if (props.emailButton === "no") {
    emailButton = ""
  } else {
    emailButton = (
      <a href="mailto:john@coachscall.org">
        <Button>EMAIL JOHN</Button>
      </a>
    )
  }

  var donateButton = ""
  if (props.donateButton === "yes") {
    donateButton = <DonateButton />
  } else {
    donateButton = ""
  }

  return (
    <div className="introRowFirstDiv">
      {props.children}
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
              {emailButton}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

IntroRow.defaultProps = {
  contact: "no",
  emailButton: "no",
}

export default IntroRow

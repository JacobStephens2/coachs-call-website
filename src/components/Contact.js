import * as React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Crest from "../../svg/crest-white-stars.svg"

const Contact = () => {
  return (
    <section className="dark-blue-section">
      <Container>
        <Row>
          <Col xs={8}>
            <p className="subhead tagline">
              Glorifying God and Experiencing Joy Through&nbsp;Sports
            </p>
          </Col>
          <Col className="justify-end contact-section-crest-col" xs={4}>
            <Crest />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

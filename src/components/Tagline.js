import * as React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Crest from "../../svg/crest-white-stars.svg"

import "./TaglineStyle.css"

const Tagline = () => {
  return (
    <section className="dark-blue-section one-col-section tagline-section">
      <Container>
        <Row>
          <Col xs={8} sm={9} md={9} xxl={7}>
            <p className="subhead tagline">
              Glorifying God and Experiencing Joy Through&nbsp;Sports
            </p>
          </Col>
          <Col
            className="justify-end contact-section-crest-col"
            xs={4}
            sm={3}
            md={2}
            xxl={5}
          >
            <Crest />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Tagline

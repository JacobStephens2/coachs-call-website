import * as React from "react"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

const MapSection = props => {
  return (
    <section id={props.id} className={props.sectionClass}>
      <Row style={{ paddingLeft: `1rem` }} gx={20}>
        <Col className="one-col-section map-text" sm={12} lg={6}>
          <Container>
            <h2>{props.heading}</h2>
            <p className="subhead">{props.subheading}</p>
            <p>{props.description}</p>
            <Link to={props.link}>
              <Button className="section-button">{props.buttonText}</Button>
            </Link>
          </Container>
        </Col>
        <Col sm={12} lg={6}>
          {props.children}
        </Col>
      </Row>
    </section>
  )
}

export default MapSection

import * as React from "react"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const MapSection = props => {
  return (
    <section id={props.id} className={props.sectionClass}>
      <Row style={{ paddingLeft: `1rem` }} gx={20}>
        <Col className="one-col-section" md={6}>
          <h2>{props.heading}</h2>
          <p className="subhead">{props.subheading}</p>
          <p>{props.description}</p>
          <Link to={props.link}>
            <Button className="section-button">{props.buttonText}</Button>
          </Link>
        </Col>
        <Col lg={5}>{props.children}</Col>
      </Row>
    </section>
  )
}

export default MapSection

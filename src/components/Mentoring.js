import * as React from "react"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import ListItemNoDivider from "./ListItemNoDivider"

const Mentoring = props => {
  return (
    <section id={props.id} className={props.sectionClass}>
      <Container>
        <Row gx={20}>
          <Col className="sems-and-workshops" lg={7} xxl={6}>
            <h2>{props.heading}</h2>
            <p className="subhead">{props.subheading}</p>
            <p>
              <strong>{props.bold}</strong> {props.description}
            </p>
            <ListItemNoDivider
              bold={props.boldList}
              description={props.descriptionList}
              boldTwo={props.boldTwo}
              descriptionTwo={props.descriptionTwo}
              boldThree={props.boldThree}
              descriptionThree={props.descriptionThree}
            />
            <Link to={props.link}>
              <Button className="section-button">{props.buttonText}</Button>
            </Link>
          </Col>
          <Col lg={5}>{props.children}</Col>
        </Row>
      </Container>
    </section>
  )
}

Mentoring.defaultProps = {
  belowImages: "no",
  quote: "no",
  list: "no",
  button: "no",
  bold: "no",
  endButton: "no",
}

export default Mentoring

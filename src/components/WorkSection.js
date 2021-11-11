import * as React from "react"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import ListItemNoDivider from "./ListItemNoDivider"
import SeminarImages from "./SeminarImages"
import QuoteSection from "./QuoteSection"

const WorkSection = props => {
  return (
    <section id={props.id} className={props.sectionClass}>
      <Row gx={20}>
        <Col className="one-col-section sems-and-workshops" md={6}>
          <h2>{props.heading}</h2>
          <p className="subhead">{props.subheading}</p>
          <p>
            <strong>{boldIntro}</strong> {props.description}
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
        <Col className="vertical-grey-rule" md={6}>
          <SeminarImages />
        </Col>
        <Col lg={5}>{props.children}</Col>
      </Row>
      <QuoteSection quote={props.quote} citation={props.citation} />
    </section>
  )
}

WorkSection.defaultProps = {
  seminarImages: "no",
  quote: "no",
  list: "no",
  bold: "no",
  endButton: "no",
  subClass: "no",
}

export default WorkSection

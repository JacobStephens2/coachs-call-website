import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import ListItemNoDivider from "./ListItemNoDivider"
import QuoteSection from "./QuoteSection"

import "./WorkSection.css"

const WorkSection = props => {
  return (
    <section id="seminars-and-workshops" className="seminars-and-workshops">
      <Row gx={20}>
        <Col className="one-col-section sems-and-workshops" md={6}>
          <h2>Professional Development Seminars and&nbsp;Workshops</h2>
          <p className="subhead">{props.subheading}</p>
          <p>{props.description}</p>
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
          {props.children}
        </Col>
        <Col className="vertical-grey-rule" md={6}>
          <div className="photos-background">
            <a href="https://content.coachscall.org/wp-content/uploads/2021/11/CoachingPyramid-CoachsCall.jpg">
              <StaticImage
                className="work-photo"
                src="../images/WorkImage1.jpg"
                alt="The Coaching Pyramid"
              />
            </a>
            <a href="https://content.coachscall.org/wp-content/uploads/2021/11/JoyAndPerformance-CoachsCall.jpg">
              <StaticImage
                className="work-photo"
                src="../images/WorkImage2.jpg"
                alt="Joy and Performance slide"
              />
            </a>
          </div>
        </Col>
      </Row>
      <QuoteSection quote={props.quote} citation={props.citation} />
    </section>
  )
}

export default WorkSection

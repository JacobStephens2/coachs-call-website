import * as React from "react"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import QuoteMarks from "../../svg/quote-marks.svg"

import "./CoachQuoteStyle.css"

const CoachQuote = props => {
  return (
    <section className="coachquote-section one-col-section">
      <Container className="coachquote-container">
        <Col sm={12} md={10} lg={8} xl={7} className="coachquote-column">
          <blockquote>
            <QuoteMarks />
            {props.quote}”
          </blockquote>
          <cite>{props.source}</cite>
        </Col>
      </Container>
    </section>
  )
}

export default CoachQuote

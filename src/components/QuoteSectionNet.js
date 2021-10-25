import * as React from "react"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const QuoteSection = props => {
  return (
    <section className="grey-section quote-section net-background">
      <Container className="quote-center">
        <Col lg={8}>
          <q>{props.quote}</q>
          <cite
            className="quote-section-cite"
            dangerouslySetInnerHTML={{ __html: props.citation }}
          ></cite>
        </Col>
      </Container>
    </section>
  )
}

export default QuoteSection

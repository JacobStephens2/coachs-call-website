import * as React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const BlockQuote = props => {
  if (props.quotationMark === "no") {
    return (
      <section className="blue-section">
        <Container>
          <Row>
            <Col className="blockquote-column">
              <blockquote>{props.quote}”</blockquote>
              <cite>{props.source}</cite>
            </Col>
          </Row>
        </Container>
      </section>
    )
  } else {
    return (
      <section className="blue-section">
        <Container>
          <Row>
            <Col sm={12} md={2} lg={2} xl={2} className="large-quotation-mark">
              “
            </Col>
            <Col sm={12} md={10} lg={8} xl={7} className="blockquote-column">
              <blockquote>{props.quote}”</blockquote>
              <cite>{props.source}</cite>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default BlockQuote

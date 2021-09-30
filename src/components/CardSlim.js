import * as React from "react"

import { Link } from "gatsby"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const CardSlim = props => {
  return (
    <Col
      id={props.id}
      className="slim-card darkBackground"
      xs={4}
      sm={4}
      md={4}
      lg={4}
    >
      <Link to={props.link}>
        <Container className="no-padding">
          <h2>{props.category}</h2>
        </Container>
      </Link>
    </Col>
  )
}

export default CardSlim

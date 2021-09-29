import * as React from "react"

import { Link } from "gatsby"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const CardSlim = props => {
  return (
    <Col id={props.id} className="slim-card darkBackground" lg={4}>
      <Link to={props.link}>
        <Container>
          <h2>{props.category}</h2>
        </Container>
      </Link>
    </Col>
  )
}

export default CardSlim

import * as React from "react"

import { Link } from "gatsby"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import "./CardFullStyle.css"
import "./CardStyle.css"

const CardFull = props => {
  return (
    <Col id={props.id} className="card darkBackground" lg={4}>
      <Link to={props.link}>
        <Container>
          <h2>{props.category}</h2>
          <h3>{props.heading}</h3>
          <p>{props.description}</p>
        </Container>
      </Link>
    </Col>
  )
}

export default CardFull

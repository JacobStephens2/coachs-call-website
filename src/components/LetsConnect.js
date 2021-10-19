import * as React from "react"

import { Link } from "gatsby"
import Col from "react-bootstrap/Col"
import ContactText from "./ContactText"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const LetsConnect = () => {
  return (
    <section>
      <Container>
        <h2>Let's Connect</h2>
        <p>
          “As iron sharpens iron, so one person sharpens another.”{" "}
          <cite className="connect-cite">Proverbs 27:1</cite>
        </p>
        <Col>
          <ContactText />
        </Col>

        <Link to="/contact">
          <Button>CONTACT JOHN</Button>
        </Link>
      </Container>
    </section>
  )
}

export default LetsConnect

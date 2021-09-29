import * as React from "react"

import Container from "react-bootstrap/Container"

const ContactText = () => {
  return (
    <Container>
      <h4>CONTACT</h4>
      <span className="contact-text">
        <p>
          <a href="tel:484.574.1444">
            <i className="fas fa-phone-alt"></i>
            &ensp; 484.574.1444
          </a>
        </p>
        <p>
          <a href="mailto:john@coachscall.org">
            <i className="far fa-envelope"></i>
            &ensp; john@coachscall.org
          </a>
        </p>
      </span>
    </Container>
  )
}

export default ContactText

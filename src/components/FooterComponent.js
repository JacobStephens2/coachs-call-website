import * as React from "react"

import Container from "react-bootstrap/Container"

import "./FooterStyle.css"

const Footer = () => {
  return (
    <section className="one-col-section footer-section">
      <footer className="footer">
        <Container className="footer-container">
          <div>
            © {new Date().getFullYear()}
            {` `}
            <a
              rel="noreferrer"
              href="https://www.15eastcreative.com"
              target="_blank"
            >
              Coach’s Call
            </a>
            &ensp;|&ensp; All rights reserved&ensp;|&ensp;
            <a href="/privacy-policy">Privacy&nbsp;Policy</a>
          </div>
        </Container>
      </footer>
    </section>
  )
}

export default Footer

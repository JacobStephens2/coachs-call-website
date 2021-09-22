import React from "react"
import * as style from "./footer.module.css"
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div>
          © {new Date().getFullYear()}
          {` `}
          <a rel="noreferrer" href="https://www.15eastcreative.com" target="_blank" >Coach's Call</a>
          &ensp;|&ensp;
          All rights reserved.
          &ensp;|&ensp;
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

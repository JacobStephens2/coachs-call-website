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
          <a href="https://www.jacobstephens.net">Coach's Call</a>
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

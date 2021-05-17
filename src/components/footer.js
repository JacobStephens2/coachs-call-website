import React from "react"

import * as style from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.jacobstephens.net">Coach's Call</a>
        &ensp;|&ensp;
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer

import React from "react"

import FooterNav from "./footerNav"
import * as style from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.jacobstephens.net">Coach's&nbsp;Call</a>
        <div style={{position: `inline`,}}>&ensp;|&ensp;</div>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer

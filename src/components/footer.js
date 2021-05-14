import React from "react"

import FooterNav from "./footerNav"
import * as style from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <FooterNav />
      <div>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.jacobstephens.net">Coach's&nbsp;Call</a>
        <br />
        <a href="https://www.jacobstephens.net">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer

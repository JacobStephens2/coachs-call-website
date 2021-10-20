import * as React from "react"
import CardSlim from "../components/CardSlim"
import Row from "react-bootstrap/Row"

const BottomBar = () => {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    const bottomBar = document.querySelector(".bottom-bar")

    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        bottomBar.classList.add("slideIn")
        bottomBar.classList.remove("slideOut")
      } else {
        bottomBar.classList.add("slideOut")
        bottomBar.classList.remove("slideIn")
      }
      prevScrollpos = currentScrollPos
    }
  }

  return (
    <Row id="animated-example" className="bottom-bar animated">
      <div className="white-bar"></div>
      <CardSlim link="/about" category="About" id="aboutCard" />
      <CardSlim link="/work" category="Work" id="workCard" />
      <CardSlim link="/contact" category="Contact" id="contactCard" />
    </Row>
  )
}

export default BottomBar

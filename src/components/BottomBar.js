import * as React from "react"
import CardSlim from "../components/CardSlim"
import Row from "react-bootstrap/Row"

const BottomBar = () => {
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

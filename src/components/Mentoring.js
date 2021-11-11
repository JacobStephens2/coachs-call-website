import * as React from "react"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"

import ListItemNoDivider from "./ListItemNoDivider"

import "./MentoringStyle.css"

const Mentoring = props => {
  return (
    <section id="mentoring">
      <h2>{props.heading}</h2>
      <p className="subhead">{props.subheading}</p>
      <ListItemNoDivider
        bold={props.boldList}
        description={props.descriptionList}
        boldTwo={props.boldTwo}
        descriptionTwo={props.descriptionTwo}
        boldThree={props.boldThree}
        descriptionThree={props.descriptionThree}
      />
      <Link to={props.link}>
        <Button className="section-button">{props.buttonText}</Button>
      </Link>
    </section>
  )
}

Mentoring.defaultProps = {
  quote: "no",
  bold: "no",
}

export default Mentoring

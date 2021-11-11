import * as React from "react"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"

import ListItemNoDivider from "./ListItemNoDivider"

import "./WorkItemStyle.css"

const WorkItem = props => {
  return (
    <section id={props.id} className="work-area">
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
      <Link to="/contact">
        <Button className="section-button">LEARN MORE</Button>
      </Link>
    </section>
  )
}

export default WorkItem

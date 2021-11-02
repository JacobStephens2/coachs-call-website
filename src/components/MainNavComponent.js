import * as React from "react"

import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"

import "./MainNavComponentStyle.css"

const MainNavComponent = () => {
  return (
    <nav className="mainnav">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <ul>
            <li>
              <Link to="/about#john-levis">
                <i className="fas fa-angle-right"></i>&ensp;John Levis
              </Link>
            </li>
            <li>
              <Link to="/about#mission-vision">
                <i className="fas fa-angle-right"></i>
                &ensp;Mission&ensp;|&ensp;Vision
              </Link>
            </li>
          </ul>

          <li>
            <Link to="/work">Work</Link>
          </li>
          <ul>
            <li>
              <Link to="/work#seminars-and-workshops">
                <i className="fas fa-angle-right"></i>&ensp; Professional
                development seminars and&nbsp;workshops
              </Link>
            </li>
            <li>
              <Link to="/work#mentoring">
                <i className="fas fa-angle-right"></i>&ensp; One on one
                mentoring&nbsp;and small group&nbsp;sessions
              </Link>
            </li>
          </ul>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <ul>
            <li>
              <Link to="/contact#email">
                <i className="fas fa-angle-right"></i>&ensp;Email
              </Link>
            </li>
            <li>
              <Link to="/contact#call">
                <i className="fas fa-angle-right"></i>&ensp;Call
              </Link>
            </li>
          </ul>
        </ul>
      </Menu>
    </nav>
  )
}

export default MainNavComponent

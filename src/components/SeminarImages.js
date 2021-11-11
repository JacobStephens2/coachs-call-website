import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import "./SeminarImagesStyle.css"

const SeminarImages = props => {
  if (props.image === "") {
    return ""
  } else {
    return (
      <div className="photos-background">
        <a href="https://content.coachscall.org/wp-content/uploads/2021/11/CoachingPyramid-CoachsCall.jpg">
          <StaticImage
            className="work-photo"
            src="../images/WorkImage1.jpg"
            alt="The Coaching Pyramid"
          />
        </a>
        <a href="https://content.coachscall.org/wp-content/uploads/2021/11/JoyAndPerformance-CoachsCall.jpg">
          <StaticImage
            className="work-photo"
            src="../images/WorkImage2.jpg"
            alt="Joy and Performance slide"
          />
        </a>
      </div>
    )
  }
}

SeminarImages.defaultProps = {
  image: {},
  imageAlt: {},
  imageTwo: {},
  imageAltTwo: {},
}

export default SeminarImages

import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const TwoImages = props => {
  if (props.image === "") {
    return ""
  } else {
    return (
      <div className="about-photos-background">
        <StaticImage
          className="work-photo"
          src="../images/WorkImage1.jpg"
          alt="The Coaching Pyramid"
        />
        <figcaption>Sample slides used in John's teaching</figcaption>
        <StaticImage
          className="work-photo"
          src="../images/WorkImage2.jpg"
          alt="Joy and Performance slide"
        />
      </div>
    )
  }
}

TwoImages.defaultProps = {
  image: {},
  imageAlt: {},
  imageTwo: {},
  imageAltTwo: {},
}

export default TwoImages

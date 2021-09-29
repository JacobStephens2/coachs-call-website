import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Map = () => {
  return (
    <StaticImage
      alt="Map of Coach's Call locations"
      placeholder="blurred"
      loading="eager"
      src="../images/UnitedStatesMap_112467261.svg"
      height={500}
    />
  )
}

export default Map

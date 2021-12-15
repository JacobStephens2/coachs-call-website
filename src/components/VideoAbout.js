import * as React from "react"
import AthleticVideo from "../videos/goal.mp4"
import { StaticImage } from "gatsby-plugin-image"

const VideoAbout = () => {
  return (
    <span>
      <video className="mobile-hidden" autoPlay playsInline muted>
        <source src={AthleticVideo} type="video/mp4" />
      </video>
      <StaticImage
        className="desktop-hidden darken intro-row-image"
        src="../images/ImageGoal.png"
        alt="Football goal"
        height={750}
        layout="constrained"
      />
    </span>
  )
}

export default VideoAbout

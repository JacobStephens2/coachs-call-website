import * as React from "react"
import AthleticVideo from "../videos/net-1AdobeStock_167934773_Video_HD_Preview.mp4"
import { StaticImage } from "gatsby-plugin-image"

const VideoWork = () => {
  return (
    <span>
      <video className="mobile-hidden" autoPlay playsInline muted>
        <source src={AthleticVideo} type="video/mp4" />
      </video>
      <StaticImage
        className="desktop-hidden darken intro-row-image"
        src="../images/ImageWideGrass.png"
        alt="Athlete stretching"
        height={750}
        layout="constrained"
      />
    </span>
  )
}

export default VideoWork

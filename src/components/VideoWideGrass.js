import * as React from "react"
import AthleticVideo from "../videos/AdobeStock-field-wide-low-397213891_Video_HD_Preview.mp4"
import { StaticImage } from "gatsby-plugin-image"

const VideoWideGrass = () => {
	return (
		<span>
			<video className="mobile-hidden" autoPlay playsInline muted loop>
				<source src={AthleticVideo} type="video/mp4" />
			</video>
			<StaticImage
				className="desktop-hidden"
				src="../images/ImageWideGrass.png"
				alt="Athlete stretching"
				height={750}
				layout="fixed"
			/>
		</span>
	
	)
}

export default VideoWideGrass
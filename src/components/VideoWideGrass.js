import * as React from "react"
import AthleticVideo from "../videos/AdobeStock-field-wide-low-397213891_Video_HD_Preview.mp4"

const VideoWideGrass = () => {
	return (
		<video autoPlay playsInline muted loop>
			<source src={AthleticVideo} type="video/mp4" />
		</video>
	)
}

export default VideoWideGrass
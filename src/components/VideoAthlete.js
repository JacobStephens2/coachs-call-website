import * as React from "react"
import AthleticVideo from "../videos/AdobeStock-athlete-429105527_Video_HD_Preview.mp4"

const VideoAthlete = () => {
	return (
		<video autoPlay playsInline muted loop>
			<source src={AthleticVideo} type="video/mp4" />
		</video>
	)
}

export default VideoAthlete
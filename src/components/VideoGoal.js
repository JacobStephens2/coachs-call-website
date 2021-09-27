import * as React from "react"
import AthleticVideo from "../videos/AdobeStock-football-goal-225268472_Video_HD_Preview.mp4"

const VideoSlowGrass = () => {
	return (
		<video autoPlay playsInline muted loop>
			<source src={AthleticVideo} type="video/mp4" />
		</video>
	)
}

export default VideoSlowGrass
import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/video"

const VideoPage = () => (
  <Layout>
    <Seo title="VideoPage: found" />
    <section>
      <h1>FOUND</h1>
      <p>You just hit a page that exist... the sadness.</p>
      <p>May I suggest a video instead?</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    </section>
  </Layout>
)

export default VideoPage
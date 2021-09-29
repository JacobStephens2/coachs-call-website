import * as React from "react"

import { Helmet } from "react-helmet"

const Seo = props => {
  return (
    <Helmet>
      <title>{props.title} | Coach's Call</title>
      <script
        src="https://kit.fontawesome.com/5ebbfa01b2.js"
        crossOrigin="anonymous"
      ></script>
      <link rel="stylesheet" href="https://use.typekit.net/fot1kfm.css"></link>
    </Helmet>
  )
}

export default Seo

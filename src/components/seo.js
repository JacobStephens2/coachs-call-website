import * as React from "react"

import { Helmet } from "react-helmet"

const Seo = (props) => {
  return (
        <Helmet>
          <title>{props.title} | Coach's Call</title>
          <script src="https://kit.fontawesome.com/5ebbfa01b2.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="https://use.typekit.net/fot1kfm.css"></link>
          <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
          <script src="bower_components/aos/dist/aos.js"></script> 
          <script>
            AOS.init();
          </script>
        </Helmet>
  )
}

export default Seo

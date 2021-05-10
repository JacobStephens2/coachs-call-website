import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>The Orthodoxy of Sport</h1>
    <p>"The chief aim of humanity is to glorify God and enjoy Him forever." Westminster Shorter Catechism</p>
    <div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

import * as React from "react"

import Layout from "../components/LayoutComponent"
import Seo from "../components/Seo"
import Contact from "../components/Contact"
import Container from "react-bootstrap/Container"

const Success = () => {
  return (
    <Layout>
      <Seo title="Message Sent" />
      <Container style={{ maxWidth: `fit-content` }}>
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ margin: `25vh 0 30vh`, textTransform: `unset` }}>
          Your message was sent
        </h1>
      </Container>
      <Contact />
    </Layout>
  )
}

export default Success

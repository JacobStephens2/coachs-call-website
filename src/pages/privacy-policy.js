import * as React from "react"

import Layout from "../components/LayoutComponent"
import Seo from "../components/Seo"
import LetsConnect from "../components/LetsConnect"
import Tagline from "../components/Tagline"
import Container from "react-bootstrap/Container"

const PrivacyPage = () => {
  return (
    <Layout>
      <Seo title="PrivacyPolicy" />
      <Container>
        <br />
        <br />
        <br />
        <br />
        <h1>Privacy Policy</h1>
        <h2>Who we are</h2>

        <p>
          We are Coach's Call. Our website address is: https://coachscall.org.
        </p>

        <h2>Website Analytics</h2>

        <p>
          We partner with Google Analytics to allow tracking technoogy on this
          site to analyze and track users' use of this site, determine the
          popularity of certain content, and better understand online activity.
          By accessing this site, you consent to the collection and use of your
          information by this third party vendor. You are encouraged to review
          their privacy policy and contact them directly for responses to your
          questions. We do not transfer personal information to this third-party
          vendor. However, if you do not want any information to be collected
          nad used by tracking technologies, you can visit the third-party
          vendor or the{" "}
          <a href="https://optout.networkadvertising.org/?c=1">
            Network Advertising Initiative Opt-Out Tool
          </a>{" "}
          or{" "}
          <a href="https://digitaladvertisingalliance.org/integrate-webchoices-ccpa>">
            Digital Advertising Alliance Initiative Opt-out Tool
          </a>
          .
        </p>
      </Container>
      <LetsConnect />
      <Tagline />
    </Layout>
  )
}

export default PrivacyPage

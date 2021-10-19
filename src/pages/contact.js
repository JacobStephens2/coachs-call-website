import * as React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import Seo from "../components/Seo"
import Layout from "../components/LayoutComponent"
import IntroRow from "../components/IntroRow"
import BlockQuote from "../components/BlockQuote"
import QuoteSection from "../components/QuoteSection"
import Contact from "../components/Contact"
import LetsConnect from "../components/LetsConnect"
import VideoWideGrass from "../components/VideoWideGrass"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contact" />
      <span className="contact-page">
        <IntroRow
          logo="yes"
          heading="Let's start a conversation"
          subhead="The pursuit of God's calling in&nbsp;coaching"
          emailButton="yes"
        >
          <VideoWideGrass />
        </IntroRow>

        <QuoteSection
          quote="For this reason, since the day we heard about you, we have not stopped praying for you. We continually ask God to fill you with the knowledge of His will through all wisdom and understanding that the Spirit gives, so that you may live a life worthy of the Lord and please Him in every way: bearing fruit in every good&nbsp;work."
          citation="Colossians 1:9-10"
        />
        <LetsConnect />
        <Contact />
      </span>
    </Layout>
  )
}

export default ContactPage

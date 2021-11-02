import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/LayoutComponent"
import IntroRow from "../components/IntroRow"
import QuoteSection from "../components/QuoteSection"
import Tagline from "../components/Tagline"
import LetsConnect from "../components/LetsConnect"
import VideoWideGrass from "../components/VideoWideGrass"
import ContactForm from "../components/ContactForm"

import "./contact-style.css"

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
        <ContactForm />
        <QuoteSection
          quote="For this reason, since the day we heard about you, we have not stopped praying for you. We continually ask God to fill you with the knowledge of His will through all wisdom and understanding that the Spirit gives, so that you may live a life worthy of the Lord and please Him in every way: bearing fruit in every good&nbsp;work."
          citation="Colossians 1:9-10"
        />
        <span id="call"></span>
        <LetsConnect />
        <Tagline />
      </span>
    </Layout>
  )
}

export default ContactPage

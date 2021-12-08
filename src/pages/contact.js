import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/LayoutComponent"
import IntroRow from "../components/IntroRow"
import QuoteSection from "../components/QuoteSection"
import Tagline from "../components/Tagline"
import LetsConnect from "../components/LetsConnect"
import VideoContact from "../components/VideoContact"
import ContactForm from "../components/ContactForm"
import CoachQuote from "../components/CoachQuote"

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
          <VideoContact />
        </IntroRow>
        <ContactForm />
        <QuoteSection
          quote="For this reason, since the day we heard about you, we have not stopped praying for you. We continually ask God to fill you with the knowledge of His will through all wisdom and understanding that the Spirit gives, so that you may live a life worthy of the Lord and please Him in every way: bearing fruit in every good&nbsp;work."
          citation="Colossians 1:9-10"
        />
        <CoachQuote
          quote="Perpetual growth is a massive part of becoming who we want to be; as an individual, as a team, or even as a program. Proper growth often is produced not by adding but by uncovering. Working with John pushes me to dig, to uncover where my identity truly is. Not just my identity but where I want the identity of my program to&nbsp;be."
          source="Men’s Soccer Coach, University of Valley&nbsp;Forge"
        />
        <span id="call"></span>
        <LetsConnect />
        <Tagline />
      </span>
    </Layout>
  )
}

export default ContactPage

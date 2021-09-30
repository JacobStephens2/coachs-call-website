import * as React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import IntroRow from "../components/IntroRow"
import BlockQuote from "../components/BlockQuote"
import ContactText from "../components/ContactText"
import Contact from "../components/Contact"
import Section from "../components/Section"
import VideoWideGrass from "../components/VideoWideGrass"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Work" />
      <span className="contact-page">
        <IntroRow logo="yes" heading="Let's Connect" emailButton="yes">
          <VideoWideGrass />
        </IntroRow>

        <section id="email">
          <Container>
            <Row className="flex-start">
              <Col md={12} lg={6} className="contact-john-levis">
                <h2>Contact John Levis</h2>
                <ContactText />
              </Col>
              <Col className="block-position" md={12} lg={6}>
                <BlockQuote
                  quote="For this reason, since the day we heard about you, we have not stopped praying for you. We continually ask God to fill you with the knowledge of His will through all wisdom and understanding that the Spirit gives, so that you may live a life worthy of the Lord and please Him in every way: bearing fruit in every good work."
                  source="CoLossians 1:9-10"
                  quotationMark="no"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <Section
          id="donate"
          button="donate"
          heading="Support Coach's Call"
          description="Donate to support the ministry of Coach’s Call. Coach’s Call is a 501(c)(3) nonprofit organization, and as such all donations are tax-deductible. Donations are securely processed through PayPal according to Payment Card Industry&nbsp;standards."
        />

        <Contact />
      </span>
    </Layout>
  )
}

export default ContactPage

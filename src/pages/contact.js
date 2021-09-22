import React from "react";
import Seo from "../components/seo"
import "../styles/style.scss"
import Layout from "../components/layout"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IntroRowVideo from '../components/IntroRowVideo'
import BlockQuote from '../components/BlockQuote'
import ContactText from "../components/ContactText"
import Contact from "../components/Contact"
import Section from "../components/Section"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NamedPage = ({ data }) => {
  
  return (
    <Layout>
      <Seo title="Work" />
        <IntroRowVideo
          heading="Let's Connect" 
          subhead="Email me" 
          body="Feel free to message me, and we can email back and forth or set up a time to call. Also, if you would like to donate to support the work we are doing, please do so with the link&nbsp;below."
          donateButton="yes"
          contact="no"
        />

      <span id="email">
        <Section
          quote="no"
          list="no"
          button="no"
        >
          <Row className="flex-start">
            <Col>
              <h2>Call or Email John</h2>
              <p>It would be great to set up a time to chat.</p>
              <ContactText />
            </Col>
            <Col>
              <BlockQuote 
                quote="For this reason, since the day we heard about you, we have not stopped praying for you. We continually ask God to fill you with the knowledge of His will through all wisdom and understanding that the Spirit gives, so that you may live a life worthy of the Lord and please Him in every way: bearing fruit in every good work."
                source="CoLossians 1:9-10"
                quotationMark="no"
              />
            </Col>
          </Row>
        </Section>
        </span>

      <span id="donate">
        <Section 
          quote="no"
          list="no"
          button="donate"
          heading="Support Coach's Call"
          description="Donate to support the ministry of Coach’s Call. Coach’s Call is a 501(c)(3) nonprofit organization, and as such all donations are tax-deductible. Donations are securely processed through PayPal according to Payment Card Industry&nbsp;standards."
        />
      </span>

      <Contact />

    </Layout>
  )
}


export default NamedPage;

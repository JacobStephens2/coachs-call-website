import * as React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Seo from "../components/Seo"
import Layout from "../components/layout"
import IntroRow from '../components/IntroRow'
import BlockQuote from '../components/BlockQuote'
import ContactText from "../components/ContactText"
import Contact from "../components/Contact"
import Section from "../components/Section"


const NamedPage = ({ data }) => {
  
  return (
    <Layout>
      <Seo title="Work" />
        <IntroRow
          heading="Let's Connect" 
          subhead="Email me" 
          body="Feel free to message me, and we can email back and forth or set up a time to call. Also, if you would like to donate to support the work we are doing, please do so with the link&nbsp;below."
          donateButton="yes"
        />

        <section
          id="email"
        >
          <Container>
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
          </Container>
        </section>

        <Section 
          id="donate"
          button="donate"
          heading="Support Coach's Call"
          description="Donate to support the ministry of Coach’s Call. Coach’s Call is a 501(c)(3) nonprofit organization, and as such all donations are tax-deductible. Donations are securely processed through PayPal according to Payment Card Industry&nbsp;standards."
        />

      <Contact />

    </Layout>
  )
}


export default NamedPage;

import React from "react";
import Seo from "../components/seo"
import "../styles/style.scss"
import Layout from "../components/layout"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IntroRowVideo from '../components/IntroRowVideo'
import BlockQuote from '../components/BlockQuote'
import ContactText from "../components/ContactText"
import Section from "../components/Section"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NamedPage = ({ data }) => {
  
  return (
    <Layout>
      <Seo title="Work" />
      <span id="donate">
        <IntroRowVideo
          heading="Let's Connect" 
          subhead="Email me" 
          body="Feel free to message me, and we can email back and forth or set up a time to call. Also, if you would like to donate to support the work we are doing, please do so with the link&nbsp;below."
          donateButton="yes"
          contact="no"
        />
      </span>

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
                quote="For this reason, since the day we heard about you, we have not stopped praying for you. We continually ask God to fill you with the knowledge of His will through all wisdom and understanding that the Spirit gives, so that you may live a life worthy of the Lord and please Him in every way: bearing fruit in every good work…"
                source="CoLossians 1:9-10"
                quotationMark="no"
              />
            </Col>
          </Row>
        </Section>
        </span>

    </Layout>
  )
}


export default NamedPage;

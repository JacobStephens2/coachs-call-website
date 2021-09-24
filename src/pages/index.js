import * as React from "react"

import Row from 'react-bootstrap/Row'

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import LetsConnect from '../components/LetsConnect'
import QuoteSection from '../components/QuoteSection'
import Card from '../components/Card'
import BlockQuote from '../components/BlockQuote'
import Section from '../components/Section'
import Map from '../components/Map'
import IntroRow from '../components/IntroRow'
import Contact from '../components/Contact'

const NamedPage = ({ data }) => {
  return (
    <Layout>
      <span id="homepage">
      <Seo title="Home" />
			
        <IntroRow 
					logo="yes"
					heading="Deepening coach impact through one-on-one mentoring, consulting, and&nbsp;seminars."
					subhead="Founder and coach John Levis has 25 years experience in coaching, young life Ministry, and college&nbsp;administration."
          cardClass="aboutCard"
				/>

        <Row>
          <Card
            link="/about"
            category="About"
            heading="John Levis"
            description="John has broad experience coaching and working in higher&nbsp;education."
            id="aboutCard"
          />
          <Card
            link="/work"
            category="Work"
            heading="Seminars | Mentoring | Consulting"
            description="Customized offerings for coaches and&nbsp;programs."
            id="workCard"
          />
          <Card
            link="/contact"
            category="Contact"
            heading="Contact John"
            description="Learn more about Coach's&nbsp;Call."
            id="contactCard"
          />
        </Row>

        <Section 
          heading="National Connections"
          subheading="SERVING AND ENRICHING THROUGH RELATIONSHIPS"
          description="Experience working with coaches from a variety of Christian athletic organizations helps bring a wider perspective to your&nbsp;coaching."
          link="/work"
          buttonText="LEARN MORE ABOUT OUR WORK"
        >
          <Map />
        </Section>

        <QuoteSection 
          quote="To become holy is rather like joining a secret society. To put it at the very lowest, it must be great fun."
          citation="C.S. Lewis, <i>Mere Christianity</i>"
        />

        <BlockQuote 
          quote="The talks with John this past year have been life-giving. Walking through this past year has been a real challenge to my faith and to my career with all of the setbacks, disappointments and uncertainty. Having John there to keep me grounded in my faith, focus my attention on seeking God in all things and allowing me to work through my thoughts and feelings while challenging me to seek solutions through God that furthers His kingdom has been&nbsp;invaluable."
          source="Dave Hoger, Men’s lacrosse coach, Calvin&nbsp;University"
        />

        <LetsConnect />
        
        <Contact />
      </span>
    </Layout>
  )
}


export default NamedPage;

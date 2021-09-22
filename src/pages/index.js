import React from "react";
import * as style from "./index.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import LetsConnect from '../components/LetsConnect'
import BlockQuote from '../components/BlockQuote'
import IntroRowVideo from '../components/IntroRowVideo'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NamedPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
			
        <IntroRowVideo 
					contact="no" 
					logo="yes"
					heading="Deepening coach impact through one-on-one mentoring, consulting, and&nbsp;seminars."
					subhead="Founder and coach John Levis has 25 years experience in coaching, young life Ministry, and college&nbsp;administration."
				/>

        <Row>
            <Col className={[style.aboutCard, style.card, style.darkBackground].join(' ')} lg={4}>
                <Link to="/about">
                        <Container>
                            <h2>About</h2>
                            <h3>John Levis</h3>
                            <p>John has broad experience coaching and working in higher&nbsp;education.</p>
                        </Container>
                </Link>
            </Col>

            <Col className={[style.workCard, style.card, style.darkBackground].join(' ')} lg={4}>
                <Link to="/work">
                        <Container>
                            <h2>Work</h2>
                            <h3>Seminars | Mentoring | Consulting</h3>
                            <p>Customized offerings for coaches and&nbsp;programs</p>
                        </Container>
                </Link>
            </Col>

            <Col className={[style.contactCard, style.card, style.darkBackground].join(' ')} lg={4}>
                <Link to="/contact">
                    <Container>
                        <h2>Contact</h2>
                        <h3>Contact John</h3>
                        <p>Learn more about Coach's&nbsp;Call.</p>
                    </Container>
                </Link>
            </Col>
        </Row>
        
        <section>
          <Container>
            <Row>
              <Col>
                  <h2>National Connections</h2>
                  <h3>SERVING AND ENRICHING THROUGH RELATIONSHIPS</h3>
                  <p>Experience working with coaches from a variety of Christian athletic organizations helps bring a wider perspective to your&nbsp;coaching.</p>
                  <Link to="/work"><Button>LEARN MORE ABOUT OUR WORK</Button></Link>
              </Col>
              <Col>
                  <StaticImage
                      alt="Map of Coach's Call locations"
                      placeholder="blurred"
                      loading="eager"
                      src="../images/UnitedStatesMap_112467261.svg"
                      height="320"
                  />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="grey-section">
            <Container>
              <Col lg={8}>
                <q>To become holy is rather like joining a secret society. To put it at the very lowest, it must be great fun.</q>
                <br />
                <cite>C.S. Lewis, <i>Mere Christianity</i></cite>
              </Col>
            </Container>
        </section>

        <BlockQuote 
          quote="The talks with John this past year have been life-giving. Walking through this past year has been a real challenge to my faith and to my career with all of the setbacks, disappointments and uncertainty. Having John there to keep me grounded in my faith, focus my attention on seeking God in all things and allowing me to work through my thoughts and feelings while challenging me to seek solutions through God that furthers His kingdom has been&nbsp;invaluable."
          source="Dave Hoger, Men’s lacrosse coach, Calvin&nbsp;University"
        />
        <LetsConnect />

        <section className="grey-section">
            <Container>
                <h4>CONTACT</h4>
                <p>
                  <i class="far fa-envelope"></i>
                  &ensp;
                  <a href="tel:484.574.1444">484.574.1444</a>
                </p>
                <p>
                  <i class="fas fa-phone-alt"></i>
                  &ensp;
                  <a href="mailto:john@coachscall.org">john@coachscall.org</a>
                </p>
            </Container>
        </section>


    </Layout>
  )
}


export default NamedPage;

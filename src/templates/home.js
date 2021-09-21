import React from "react";

import * as style from "./single.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import AthleticVideo from "../videos/AdobeStock_athletic-video-montage.mp4"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NamedPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />

{/* add autoPlay as an attribute to video element when ready to restart video */}
        <video className={`${style.video}`} playsInline muted loop>
            <source src={AthleticVideo} type="video/mp4" />
        </video>
        <div className={style.videoBackground}>
            <Container>
                <Row className="introRow">
                    <Col className="order-lg-2" lg={4}>
                        <StaticImage
                            alt="Coach's Call logo crest"
                            placeholder="blurred"
                            loading="eager"
                            src="../images/CoachsCall-Crest-Logo-icon-square.png"
                            height="320"
                        />
                    </Col>
                    <Col className="order-lg-1 introText" lg={8}>
                        <h2>Deepening coach impact through one-on-one mentoring, consulting, and&nbsp;seminars.</h2>
                        <p className="subhead">Founder and coach John Levis has 25 years experience in coaching, young life Ministry, and college&nbsp;administration.</p>
                    </Col>
                </Row>
                <Row>
                <p className="subhead tagline">Glorifying God and Experiencing Joy Through Sports</p>
                </Row>
            </Container>
        </div>
            
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

        <section className="blue-section">
            <Container>
                <Row>
                    <Col sm={12} md={2} lg={2} xl={2} className="large-quotation-mark">
                    “
                    </Col>
                    <Col sm={12} md={10} lg={8} xl={7} className="blockquote-column">
                      <blockquote>The talks with John this past year have been life-giving. Walking through this past year has been a real challenge to my faith and to my career with all of the setbacks, disappointments and uncertainty. Having John there to keep me grounded in my faith, focus my attention on seeking God in all things and allowing me to work through my thoughts and feelings while challenging me to seek solutions through God that furthers His kingdom has been&nbsp;invaluable.”</blockquote>
                      <cite>Dave Hoger, Men’s lacrosse coach, Calvin&nbsp;University</cite>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <h2>Let's Connect</h2>
                <h3>Learn more about Coach’s Call</h3>
                <p>“As iron sharpens iron, so one person sharpens another.”  <cite>proverbs 27:1</cite></p>
                <Link to="/contact"><Button>CONTACT JOHN</Button></Link>
            </Container>
        </section>

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

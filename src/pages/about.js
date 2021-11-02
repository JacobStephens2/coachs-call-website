import * as React from "react"

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import Layout from "../components/LayoutComponent"
import Seo from "../components/Seo"
import IntroRow from "../components/IntroRow"
import ListItem from "../components/ListItem"
import LetsConnect from "../components/LetsConnect"
import CoachQuote from "../components/CoachQuote"
import Tagline from "../components/Tagline"
import QuoteSection from "../components/QuoteSection"
import VideoGoal from "../components/VideoGoal"

import "./about-style.css"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <IntroRow
        logo="yes"
        heading="Game day is a call to&nbsp;worship"
        subhead="John has helped over 500 athletes celebrate over 25&nbsp;years"
      >
        <VideoGoal />
      </IntroRow>
      <section className="about-page" id="john-levis">
        <Row className="flex-start about-main-section">
          <Col md={6}>
            <Container className="text-col">
              <h2>John Levis, Founder</h2>
              <p className="subhead bold">
                helping coaches understand the pursuit of excellence on the
                field or court as their daily act of&nbsp;worship
              </p>
              <ul>
                <li className="education-section">
                  <b>Education</b>
                  <Row>
                    <Col>
                      <StaticImage
                        alt="Eastern University logo"
                        placeholder="blurred"
                        loading="eager"
                        src="../images/EasternUniversityLogo.png"
                        height={100}
                      />
                    </Col>
                    <Col>
                      <p>
                        <em>Master’s in Business Administration</em>
                      </p>
                      <p>Eastern University (2007)</p>
                    </Col>
                  </Row>
                  <hr className="education-rule" />
                  <Row className="wheaton-row">
                    <Col>
                      <StaticImage
                        alt="Eastern University logo"
                        placeholder="blurred"
                        loading="eager"
                        src="../images/WheatonCollegeLogo.png"
                        height={100}
                      />
                    </Col>
                    <Col>
                      <p>
                        <em>B.S. in Health and Physical&nbsp;Education</em>
                      </p>
                      <p>Wheaton College (1996)</p>
                    </Col>
                  </Row>
                </li>
                <ListItem
                  boldOne="42+ years"
                  boldTwo="Christ Follower"
                  description="Becoming a Christian at a young age has been, is and will be the most important decision in John’s life. It is the relationship that also provides the lens by which we can see&nbsp;everything."
                />
                <ListItem
                  boldOne="25+ years"
                  boldTwo="Husband and Father"
                  description="John and his wife Kristen live in Newtown Square, Pennsylvania and have three children. Alison is a senior at Wheaton College, Cole is beginning his freshman year at Gordon College, and Matthew is entering 9th grade and is super excited to spend the next four years alone with his&nbsp;parents."
                />
                <ListItem
                  boldOne="25+ years"
                  boldTwo="Coach"
                  description="John has coached all levels and ages of athletes from youth through college. He resurrected the Eastern University Men’s Lacrosse program 2006 after helping coach the Marple Newtown Boys Lacrosse team to the state semifinals and the last two years has coached the boys soccer team at Delaware County Christian School to the District Finals for the second and third time in school&nbsp;history."
                />
                <ListItem
                  boldOne="10 years"
                  boldTwo="Young Life Staff"
                  description="Growing up John played competitive soccer, tennis, basketball, baseball, football and lacrosse. As a college athlete, John played basketball and lacrosse at Wheaton&nbsp;College."
                />
                <ListItem
                  boldOne="22+ years"
                  boldTwo="Competitive Athlete"
                  description="John started a Young Life ministry at Marple Newtown High School that had a regular attendance of 150 students for the weekly outreach, Club, event. He also spent three years teaching the Leadership Training Course in partnership with the scholarship program at Eastern&nbsp;University."
                />
                <ListItem
                  boldOne="9 years"
                  boldTwo="Corporate World"
                  description="John has spent his time in the corporate world working in the areas of marketing, sales and project management. The transferrable nature of the skills in athletics has been instrumental in John’s corporate&nbsp;success."
                />
                <ListItem
                  boldOne="7 years"
                  boldTwo="College Administrator"
                  description="John served as an Assistant Director of Admissions and the Director of Advancement for the Templeton Honors College at Eastern University. His time was spent in recruiting, marketing, and fundraising as the Honors College went through branding, doubled its size, founded an institute, and built a global recruiting presence."
                />
              </ul>
              <Link to="/contact">
                <Button>LEARN MORE</Button>
              </Link>
            </Container>
          </Col>
          <Col md={6}>
            <div className="photos-background">
              <StaticImage
                className="about-photo"
                alt="Portrait photo of John Levis"
                placeholder="blurred"
                loading="eager"
                src="../images/john-levis-headshot-sep-2021-edited.jpg"
                height={500}
              />
              <figcaption className="john-portrait-caption">
                John Levis
              </figcaption>
              <StaticImage
                className="about-photo"
                alt="John Levis with their family"
                placeholder="blurred"
                loading="eager"
                src="../images/john-levis-family-photo-sep-2021-edited-cropped.jpg"
                height={500}
              />
              <figcaption className="about-photo-caption">
                The Levis Family (from left) Alison, Kristen, John, Matthew,
                and&nbsp;Cole
              </figcaption>
            </div>
            <hr className="about-photo-divider" />
            <QuoteSection
              quote="The level of my growth in grace is revealed by the way I look
                at obedience. We should have a much higher view of the word
                obedience, rescuing it from the mire of the&nbsp;world."
              citation="Oswald Chambers"
              classProp="net-background"
            />
          </Col>
        </Row>
      </section>

      <section id="mission-vision-section">
        <span id="mission-vision"></span>
        <Container>
          <Row>
            <Col md={5} className="bigger-column vision-box mission-vision-box">
              <h3>
                <strong>VISION</strong>
              </h3>
              <p className="vision">
                Partnering with athletic departments and coaches to worship God
                through&nbsp;sports
              </p>
            </Col>
            <Col
              md={7}
              className="bigger-column mission-box mission-vision-box"
            >
              <h3>
                <strong>MISSION</strong>
              </h3>
              <p className="mission">
                For coaches to see the act of coaching, the pursuit of success,
                and the mentoring of athletes as acts of worship to the Creator.
                The joy in this work is that of a composer creating masterpieces
                as unto the&nbsp;Lord.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <CoachQuote
        quote="John is an effective coach who clearly understands the hearts of students and how to apply the hope of Jesus through sport to them. He is insightful and thought provoking, helping you to think deeply about your philosophy, vision, and mission as a coach. He helps put language to your values and passion. He is someone you want on your&nbsp;team."
        source="Boys’ Soccer Coach, Second Baptist School"
      />

      <LetsConnect />
      <Tagline />
    </Layout>
  )
}

export default AboutPage

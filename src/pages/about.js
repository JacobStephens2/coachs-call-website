import React from "react";

import "../style.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IntroRow from '../components/IntroRow'
import ListItem from '../components/ListItem'

const NamedPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="About" />

        <IntroRow 
          heading="John has worked with over 500 athletes of all levels in his 25 years of&nbsp;coaching." 
          subhead="John hopes to change the view on the field to worship, and John hopes for all players and coaches to understand game day as a&nbsp;celebration." 
        />
        
        <section>
        <Container>
          <Col lg={6}>
            <h2>John Levis, Founder</h2>
            <p className="subhead">helping coaches understand the pursuit of excellence on the field or court as their daily act of&nbsp;worship</p>
            <ul>
            <ListItem
                boldOne="Education"
                description="John holds a Master’s in Business Administration from Eastern University (2007) and completed undergraduate studies at Wheaton College&nbsp;(1996)."
              />
              <ListItem
                boldOne="42+ years"
                boldTwo="Husband and Father"
                description="Becoming a Christian at a young age has been, is and will be the most important decision in John’s life. It is the relationship that also provides the lens by which we can see&nbsp;everything."
              />
              <ListItem
                boldOne="25+ years"
                boldTwo="Christ Follower"
                description="John and his wife Kristen live in Newtown Square, Pennsylvania and have three children. Alison is a senior at Wheaton College, Cole is beginning his freshman year at Gordon College, and Matthew is entering 9th grade and is super excited to spend the next four years alone with his&nbsp;parents."
              />
              <ListItem
                boldOne="25+ years"
                boldTwo="Coach"
                description="John has coached all levels and ages of athletes from youth through college. He resurrected the Eastern University Men’s Lacrosse program 2006 after helping coach the Marple Newtown Boys Lacrosse team to the state semifinals and the last two years has coached the boys soccer team at Delaware County Christian School to the District Finals for the second and third time in school&nbsp;history."
              />
              <ListItem
                boldOne="22+ years"
                boldTwo="Competitive Athlete"
                description="John started a Young Life ministry at Marple Newtown High School that had a regular attendance of 150 students for the weekly outreach, Club, event. He also spent three years teaching the Leadership Training Course in partnership with the scholarship program at Eastern&nbsp;University."
              />
              <ListItem
                boldOne="10 years"
                boldTwo="Young Life Staff"
                description="Growing up John played competitive soccer, tennis, basketball, baseball, football and lacrosse. As a college athlete, John played basketball and lacrosse at Wheaton&nbsp;College."
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
            <Link to="/work"><Button>LEARN MORE</Button></Link>

          </Col>
          </Container>
          </section>

        <p>To partner with athletic departments and coaches to worship God through sports.</p>

        <h2>Vision</h2>
        <p>That coaches see the act of coaching, the pursuit of success, and the mentoring of athletes as acts of worship to the Creator. That the joy taken in the work is that of a composer creating masterpieces as unto the Lord.</p>

        <h2>Founder John Levis</h2>
        <p>John Levis has broad experience coaching athletic teams and working in Christian higher education.</p>

        <blockquote>“I had the distinct pleasure of being a student at Eastern University while Mr. Levis was there. While I was there, I was marveled by both his professionalism and strong people skills. He was always concerned about students and their well being and always had a concern for making sure that the students experience at Eastern was a good one.”</blockquote>
        <cite>Brandon Robinson, Executive Producer at Bally Sports</cite>

        <p>John holds a Master’s in Business Administration from Eastern University and completed undergraduate studies at Wheaton College.</p>
                    
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

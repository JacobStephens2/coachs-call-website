import React from "react";
import "../styles/style.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IntroRowVideo from '../components/IntroRowVideo'
import ListItem from '../components/ListItem'
import LetsConnect from '../components/LetsConnect'
import BlockQuote from '../components/BlockQuote'
import WhiteSection from '../components/WhiteSection'
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact";

const NamedPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="About" />
        <IntroRowVideo
          heading="John has worked with over 500 athletes of all levels in his 25 years of&nbsp;coaching." 
          subhead="John hopes to change the view on the field to worship, and John hopes for all players and coaches to understand game day as a&nbsp;celebration." 
        />
				<section>
        <Container>
					<Row>
						<Col lg={7}>
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
						<Col lg={5}>
							<StaticImage
									alt="Map of Coach's Call locations"
									placeholder="blurred"
									loading="eager"
									src="../images/UnitedStatesMap_112467261.svg"
									height="320"
							/>
							<StaticImage
									alt="Map of Coach's Call locations"
									placeholder="blurred"
									loading="eager"
									src="../images/UnitedStatesMap_112467261.svg"
									height="320"
							/>
							<blockquote>“The level of my growth in grace is revealed by the way I look at obedience. We should have a much higher view of the word obedience, rescuing it from the mire of the world.”</blockquote>
							<cite>Oswald Chambers</cite>
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

        <WhiteSection
          heading="Development Council"
          subheading="Learn more about leaders in this organization"
          description="We have a board of directors who guide our progress."
          link="/development"
          buttonText="MEET THE DEVELOPMENT COUNCIL"
        />

        <BlockQuote 
          quote="John is an effective coach who clearly understands the hearts of students and how to apply the hope of Jesus through sport to them. He is insightful and thought provoking, helping you to think deeply about your philosophy, vision, and mission as a coach. He helps put language to your values and passion. He is someone you want on your team."
          source="Doug Walker, Boys’ Soccer Coach, Second Baptist School"
        />

        <LetsConnect />
				<Contact />

    </Layout>
  )
}


export default NamedPage;

import * as React from "react"

import Layout from "../components/LayoutComponent"
import Seo from "../components/Seo"
import IntroRow from "../components/IntroRow"
import LetsConnect from "../components/LetsConnect"
import CoachQuote from "../components/CoachQuote"
import Tagline from "../components/Tagline"
import WorkItem from "../components/WorkItem"
import VideoWideGrass from "../components/VideoWideGrass"
import QuoteSection from "../components/QuoteSection"
import { StaticImage } from "gatsby-plugin-image"

import "./work-style.css"

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Work" />

      <IntroRow
        logo="yes"
        heading="It's how <br class='work-header-break-two' />you <br class='work-header-break-one' />play the&nbsp;game"
        subhead="And winning and losing do&nbsp;matter"
      >
        <VideoWideGrass />
      </IntroRow>

      <div className="work-container">
        <WorkItem
          id="seminars-and-workshops"
          heading="Professional Development Seminars and&nbsp;Workshops"
          subheading="exploring the orthodoxy of sport and how we pursue 
					god’s high calling to&nbsp;coach."
          boldList="Biblically-based content"
          descriptionList="that explores the connection of the theology of Christian life to&nbsp;sport"
          boldTwo="Engaging dialogue"
          descriptionTwo="to connect the transferable nature of Christ’s work to&nbsp;athletics"
          boldThree="Practical applications"
          descriptionThree="to use and implement into sport specific&nbsp;coaching"
        />

        <section className="pyramid photos-background">
          <a href="https://content.coachscall.org/wp-content/uploads/2021/11/CoachingPyramid-CoachsCall.jpg">
            <StaticImage
              className="work-photo"
              src="../images/WorkImage1.jpg"
              alt="The Coaching Pyramid"
              layout="constrained"
            />
          </a>
        </section>

        <section className="joy photos-background">
          <a href="https://content.coachscall.org/wp-content/uploads/2021/11/JoyAndPerformance-CoachsCall.jpg">
            <StaticImage
              className="work-photo joy-static-image"
              src="../images/WorkImage2.jpg"
              alt="Joy and Performance slide"
              layout="constrained"
            />
          </a>
        </section>

        <WorkItem
          id="mentoring"
          heading="One-on-One Mentoring and Small Group Consulting"
          subheading="Pursuing excellence"
          boldList="Engaging coaches"
          descriptionList="where they are in their journey and helping them develop more fully their view of what God requires of the call to&nbsp;coaches"
          boldTwo="Connecting coaches"
          descriptionTwo="in practical ways to pursue excellence and see the pursuit as&nbsp;worship"
          boldThree="Helping coaches"
          descriptionThree="develop strategies for culture building, program development, recruiting, and day to day&nbsp;excellence"
        />
      </div>

      <QuoteSection
        quote="I am created to glorify God by obeying His call through coaching and my primary responsibility is to create the 'beautiful game' as an act of worship to&nbsp;Him."
        citation="John Levis"
      />

      <CoachQuote
        quote="Perpetual growth is a massive part of becoming who we want to be; as an individual, as a team, or even as a program. Proper growth often is produced not by adding but by uncovering. Working with John pushes me to dig, to uncover where my identity truly is. Not just my identity but where I want the identity of my program to&nbsp;be."
        source="Men’s Soccer Coach, University of Valley&nbsp;Forge"
      />

      <LetsConnect />

      <Tagline />
    </Layout>
  )
}

export default WorkPage

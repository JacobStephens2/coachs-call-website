import * as React from "react"

import Layout from "../components/LayoutComponent"
import Seo from "../components/Seo"
import IntroRow from "../components/IntroRow"
import LetsConnect from "../components/LetsConnect"
import CoachQuote from "../components/CoachQuote"
import Section from "../components/Section"
import Tagline from "../components/Tagline"
import VideoWideGrass from "../components/VideoWideGrass"

import "./work-style.css"

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Work" />
      <IntroRow
        logo="yes"
        heading="It's how you play the&nbsp;game"
        subhead="And winning and losing do&nbsp;matter"
      >
        <VideoWideGrass />
      </IntroRow>

      <Section
        id="seminars-and-workshops"
        heading="Professional Development Seminars and&nbsp;Workshops"
        subheading="exploring the orthodoxy of sport and how we pursue 
					god’s high calling to&nbsp;coach."
        button="yes"
        endButton="yes"
        link="/contact"
        buttonText="LEARN MORE"
        list="yes"
        boldList="Biblically-based content"
        descriptionList="that explores the connection of the theology of Christian life to&nbsp;sport"
        boldTwo="Engaging dialogue"
        descriptionTwo="to connect the transferable nature of Christ’s work to&nbsp;athletics"
        boldThree="Practical applications"
        descriptionThree="to use and implement into sport specific&nbsp;coaching"
        seminarImages="yes"
        citation="John Levis"
        quote="I am created to glorify God by obeying His call through coaching and my primary responsibility is to create the 'beautiful game' as an act of worship to&nbsp;Him."
        subClass="sems-and-workshops"
      />

      <Section
        heading="One-on-One Mentoring and Small Group Sessions"
        subheading="Pursuing excellence"
        button="yes"
        endButton="yes"
        buttonText="LEARN MORE"
        link="/contact"
        list="yes"
        boldList="Engaging coaches"
        descriptionList="where they are in their journey and helping them develop more fully their view of what God requires of the call to&nbsp;coaches"
        boldTwo="Connecting coaches"
        descriptionTwo="in practical ways to pursue excellence and see the pursuit as&nbsp;worship"
        boldThree="Helping coaches"
        descriptionThree="develop strategies for culture building, program development, recruiting, and day to day&nbsp;excellence"
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

import * as React from "react";

import { graphql } from 'gatsby'

import { getImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
import Seo from "../components/Seo"
import IntroRow from '../components/IntroRow'
import LetsConnect from '../components/LetsConnect'
import BlockQuote from '../components/BlockQuote'
import Section from '../components/Section'
import Contact from "../components/Contact"

const NamedPage = ({ data }) => {
  
  const image = getImage(data.imageOne)
  const imageTwo = getImage(data.imageTwo)

  return (
    <Layout>
      <Seo title="Work" />
        <IntroRow
          heading="Whether you win or lose matters, and so does how you play the&nbsp;game." 
          subhead="Partnering with Coaches in their pursuit of God’s call in&nbsp;coaching." 
        />
				
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
					
          belowImages="yes"
          image={image}
					imageAlt="The Coaching Pyramid"
					imageTwo={imageTwo}
					imageAltTwo="Joy and Performance slide"

          quote="I am created to glorify God by obeying His call through coaching and my primary responsibility is to create the “beautiful game” as an act of worship to&nbsp;Him."
        />

        <BlockQuote 
          quote="Perpetual growth is a massive part of becoming who we want to be; as an individual, as a team, or even as a program. Proper growth often is produced not by adding but by uncovering. Working with John pushes me to dig, to uncover where my identity truly is. Not just my identity but where I want the identity of my program to&nbsp;be."
          source="Stephen Bower, Men’s Soccer Coach, University of Valley&nbsp;Forge"
        />

        <Section
          sectionClass="grey-section"
					id="mentoring"
          heading="One-on-One Mentoring and Small Group&nbsp;Sessions"
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

        <LetsConnect />

				<Contact />

    </Layout>
  )
}

export const query = graphql`
  query {
    imageOne: imageSharp(id: {eq: "02cc50c6-0efa-588b-a405-b75f71d460dd"}) {
      gatsbyImageData
    }
    imageTwo: imageSharp(id: {eq: "8c27fcc9-3318-582a-a22d-f6f4ccb779cb"}) {
      gatsbyImageData
    }
  }
`

export default NamedPage;

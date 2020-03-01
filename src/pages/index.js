import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumb from "../components/jumbotron/jumbo.js"
import BulletPitch from "../components/bullet-pitch/bullet_pitch.js"
import Short_About from "../components/short-about/short_about.js"
import Short_Classes from "../components/short-classes/short_classes.js"
import Contact_Form from "../components/contact/contact.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumb/>
    <BulletPitch />
    <Short_About />
    <Short_Classes />
    <Contact_Form />
  </Layout>
)

export default IndexPage

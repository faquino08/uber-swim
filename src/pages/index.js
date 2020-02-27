import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumb from "../components/jumbotron/jumbo.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Jumb/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

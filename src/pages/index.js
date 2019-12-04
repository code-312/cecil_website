import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Who are we?</h1>
    <p>We are a group of community members and non-profit organizations fighting to make sure the cannabis industry works for the people, not for profits!</p>
    <p>We meet regularly on Tuesday Evenings at 6PM at the <a href="https://www.google.com/maps/place/The+Port+Ministries/@41.80262,-87.6703387,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2e6f5c66cf51:0x3e4628c759874afc!8m2!3d41.80262!4d-87.66815">Port Ministries</a> in Chicago's Back of the Yards</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/calendar/">Calendar</Link>
  </Layout>
)

export default IndexPage

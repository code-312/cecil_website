import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Calendar</h1>
    <p>This is a calendar of the coalition's events and events relevant to cannabis policy and industry.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

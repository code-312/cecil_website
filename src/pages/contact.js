import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>Email us at <a href="mailto:cannabisequityil@gmail.com">cannabisequityil@gmail.com</a></p>
    <p>Follow us at <a href="https://www.facebook.com/CannaEquityIL" target="_blank" rel="noreferrer noopener">our Facebook page</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage

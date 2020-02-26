import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>Email us at <a href="mailto:cannabisequityil@gmail.com">cannabisequityil@gmail.com</a></p>
    <p>Follow us on 
      <a style={{color:"#10AC84"}} href="https://www.facebook.com/CannaEquityIL" target="_blank" rel="noreferrer noopener"> Facebook</a>
      ,
      <a style={{color:"#10AC84"}} href="https://www.instagram.com/CannaEquityIL/" target="_blank" rel="noreferrer noopener"> Instagram</a>
      , and
      <a style={{color:"#10AC84"}} href="https://twitter.com/CannaEquityIL/" target="_blank" rel="noreferrer noopener"> Twitter </a>
      using #CannabisCBA and #CannabisEquityIL
    </p>
  </Layout>
)

export default ContactPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Know Your Rights" />
    <h1>Know Your Rights!</h1>
    <h3>We are focused on providing legal education and support under newly developing laws for legalized cannabis.</h3>
    <p>We continue to provide the following to support this mission:</p>
    <ul class="a">
        <li>
            Educational literature, especially useful forms of legal education literature like our crutch cards, designed to inform the public of continued prohibited situations for the possession and consumption of cannabis.
        </li>
        <li>
            Live workshops with groups like Chicago Legal Aid for expungement and awareness of newly developing legal vulnerabilities or protections afforded for the use of cannabis.
        </li>
        <li>
            Online resources and videos
        </li>
    <h3>If you are interested in supporting this mission by hosting an event, sponsoring printing of crutch cards, or providing production of online resources, DM us <a style={{color:"#10AC84"}} href="https://www.facebook.com/CannaEquityIL" target="_blank" rel="noreferrer noopener">@CannaEquityIL</a> or <Link to="/contact" style={{color: "#10AC84"}}>email</Link></h3>
    </ul>
   </Layout>
)

export default ContactPage

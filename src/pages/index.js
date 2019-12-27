import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
// import image from "../images/canna_equity_lobby_day.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="About Us" />
    {/* <div style= {{
      backgroundPosition: `top left`,
      backgroundAttachment: `fixed`,
    }}>
      <div style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <img src={image}/> */}
        <h1>Who are we?</h1>
        <p>We are a coalition made up of community members and non-profit organizations fighting to make sure the legalization of cannabis Illinois is done to repair and reinvest in the communities most impacted by the war on drugs, and to ensure the cannabis industry prioritizes people over profits!</p>
        <p>We have weekly meetings during the evenings in neighborhoods disproportionately affected by the War on Drugs. We do this to ensure community voice is heard!</p>
        <p>We meet weekly at 6PM on Thursdays.</p>
        <p>Our next meeting with be on January 9th, 2020 at the <a style={{color:'#10AC84'}} target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/The+Port+Ministries/@41.80262,-87.6703387,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2e6f5c66cf51:0x3e4628c759874afc!8m2!3d41.80262!4d-87.66815">Port Ministries</a> in Chicago's Back of the Yards Neighborhood</p>
        <Image/>
      {/* </div> */}
    {/* </div> */}
  </Layout>
)

export default IndexPage

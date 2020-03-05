import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

function nextDay(x){
  var now = new Date();    
  now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
  return now.toDateString();
}

const IndexPage = () => (
  <Layout>
    <SEO title="About Us" />
      <h1>Who are we?</h1>
      <p>We are a coalition made up of community members and non-profit organizations fighting to make sure the legalization of cannabis Illinois is done to repair and reinvest in the communities most impacted by the war on drugs, and to ensure the cannabis industry prioritizes people over profits!</p>
      <p>On March 6, 2020, Friday at 8:30am at Chicago City Hall on the 2nd Floor, we are holding a press conference for the coalition and focusing on Zoning Board of Appeals for upcoming dispensary sites in Chicago. Please join us there and wear green!</p>
      <p>Read about our current campaign for Community Benefits Agreement <a style={{color:"#10AC84"}} href="https://chicago.suntimes.com/cannabis/2020/2/12/21135244/chicago-dispensaries-marijuana-cannabis-equity" target="_blank" rel="noreferrer noopener"> in the Chicago Sun-Times</a></p>
      <p>We have weekly meetings during the evenings in neighborhoods disproportionately affected by the War on Drugs. We do this to ensure community voice is heard!</p>
      <p>We meet weekly at 6PM on Thursdays.</p>
      <p>Our next meeting will be on {nextDay(4)} at the <a style={{color:'#10AC84'}} target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/The+Port+Ministries/@41.80262,-87.6703387,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2e6f5c66cf51:0x3e4628c759874afc!8m2!3d41.80262!4d-87.66815">Port Ministries</a> in Chicago's Back of the Yards Neighborhood</p>
      <Image/>
  </Layout>
)

export default IndexPage

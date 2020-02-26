import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo_draft_final.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
//import twitter from '../img/social/twitter.svg'
//import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="container">
              <div className="column social">
                <a title="facebook" href="https://www.facebook.com/CannaEquityIL/">
                  <img
                    className="fas fa-lg"
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '2.5em', height: '2.5em', margin: '1em'}}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/CannaEquityIL/">
                  <img
                    className="fas fa-lg"
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '2.5em', height: '2.5em', margin: '1em'}}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/CannaEquityIL/">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '2.5em', height: '2.5em', margin: '1em'}}
                  />
                </a>
              </div>
          </div>
        </div>
        <footer
          style={{
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()}, Cannabis Equity Illinois Coalition
        </footer>
      </footer>
    )
  }
}

export default Footer

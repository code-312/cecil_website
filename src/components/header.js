import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/box_state_color@4x.png'
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#10AC84',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        overflow: 'hidden',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <img src={logo} alt='Cannabis Equity Coalition IL Logo' style={{
          width: '200px', 
          height: '110px',
          paddingTop: '20px'
        }} />
        <h1 style={{
          margin: 0,
          }}>
          <Link
            to="/"
            activeStyle={{ color: '#076b52'}}
            style={{
              color: `white`,
              textDecoration: `none`,
              paddingLeft: '14px',
              paddingRight: '16px',
            }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            activeStyle={{ color: '#076b52'}}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Contact
          </Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

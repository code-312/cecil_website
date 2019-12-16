import { Link } from "gatsby"
import React from "react"
import logo from '../images/box_state_color@4x.png'

const Navbar = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        navBarActiveClass: ""
      };
    }
  
    toggleHamburger = () => {
      // toggle the active boolean in the state
      this.setState(
        {
          active: !this.state.active
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
            ? this.setState({
                navBarActiveClass: "is-active"
              })
            : this.setState({
                navBarActiveClass: ""
              });
        }
      );
    };
  
    render() {
      return (
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
          style={{
              color: "#10AC84"
          }}
        >
          <div className="container" style={{
              backgroundColor: "#10AC84",
          }}>
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Cannabis Equity Coalition Illinois" 
                style={{
                    margin: "0px",
                    }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger is-transparent burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu is-transparent ${this.state.navBarActiveClass}`}
              style={{
                  backgroundColor: "#10AC84"
              }}
            >
              <div className=" navbar navbar-start has-text-centered is-transparent"
              style={{
                backgroundColor: "#10AC84"
              }}>
                <Link className="navbar-item" to="/" 
                activeStyle={{ color: '#076b52'}}
                style={{
                    color: `white`,
                    fontFamily: 'sans-serif',
                    fontSize: '1.5em',
                    WebkitTextSizeAdjust: '100%',
                }}>
                  About Us
                </Link>
                <Link className="navbar-item" to="/contact"
                activeStyle={{ color: '#076b52'}}
                style={{
                    color: `white`,
                    fontFamily: 'sans-serif',
                    fontSize: '1.5em',
                    WebkitTextSizeAdjust: '100%',
                }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  };
  
  export default Navbar;
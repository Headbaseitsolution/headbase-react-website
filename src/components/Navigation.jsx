import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
function Navigation() {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="nav-header">
            <div className="nav-logo">
              <Link to="/">
                <img
                  src="https://www.headbase.tech/wp-content/uploads/2021/12/logo.svg"
                  alt="white-logo"
                />
              </Link>
            </div>
          </div>

          <input type="checkbox" id="nav-check" />
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

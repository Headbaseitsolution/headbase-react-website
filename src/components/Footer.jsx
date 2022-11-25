import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer-section"
        style={{
          backgroundImage: `url(./assets/images/footer-background.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="footer-blocks">
            <div className="footer-block1">
              <div className="footer-blocks-inner">
                <h4>Company</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-blocks-inner">
                <h4>Services We Are Offering</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/">Graphics Designing</Link>
                  </li>
                  <li>
                    <Link to="/">CMS Development</Link>
                  </li>
                  <li>
                    <Link to="/">PHP Framework Development</Link>
                  </li>
                  <li>
                    <Link to="/">Open Source Development</Link>
                  </li>
                  <li>
                    <Link to="/">Plugin Development</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-blocks-inner">
                <h4>Contact Us</h4>
                <ul className="footer-links">
                  <li>
                    <a href="tel:+91 781 994 2899">+91 781 994 2899</a>
                  </li>
                  <li>
                    <a href="tel:+91 886 622 5674">+91 886 622 5674</a>
                  </li>
                  <li>
                    <a href="mailto:headbase.tech@gmail.com">
                      headbase.tech@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-blocks-inner">
                <h4>Our Address</h4>
                <ul className="footer-links">
                  <li>
                    <p>
                      408-Zircon plus, opp. avalon commercial hub b/s ankur
                      school, Aamba talavadi, Surat, Gujarat 395004.
                    </p>
                  </li>
                </ul>
                <div className="social-links">
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/headbase-it-solution/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="assets/images/linkedin.svg" alt="linked-In" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/Headbaseitsolution"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="assets/images/facebook.svg" alt="facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="assets/images/instagram.svg"
                          alt="instagram"
                          rel="noreferrer"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom-footer">
              <img
                src="https://www.headbase.tech/wp-content/uploads/2021/12/logo.svg"
                alt="footer-logo"
              />
              <p>&copy; Copyright 2021. Headbase IT Solution</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

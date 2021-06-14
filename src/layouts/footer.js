import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (

      <footer className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 footer-col">
              <div className="intro">
                <div className="flogo"><img src="images/tesla_logo_white.png" alt="" /></div>
                <div className="footer-social-links">
                  <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>&nbsp;&nbsp;
                  <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>&nbsp;&nbsp;
                  <a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube-play"></i></a>&nbsp;&nbsp;
                  <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a>
                </div>
                {/* <div className="latest"><p className="intro-content">Tesla Engineering (Pvt) Ltd offers a complete range of electrical project management services: Engineering, Procurement, Construction, Commissioning, Operations and Maintenance.</p></div> */}
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="extralinks">
                <h4 className="title">Services</h4>
                <div className="extralinks-cols">
                  <ul className="extralinks-col">
                    <li> <Link to="/solar">Solar EPC</Link> </li>
                    <li> <Link to="/automation">Automation</Link> </li>
                    <li> <Link to="/coming-soon">Electrical</Link></li>
                    <li> <Link to="/latest">Latest</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="extralinks">
                <h4 className="title">Usefull Links</h4>
                <div className="extralinks-cols">
                  <ul className="extralinks-col">
                    <li> <Link to="/about-us">About Us</Link></li>
                    <li> <Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="address">
                <h4 className="title">Contact Us</h4>
                <div className="extralinks-cols">
                  <ul className="extralinks-col">
                    <li> <span className="fcontact-icon fa fa-clock-o"></span> Mon - Sat 9:00 a.m. - 6:00 p.m. <br />
                      Sunday Closed </li>
                    <li><span className="fcontact-icon fa fa-map-marker"></span>11th Floor, 645 Hudson Street, NY 10018 USA</li>
                    <li><span className="fcontact-icon fa fa-phone"></span>012 345 6789</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}
export default Footer;
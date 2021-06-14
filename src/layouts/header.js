import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <header className="wow fadeInDown" data-offset-top="197" data-spy="affix">
                    <div className="top-wrapper hidden-xs">
                        <div className="containerss">
                            <div className="row">
                                <div className="col-lg-7 col-md-6 col-sm-12">
                                    <div className="guest"> Hi Guest! Welcome to Tesla Engineering</div>
                                </div>
                                <div className="col-lg-5 col-md-6 hidden-sm">
                                    <div className="top-header-add">
                                        <div className="phone"><i className="fa fa-phone" aria-hidden="true"></i><span>Call</span> +61 5001444-122</div>
                                        <div className="book">
                                            <div className="header-social-links">
                                                <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>&nbsp;&nbsp;
                                                <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>&nbsp;&nbsp;
                                                <a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube-play"></i></a>&nbsp;&nbsp;
                                                <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <sections className="navigations">
                        <row className="sajeev">
                            <div className="nav-container">
                                <div className="box">
                                    <div className="brand">

                                        <Link to="/"><img src="images/tesla_logo.png" className="teslalogo" /></Link>
                                    </div>

                                    <nav>
                                        <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                                        <ul className="nav-list">
                                            <li>
                                                <Link to="/home">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/solar">Solar EPC</Link>
                                            </li>
                                            <li>
                                                <Link to="/automation">Automation</Link>
                                            </li>
                                            <li>
                                                <Link to="/coming-soon">Electrical</Link>
                                            </li>
                                            <li>
                                                <Link to="/latest">Latest</Link>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            {/* <li>
                                                <a href="#!">Services</a>
                                                <ul className="nav-dropdown">
                                                    <li><Link to="/our-services">Our Services</Link></li>
                                                    <li><Link to="/service-details">Service Details</Link></li>

                                                </ul>
                                            </li> */}
                                            {/* <li>
                                                <a href="#!">Pages</a>
                                                <ul className="nav-dropdown">
                                                    <li><Link to="/gallery">Gallery</Link></li>
                                                    <li><Link to="/our-team">Our Team</Link></li>
                                                    <li><Link to="/faq">FAQ</Link></li>
                                                    <li><Link to="/testimonials">Testimonials</Link></li>
                                                    <li><Link to="/coming-soon">Coming soon</Link></li>

                                                </ul>
                                            </li> */}
                                            {/* <li>
                                                <a href="#!">Blog</a>
                                                <ul className="nav-dropdown">
                                                    <li><Link to="/our-blog">Our Blog</Link></li>
                                                    <li><Link to="/single-blog">Single Blog</Link></li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                <Link to="/contact-us">Contact</Link>

                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </row>
                    </sections>
                </header>
            </div>
        );
    }
}
export default Header;
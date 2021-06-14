import React, { Component } from 'react';
class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="breadcromb-wrapper">
                    <div className="breadcromb-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="breadcromb-left">
                                    <h3>Contact</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcromb-text">
                    <div className="container">
                        <ul>
                            <li><a href="/home"><i className="fa fa-home"></i>Home</a></li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="inner-page-wrapper contact-wrapper">
                    {/* <div className="container">
                        <div className="title">
                            <h2>Send a Message</h2>
                            <span className="title-border-color"><i className="fa fa-bolt" aria-hidden="true"></i></span> </div>
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 col-xs-offset-0">
                                <div className="contact-form">
                                    <form method="post" id="contact-form">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input className="con-field" name="name" id="name" required="" placeholder="Name" type="text" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input className="con-field" name="messageForm" required="" id="messageForm" placeholder="Subject" type="text" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input className="con-field" name="phone" required="" id="phone" placeholder="Phone" type="text" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input className="con-field" name="email" required="" id="email" placeholder="Email" type="text" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <textarea className="con-field" name="message" id="message" rows="6" placeholder="Your Message" />
                                                <div className="submit-area">
                                                    <button className="btn-one">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="google-map"> */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198710.35112897935!2d-98.51489117772236!3d38.904562823631146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1471865832140" allowfullscreen=""></iframe> */}

                        <div className="contact-info-main">
                            <div className="container">
                                <div className="contact-info">
                                    <div className="title">
                                        <h2>Contact Info</h2>
                                        <span className="border"></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="contact-box border"> <img src="images/phone-icon.png" alt="" />
                                                <h3>Phone</h3>
                                                <p>(800) 123 45 69 or  (012) 123 45 69</p>
                                            </div>
                                            <div className="contact-box"> <img src="images/email-icon.png" alt="" />
                                                <h3>Email</h3>
                                                <p><a href="mailto:info@sbtechnosoft.com">info@sbtechnosoft.com</a></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-sm-6 hidden-sm hidden-xs">
                                            <div className="contact-box-img"> <img src="images/contact-us-icon.png" alt="" /> </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="contact-box border"> <img src="images/fax-icon.png" alt="" />
                                                <h3>Fax</h3>
                                                <p>(600) 123 4569 or (012) 123 45 69</p>
                                            </div>
                                            <div className="contact-box"> <img src="images/map-icon.png" alt="" />
                                                <h3>Address</h3>
                                                <p>PO Box 97845 Baker st. 567, <br />Los Angeles, California, US.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>

        );
    }
}
export default ContactUs;
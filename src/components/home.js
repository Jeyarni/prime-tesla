import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeSlider from '../sliders/homeSlider';
// import Testimonialz from './pages/testimonialSlider';
class Home extends Component {
  render() {
    return (
      <React.Fragment>

        <HomeSlider />

        {/* <div className="cta-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="cta-inner cta-text"> Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you? </div>
              </div>
              <div className="col-sm-5">
                <div className="cta-inner cta"> <img src="images/cta-phone-icon.png" alt="" />
                  <h3>Get Free Consultation <span>1-012-345-678</span></h3>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="cta-inner cta-btn"> <a href="#">Call Us Now <i className="fa fa-arrow-right" aria-hidden="true"></i></a> </div>
              </div>
            </div>
          </div>
        </div> */}

        <section className="our-services-wrapper">
          <div className="container">
            <div className="title">
              <h2>Our Services</h2>
              <span className="title-border-color"><i className="fa fa-bolt" aria-hidden="true"></i></span> </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-service">
                  <div className="single-services">
                    <div className="services-inner">
                      <div className="our-services-icon"> <span><img src="images/services-icon1.png" alt="" /></span></div>
                      <div className="our-services-text">
                        <h3>Solar EPC</h3>
                        <p>Tesla Engineering is a Solar Engineering, Procurement, and Construction that specializes...</p>
                        <Link to="/solar">Read More</Link> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-service">
                  <div className="single-services">
                    <div className="services-inner">
                      <div className="our-services-icon"> <span><img src="images/services-icon2.png" alt="" /></span></div>
                      <div className="our-services-text">
                        <h3>Automation</h3>
                        <p>Tesla Engineering is a leading company in the complete automation of your homes...</p>
                        <Link to="/automation">Read More</Link> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-service">
                  <div className="single-services">
                    <div className="services-inner">
                      <div className="our-services-icon"> <span><img src="images/services-icon3.png" alt="" /></span></div>
                      <div className="our-services-text">
                        <h3>Electrical</h3>
                        <p>Be Ready. We Are Launching Soon...&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;</p>
                        <Link to="/coming-soon">Read More</Link> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; */}

      </React.Fragment>
    );
  }
}
export default Home;
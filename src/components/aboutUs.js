import React, { Component } from 'react';
class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="breadcromb-wrapper">
          <div className="breadcromb-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="breadcromb-left">
                  <h3>About Us</h3>
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
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="inner-page-wrapper our-services-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="about-faq-wrapper">
                  <div className="panel-group panel-faq" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div id="collapse1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading1" >
                        <div className="panel-body">
                          <div className="tabs-content-right">
                            <h3>About Us Page</h3>
                            <p>Tesla Engineering (PVT) Ltd is a Solar Engineering, Procurement, and Construction (EPC) company that specializes in the installation and operation of modern solar products. We install high-grade Solar systems that are very superior to traditional solar systems in the market.</p>
                            &nbsp;&nbsp;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="automation-space"></div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-service">
                  <div className="single-services">
                    <div className="about-us-inner">
                      <div className="our-services-icon"> <span><img src="images/services-icon1.png" alt="" /></span></div>
                      <div className="about-us-card">
                        <h3>Products and services</h3>
                        <p>Tesla Engineering specializes in the production and installation of the following solar products like SunPower, Seraphim, SMA, Solis, LGchem, and many other solar products. We specialize in the installation of numerous flexible solar panels that have a great advantage over normal solar panels from other consumers. We are experts in the installation and operation of off-grid solar products. We install and distribute authentic solar products and materials.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-service">
                  <div className="single-services">
                    <div className="about-us-inner">
                      <div className="our-services-icon"> <span><img src="images/services-icon2.png" alt="" /></span></div>
                      <div className="about-us-card">
                        <h3>High solar efficiency</h3>
                        <p>With supply and install high efficiency solar products that come with premium quality. Tesla Engineering is the leading company when it comes to the distribution and installation of Solar technology.</p>
                        <div className="automation-space"></div>
                        <div className="automation-space"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-service">
                  <div className="single-services">
                    <div className="about-us-inner">
                      <div className="our-services-icon"> <span><img src="images/services-icon3.png" alt="" /></span></div>
                      <div className="about-us-card">
                        <h3>Flexible and durable solar products</h3>
                        <p>We supply and install sustainable and durable solar products that can withstand any weather and last for a long time. All our solar products come with warranties and are more superior to conventional materials on the market. Our solar products are designed aerodynamically to be used anywhere. They can be used in a whole range of places like the motor, marine, boat, caravan, etc.</p>
                        <div className="automation-space"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-service">
                  <div className="single-services">
                    <div className="about-us-inner">
                      <div className="our-services-icon"> <span><img src="images/services-icon4.png" alt="" /></span></div>
                      <div className="about-us-card">
                        <h3>Management</h3>
                        <p>Tesla Engineering is run and operated by Alfred Athavan who is the Managing Director/Chief Executive Officer. Athavan is a seasoned expert in the field of Solar Engineering, Procurement, and Construction (EPC). He has successfully helped several clients manage their solar installation and operation projects to become energy efficient and sustainable. Under the management of Athavan covers the entire Sri Lankan island with three branches around the country.</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default AboutUs;
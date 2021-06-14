import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


function HomeSlider() {

  var settings = {
    dots: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        arrows: false,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <React.Fragment>
      <div className="banner-wrapper">
        <div id="first-slider" className="">
          <div id="carousel-example-generic" className="carousel slide carousel-fade">

            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className=""></li>
              <li data-target="#carousel-example-generic" data-slide-to="1" className=""></li>
              <li data-target="#carousel-example-generic" data-slide-to="2" className="active"></li>
            </ol>

            <div className="carousel-inner" role="listbox">

              <div className="item slide1">
                <div className="row">
                  <div className="container">
                    <div className="col-md-4 col-sm-5 text-center hidden-sm hidden-md hidden-lg"> <img data-animation="animated zoomInLeft" src="images/slider-img1.png" alt="" className="" /> </div>
                    <div className="col-md-8 col-sm-7 text-left">
                      <h1 data-animation="animated bounceInLeft" className="animated bounceInLeft">Welcome To <span>Tesla Engineering</span></h1>
                      <p data-animation="animated bounceInLeft" className="animated bounceInLeft">Tesla Engineering (Pvt) Ltd offers a complete range of electrical project management services: Engineering, Procurement, Construction, Commissioning, Operations and Maintenance.</p>
                      <Link className="btn btn-hero animated bounceInLeft" data-animation="animated bounceInLeft" to="/contact-us">Contact Us</Link>
                    </div>
                    <div className="col-md-4 col-sm-5 text-right hidden-xs"> <img data-animation="animated zoomInLeft" src="images/slider-img1.png" alt="" className="animated zoomInLeft" /> </div>
                  </div>
                </div>
              </div>

              <div className="item slide2 active">
                <div className="row">
                  <div className="container">
                    <div className="col-md-4 col-sm-5 text-center hidden-sm hidden-md hidden-lg"> <img data-animation="animated zoomInLeft" src="images/slider-img1.png" alt="" className="" /> </div>
                    <div className="col-md-8 col-sm-7 text-left">
                      <h1 data-animation="animated bounceInLeft" className="animated bounceInLeft">Welcome To <span>Tesla Engineering</span></h1>
                      <p data-animation="animated bounceInLeft" className="animated bounceInLeft">Tesla Engineering (Pvt) Ltd offers a complete range of electrical project management services: Engineering, Procurement, Construction, Commissioning, Operations and Maintenance.</p>
                      <Link className="btn btn-hero animated bounceInLeft" data-animation="animated bounceInLeft" to="/contact-us">Contact Us</Link>
                    </div>
                    <div className="col-md-4 col-sm-5 text-right hidden-xs"> <img data-animation="animated zoomInLeft" src="images/slider-img2.png" alt="" className="animated zoomInLeft" /> </div>
                  </div>
                </div>
              </div>

              <div className="item slide3">
                <div className="row">
                  <div className="container">
                    <div className="col-md-4 col-sm-5 text-center hidden-sm hidden-md hidden-lg"> <img data-animation="animated zoomInLeft" src="images/slider-img1.png" alt="" className="" /> </div>
                    <div className="col-md-8 col-sm-7 text-left">
                      <h1 data-animation="animated bounceInLeft" className="animated bounceInLeft">Welcome To <span>Tesla Engineering</span></h1>
                      <p data-animation="animated bounceInLeft" className="animated bounceInLeft">Tesla Engineering (Pvt) Ltd offers a complete range of electrical project management services: Engineering, Procurement, Construction, Commissioning, Operations and Maintenance.</p>
                      <Link className="btn btn-hero animated bounceInLeft" data-animation="animated bounceInLeft" to="/contact-us">Contact Us</Link>
                    </div>
                    <div className="col-md-4 col-sm-5 text-right hidden-xs"> <img data-animation="animated zoomInLeft" src="images/slider-img3.png" alt="" className="animated zoomInLeft" /> </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <i className="fa fa-angle-left"></i><span className="sr-only">Previous</span> </a> <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <i className="fa fa-angle-right"></i><span className="sr-only">Next</span> </a> </div>
        </div>
      </div>

    </React.Fragment>
  );
}
export default HomeSlider;
import React, { Component } from 'react';
class ComingSoon extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="breadcromb-wrapper">
          <div className="breadcromb-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="breadcromb-left">
                  <h3>Coming Soon</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcromb-text">
          <div className="container">
            <ul>
              <li><a href="index-2.html"><i className="fa fa-home"></i>Home</a></li>
              <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
              {/* <li>Pages</li> */}
              <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
              <li>Coming Soon</li>
            </ul>
          </div>
        </div>
        <div className="inner-page-wrapper coming-soon-wrapper">
          <div className="container">
            <h3>Be Ready. We Are Launching Soon</h3>
            <div className="coutndown">
              <div className="clearfix" data-countdown="2020/11/1"></div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}
export default ComingSoon;
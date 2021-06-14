import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Latest extends Component {
    render() {
        return (
            <div>
                <div className="breadcromb-wrapper">
                    <div className="breadcromb-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="breadcromb-left">
                                    <h3>Latest</h3>
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
                            <li>Latest</li>
                        </ul>
                    </div>
                </div>

                <div className="inner-page-wrapper our-team-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="about-faq-wrapper">
                                    <div className="panel-group panel-faq" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div id="collapse1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading1" >
                                                <div className="panel-body">
                                                    <div className="tabs-content-right">
                                                        <h3>Community</h3>
                                                        <p>Tesla Engineering is a professional Solar EPC company that aims to promote services that make the society sustainable and a comfortable place to live in. We have a strong social engagement culture that helps us impact the community positively. From the supplying and installation of environmentally friendly products to the sponsoring of major events, we help make the society a better place for all.</p>
                                                        &nbsp;&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="team-item">
                                    <div className="team-item-image"> <img src="images/out-team1.jpg" alt="" />
                                    </div>
                                    <div className="team-item-descr font-alt">
                                        <div className="team-item-name">Our corporate social  &nbsp; &nbsp;responsibility</div>
                                        <div className="latest"><p>Tesla Engineering is a professional company that believes in giving back to the society. We take our corporate social responsibilities very seriously and we are very proud of our community involvements. We are proud sponsors of popular football and cricket tournaments here in Sri Lanka. We have sponsored a lot of events in the past and continue to engage with more stakeholders in that regard.</p></div>
                                        <Link to="/latest-view">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="team-item">
                                    <div className="team-item-image"> <img src="images/out-team2.jpg" alt="" />
                                    </div>
                                    <div className="team-item-descr font-alt">
                                        <div className="team-item-name">Training and workforce development</div>
                                        <div className="latest"><p>Tesla Engineering operates in a dynamic work environment that changes very fast. We recognize the significance of developing our workforce to help serve our clients better. We promote initiatives to help deliver excellent work quality.</p></div>
                                        {/* &nbsp; &nbsp; <div className="latest-space"></div>
                                        &nbsp; &nbsp;&nbsp; &nbsp; */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="team-item">
                                    <div className="team-item-image"> <img src="images/out-team3.jpg" alt="" />
                                    </div>
                                    <div className="team-item-descr font-alt">
                                        <div className="team-item-name">Our company culture</div>
                                        <div className="latest"><p>Tesla Engineering looks to create a conducive and engaging place of work for our employees. We have fostered a professional environment within our company to ensure that our employees are given the best support they need. We excellently reward our hardworking employees and also help upgrade their skills if the need arises.</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="team-item">
                                    <div className="team-item-image"> <img src="images/out-team4.jpg" alt="" />
                                    </div>
                                    <div className="team-item-descr font-alt">
                                        <div className="team-item-name">Continuous search for talent</div>
                                        <div className="latest"><p>We recognize the importance our human resources to our company. Therefore, we are constantly on the lookout for more talents to join the team at Tesla Engineering. As we expand, we plan to increase the head count of our talent pool to help us properly cater to all the needs of our clients.</p></div>
                                        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
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
export default Latest;
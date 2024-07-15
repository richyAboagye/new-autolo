import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo/logo-2.png'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="hx-site-footer-area">
        <div className="hx-site-footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-t">
                        <div className="hx-site-logo">
                            <Link to="/"><img src={Logo} alt=""/></Link>
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        <div className="social">
                            <ul className="d-flex">
                                <li><Link onClick={ClickHandler} to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-t">
                        <div className="hx-site-footer-link">
                            <h3>Recent post</h3>
                            <div className="hx-latest-section">
                                <div className="posts">
                                    <div className="post">
                                        <div className="img-holder">
                                            <img src={n1} alt="" />
                                        </div>
                                        <div className="details">
                                            <p>Most Importent Issue For your car.</p>
                                            <span>18 Feb 2019</span>
                                        </div>
                                    </div>
                                    <div className="post">
                                        <div className="img-holder">
                                            <img src={n2} alt="" />
                                        </div>
                                        <div className="details">
                                            <p>Most Importent Issue For your car.</p>
                                            <span>18 Feb 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-t">
                        <div className="hx-site-footer-adress">
                            <h3>Address</h3>
                            <div className="adress-section">
                                <ul>
                                    <li>Head Office Address</li>
                                    <li>121 King Street, Melbourne West, </li>
                                    <li>Australia</li>
                                </ul>
                                <ul className="ad">
                                    <li><span>Phone:</span> 888 123-4587</li>
                                    <li><span>Email:</span> info@example.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-t">
                        <div className="hx-site-footer-service">
                            <h3>Services</h3>
                            <div className="service-section">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/service-details">Engine Repair</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-details">Tire Replacement</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-details">Trandmission</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-details">Diagnostic</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-details">Batteries</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-details">Break Repair</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hx-site-footer-bottom">
            <div className="container">
                <div className="hx-site-footer-bottom-content">
                    <div className="row">
                        <div className="col-12">
                            <span>Privacy Policy | © 2021 <Link onClick={ClickHandler} to="/home">Autalogic.</Link> All rights reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;
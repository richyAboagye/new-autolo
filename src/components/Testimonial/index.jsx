import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '../../images/testimonial/testi1.png'
import test2 from '../../images/testimonial/testi4.jpg'
import test3 from '../../images/testimonial/testi2.png'

import './style.css'



class Testimonial extends Component {

    
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (

            <div className="hx-testimonial-area">
                <div className="container">
                    <div className="hx-testimonial-active owl-carousel">
                        <Slider {...settings}>
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item">
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>I brought my car in for a diagnostic check, and the team at the shop was fantastic! They quickly identified the issue and fixed it at a reasonable price. My car runs better than ever. Highly recommended!</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                        <img src={test1} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>Jimmy Alex</h4>
                                        <span>SEO of Northy</span>
                                    </div>
                                </div>
                            </div> 
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item">
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>The brake repair service here is top-notch! The mechanics were thorough and professional, and I felt safe driving my car again. I appreciate their attention to detail and excellent customer service.</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                         <img src={test2} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>Ken Williamson</h4>
                                        <span>CEO, Deixfes</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item"> 
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>I needed a new set of tires, and the replacement service was seamless. The staff was knowledgeable and helped me choose the right tires for my car. My vehicle handles much better now. Great experience overall!</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                        <img src={test3} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>David Warner</h4>
                                        <span>CEO, TBR</span>
                                    </div>
                                </div>
                            </div> 
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;
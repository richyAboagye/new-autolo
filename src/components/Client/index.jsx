import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '../../images/client/3.png'
import client2 from '../../images/client/2.png'
import client3 from '../../images/client/3.png'
import client4 from '../../images/client/4.png'
import client5 from '../../images/client/5.png'
import './style.css'


class Client extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div className="hx-client-area">
            <div className="container">
                <div className="hx-client-item">
                    <div className="Gift-carousel owl-carousel">
                        <Slider {...settings}>
                            <img src={client1} alt="clinet"/>
                            <img src={client2} alt="clinet"/>
                            <img src={client3} alt="clinet"/>
                            <img src={client4} alt="clinet"/>
                            <img src={client5} alt="clinet"/>
                            <img src={client1} alt="clinet"/>
                            <img src={client2} alt="clinet"/>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default Client;
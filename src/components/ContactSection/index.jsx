import React, { useEffect } from 'react';
import ContactForm from '../ContactFrom'
import './style.css'
import contactimg from '../../images/contact/car.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return(
        <div className="hx-contact-area ptb-100-70">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-12 col-sm-12">
                        <div className="hx-contact-content">
                            <div className="row" data-aos="fade-up" data-aos-duration="1200">
                                <h2>Book An Appointment</h2>
                            </div>
                            <div className="hx-contact-form" data-aos="fade-up" data-aos-duration="1200">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hx-contact-img" data-aos="fade-up" data-aos-duration="1200">
                            <img src={contactimg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default ContactSection;

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = (props) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    const service = [
        {
            icon: 'fi flaticon-car-repair',
            title: 'Diagnostic',
            des:'Comprehensive vehicle diagnostics to accurately identify and address underlying issues for optimal performance.',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-battery',
            title: 'Batteries',
            des:'Reliable battery testing, replacement, and maintenance to ensure your vehicle starts and runs smoothly.',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-electricity',
            title: 'Breaks',
            des:'Expert brake inspection, repair, and replacement services to ensure your safety on the road with reliable performance.',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-turbo',
            title: 'Engine Repair',
            des:'Professional engine repair and maintenance services to keep your vehicle running at peak performance.',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-tyre',
            title: 'Tires Replacement',
            des:'Expert tire replacement services for improved safety, performance, and long-lasting driving comfort, ensuring a smooth and secure ride.',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-car-1',
            title: 'Transmission',
            des:'Comprehensive transmission repair and maintenance services to ensure smooth shifting and optimal vehicle performance.',
            link:'/service-details'
        },
    ]


    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return (

        <div className={`hx-service-style-1 ptb-100-70 ${props.sClass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="hx-site-title-1 text-center">
                        <span>What We Do</span>
                        <h2>Our Services</h2>
                    </div>
                </div>
                
                <div className="row">
                    {service.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={Sitem}  >
                            <div className="hx-service-wrap">
                                <div className="hx-service-icon" data-aos="fade-right" data-aos-duration="1200">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="hx-service-text" data-aos="fade-left" data-aos-duration="1200">
                                    <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                    <p>{service.des}</p>
                                </div>  
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;
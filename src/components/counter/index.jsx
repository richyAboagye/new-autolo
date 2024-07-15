import React, { useEffect } from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const CounterSection = (props) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return(
        <div className={`hx-counter-area ${props.counterClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hx-counter-grids">
                            <div className="grid" data-aos="fade-right" data-aos-duration="1200">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-worker"></i>
                                </div>
                                <div>
                                    <h2><span className="odometer" data-count="300">300</span>+</h2>
                                </div>
                                <p>Expert Technicians</p>
                            </div>
                            <div className="grid" data-aos="fade-left" data-aos-duration="1200">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-employee"></i>
                                </div>
                                <div>
                                    <h2><span className="odometer" data-count="1026">1026</span></h2>
                                </div>
                                <p>Satisfied Client</p>
                            </div>
                            <div className="grid" data-aos="fade-up" data-aos-duration="1200">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-business-and-finance"></i>
                                </div>
                                <div>
                                    <h2><span className="odometer" data-count="25">25</span>+</h2>
                                </div>
                                <p>Years Experience</p>
                            </div>
                            <div className="grid" data-aos="fade-down" data-aos-duration="1200">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-car"></i>
                                </div>
                                <div>
                                    <h2><span className="odometer" data-count="3215">3215</span></h2>
                                </div>
                                <p>Compleate Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterSection;
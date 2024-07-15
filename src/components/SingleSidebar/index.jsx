import React from 'react';
import {Link} from 'react-router-dom'
import s1 from '../../images/service-details/img-3.jpg'


const SingleSidebar = () => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <div className="col-lg-4 col-md-12 col-12">
            <div className="hx-service-dt-left">
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/">Engine Repair</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Tires Replacement</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Transmission</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Diagnostic</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Bateries Replacement</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Break Repair</Link></li>
                    </ul>
                </div>
                <div className="hx-field-section">
                    <div className="hx-field-img">
                        <img src={s1} alt=""/>
                    </div>
                    <div className="hx-field-content">
                        <h3>Get<span>25%</span>Off</h3>
                        <h2>ALL ORDER</h2>
                    </div>
                </div>
                <div className="hx-contact-ad">
                    <div className="hx-contact-sub">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <h4>Phone</h4>
                        <p>+20 010 251 789 18 , 251 789 18</p>
                    </div>
                    <div className="hx-contact-sub">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <h4>Email</h4>
                        <p>youremailaddress@gmail.com</p>
                    </div>
                    <div className="hx-contact-sub hx-contact-sub-2">
                        <i className="fa fa-map-o" aria-hidden="true"></i>
                        <h4>Address</h4>
                        <p> 203, Envato Labs, Behind Alis Steet,Australia</p>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default SingleSidebar;

import React from 'react'
import { Link } from 'react-router-dom'
import sd1 from '../../images/service-details/img-1.jpg'
import sd2 from '../../images/service-details/img-2.jpg'
import SingleSidebar from '../SingleSidebar'
import './style.css'


const ServicesSingle = (props) => {

    return (

        <div className="hx-service-dt-area hx-section-padding">
            <div className="container">
                <div className="row">
                    <SingleSidebar/>
                    <div className="col-lg-8">
                        <div className="hx-service-dt-right">
                            <div className="hx-service-dt-img">
                                <img src={sd1} alt=""/>
                            </div>
                            <p><span>T</span>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            <blockquote>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words beautiful a benificial to world etc.
                            </blockquote>
                            <div className="hx-service-dt-s">
                                <img src={sd2} alt=""/>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,</p>
                            </div>
                        </div>
                        <div className="prv-nx">
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                            <div className="pre-btn"><Link to="/service-details">Previous</Link></div>
                            <div className="nex-btn"><Link to="/service-details">Next</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSingle;
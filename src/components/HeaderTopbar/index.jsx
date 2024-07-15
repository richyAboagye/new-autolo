import React from 'react'
import {Link}  from 'react-router-dom'

const HeaderTopbar = (props) => {
    return(	
        <div className={`hx-header-top-1 ${props.htClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-9 col-sm-12 col-12 col-lg-8 col-t">
                        <ul className="d-flex account_login-area">
                            <li><i className="fa fa-clock-o" aria-hidden="true"></i>Mon - Tues : 6.00 am - 10.00 pm</li>
                            <li><i className="fa fa-map-marker"></i>121 King St, Melbourne, Australia</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 col-lg-4 col-m">
                        <ul className="d-flex header-social">
                            <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                            <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                            <li><Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;
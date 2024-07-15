import React from 'react'
import Logo from '../../images/logo/logo-2.png'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import HeaderTopbar from '../../components/HeaderTopbar'
import './style.css'

const Header = (props) => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

     const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(	
        <header>
            <HeaderTopbar htClass={props.htClass}/>
            <div className={`hx-header-style-1 ${props.hClass}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-7 col-sm-8 col-7 col-t">
                            <div className="logo">
                                <Link onClick={ClickHandler} to="/home"><img src={Logo} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block col-m">
                            <div className="main-menu">
                                <nav className="nav_mobile_menu">
                                    <ul>
                                        <li className="active"><Link onClick={ClickHandler} to="/">Home</Link>
                                            <ul className="submenu">
                                                <li className="active"><Link onClick={ClickHandler} to="/home">Home One</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home2">Home Two</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home3">Home Three</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">Services</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/service">service</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-details">service details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/project">Projects</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/project">project</Link></li>
                                                <li><Link onClick={ClickHandler} to="/project-details">project details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/">Pages</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/pricing">pricing table</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">Error 404</Link></li>
                                                <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} to="/signup">Register</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/">Blog</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog Grid</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-list">Blog with sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog full width</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-single">Blog single sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-single-fullwidth">Blog single fullwidth</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-2 col-2 search col-t">
                            <ul>
                                <li><Link onClick={ClickHandler} to="/"><i className="fa fa-search"></i></Link>
                                    <ul>
                                        <li>
                                            <form action="search" onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="search here.."/>
                                                <button><i className="fa fa-search"></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-2 col-2 d-block d-lg-none">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
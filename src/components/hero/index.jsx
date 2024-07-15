// // import React, { Component } from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // // import HeroContactFrom from '../HeroContactFrom'

// // import './style.css'

// // import hero1 from '../../images/slider/22.jpg'
// // import hero2 from '../../images/slider/6.jpeg'
// // import hero3 from '../../images/slider/7.jpg'
// // import { Link } from "react-router-dom";



// // class Hero extends Component {
// //     render() {

// //         var settings = {
// //             dots: true,
// //             arrows: true,
// //             speed: 1200,
// //             slidesToShow: 1,
// //             slidesToScroll: 1,
// //             autoplay: true,
// //             autoplaySpeed: 2500,
// //             fade: true
// //         };

// //         const ClickHandler = () =>{
// //             window.scrollTo(10, 0);
// //          }

// //         return (
// //             <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
// //                 <div className="hero-slider">
// //                     <Slider {...settings}>
// //                         <div className="slide">
// //                             <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
// //                                 <div className="container header-p">
// //                                     <div className="row">
// //                                         <div className="col col-lg-6 hx-slide-caption">
// //                                             <h2>Best Car Repairing Services</h2>
// //                                             <p>Quality Auto Repair WordPress Theme in Envato Market.We offer a variety of Custom services.</p>
// //                                             <div className="btn-style">
// //                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
// //                                             </div>
// //                                         </div>
// //                                         {/* <div className="col-lg-6">
// //                                             <HeroContactFrom/>
// //                                         </div> */}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="slide">
// //                             <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
// //                                 <div className="container header-p">
// //                                     <div className="row">
// //                                         <div className="col col-lg-6 hx-slide-caption">
// //                                             <h2>Your Car is in the Right Hands.</h2>
// //                                             <p>Quality Auto Repair WordPress Theme in Envato Market.We offer a variety of Custom services.</p>
// //                                             <div className="btn-style">
// //                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
// //                                             </div>
// //                                         </div>
// //                                         {/* <div className="col-lg-6">
// //                                             <HeroContactFrom/>
// //                                         </div> */}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="slide">
// //                             <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
// //                                  <div className="container header-p">
// //                                     <div className="row">
// //                                         <div className="col col-lg-6 hx-slide-caption">
// //                                             <h2>We are Qualified & Professional</h2>
// //                                             <p>Quality Auto Repair WordPress Theme in Envato Market.We offer a variety of Custom services.</p>
// //                                             <div className="btn-style">
// //                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
// //                                             </div>
// //                                         </div>
// //                                         {/* <div className="col-lg-6">
// //                                              <HeroContactFrom/>
// //                                         </div> */}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </Slider>
// //                 </div>
// //              </section>
// //         )
// //     }
// // }

// export default Hero;

import React, { Component, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import HeroContactForm from '../HeroContactForm'

import './styless.css';

import hero1 from '../../images/slider/22.jpg';
import hero2 from '../../images/slider/6.jpeg';
import hero3 from '../../images/slider/7.jpg';
import { Link } from "react-router-dom";

class Hero extends Component {
    constructor(props) {
        super(props);
        this.slideRefs = [createRef(), createRef(), createRef()];
    }

    componentDidMount() {
        // Initially animate the first slide
        this.animateSlide(0);
    }

    animateSlide = (index) => {
        this.slideRefs.forEach((ref, i) => {
            if (i === index) {
                ref.current.style.opacity = 1;
                ref.current.style.transform = 'translateY(0)';
            } else {
                ref.current.style.opacity = 0;
                ref.current.style.transform = 'translateY(50px)';
            }
        });
    }

    handleBeforeChange = (oldIndex, newIndex) => {
        this.animateSlide(newIndex);
    }

    render() {
        const settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true,
            beforeChange: this.handleBeforeChange
        };

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[0]}>
                                            <h2>Best Car Repairing Services</h2>
                                            <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">More About</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[1]}>
                                            <h2>Your Car is in the Right Hands</h2>
                                            <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">More About</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[2]}>
                                            <h2>We are Qualified & Professional</h2>
                                            <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">More About</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Hero;


// import React, { Component, createRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './styles.css';
// import hero1 from '../../images/slider/22.jpg';
// import hero2 from '../../images/slider/6.jpeg';
// import hero3 from '../../images/slider/7.jpg';
// import { Link } from "react-router-dom";

// class Hero extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeSlide: 0,
//             exitingSlide: null
//         };
//         this.slides = [
//             { image: hero1, caption: 'Best Car Repairing Services', description: 'Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.' },
//             { image: hero2, caption: 'Your Car is in the Right Hands', description: 'Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.' },
//             { image: hero3, caption: 'We are Qualified & Professional', description: 'Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.' }
//         ];
//         this.timer = null;
//     }

//     componentDidMount() {
//         this.startAutoplay();
//     }

//     componentWillUnmount() {
//         clearTimeout(this.timer);
//     }

//     startAutoplay = () => {
//         this.timer = setInterval(this.nextSlide, 2500);
//     }

//     nextSlide = () => {
//         this.setState((prevState) => {
//             const exitingSlide = prevState.activeSlide;
//             const nextSlide = (prevState.activeSlide + 1) % this.slides.length;
//             return { activeSlide: nextSlide, exitingSlide };
//         }, () => {
//             setTimeout(() => {
//                 this.setState({ exitingSlide: null });
//             }, 1000); // Duration of the slide transition
//         });
//     }

//     render() {
//         const { activeSlide, exitingSlide } = this.state;

//         return (
//             <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
//                 <div className="hero-slider">
//                     {this.slides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className={`slide ${index === activeSlide ? 'active' : ''} ${index === exitingSlide ? 'exiting' : ''}`}
//                         >
//                             <div className="slide-inner" style={{ backgroundImage: `url(${slide.image})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption">
//                                             <h2>{slide.caption}</h2>
//                                             <p>{slide.description}</p>
//                                             <div className="btn-style">
//                                                 <Link to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         );
//     }
// }

// export default Hero;


// import React, { Component, createRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
// import './styles.css';

// import hero1 from '../../images/slider/22.jpg';
// import hero2 from '../../images/slider/6.jpeg';
// import hero3 from '../../images/slider/7.jpg';

// class Hero extends Component {
//     constructor(props) {
//         super(props);
//         this.slideRefs = [createRef(), createRef(), createRef()];
//     }

//     componentDidMount() {
//         this.animateSlide(0);
//     }

//     animateSlide = (index) => {
//         this.slideRefs.forEach((ref, i) => {
//             if (ref.current) {
//                 if (i === index) {
//                     ref.current.style.opacity = 1;
//                     ref.current.style.transform = 'translateY(0)';
//                 } else {
//                     ref.current.style.opacity = 0;
//                     ref.current.style.transform = 'translateY(50px)';
//                 }
//             }
//         });
//     }

//     handleBeforeChange = (oldIndex, newIndex) => {
//         this.animateSlide(newIndex);
//     }

//     render() {
//         const settings = {
//             dots: true,
//             arrows: true,
//             speed: 1200,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2500,
//             fade: true,
//             beforeChange: this.handleBeforeChange
//         };

//         const ClickHandler = () => {
//             window.scrollTo(10, 0);
//         }

//         return (
//             <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
//                 <div className="hero-slider">
//                     <Slider {...settings}>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[0]}>
//                                             <h2>Best Car Repairing Services</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[1]}>
//                                             <h2>Your Car is in the Right Hands</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[2]}>
//                                             <h2>We are Qualified & Professional</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Hero;


// import React, { Component, createRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
// import './styles.css';

// import hero1 from '../../images/slider/22.jpg';
// import hero2 from '../../images/slider/6.jpeg';
// import hero3 from '../../images/slider/7.jpg';

// class Hero extends Component {
//     constructor(props) {
//         super(props);
//         this.slideRefs = [createRef(), createRef(), createRef()];
//     }

//     componentDidMount() {
//         this.animateSlide(0);
//     }

//     animateSlide = (index) => {
//         this.slideRefs.forEach((ref, i) => {
//             if (ref.current) {
//                 if (i === index) {
//                     ref.current.style.opacity = 1;
//                     ref.current.style.transform = 'translateY(0)';
//                 } else {
//                     ref.current.style.opacity = 0;
//                     ref.current.style.transform = 'translateY(50px)';
//                 }
//             }
//         });
//     }

//     handleBeforeChange = (oldIndex, newIndex) => {
//         this.animateSlide(newIndex);
//     }

//     render() {
//         const settings = {
//             dots: true,
//             arrows: true,
//             speed: 1200,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2500,
//             beforeChange: this.handleBeforeChange
//         };

//         const ClickHandler = () => {
//             window.scrollTo(10, 0);
//         }

//         return (
//             <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
//                 <div className="hero-slider">
//                     <Slider {...settings}>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[0]}>
//                                             <h2>Best Car Repairing Services</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[1]}>
//                                             <h2>Your Car is in the Right Hands</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[2]}>
//                                             <h2>We are Qualified & Professional</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Hero;



// import React, { Component, createRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
// import './styles.css';

// import hero1 from '../../images/slider/22.jpg';
// import hero2 from '../../images/slider/6.jpeg';
// import hero3 from '../../images/slider/7.jpg';

// class Hero extends Component {
//     constructor(props) {
//         super(props);
//         this.slideRefs = [createRef(), createRef(), createRef()];
//     }

//     componentDidMount() {
//         this.animateSlide(0);
//     }

//     animateSlide = (index) => {
//         this.slideRefs.forEach((ref, i) => {
//             if (ref.current) {
//                 if (i === index) {
//                     // ref.current.style.opacity = 1;
//                     ref.current.style.transform = 'translateY(0)';
//                 } else {
//                     // ref.current.style.opacity = 0;
//                     ref.current.style.transform = 'translateY(50px)';
//                 }
//             }
//         });
//     }

//     handleBeforeChange = (oldIndex, newIndex) => {
//         this.animateSlide(newIndex);
//     }

//     render() {
//         const settings = {
//             dots: true,
//             arrows: true,
//             speed: 2000,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 4000,
//             beforeChange: this.handleBeforeChange
//         };

//         const ClickHandler = () => {
//             window.scrollTo(10, 0);
//         }

//         return (
//             <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
//                 <div className="hero-slider">
//                     <Slider {...settings}>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[0]}>
//                                             <h2>Best Car Repairing Services</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[1]}>
//                                             <h2>Your Car is in the Right Hands</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[2]}>
//                                             <h2>We are Qualified & Professional</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Hero;



// import React, { Component, createRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
// import './styless.css';

// import hero1 from '../../images/slider/22.jpg';
// import hero2 from '../../images/slider/6.jpeg';
// import hero3 from '../../images/slider/7.jpg';

// class Hero extends Component {
//     constructor(props) {
//         super(props);
//         this.slideRefs = [createRef(), createRef(), createRef()];
//     }

//     componentDidMount() {
//         this.animateSlide(0);
//     }

//     animateSlide = (index) => {
//         this.slideRefs.forEach((ref, i) => {
//             if (ref.current) {
//                 if (i === index) {
//                     ref.current.style.opacity = 1;
//                     ref.current.style.transform = 'translateY(0)';
//                 } else {
//                     ref.current.style.opacity = 0;
//                     ref.current.style.transform = 'translateY(50px)';
//                 }
//             }
//         });
//     }

//     handleBeforeChange = (oldIndex, newIndex) => {
//         this.animateSlide(newIndex);
//     }

//     render() {
//         const settings = {
//             dots: true,
//             arrows: true,
//             speed: 2500,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 8000,
//             beforeChange: this.handleBeforeChange
//         };

//         const ClickHandler = () => {
//             window.scrollTo(10, 0);
//         }

//         return (
//             <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
//                 <div className="hero-slider">
//                     <Slider {...settings}>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[0]}>
//                                             <h2>Best Car Repairing Services</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[1]}>
//                                             <h2>Your Car is in the Right Hands</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
//                                 <div className="container header-p">
//                                     <div className="row">
//                                         <div className="col col-lg-6 hx-slide-caption" ref={this.slideRefs[2]}>
//                                             <h2>We are Qualified & Professional</h2>
//                                             <p>Quality Auto Repair WordPress Theme in Envato Market. We offer a variety of Custom services.</p>
//                                             <div className="btn-style">
//                                                 <Link onClick={ClickHandler} to="/about">More About</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Hero;

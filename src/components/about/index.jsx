// import React from 'react'
// import abimg from '../../images/about/video1.jpg'
// import VideoModal from '../ModalVideo'
// import { Link } from "react-router-dom";
// import './style.css'

// const About = (props) => {
//     const ClickHandler = () =>{
//         window.scrollTo(10, 0);
//      }
//     return(
//         <div className="hx-about-style-2">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-12">
//                         <div className="hx-about-content">
//                             <div className="hx-site-title">
//                                 <span>About Our Company</span>
//                                 <h2>How We Can Help you</h2>
//                             </div>
//                             <p> We are dedicated to providing comprehensive auto repair and maintenance services to keep your vehicle running smoothly and safely. Our advanced diagnostic equipment allows us to accurately identify and troubleshoot any issues your vehicle may have. From check engine lights to mysterious noises, we can pinpoint the problem and provide effective solutions.</p>
//                             <p>Regular maintenance is key to the longevity and performance of your vehicle. We offer a full range of maintenance services, including oil changes, tire rotation and balancing, brake inspection and service, fluid checks and top-offs, battery testing and replacement, and filter replacements.</p>
//                             <div className="btns">
//                                 <div className="btn-style"><Link onClick={ClickHandler} to="/about">More About us</Link></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-sm-12 col-m">
//                         <div className="hx-about-img">
//                         <img src={abimg} alt=""/> 
//                         </div>
//                         <div className="video-btn">
//                             <VideoModal/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About;


// // src/components/About.js
// import React from 'react';
// import abimg from '../../images/about/video1.jpg';
// import VideoModal from '../ModalVideo';
// import { Link } from "react-router-dom";
// import useIntersectionObserver from '../../hooks/useIntersectionObserver'; // Correct import path
// import './style.css';

// const About = (props) => {
//     const [containerRef, isVisible] = useIntersectionObserver({
//         threshold: 0.5,
//     });

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     return (
//         <div className={`hx-about-style-2 `} >
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-12">
//                         <div className={`hx-about-content ${isVisible ? 'animate' : ''}`} ref={containerRef}>
//                             <div className="hx-site-title">
//                                 <span>About Our Company</span>
//                                 <h2>How We Can Help you</h2>
//                             </div>
//                             <p> We are dedicated to providing comprehensive auto repair and maintenance services to keep your vehicle running smoothly and safely. Our advanced diagnostic equipment allows us to accurately identify and troubleshoot any issues your vehicle may have. From check engine lights to mysterious noises, we can pinpoint the problem and provide effective solutions.</p>
//                             <p>Regular maintenance is key to the longevity and performance of your vehicle. We offer a full range of maintenance services, including oil changes, tire rotation and balancing, brake inspection and service, fluid checks and top-offs, battery testing and replacement, and filter replacements.</p>
//                             <div className="btns">
//                                 <div className="btn-style"><Link onClick={ClickHandler} to="/about">More About us</Link></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-sm-12 col-m">
//                         <div className="hx-about-img">
//                             <img src={abimg} alt=""/>
//                         </div>
//                         <div className="video-btn">
//                             <VideoModal/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;

// src/components/About.js
// import React from 'react';
// import abimg from '../../images/about/video1.jpg';
// import VideoModal from '../ModalVideo';
// import { Link } from "react-router-dom";
// import useIntersectionObserver from '../../hooks/useIntersectionObserver';
// import './style.css';

// const About = (props) => {
//     const [containerRef, isVisible] = useIntersectionObserver({
//         threshold: 0.5, // Trigger when 50% of the element is visible
//     });

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     return (
//         <div className={`hx-about-style-2 ${isVisible ? 'animate' : ''}`} ref={containerRef}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-12">
//                         <div className="hx-about-content">
//                             <div className="hx-site-title">
//                                 <span>About Our Company</span>
//                                 <h2>How We Can Help you</h2>
//                             </div>
//                             <p> We are dedicated to providing comprehensive auto repair and maintenance services to keep your vehicle running smoothly and safely. Our advanced diagnostic equipment allows us to accurately identify and troubleshoot any issues your vehicle may have. From check engine lights to mysterious noises, we can pinpoint the problem and provide effective solutions.</p>
//                             <p>Regular maintenance is key to the longevity and performance of your vehicle. We offer a full range of maintenance services, including oil changes, tire rotation and balancing, brake inspection and service, fluid checks and top-offs, battery testing and replacement, and filter replacements.</p>
//                             <div className="btns">
//                                 <div className="btn-style"><Link onClick={ClickHandler} to="/about">More About us</Link></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-sm-12 col-m">
//                         <div className="hx-about-img">
//                             <img src={abimg} alt=""/>
//                         </div>
//                         <div className="video-btn">
//                             <VideoModal/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;


import React, { useEffect } from 'react';
import abimg from '../../images/about/video.png';
import VideoModal from '../ModalVideo';  // Ensure this is the correct import path
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const About = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="hx-about-style-2" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12" >
            <div className="hx-about-content">
              <div className="hx-site-title" data-aos="fade-up" data-aos-duration="1200">
                <span>About Our Company</span>
                <h2>How We Can Help you</h2>
              </div>
              <p data-aos="fade-up" data-aos-duration="1200"> We are dedicated to providing comprehensive auto repair and maintenance services to keep your vehicle running smoothly and safely. Our advanced diagnostic equipment allows us to accurately identify and troubleshoot any issues your vehicle may have. From check engine lights to mysterious noises, we can pinpoint the problem and provide effective solutions.</p>
              <p data-aos="fade-up" data-aos-duration="1200">Regular maintenance is key to the longevity and performance of your vehicle. We offer a full range of maintenance services, including oil changes, tire rotation and balancing, brake inspection and service, fluid checks and top-offs, battery testing and replacement, and filter replacements.</p>
              <div className="btns">
                <div className="btn-style" data-aos="fade-up" data-aos-duration="1200"><Link onClick={ClickHandler} to="/about">More About us</Link></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-m" data-aos="fade-up" data-aos-duration="1200">
            <div className="hx-about-img">
              <img src={abimg} alt="" />
            </div>
            <div className="video-btn">
              <VideoModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


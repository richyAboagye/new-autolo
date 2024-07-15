// import React from 'react';
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Homepage from '../HomePage'
// import Homepage2 from '../HomePage2'
// import Homepage3 from '../HomePage3'
// import AboutPage from '../AboutPage'
// import ServicePage from '../ServicePage'
// import ServiceDetailsPage from '../ServiceDetailsPage'
// import ProjectPage from '../ProjectPage'
// import ProjectDetailsPage from '../ProjectDetailsPage'
// import PricingPage from '../PricingPage'
// import TeamPage from '../TeamPage'
// import BlogPage from '../BlogPage' 
// import BlogPageLeft from '../BlogPageLeft' 
// import BlogPageFullwidth from '../BlogPageFullwidth'
// import BlogDetailsPage from '../BlogDetails' 
// import BlogDetailsFull from '../BlogDetailsFull'
// import ErrorPage from '../ErrorPage'  
// import ContactPage from '../ContactPage' 
// import LoginPage from '../LoginPage' 
// import SignUpPage from '../SignUpPage' 
// import ForgotPassword from '../ForgotPassword' 
      

// const AllRoute = () => { 

//   return (
//     <div className="App">
//        <Router>
//           <Switch>
//             <Route exact path='/' component={Homepage}/>
//             <Route path='/home' component={Homepage} />
//             <Route path='/home2' component={Homepage2} />
//             <Route path='/home3' component={Homepage3} />
//             <Route path='/about' component={AboutPage} />
//             <Route path='/service' component={ServicePage} />
//             <Route path='/service-details' component={ServiceDetailsPage} />
//             <Route path='/project' component={ProjectPage} />
//             <Route path='/project-details' component={ProjectDetailsPage} />
//             <Route path='/pricing' component={PricingPage}/>
//             <Route path='/team' component={TeamPage}/>
//             <Route path='/contact' component={ContactPage}/>
//             <Route path='/blog' component={BlogPage}/> 
//             <Route path='/blog-list' component={BlogPageLeft}/>
//             <Route path='/blog-fullwidth' component={BlogPageFullwidth}/> 
//             <Route path='/blog-single' component={BlogDetailsPage}/>
//             <Route path='/blog-single-fullwidth' component={BlogDetailsFull}/>
//             <Route path='/404' component={ErrorPage}/>
//             <Route path='/login' component={LoginPage}/>
//             <Route path='/signup' component={SignUpPage}/>
//             <Route path='/forgot-password' component={ForgotPassword}/>
//           </Switch>
//       </Router>
      
//     </div>
//   );
// }

// export default AllRoute;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from '../HomePage';
import Homepage2 from '../HomePage2';
import Homepage3 from '../HomePage3';
import AboutPage from '../AboutPage';
import ServicePage from '../ServicePage';
import ServiceDetailsPage from '../ServiceDetailsPage';
import ProjectPage from '../ProjectPage';
import ProjectDetailsPage from '../ProjectDetailsPage';
import PricingPage from '../PricingPage';
import TeamPage from '../TeamPage';
import BlogPage from '../BlogPage';
import BlogPageLeft from '../BlogPageLeft';
import BlogPageFullwidth from '../BlogPageFullwidth';
import BlogDetailsPage from '../BlogDetails';
import BlogDetailsFull from '../BlogDetailsFull';
import ErrorPage from '../ErrorPage';
import ContactPage from '../ContactPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/home2" element={<Homepage2 />} />
          <Route path="/home3" element={<Homepage3 />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-list" element={<BlogPageLeft />} />
          <Route path="/blog-fullwidth" element={<BlogPageFullwidth />} />
          <Route path="/blog-single" element={<BlogDetailsPage />} />
          <Route path="/blog-single-fullwidth" element={<BlogDetailsFull />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;

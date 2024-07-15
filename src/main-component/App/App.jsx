// import React from 'react';
// import AllRoute from '../router'
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';


// const App = () => { 

//   return (
//     <div className="App" id='scrool'>
//           <AllRoute/>
//           <ToastContainer/>
//     </div>
//   );
// }

// export default App;




import React, { useEffect } from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => { 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App" id='scrool'>
          <AllRoute/>
          <ToastContainer/>
    </div>
  );
}

export default App;

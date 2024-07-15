import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from './main-component/App/App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import './css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
serviceWorker.unregister();

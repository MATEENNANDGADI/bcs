import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Signup />  // Render the Signup component
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

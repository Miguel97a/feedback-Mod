import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Feedback from './lib/Feedback'


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div style={{width:"50%", backgroundColor:"black"}}>
    <Feedback key={""} mailFrom={''} mailTo={''} subject={''} buttonColor={'#D5293D'} fontColor={'#FFFFFF'} sectionColor={'#3B3B3B'} subsectionColor={'#515151'} titleColor={'#FFFFFF'}  />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

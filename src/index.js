import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import Stacks from './Stacks';
import Experiences from './Experiences';
import {resume} from './resume.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="card box">
        <Card resume={resume} />
        <Stacks stacks={resume.stacks}/>
    </div>
    <div className="resumeCard">
      <Experiences experiences={resume.experiences}/>
    </div>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(); 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import './color_palette.css';
import Card from './Card';
import Stacks from './Stacks';
import Experiences from './Experiences';
import {resume} from './resume.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="cardBox">
        <div>
          <Card resume={resume} />
        </div>
        <div className="skillsBox">  
          <h3>Tech Skills</h3>
          <Stacks stacks={resume.stacks}/>
          <h3>Soft Skills</h3>
          <Stacks stacks={resume.softskills}/>
        </div>
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

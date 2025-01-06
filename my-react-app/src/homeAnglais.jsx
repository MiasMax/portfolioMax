import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './home.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function HomeEnglish() {
  return (
    <>        
      <div className="home-page">
      <div className="Maxence">

      <h1>Maxence Tournaud - Software Developer</h1>
      <p>Passionate about software development and technological innovation.</p>

      </div>

      <section className="about">
      <h2>About Me</h2>
      <p>
        I am a computer science student with a strong passion for software development.
        Currently in my third year of a University Diploma in Technology in Computer Science, 
        I am looking to deepen my skills and pursue a career in development.
      </p>
      <p>
        I have completed several professional internships, notably at Suez Smart Solutions, 
        where I gained solid experience in software development, including using Azure DevOps, 
        managing code, and creating secure APIs. I have also worked on Front-end projects 
        and collaborated with UX designers.
      </p>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Internship at Suez Smart Solutions</h3>
          <p>
            Software development on complex projects, application lifecycle management, 
            continuous integration with Azure DevOps, and code optimization. 
            Used collaboration and code review tools to improve application quality.
          </p>
        </div>
        
      </section>
      </div>
    </>
  )
}

export default HomeEnglish

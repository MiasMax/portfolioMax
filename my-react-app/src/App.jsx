import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './home.jsx';
import Header from './Header.jsx';
import Competence from './Competence.jsx';
import CV from './CV.jsx';
import Project from './Project.jsx';

function App() {
  return (
    <>        
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/competence" element={<Competence/>} />
                <Route path="/cv" element={<CV/>} />
                <Route path="/project" element={<Project/>} />
            </Routes>
        </BrowserRouter>
      
      <footer>
          <div className ="footer-container">
              <p>Contactez-moi :</p>
              <div className ="contact-links">
                  <a href="mailto:example@example.com" className ="contact-link" target="_blank">
                      <img src="email-icon.png" alt="Email" className ="icon"/> Email
                  </a>
                  <a href="https://www.linkedin.com/in/votreprofil" className ="contact-link" target="_blank">
                      <img src="linkedin-icon.png" alt="LinkedIn" className ="icon"/> LinkedIn
                  </a>
                  <a href="https://github.com/votreprofil" className ="contact-link" target="_blank">
                      <img src="github-icon.png" alt="GitHub" className ="icon"/> GitHub
                  </a>
              </div>
          </div>
      </footer>
    </>
  )
}

export default App

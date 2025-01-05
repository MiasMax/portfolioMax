import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>        
      <BrowserRouter basename="/react-project">
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/book" element={<Book/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/blog" element={<Blog/>} />
          </Routes>
      </BrowserRouter>
      
      <footer>
          <div class="footer-container">
              <p>Contactez-moi :</p>
              <div class="contact-links">
                  <a href="mailto:example@example.com" class="contact-link" target="_blank">
                      <img src="email-icon.png" alt="Email" class="icon"/> Email
                  </a>
                  <a href="https://www.linkedin.com/in/votreprofil" class="contact-link" target="_blank">
                      <img src="linkedin-icon.png" alt="LinkedIn" class="icon"/> LinkedIn
                  </a>
                  <a href="https://github.com/votreprofil" class="contact-link" target="_blank">
                      <img src="github-icon.png" alt="GitHub" class="icon"/> GitHub
                  </a>
              </div>
          </div>
      </footer>
    </>
  )
}

export default App

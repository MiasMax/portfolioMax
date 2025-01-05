import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './home.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function Home() {
  return (
    <>        
      <div className="home-page">
      <div className="Maxence">

      <h1>Maxence Tournaud - Développeur Informatique</h1>
      <p>Passionné par le développement logiciel et l'innovation technologique.</p>

      </div>

      <section className="about">
      <h2>À propos de moi</h2>
      <p>
        Je suis un étudiant en informatique avec une forte passion pour le développement logiciel.
        Actuellement en troisième année de BUT Informatique, je cherche à approfondir mes compétences
        et à poursuivre ma carrière dans le domaine du développement.
      </p>
      <p>
        J'ai réalisé plusieurs stages professionnels, notamment chez Suez Smart Solutions, où j'ai acquis
        une solide expérience en développement logiciel, y compris l'utilisation d'Azure DevOps, la gestion de code,
        et la création d'API sécurisées. J'ai également travaillé sur des projets Front-end et collaboré avec des designers UX.
      </p>
      </section>

      <section className="experience">
        <h2>Expériences Professionnelles</h2>
        <div className="experience-item">
          <h3>Stage chez Suez Smart Solutions</h3>
          <p>
            Développement logiciel sur des projets complexes, gestion du cycle de vie des applications, intégration continue
            avec Azure DevOps, et optimisation du code. Utilisation des outils de collaboration et de révision de code pour
            améliorer la qualité des applications.
          </p>
        </div>
        
      </section>
      </div>
    </>
  )
}

export default Home

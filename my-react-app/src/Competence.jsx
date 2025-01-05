import React from "react";
import { Link } from "react-router-dom";
import "./Competence.css";

function Competence() {
    return (
      <>
            <section className="skills">
              <h2>Compétences</h2>
              <ul>
                <li><strong>Développement Backend :</strong> C#, Java, .NET, APIs sécurisées, cryptographie</li>
                <li><strong>Développement Frontend :</strong> JavaScript, HTML, CSS, OpenLayer</li>
                <li><strong>Gestion de code et outils :</strong> Azure DevOps, Git, Pull Requests, ESLint, StyleCop</li>
                <li><strong>Base de données :</strong> SQL, sérialisation avec Newtonsoft.Json</li>
              </ul>
            </section>

      </>  
    );
}

export default Competence;

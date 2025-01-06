import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project() {
    return (
    
      <>
      <section className="projects">
        <h2>Projets</h2>
        
        

        <div className="experience-item">
          <h3> Guenshinguess</h3>
          <p>
            J'ai également créé et développé plusieurs projets, dont un site web appelé <em>genshinguess</em> que j'ai
            conçu en utilisant JavaScript, PHP, HTML et une base de données SQL. Ce projet est hébergé chez moi et
            m'a permis de mettre en pratique mes compétences en développement full-stack.
          </p>
        </div>
        
        <div className="experience-item">
          <h3> mod Minecraft</h3>
          <p>
          Par ailleurs, j'ai également travaillé sur des serveurs de jeux, notamment sur Steam, et développé des
          projets sur le jeu Minecraft en utilisant Java.
        </p>
        </div>

        <div className="experience-item">
          <h3> Feurnite</h3>
          <p>
          Dans ce jeu, les joueurs affrontent des vagues incessantes de zombies dans un donjon, leur nombre augmentant à chaque manche. Le joueur doit survivre en utilisant un aspirateur pour effectuer des opérations sur les zombies, réduisant leur nombre à zéro et gagnant des points. L'utilisation de l'aspirateur consomme de l'énergie et, une fois épuisée, il devient temporairement inutilisable.
        </p>
        <img src="zombiemath.png" alt="zombiemath" width="500" />

        </div>

        <div className="experience-item">
          <h3> Feur pizza</h3>
          <p>Ce projet est un site e-commerce entièrement fonctionnel, doté d'une interface conviviale et d'un panneau d'administration robuste. La plateforme permet une gestion efficace des commandes, des stocks et des comptes utilisateurs.

Développé avec PHP et une base de données MySQL, il offre des performances sécurisées et évolutives, garantissant une intégration fluide entre les opérations front-end et back-end.
         </p>
         <img src="feurpizza.png" alt="feurpizza"  width="500" />
        </div>
     </section>
      </>  
    );
}

export default Project;

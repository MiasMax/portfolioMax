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
      </section>
      </>  
    );
}

export default Project;

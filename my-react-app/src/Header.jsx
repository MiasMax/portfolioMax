import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/home" className="btn">home</Link>
                <Link to="/Competence" className="btn">Competence</Link>
                <Link to="/cv" className="btn">cv</Link>
                <Link to="/project" className="btn">project</Link>
            </nav>
        </header>
    );
}

export default Header;

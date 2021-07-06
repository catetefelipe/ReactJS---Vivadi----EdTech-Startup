import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";



function Navbar() {
    return (
        <nav>
            <div className="nav_main_div">
                <div className="logo_div">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="nav_menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/soft-skills">Soft Skills</Link>
                        </li>
                        <li>
                            <Link to="/quem-somos">Quem Somos</Link>
                        </li>
                        <li>
                            <Link to="/conteudos-gratuitos">Conteúdos Gratuitos</Link>
                        </li>
                    </ul>
                    <Link to="/acesso">
                        <button className="nav_button" type="button">
                        Acessar Plataforma
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

import React, { useState } from "react";
import "./styles.css";

// LINKS DA NAVBAR QUE DIRECIONAM PARA OUTRAS PÁGINAS DO SITE
import { Link } from "react-router-dom";

// COMPONENTES
// Button
import Button from "../../Components/Button/index";

// LIST
import { List } from "./list";

// IMAGENS
import logo from "../../Images/logo.png";

// REACT-ICONS
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCloseSquare } from "react-icons/ai";



function Navbar() {
    /* sidebar: valor | setSidebar: função que altera o estado | 3º: valor atual (false) */
    const [sidebar, setSidebar] = useState(false);

    /* showSidebar: função ser ativada no clique | setSidebar(!sidebar): vai alterar o valor atual de false para true ou vice-versa (false-true / true-false) */
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>  
            <div className="navbar">
                <div className="logo_and_hambmenu">
                    <div className="nav_logo_div">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                        <Link to="#" className="menu_symbol menu_symbol_1">
                            <span onClick={showSidebar}>
                                <AiOutlineMenu />
                            </span>
                        </Link>
                </div>


                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link onClick={showSidebar} to="#" className="menu_symbol menu_symbol_2">
                                <AiFillCloseSquare />
                            </Link>
                        </li>
    {/* list.js */}     {List.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <Link to="/fale-conosco">
                        <Button label="Fale conosco" />
                    </Link>
                </nav>
            </div> {/* fim da div principal */}
        </>
    )
}

export default Navbar

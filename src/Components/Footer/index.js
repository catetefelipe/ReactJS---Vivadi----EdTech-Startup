import React from "react";
import "./styles.css";
import logo from "../../Images/logo.png";

import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";






function Footer() {
    return (
        <footer>
            <div className="footer_icons_div">
                <h3>Acompanhe pelas redes</h3>
                <div>
                    <a href="#">
                        <AiOutlineInstagram />
                    </a>
                    <a href="#">
                        <AiFillYoutube />
                    </a>
                    <a href="#">
                        <FaFacebookF />
                    </a>
                </div>
            </div>
            <div className="footer_logo_address_div">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <span>
                        Rua Booker Pittman, 163<br />
                        Morumbi, São Paulo – SP<br />
                        CEP: 04711-030<br />
                        +55 11 98499-0859<br />
                        contato@vivadi.com.br<br />
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer

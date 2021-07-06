import React from "react";
import brain from "../../Images/brain.png";
import "./styles.css";



function Home() {
    return (
        <div className="home_main_div">
            <div className="home_img_div">
                <img src={brain} />
            </div>
            <div className="home_text_div">
                <h1>Combine estratégias eficazes com resultados concretos para desenvolver as soft skills nos estudantes.</h1>
                <p>Somos a primeira plataforma a integrar e a sistematizar um conjunto de programas para as escolas trabalharem e mostrarem os resultados do <b>desenvolvimento integral</b> de seus alunos.</p>
                <button type="button">
                Fale com um especialista
                </button>
            </div>
        </div>
    )
}

export default Home

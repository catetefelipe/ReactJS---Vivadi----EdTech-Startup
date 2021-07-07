import React from "react";
import "./styles.css";
import brain from "../../Images/Home/brain.png";
import woman from "../../Images/Home/woman.png";
import computer from "../../Images/Home/computer.png";
import Circle from "../../Components/CircularProgressbar/index";



function Home() {
    return (
        <>
            <section className="home_main_section">
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
            </section>

            <section className="home_section2">
                <div className="home_section2_img_div">
                    <img src={woman} />
                </div>
                <div className="home_section2_text_div">
                    <h2>Experiência, Tecnologia e Metodologia</h2>
                    <p>Na formação integral dos alunos, a escola tradicionalmente focou seus esforços nas hards skills.<br/>
                    <br/>
                    Enquanto o problema, e o valor potencial, espera nas Soft Skills.Reunimos um time de especialistas com longa experiência em educação, para romper as barreiras ao desenvolvimento das soft skills na escola.<br/>
                    <br/>
                    Com o levantamento de uma lista crescente de skills que o mundo exige, aliando metodologia própria e tecnologia, oferecemos experiências únicas para cada contexto e necessidade.</p>
                </div>
            </section>

            <section className="home_section3">
                <div className="home_section3_div">
                    <h2>Conheça os Programas da Plataforma</h2>
                    <img src={computer} />
                </div>
                <button>Conhecer Programas</button>
            </section>

            <section className="home_section4">
                <h2>Abordagem que atinge os diferentes núcleos de desenvolvimento e com estratégias próprias</h2>
                <div className="home_section4_main_div">
                    <div className="home_section4_square_div">
                        <span>1</span>
                            <div>
                                <h4>Todos os programas e recursos necessários estão em uma única plataforma digital.</h4>
                            </div>
                    </div>
                    <div className="home_section4_square_div">
                        <span>2</span>
                            <div>
                                <h4>Plano de formação para nova abordagem metodológica e atuação em um novo campo.</h4>
                            </div>
                    </div>
                    <div className="home_section4_square_div">
                        <span>3</span>
                            <div>
                                <h4>Resultados do trabalho podem e  devem ser mostrados para toda a comunidade.</h4>
                            </div>
                    </div>
                </div>
            </section>

            <section>
                <Circle />
                <Circle />
                <Circle />
            </section>
        </>
    )
}

export default Home

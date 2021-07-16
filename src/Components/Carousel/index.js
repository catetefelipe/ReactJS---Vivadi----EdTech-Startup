import React from "react";
import "./styles.css";

// FUNÇÃO DOS BOTÕES
import CarouselFunction from "./CarouselFunction";

// IMAGENS DOS LOGOS DAS ESCOLAS
import degiane from "../../Images/Carousel/degiane.png";
import elvira from "../../Images/Carousel/elvira.png";
import emilia from "../../Images/Carousel/emilia.png";
import eshua from "../../Images/Carousel/eshua.png";
import evolutiva from "../../Images/Carousel/evolutiva.png";
import excelence from "../../Images/Carousel/excelence.png";
import interativa from "../../Images/Carousel/interativa.png";
import mirim from "../../Images/Carousel/mirim.png";
import piaget from "../../Images/Carousel/piaget.png";
import sistemico from "../../Images/Carousel/sistemico.png";
import freeworld from "../../Images/Carousel/freeworld.png";
import degraus from "../../Images/Carousel/degraus.png";
import estacao from "../../Images/Carousel/estacao.png";
import cooperativa from "../../Images/Carousel/cooperativa.png";
import batista from "../../Images/Carousel/batista.png";
import balao from "../../Images/Carousel/balao.png";
import andre from "../../Images/Carousel/andre.png";
import bonadei from "../../Images/Carousel/bonadei.png";
import sementes from "../../Images/Carousel/sementes.png";
import alegria from "../../Images/Carousel/alegria.png";
import meufuturo from "../../Images/Carousel/meufuturo.png";
import freinet from "../../Images/Carousel/freinet.png";
import giramundo from "../../Images/Carousel/giramundo.png";
import interamerica from "../../Images/Carousel/interamerica.png";
import ponto from "../../Images/Carousel/ponto.png";
import ceab from "../../Images/Carousel/ceab.png";
import yara from "../../Images/Carousel/yara.png";
import cejac from "../../Images/Carousel/cejac.png";
import piramide from "../../Images/Carousel/piramide.png";



function Carousel() {
    return (
        <div className="main_carousel_div" >
            <CarouselFunction
                show={4}
                infiniteLoop
            >
                {/* são 29 imagens no total */}
                <div className="school_logo_div">
                    <img src={degiane} />
                </div>
                <div className="school_logo_div">
                    <img src={elvira} />
                </div>
                <div className="school_logo_div">
                    <img src={emilia} />
                </div>
                <div className="school_logo_div">
                    <img src={eshua} />
                </div>
                <div className="school_logo_div">
                    <img src={evolutiva} />
                </div>
                <div className="school_logo_div">
                    <img src={excelence} />
                </div>
                <div className="school_logo_div">
                    <img src={interativa} />
                </div>
                <div className="school_logo_div">
                    <img src={mirim} />
                </div>
                <div className="school_logo_div">
                    <img src={piaget} />
                </div>
                <div className="school_logo_div">
                    <img src={sistemico} />
                </div>
                <div className="school_logo_div">
                    <img src={freeworld} />
                </div>
                <div className="school_logo_div">
                    <img src={degraus} />
                </div>
                <div className="school_logo_div">
                    <img src={estacao} />
                </div>
                <div className="school_logo_div">
                    <img src={cooperativa} />
                </div>
                <div className="school_logo_div">
                    <img src={batista} />
                </div>
                <div className="school_logo_div">
                    <img src={balao} />
                </div>
                <div className="school_logo_div">
                    <img src={andre} />
                </div>
                <div className="school_logo_div">
                    <img src={bonadei} />
                </div>
                <div className="school_logo_div">
                    <img src={sementes} />
                </div>
                <div className="school_logo_div">
                    <img src={alegria} />
                </div>
                <div className="school_logo_div">
                    <img src={meufuturo} />
                </div>
                <div className="school_logo_div">
                    <img src={freinet} />
                </div>
                <div className="school_logo_div">
                    <img src={giramundo} />
                </div>
                <div className="school_logo_div">
                    <img src={interamerica} />
                </div>
                <div className="school_logo_div">
                    <img src={ponto} />
                </div>
                <div className="school_logo_div">
                    <img src={ceab} />
                </div>
                <div className="school_logo_div">
                    <img src={yara} />
                </div>
                <div className="school_logo_div">
                    <img src={cejac} />
                </div>
                <div className="school_logo_div">
                    <img src={piramide} />
                </div>
            </CarouselFunction>
        </div>
    )
}

export default Carousel
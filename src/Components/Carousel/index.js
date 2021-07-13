import React from "react";
import CarouselFunction from "./CarouselFunction";

// imagens dos logos das escolas
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
        <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <CarouselFunction
                show={4}
                infiniteLoop
            >
                {/* são 29 imagens no total */}
                <div>
                    <img src={degiane} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={elvira} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={emilia} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={eshua} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={evolutiva} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={excelence} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={interativa} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={mirim} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={piaget} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={sistemico} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={freeworld} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={degraus} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={estacao} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={cooperativa} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={batista} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={balao} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={andre} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={bonadei} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={sementes} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={alegria} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={meufuturo} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={freinet} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={giramundo} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={interamerica} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={ponto} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={ceab} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={yara} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={cejac} alt="placeholder" style={{width: '100%'}} />
                </div>
                <div>
                    <img src={piramide} alt="placeholder" style={{width: '100%'}} />
                </div>
            </CarouselFunction>
        </div>
    )
}

export default Carousel
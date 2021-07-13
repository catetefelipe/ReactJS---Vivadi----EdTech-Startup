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
        <div style={{ maxWidth: 950, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <CarouselFunction
                show={4}
                infiniteLoop
            >
                {/* são 29 imagens no total */}
                <div>
                    <img src={degiane} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={elvira} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={emilia} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={eshua} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={evolutiva} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={excelence} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={interativa} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={mirim} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={piaget} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={sistemico} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={freeworld} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={degraus} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={estacao} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={cooperativa} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={batista} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={balao} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={andre} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={bonadei} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={sementes} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={alegria} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={meufuturo} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={freinet} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={giramundo} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={interamerica} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={ponto} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={ceab} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={yara} style={{width: '100%'}} />
                </div>
                <div>
                    <img src={cejac} astyle={{width: '100%'}} />
                </div>
                <div>
                    <img src={piramide} style={{width: '100%'}} />
                </div>
            </CarouselFunction>
        </div>
    )
}

export default Carousel
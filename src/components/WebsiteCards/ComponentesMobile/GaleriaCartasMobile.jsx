import "./GaleriaCartasMobile.scss";

export default function GaleriaCartas() {
    return (
        <div className="galeria-cartas-mobile" style={{ display: "none" }}>

                <div className="cartas-cartas">

                    <div className="cartas cartas-uno">
                        <div className="img imagen-uno">
                            <img src="/img/galeria-farigiraf.png" alt="Carta de Farigiraf ex" />
                        </div>
                        <div className="img imagen-dos">
                            <img src="/img/galeria-morti.png" alt="Carta de Conviccion de Morti" />
                        </div>
                    </div>

                    <div className="titulo-contenido">
                        <div className="titulo">
                            <h3> GALERÍA DE CARTAS </h3>
                        </div>
                        <div className="texto">
                            <p>Echa un vistazo a las cartas de esta nueva expasion. </p>
                        </div>
                        <div className="boton">
                            <div className="cont-boton">
                                <button> VE A LA GALERIA DE CARTAS </button>
                            </div>
                        </div>
                    </div>

                    <div className="cartas cartas-dos">
                        <div className="img imagen-tres">
                            <img src="/img/galeria-colagrito.png" alt="Carta de Colagrito" />
                        </div>
                        <div className="img imagen-cuatro">
                            <img src="/img/galeria-relicanth.png" alt="Carta de Relicanth" />
                        </div>
                    </div>

            </div>
        </div>
    )
}
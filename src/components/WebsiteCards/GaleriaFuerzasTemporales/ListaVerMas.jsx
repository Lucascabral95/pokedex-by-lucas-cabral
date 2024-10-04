import { Link } from "react-router-dom"
import "./ListaVerMas.scss"

export default function ListaVerMas() {
    return (
        <>

            <div className="lista-ver-mas">
                <div className="contenedor">

                    <div className="contenedor-borde-inferior">
                        <div className="img-borde">
                            <img src="/public/img/galeria-borde-superior-izquierdo.png" alt="Borde superior izquierdo" />
                        </div>
                        <div className="img-borde-medio">
                            <img src="/public/img/borde-galeria.png" alt="Borde superior medio" />
                        </div>
                        <div className="img-borde">
                            <img src="/public/img/galeria-borde-superior-derecho.png" alt=" Borde superior derecho" />
                        </div>
                    </div>

                    <div className="lista-completa-cartas">
                        <div className="contenedor">

                            <div className="contenedor-interno">
                                <div className="contenido">
                                    <div className="texto">
                                        <h3> VE LA LISTA DE CARTAS COMPLETA. </h3>
                                    </div>
                                    <div className="contenedor-boton">
                                        <div className="boton">
                                            <button> VER LISTA DE CARTAS  </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="imagen">
                                    <div className="img">
                                        <img src="/public/img/lista-cartas.png" alt="Lista de cartas" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="contenedor-borde-superior">
                        <div className="img-borde">
                            <img src="/public/img/galeria-borde-superior-derecho.png" alt=" Borde inferior derecho" />
                        </div>
                        <div className="img-borde-medio">
                            <img src="/public/img/borde-galeria.png" alt=" Borde inferior medio" />
                        </div>
                        <div className="img-borde">
                            <img src="/public/img/galeria-borde-superior-izquierdo.png" alt=" Borde inferior izquierdo" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="quieres-ver-mas">
                <div className="contenedor">

                    <div className="contenedor-de-contenido">
                        <div className="cartas primeras-cartas">
                            <div className="img  imagen-uno" >
                                <img src="/public/img/galeria-farigiraf.png" alt="Ondulagua ex" />
                            </div>
                            <div className="img imagen-dos">
                                <img src="/public/img/ferrotestaex.png" alt="Ferrotesta ex" />
                            </div>
                        </div>
                        <div className="contenido-medio">
                            <div className="titulo">
                                <h3> ¿QUIERES VER MÁS? </h3>
                            </div>
                            <div className="detalle">
                                <p> Ve a la base de datos de cartas </p>
                            </div>
                            <div className="contenedor-boton">
                                <Link to="/cardlist">
                                    <div className="boton">
                                        <button> VER </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="cartas">
                            <div className="img imagen-tres">
                                <img src="/public/img/electrofuriaex.png" alt="Electrofuria ex" />
                            </div>
                            <div className="img imagen-cuatro">
                                <img src="/public/img/ferroverderex.png" alt="Ferroverder ex" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
import { Link } from "react-router-dom"
import StructureSeccions from "../Inicio/SeccionesInicio/StructureSeccions"
import CarouselCards from "../GaleriaFotos/CarouselCards"
import Extras from "../GaleriaFotos/Extras"

export default function CartasColeccionables() {
    return (
        <>

            <StructureSeccions

                estilo={"contenedor-estructural-inicio-pagina"}
                estiloInferior={"estilo-inferior-inferior"}

                superior={
                    <>
                        <div className="contenedor-imagen-mas-grande">
                            <Link to="/jcc-pokemon/ilustraciones-escarlata-purpura">
                                <div className="img-img">
                                    <img src="/img/jcc-pokemon-uno.png" alt="Pokemon Fuerzas-Temporales" />
                                </div>
                                <div className="contenido contenido-cartas-coleccionables">
                                    <div className="titulo">
                                        <h3>Increibles ilustraciones por doquier en Escarlata y Purpura-Fuerzas Temporales</h3>
                                    </div>
                                    <div className="texto">
                                        <p> Disfruta tranquilamente de laguinas de las mas hermossas nuevas cartas de la expansion de JCC Pokemon mas reciente. </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="contenedor-de-pics">
                            <div className="imagee imagee-dos">
                                <Link to="/jcc-pokemon/pokemon-paradoja">
                                    <div className="im">
                                        <img src="/img/jcc-pokemon-cuatro.png" alt="JCC Pokémon Paradoja" />
                                    </div>
                                </Link>
                                <Link to="/jcc-pokemon/pokemon-paradoja">
                                    <div className="tti">
                                        <h3>Una coalisión de Pokémon Paradoja en JCC Pokémon</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="imagee imagee-uno">
                                <Link to="/card/expansions/temporal-forces">
                                    <div className="im">
                                        <img src="/img/jcc-pokemon-cinco.png" alt="JCC Pokémon Live" />
                                    </div>
                                </Link>
                                <Link to="/card/expansions/temporal-forces">
                                    <div className="tti">
                                        <h3>Descarga y empieza a jugar a JCC Pokémon Live de manera gratuita</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="contenedor-imagen-mas-grande" onClick={() => window.location.href = '/jcc-pokemon/caja-entrenador-elite'}>
                            <div className="img-img">
                                <img src="/img/jcc-pokemon-dos.png" alt="Cajad de Entrenador Elite" style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} />
                            </div>
                            <div className="contenido cimg-uno cimg-uno-cartas-destacadas">
                                <div className="titulo">
                                    <h3>Caja de Entrenador Élite de Escarlata y Púrpura Mascarada Crepuscular</h3>
                                </div>
                            </div>
                        </div>

                        <div className="contenedor-imagen-mas-grande" style={{ marginTop: '16px' }} onClick={() => window.location.href = '/jcc-pokemon/mejora-tu-baraja'}>
                            <div className="img-img">
                                <img src="/img/jcc-pokemon-tres.png" alt="Mejora de baraja" style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} />
                            </div>
                            <div className="contenido cimg-dos cimg-dos-cartas-destacadas">
                                <div className="titulo">
                                    <h3> Mejora tu baraja del pasado y del futuro y las cartas de AS TÁCTICO </h3>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-chico-peliculas" onClick={() => window.location.href = '/jcc-pokemon/aprende-jcc-pokemon'}>
                            <div className="img-img">
                                <div className="img">
                                    <img src="/img/jcc-pokemon-seis.jpg" alt="Reglas de JCC Pokemon" />
                                </div>
                            </div>
                            <div className="cont cont-cartas-coleccionables">
                                <div className="texto">
                                    <h3> Aprende a jugar al JCC Pokémon </h3>
                                </div>
                            </div>
                        </div>
                    </>
                }

            />

            <CarouselCards />

            <Extras />

        </>
    )
}
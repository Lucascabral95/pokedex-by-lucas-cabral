import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function ColeccionTorneoPremium() {
    return (
        <>

            <PresentacionInicio imagen={'/public/img/galeria-cartas-nueve.png'} />

            <StructureSeccions

                superior={
                    <>
                        <div className="titulo">
                            <h2> Colección torneo prémium e‑Nigma de JCC Pokémon </h2>
                        </div>
                        <div className="fecha">
                            <p>Lanzamiento: 2do trimestre de 2024</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> ¡Holichiwa, electrolitos míos! La Líder del Gimnasio de Ciudad Leudal y megainfluencer e-Nigma puede atrapar a tu rival en su Electrotela para ayudarte a remontar cuando todo parezca perdido. ¡Y esta colección llega lista para el combate con 4 ejemplares de esta carta para incorporar a tu próxima baraja! Además, encontrarás fundas para cartas, una caja para tu baraja y una moneda coleccionable de e-Nigma, junto con paquetes de mejora, dados y otros accesorios para jugar a JCC Pokémon. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> La colección torneo prémium e-Nigma de JCC Pokémon contiene: </p>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> 1 carta holográfica de Partidario de e-Nigma con ilustración expandida </li>
                                <li>3 cartas holográficas de Partidario adicionales de e-Nigma  </li>
                                <li>65 fundas para cartas de e-Nigma  </li>
                                <li>1 robusta caja para cartas de e-Nigma  </li>
                                <li>1 moneda de gran tamaño de e-Nigma  </li>
                                <li> 2 monedas a modo de marcadores de condición </li>
                                <li>6 dados a modo de contadores de daño aptos para torneos  </li>
                                <li>  6 paquetes de mejora de JCC Pokémon</li>
                                <li> 1 carta con código para el <span className="celeste">Juego de Cartas Coleccionables Pokémon Live</span> </li>
                            </ul>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="regresar">
                            <Link to="/jcc-pokemon/galeria-de-productos">
                                <button> Regresar a la Galeria </button>
                            </Link>
                        </div>
                    </>
                }

            />

        </>
    )
}
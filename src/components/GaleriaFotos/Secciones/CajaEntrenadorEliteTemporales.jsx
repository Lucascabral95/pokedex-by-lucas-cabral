import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function CajaEntrenadorEliteTemporales() {
    return (
        <>

            <PresentacionInicio imagen={"/public/img/galeria-cartas-cinco.png"} />

            <StructureSeccions

                superior={
                    <>
                        <div className="titulo">
                            <h2>Caja de Entrenador Élite de Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon</h2>
                        </div>
                        <div className="fecha">
                            <p> Lanzamiento: 1er trimestro de 2024 </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡El tiempo está a tu favor con la Caja de Entrenador Élite de Escarlata y Púrpura-Fuerzas Temporales! Domina todo el poder de esta expansión con nuevas cartas impresionantes, incluyendo asombrosos Pokémon ex y muchos más. La Caja de Entrenador Élite cuenta con increíbles fundas para cartas de Ondulagua o Ferroverdor, accesorios de alta calidad, 9 paquetes de mejora y mucho más. ¡Nunca ha habido un mejor momento para darle un vistazo a la Caja de Entrenador Élite de Escarlata y Púrpura-Fuerzas Temporales!</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">La Caja de Entrenador Élite de Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon contiene:</p>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> 9 paquetes de mejora de Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon </li>
                                <li> 1 carta holográfica de promoción con ilustración expandida de Melenaleteo/Ferropúas </li>
                                <li> 65 fundas para cartas de Ondulagua/Ferroverdor </li>
                                <li>  45 cartas de Energía de JCC Pokémon</li>
                                <li> 1 guía para jugadores de la expansión Escarlata y Púrpura-Fuerzas Temporales </li>
                                <li>6 dados a modo de contadores de daño  </li>
                                <li>  1 dado para lanzamiento de moneda válido para competencias legales</li>
                                <li> 2 marcadores de condición de plástico </li>
                                <li> 1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada </li>
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
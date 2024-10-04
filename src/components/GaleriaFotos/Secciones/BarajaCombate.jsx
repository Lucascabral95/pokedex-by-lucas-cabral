import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function BarajaCombate() {
    return (
        <>

            <PresentacionInicio imagen={'/public/img/galeria-cartas-ocho.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2>  </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 2do trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> ¡Poderosos Pokémon ex combaten por la victoria! ¡Enfrenta los nudillos metálicos totales de Melmetal a las garras malvadas de Houndoom con las nuevas barajas Combate ex de JCC Pokémon! Melmetal ex y Houndoom ex lideran estas barajas de 60 cartas, que incluyen todo lo que necesitas para ponerte a jugar de inmediato. ¡Que empiece el combate! </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> En esta caja, encontrarás: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li> 1 baraja de 60 cartas lista para jugar </li>
                            <li> 3 cartas de referencia </li>
                            <li> 1 manual de reglas </li>
                            <li>  1 tapete para un jugador</li>
                            <li> 1 set de contadores de daño </li>
                            <li> 1 moneda de gran tamaño </li>
                            <li> 1 caja para cartas </li>
                            <li>  1 hoja con estrategias</li>
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
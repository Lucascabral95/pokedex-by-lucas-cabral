import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function BarajaCombateDeluxe() {
    return (
        <>

            <PresentacionInicio imagen={'/img/galeria-cartas-once.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Baraja Combate Deluxe de Ninetales ex y baraja Combate Deluxe de Zapdos ex de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 1er trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Sorprende a tus rivales con las llamas de la baraja Combate Deluxe de Ninetales ex y los truenos de la baraja Combate Deluxe de Zapdos ex de JCC Pokémon. Con estrategias más avanzadas y poderosas cartas adicionales, estas barajas ofrecen un nuevo nivel de combate a los jugadores que estén listos para aceptar el reto. Cada baraja de 60 cartas contiene 3 cartas holográficas y todo lo que necesitas para ponerte a jugar de inmediato. ¡Que empiece el combate Deluxe! </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Cada baraja Combate Deluxe de Ninetales ex y baraja Combate Deluxe de Zapdos ex de JCC Pokémon contiene: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li> 1 baraja de 60 cartas lista para jugar </li>
                            <li>  1 tapete para un jugador</li>
                            <li> 1 set de contadores de daño </li>
                            <li>  1 moneda de gran tamaño</li>
                            <li>2 marcadores de condición  </li>
                            <li> 1 caja para cartas </li>
                            <li> 1 hoja con estrategias </li>
                            <li> 1 carta con código para jugar con esta baraja en <span className="celeste">linea</span> </li>
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
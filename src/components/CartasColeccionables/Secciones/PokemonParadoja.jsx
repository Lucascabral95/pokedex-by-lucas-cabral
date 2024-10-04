import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function PokemonParadoja() {
    return (
        <>

            <PresentacionInicio imagen={'/public/img/jcc-pokemon-cuatro.png'} />

            <StructureSeccions

                superior={
                    <>
                        <div className="titulo">
                            <h2>  Lata Colisión Paradójica de JCC Pokémon</h2>
                        </div>
                        <div className="fecha">
                            <p> Lanzamiento: 2do trimestro de 2024</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> ¡Los poderosos Pokémon Paradoja llegan del pasado y del futuro para poner a prueba sus habilidades como Pokémon ex! ¡Navega por Mares Cerúleos con Ondulagua ex o lanza un ataque de Filo Prisma con Ferroverdor ex! Sea cual sea tu elección, encontrarás un montón de paquetes de mejora de JCC Pokémon con los que podrás conseguir aún más útiles cartas de Pokémon y de Entrenador. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Cada lata Colisión Paradójica de JCC Pokémon contiene:</p>
                        </div>
                        <div className="contenedor-lista-cartas">
                            <ul>
                                <li>1 carta holográfica de promoción de Ondulagua ex o Ferroverdor ex  </li>
                                <li> 4 paquetes de mejora de JCC Pokémon </li>
                                <li> 1 carta con código para el <Link to="/" className="texto-celeste">Juego de Cartas Coleccionables Pokémon Live</Link> </li>
                            </ul>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="regresar">
                            <Link to="/jcc-pokemon/galeria-de-productos">
                                <button> Volver a la Galeria </button>
                            </Link>
                        </div>
                    </>
                }

            />

        </>
    )
}
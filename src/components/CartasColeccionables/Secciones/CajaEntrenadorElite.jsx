import { Link } from "react-router-dom"
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio"
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions"

export default function CajaEntrenadorElite() {


    return (
        <>

            <PresentacionInicio imagen={'/img/jcc-pokemon-dos.png'} />

            <StructureSeccions

                superior={
                    <>
                        <div className="titulo">
                            <h2> Caja de Entrenador Élite de Escarlata y Púrpura-Mascarada Crepuscular de JCC Pokémon </h2>
                        </div>
                        <div className="fecha">
                            <p> Lanzamiento: 2do trimestre de 2023 </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> La expansión Escarlata y Púrpura-Mascarada Crepuscular de JCC Pokémon abre las puertas a un mundo de travesuras y misterios, e invita a los jugadores a explorar la comarca de Noroteo, donde tanto humanos como Pokémon conviven en armonía con la naturaleza. Descubre los misterios del enmascarado Pokémon legendario Ogerpon, que llega en forma de cuatro amenazantes Pokémon ex Teracristal de diferentes tipos, y une fuerzas con otros Pokémon recién descubiertos, como Ursaluna Luna Carmesí ex y Sinistcha ex. También Greninja, Dragapult y Magcargo deslumbrarán como Pokémon ex Teracristal, con mucho más poder, ¡y nuevas cartas de AS TÁCTICO pondrán el broche de oro a la fiesta! </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Esta Caja de Entrenador Élite te permite sacar el máximo partido a todo lo que ofrece esta increíble expansión. Con nada menos que 9 paquetes de mejora, no te faltarán oportunidades para sumergirte en cartas y Pokémon increíbles. Ogerpon es el más travieso, y esta caja te permite desatar todo su poder con una carta de promoción con ilustración expandida con el Pokémon Máscara en su forma Máscara Turquesa, además de fundas para cartas de Ogerpon. Si a esto le sumamos los dados a modo de contadores de daño, los marcadores de condición y una caja de coleccionista para tenerlo todo bien guardado, ¡está claro que no te faltará nada para pasarla genial en el mundo mágico de la mascarada crepuscular! </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> La Caja de Entrenador Élite de Escarlata y Púrpura-Mascarada Crepuscular de JCC Pokémon contiene: </p>
                        </div>
                        <div className="contenedor-lista-cartas">
                            <ul>
                                <li> 9 paquetes de mejora de Escarlata y Púrpura-Mascarada Crepuscular de JCC Pokémon </li>
                                <li> 1 carta holográfica de promoción con ilustración expandida de Ogerpon Máscara Turquesa </li>
                                <li>  65 fundas para cartas de Ogerpon</li>
                                <li> 45 cartas de Energía de JCC Pokémon </li>
                                <li> 1 guía para jugadores de la expansión Escarlata y Púrpura-Mascarada Crepuscular </li>
                                <li> 6 dados a modo de contadores de daño </li>
                                <li> 1 dado para lanzamiento de moneda válido para competencias legales </li>
                                <li>2 marcadores de condición de plástico  </li>
                                <li>1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada  </li>
                                <li> 1 carta con código para el Juego de <Link to="/" className="celeste">Cartas Coleccionables Pokémon Live</Link> </li>
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
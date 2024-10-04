import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function CajaEntrenadorElitePaldea() {
    return (
        <>

            <PresentacionInicio imagen={'/img/galeria-cartas-catorce.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Caja de Entrenador Élite de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 1er trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> ¡Los Pokémon variocolor relucen de nuevo como protagonistas con su esperado regreso a JCC Pokémon! Pikachu variocolor abre camino, seguido de Tinkaton, Ceruledge, Dondozo y más de otros 100 Pokémon variocolor. Mientras tanto, Colmilargo y Ferrodada aparecen como Pokémon ex del pasado y del futuro, al tiempo que Charizard, Forretress y Espathra, en forma de Pokémon ex Teracristal variocolor, exhiben sus habilidades únicas. ¡Resplandece junto a ellos y descubre las fulgurantes maravillas de la expansión Escarlata y Púrpura-Destinos de Paldea!</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Adéntrate en esta expansión con la Caja de Entrenador Élite, que contiene nueve paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea, así como una carta holográfica de promoción de ilustración expandida de Mimikyu variocolor. Y por si esto fuera poco, encontrarás 65 fundas para cartas de Mimikyu variocolor, 45 cartas de Energía para potenciar a tu equipo, dados, marcadores de condición y mucho más. Todo esto viene en una resistente caja de coleccionista con divisores para mantener tus cartas protegidas y organizadas. </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal">  La Caja de Entrenador Élite de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon contiene:</p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li>9 paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon  </li>
                            <li> 1 carta holográfica de promoción con ilustración expandida de Mimikyu variocolor </li>
                            <li> 65 fundas para cartas de Mimikyu variocolor </li>
                            <li> 45 cartas de Energía de JCC Pokémon </li>
                            <li> 1 guía para jugadores de la expansión Escarlata y Púrpura-Destinos de Paldea </li>
                            <li> 6 dados a modo de contadores de daño </li>
                            <li> 1 dado para lanzamiento de moneda válido para competencias legales </li>
                            <li> 2 marcadores de condición de plástico </li>
                            <li> 1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada </li>
                            <li> 1 carta con código para el <span className="celeste">Juego de Cartas Coleccionables Pokémon Live</span></li>
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
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function ColeccionMabosstiff() {
    return (
        <>

            <PresentacionInicio imagen={'/img/galeria-cartas-dieciocho.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Colección Mabosstiff ex de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 1er trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> ¡Juega como todo un jefe con Mabosstiff ex! Mabosstiff normalmente es amigable, pero cuando debe proteger a sus aliados, adopta un aspecto amenazante mostrando sus colmillos. Aquí encontrarás a Mabosstiff ex en forma de carta holográfica de promoción en versiones de juego y de gran tamaño, junto con el Pokémon Bisoño Maschiff, que aparece por primera vez en una carta holográfica. Además, hallarás una carta con código para JCC Pokémon Live, que incluye ejemplares de las cartas holográficas de Maschiff y de Mabosstiff ex para jugar en línea. </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Si quieres unir tus fuerzas con las de este Pokémon ex y lanzar un golpe de lo más efectivo, su ataque Colmillos Imponentes es perfecto. Inflige 100 puntos de daño por sí solo, y 120 puntos adicionales si cualquiera de tus Pokémon en Banca ha recibido daño. Puedes intentar utilizar Ciénaga Bocazas y Bomba de Daño para asegurarte de que uno de tus Pokémon en Banca siempre tenga un contador de daño y así sacar el máximo provecho del ataque más poderoso de este fiel Pokémon. </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> La colección Mabosstiff ex de JCC Pokémon contiene: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li> 1 carta holográfica de promoción de Mabosstiff ex </li>
                            <li>1 carta holográfica de Maschiff </li>
                            <li> 1 carta holográfica de gran tamaño de Mabosstiff ex </li>
                            <li> 4 paquetes de mejora de JCC Pokémon </li>
                            <li> 1 carta con código para <span className="celeste">JCC Pokémon Live</span> </li>
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
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function LataDestinos() {
    return (
        <>

            <PresentacionInicio imagen={'/public/img/galeria-cartas-doce.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Lata Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 1er trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Los Pokémon ex variocolor llegaron para ser los protagonistas. Maravíllate ante el inmenso poder de estos Pokémon, ¡que trascienden los límites temporales y de tipos! Con esta lata, podrás elegir entre la fuerza sísmica de Colmilargo ex, que aparece como Pokémon del pasado, la férrea determinación de Ferrodada ex, como Pokémon del futuro, o el ardiente espíritu de Charizard ex, como Pokémon Teracristal de tipo Oscuro. Después, descubre más cartas increíbles en los paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea que vienen incluidos. </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> La lata Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon contiene: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li>1 carta holográfica de promoción de Colmilargo ex variocolor, Ferrodada ex variocolor o Charizard ex variocolor  </li>
                            <li> 4 paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon </li>
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
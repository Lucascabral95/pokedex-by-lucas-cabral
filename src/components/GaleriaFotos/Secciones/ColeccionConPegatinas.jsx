import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function ColeccionConPegatinas() {
    return (
        <>

            <PresentacionInicio imagen={'/img/galeria-cartas-quince.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Colección con pegatina especial de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 1er trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> ¡Date un capricho y, de paso, adorna tu tableta, laptop o cualquier otro dispositivo con un fiel y simpático compañero Pokémon variocolor de la región de Paldea! Dentro de esta caja, encontrarás una adorable y en-can-tadora calcomanía y una carta de promoción de uno de los tres Pokémon variocolor disponibles en esta colección, así como varios paquetes de mejora de la expansión especial Escarlata y Púrpura-Destinos de Paldea. </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> La colección con pegatina especial de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon contiene: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li>1 carta holográfica de promoción de Fidough variocolor, Greavard variocolor o Maschiff variocolor  </li>
                            <li> 1 calcomanía especial de Fidough variocolor, Greavard variocolor o Maschiff variocolor </li>
                            <li>3 paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon  </li>
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
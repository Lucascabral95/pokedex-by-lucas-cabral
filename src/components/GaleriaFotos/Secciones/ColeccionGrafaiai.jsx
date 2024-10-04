import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function ColeccionGrafaiai() {
    return (
        <>

            <PresentacionInicio imagen={'/public/img/galeria-cartas-diez.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Colección Grafaiai ex de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 2do trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> ¡Desencadena un torrente tóxico con Grafaiai ex! En la colección Grafaiai ex de JCC Pokémon, el Pokémon Mono Veneno emplea su saliva venenosa para derrotar a los rivales en combate. En esta colección, encontrarás a Grafaiai ex en forma de carta holográfica de promoción en dos versiones, una para jugar y otra de gran tamaño, junto con Shroodle, el Pokémon Ratón Veneno. </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> La colección Grafaiai ex de JCC Pokémon contiene: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li> 1 carta holográfica de promoción de Grafaiai ex </li>
                            <li> 1 carta holográfica de promoción de Shroodle </li>
                            <li> 1 carta holográfica de gran tamaño de Grafaiai ex </li>
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
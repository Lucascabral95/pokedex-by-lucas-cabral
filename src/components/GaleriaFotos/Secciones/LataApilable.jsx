import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function LataApilable() {
    return (
        <>

            <PresentacionInicio imagen={'/public/img/galeria-cartas-dieciseis.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Lata apilable de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 1er trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Elige una lata que concuerde con tu tipo: el sereno tipo Psíquico, el acerado tipo Metálico o el draconiano tipo Dragón... ¡O colecciónalas todas! Cada una de estas prácticas latas apilables de JCC Pokémon se puede colocar una sobre otra en forma de torre y contiene:</p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li> 3 paquetes de mejora de JCC Pokémon </li>
                            <li>  2 hojas con calcomanías de Pokémon</li>
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
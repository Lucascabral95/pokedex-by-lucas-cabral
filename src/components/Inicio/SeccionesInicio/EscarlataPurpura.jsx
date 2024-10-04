import PresentacionInicio from "./PresentacionInicio.jsx";
import StructureSeccions from "./StructureSeccions.jsx";
import { Link } from "react-router-dom";

export default function EscarlataPurpura() {
    return (
        <>

            <PresentacionInicio imagen="/img/fuerzas-temporales-cartas.png" />

            <StructureSeccions superior={
                <>
                    <div className="fecha">
                        <p> 21 de marzo de 2024 </p>
                    </div>
                    <div className="titulo">
                        <h2> La nueva expansión incluye increíbles cartas de AS TÁCTICO, Pokémon Teracristal, y Pokémon del pasado y del futuro. </h2>
                    </div>
                    <div className="contenedor-subtitulo">
                        <h4> El Juego de Cartas Coleccionables Pokémon Live incorpora Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon </h4>
                    </div>
                    <div class="video">
                        <iframe
                            width="584"
                            height="315"
                            src="https://www.youtube.com/embed/V12BrKjaX7M"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div className="descripcion">
                            <p> as cartas de <span className="texto-celeste"> Escarlata y Púrpura-Fuerzas Temporales de JCC Pokemon </span> ya están disponibles en el <span className="texto-celeste">Juego de Cartas Coleccionables Pokémon Live</span>. Con ellas, podrás diseñar nuevas y emocionantes estrategias, así como crear barajas específicas.
                                Esta nueva expansión ofrece un caótico e impresionante homenaje al mundo Pokémon con los Pokémon del pasado y del futuro, el regreso de las excepcionales y poderosísimas cartas de AS TÁCTICO y Pokémon Teracristal tremendamente fuertes. Disfruta del <span className="texto-celete">tráiler </span>  para obtener más información sobre las <span className="texto-celete">del pase de combate</span> barajas , y sobre cómo crear barajas y <span className="texto-celeste">estrategias</span> únicas con estas novedosas cartas. ¡Aprovecha al máximo el poder de esta nueva expansión! </p>
                        </div>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> <span className="resal">L</span>as cartas de <span className="texto-celeste"> Escarlata y Púrpura-Fuerzas Temporales de JCC Pokemon </span> ya están disponibles en el <span className="texto-celeste">Juego de Cartas Coleccionables Pokémon Live</span>. Con ellas, podrás diseñar nuevas y emocionantes estrategias, así como crear barajas específicas. Esta nueva expansión ofrece un caótico e impresionante homenaje al mundo Pokémon con los Pokémon del pasado y del futuro, el regreso de las excepcionales y poderosísimas cartas de AS TÁCTICO y Pokémon Teracristal tremendamente fuertes. Disfruta del <span className="texto-celeste">tráiler</span> para obtener más información sobre las <span className="texto-celeste">barajas del pase de combate</span>,
                            y sobre cómo crear barajas y <span className="texto-celeste">estrategias</span> únicas con estas novedosas cartas. ¡Aprovecha al máximo el poder de esta nueva expansión! </p>
                    </div>
                    <div className="boton-abajo">
                        <button> Juego de Cartas Coleccionables </button>
                    </div>
                </>
            }

                inferior={
                    <>
                        <div className="regresar">
                            <Link to="/noticias">
                                <button> Regresar a Noticias </button>
                            </Link>
                        </div>
                        <div className="boton-abajo b-a-dos" style={{ display: 'none' }}>
                        <button> Juego de Cartas Coleccionables </button>
                    </div>
                    </>
                }
            />
        </>
    )
}
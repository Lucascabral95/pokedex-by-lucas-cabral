import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function PlayPokemonLocal() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/evento-cuatro.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 20 de febrero de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Celebra el Día de Pokémon en un evento local de Play! Pokémon </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Las tiendas de juegos participantes ofrecerán promociones especiales y premios para conmemorar este gran día. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">S</span>umérgete en el espíritu competitivo para celebrar el Día de Pokémon y participa en eventos de Play! Pokémon en tu tienda de juegos más cercana. Durante el Día de Pokémon (que como bien sabrás es el 27 de febrero de 2024), las tiendas participantes llevarán a cabo eventos del Juego de Cartas Coleccionables Pokémon, los videojuegos Pokémon y Pokémon GO. Es posible que algunos establecimientos lleven a cabo sesiones de "Aprende a jugar" para que los jugadores principiantes también puedan unirse a la diversión.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Además, puede que tu tienda tenga disponibles artículos de promoción especiales, como dados a modo de contadores de daño y monedas Pokémon, además de premios, entre los cuales pueden haber productos de JCC Pokémon y códigos de Pokémon GO en la Liga que se pueden canjear por artículos dentro del juego. Los premios pueden variar según la región.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Los horarios y detalles de los eventos varían entre las tiendas participantes. Nuestro <span className="texto-celeste">localizador de eventos</span> te ayudará a encontrar las ubicaciones de los eventos, y puedes ponerte en contacto con las tiendas para obtener más información. ¡Disfruten del Día de Pokémon socializando (y combatiendo) con otros fans de Pokémon, Entrenadores!</p>
                        </div>
                        <div className="boton-abajo">
                            <button> Eventos de Play! Pokemon </button>
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
                        <div className="boton-abajo b-a-dos" style={{ display: "none" }}>
                            <button> Eventos de Play! Pokemon </button>
                        </div>
                    </>
                }

            />

        </>
    )
}
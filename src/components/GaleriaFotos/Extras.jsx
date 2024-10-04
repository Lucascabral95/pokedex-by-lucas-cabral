import { Link } from "react-router-dom";
import Structure from "../Structure/Structure";
import "./Extras.scss";

export default function Extras() {
    return (
        <>

            <Structure

                cuerpo={
                    <div className="extras">

                        <div className="e">
                            <div className="boton-ddbb">
                                <Link to={'/cardlist'}>
                                    <div className="contenedor">
                                        <button> Ir a la base de datos de cartas </button>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="contenedor-de-div-cartas">
                            <div className="contenedor c-ogerpon">
                                <Link to={'/noticias/ogerpon'}>
                                    <div className="img">
                                        <img src="/img/inicio-gif.gif" alt="Ogerpon y sus mascaras" />
                                    </div>
                                    <div className="contenido">
                                        <div className="titulo">
                                            <h4> Ogerpon y sus mascaras llegan a JCC Pokemon </h4>
                                        </div>
                                        <div className="texto">
                                            <p> Dale un vistazo antes que todos a algunas de las nuevas cartas que encontraras en la proxima expansion Escarlata y Purpura-Mascarada Crepuscular de JCC Pokemon. </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="contenedor c-fuerza-temporal">
                                <Link to={'/jcc-pokemon/galeria-de-productos'}>
                                    <div className="img">
                                        <img src="/img/fuerza-temporal-filter.png" alt="Galeria de productos" />
                                    </div>
                                    <div className="contenido">
                                        <div className="titulo">
                                            <h4> Galeria de productos de JCC Pokemon </h4>
                                        </div>
                                        <div className="texto">
                                            <p> Encuentra todo lo que buscas y conviertete en el mejor jugador de cartas JCC Pokemon </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="contenedor c-e-nigma">
                                <Link to={'/jcc-pokemon/galeria-de-productos/coleccion-torneo-premium-e-nigma'}>
                                    <div className="img">
                                        <img src="/img/galeria-cartas-nueve.png" alt="e-Nigma" />
                                    </div>
                                    <div className="contenido">
                                        <div className="titulo">
                                            <h4> Manten los ojos en el premio... con e-Nigma </h4>
                                        </div>
                                        <div className="texto">
                                            <p> Dale un toque diferente a tu baraja con la superstreamer de Ciudad Leudal gracias a la coleccion torneo premium de e-Nigma de JCC </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="contenedor c-ddbb ">
                                <Link to={'/cardlist'}>
                                    <div className="img">
                                        <img src="/img/fuerza-temporal-filter.png" alt="Base de Datos de cartas" />
                                    </div>
                                    <div className="contenido">
                                        <div className="titulo">
                                            <h4> ¡Explora la base de datos de cartas! </h4>
                                        </div>
                                        <div className="texto">
                                            <p> ¡Estudia las cartas de JCC Pokemon que te llevaran a la victoria! </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="contenedor c-noticias">
                                <Link to={'/noticias'}>
                                    <div className="img">
                                        <img src="/img/pokemon-logo.png" alt="Novedades Pokemon" />
                                    </div>
                                    <div className="contenido">
                                        <div className="titulo">
                                            <h4> Noticias de Pokemon </h4>
                                        </div>
                                        <div className="texto">
                                            <p> No te pierdas ninguna novedad. </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="contenedor c-aventura-jcc">
                                <Link to={'/noticias/emprende-tu-aventura-en-pokemon'}>
                                    <div className="img">
                                        <img src="/img/aventura-jcc-pokemon.png" alt="Aventura en JCC Pokemon" />
                                    </div>
                                    <div className="contenido">
                                        <div className="titulo">
                                            <h4> Tu aventura en JCC Pokemon esta a punto de comenzar </h4>
                                        </div>
                                        <div className="texto">
                                            <p> Aiste a eventos de demostracion en la Liga para descubri el juego y obtener una baraja de prueba de un Pokemon V.  </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                }

            />

        </>
    )
}
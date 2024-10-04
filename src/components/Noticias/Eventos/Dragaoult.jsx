import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function Dragapult() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/evento-nueve.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 26 de noviembre de 2023 </p>
                        </div>
                        <div className="titulo">
                            <h2> Consigue al Dragapult de Alex Gómez Berna y añade la carta Ferropaladín ex a tu colección en JCC Pokémon Live </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Sigue en directo el Campeonato Internacional de Latinoamérica 2024 para conseguir estos regalos en el juego. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">S</span>igue la transmisión del <span className="texto-celeste">Campeonato Internacional Pokémon</span> de <span className="texto-celeste">Latinoamérica 2024</span> (LAIC, por sus siglas en inglés) en <span className="texto-celeste">Twitch.tv/Pokemon</span> para conseguir una contraseña que te permitirá obtener un Pokémon especial para tu partida de <span className="texto-celeste">Pokémon Scarlet</span> o <span className="texto-celeste">Pokémon Violet</span> y otra con la que podrás conseguir una carta genial en <span className="texto-celeste">JCC Pokémon Live</span>.</p>
                        </div>
                        <div className="titulo-informativo">
                            <h3> Pokémon Scarlet y Pokémon Violet: el Dragapult de Alex Gómez Berna </h3>
                            <div className="linea-delimitante"> </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Alex Gómez Berna obtuvo la victoria en la categoría Máster del Campeonato Internacional de Norteamérica de este año con Dragapult como eje central de su equipo. Sigue la transmisión del Campeonato Internacional Pokémon de Latinoamérica 2024 hasta que aparezca una contraseña. Después, en tu juego, selecciona "Regalo misterioso" e introduce la contraseña para recibir a este Pokémon, que tendrá los mismos movimientos y características que el de Alex. ¡Incluso podrás añadirlo a tu próximo equipo competitivo! Ten en cuenta que sólo podrás usar esta contraseña una vez por partida en tu juego Pokémon Scarlet o Pokémon Violet.
                                Para recibir a este Pokémon, deberás haber progresado en la historia hasta un punto determinado. La contraseña para conseguir a este Dragapult será válida hasta las 15:59 PST del <strong>20 de noviembre de 2023</strong>.</p>
                        </div>
                        <div className="contenedor-de-cartas-card">
                            <div className="img-img">
                                <img src="/public/img/dragapult.png" alt="Dragaoult" />
                            </div>
                            <div className="lista">
                                <ul>
                                    <li> Poké Ball: <strong>Gloria Ball</strong> </li>
                                    <li> Sexo: <strong>macho</strong> </li>
                                    <li> Nivel: <strong>50</strong> </li>
                                    <li> Entrenador original: <strong>Alex</strong> </li>
                                    <li> Naturaleza: <strong>alegre</strong> </li>
                                    <li> Habilidad: <strong>Cuerpo Puro</strong> </li>
                                    <li> Teratipo: <strong>Fantasma</strong> </li>
                                    <li> Objeto equipado: <strong> Cinta Eleccion </strong> </li>
                                    <li> Movimientos: <strong> Teraexplosión, Dracoflechas, Golpe Fantasma e Ida y Vuelta </strong> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="titulo-informativo">
                            <h3> JCC Pokémon Live: Ferropaladín ex </h3>
                            <div className="linea-delimitante"> </div>
                        </div>
                        <div className="carta-encapsulada">
                            <div className="im-im" >
                                <img src="/public/img/ferropaladin.png" alt="Ferropaladin" />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Este poderoso Pokémon Paradoja que se asemeja a Gardevoir y a Gallade se abre paso a cuchillazos en la expansión Escarlata y Púrpura-Brecha Paradójica. Añade una versión digital de esta carta a tu colección de <span className="texto-celeste">JCC Pokémon en JCC Pokémon Live</span>.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Contraseña válida hasta las 22:00 PST del <strong>26 de noviembre de 2023</strong> o hasta agotar existencias. Limitado a una carta por cuenta.</p>
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
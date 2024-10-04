import { Link } from "react-router-dom"
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio.jsx"
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions.jsx"

export default function CampeonatoInternacionaEuropa() {
    return (
        <>

            <PresentacionInicio imagen='/img/evento-tres.png' />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 08 de marzo de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Obtén un Pokémon durante la transmisión del Campeonato Internacional de Europa 2024 </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Sigue en directo el Campeonato Internacional de Europa 2024 para conseguir recompensas en el juego. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> <span className="resal">S</span>igue la emisión del <span className="texto-celeste">Campeonato Internacional Pokémon de Europa 2024</span> (EUIC, por sus siglas en inglés) en <span className="texto-celeste">Twitch.tv/PokemonEUIC</span> y la discusión en nuestras redes sociales para conseguir una contraseña que te permitirá obtener un Pokémon especial para tu partida de <span className="texto-celeste">Pokémon Scarlet</span> o <span className="texto-celeste">Pokémon Violet</span>,
                                otra con la que podrás conseguir una carta increíble en <span className="texto-celeste">JCC Pokémon Live</span> y una Investigación temporal en <span className="texto-celeste">Pokémon GO</span> a través de los Drops de Twitch.</p>
                        </div>
                        <div className="titulo-informativo">
                            <h3> Pokémon Scarlet y Pokémon Violet: el Ferropalmas de Marco Silva </h3>
                            <div className="linea-delimitante"> </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Marco Silva obtuvo la victoria en la categoría Máster del Campeonato Internacional de Latinoamérica de esta temporada con Ferropalmas como eje central de su equipo.
                                Sigue la transmisión o échale un vistazo a nuestros canales oficiales una vez que arranque el evento para conseguir la contraseña. Después, en tu juego, selecciona Regalo misterioso e introduce la contraseña para recibir este Pokémon, que tendrá los mismos movimientos y características que el de Marco. ¡Incluso podrás añadirlo a tu próximo equipo competitivo!</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Ten en cuenta que sólo podrás usar esta contraseña una vez por partida en tu juego Pokémon Scarlet o Pokémon Violet. Para recibir este Pokémon, deberás haber progresado en la historia hasta un punto determinado. La contraseña para recibir a Ferropalmas será válida <strong>hasta las 16:59 PDT del 8 de abril de 2024</strong>.</p>
                        </div>
                        <div className="contenedor-de-cartas-card">
                            <div className="img-img">
                                <img src="/img/peleador-pokemon.png" alt="Ferropalmas" />
                            </div>
                            <div className="lista">
                                <ul>
                                    <li> Pokémon: <strong>Ferropalmas</strong> </li>
                                    <li> Poké Ball: <strong>Gloria Ball</strong> </li>
                                    <li> Nivel: <strong>50</strong> </li>
                                    <li> Teratipo: <strong>Agua</strong> </li>
                                    <li> Entrenador original: <strong>Marco</strong> </li>
                                    <li> Naturaleza: <strong>Firme</strong> </li>
                                    <li> Habilidad: <strong>Carga Cuark</strong> </li>
                                    <li> Objeto equipado: <strong>Chaleco Asalto</strong> </li>
                                    <li> Movimientos: <strong> Puño Drenaje, Voltiocambio, Voltio Cruel y Sorpresa. </strong> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="titulo-informativo">
                            <h3> JCC Pokémon Live: Electrofuria ex </h3>
                            <div className="linea-delimitante"> </div>
                        </div>
                        <div className="carta-encapsulada">
                            <div className="im-im" >
                                <img src="/img/electrofuria.png" alt="Electrofuria" />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Este poderoso Pokémon Paradoja que se parece a Raikou hizo su aparición electrizante en la expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon. Agrega una versión digital de esta carta a tu colección de JCC Pokémon en JCC Pokémon Live.</p>
                        </div>
                        <div className="parrafo">
                            <strong> Disponible hasta las 23:00 PDT del 15 de abril de 2024 o hasta agotar existencias. </strong>
                        </div>
                        <div className="titulo-informativo">
                            <h3> Pokémon GO: el equipo ganador de LNDsRargef en el Campeonato Internacional de Latinoamérica 2024 </h3>
                            <div className="linea-delimitante"> </div>
                        </div>
                        <div className="contenedor-de-muchos-pokemons">
                            <div className="picc">
                                <img src="/img/muchos-pokemons-uno.png" alt="Imagen" />
                            </div>
                            <div className="picc">
                                <img src="/img/muchos-pokemons-dos.png" alt="Imagen" />
                            </div>
                            <div className="picc">
                                <img src="/img/muchos-pokemons-tres.png" alt="Imagen" />
                            </div>
                            <div className="picc">
                                <img src="/img/muchos-pokemons-cuatro.png" alt="Imagen" />
                            </div>
                            <div className="picc">
                                <img src="/img/muchos-pokemons-cinco.png" alt="Imagen" />
                            </div>
                            <div className="picc">
                                <img src="/img/muchos-pokemons-seis.png" alt="Imagen" />
                            </div>
                        </div>
                        <div className="linea-delimitante" style={{ margin: "56px 0px 34px 0px" }}> </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡Combate como los mejores en la Liga Combates GO con el equipo que proclamó vencedor a LNDsRargef en el Campeonato Internacional de Latinoamérica 2024! Activa los Drops en tu cuenta de Twitch y sigue la transmisión para recibir una Investigación temporal
                                donde podrás encontrar a Lickitung, Lanturn, Umbreon, Gligar, Medicham y Charjabug, además de conseguir recompensas adicionales que incluyen 50 Caramelos Meditite, 10,000 Polvos Estelares y una MT de ataque cargado.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Visita esta <span className="texto-celeste">página de ayuda</span> para obtener más información sobre los Drops de Twitch y conocer los pasos detallados para vincular tu cuenta de Twitch con tu cuenta del Club de Entrenadores Pokémon.</p>
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
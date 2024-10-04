import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function JCCPokemonDos() {
    return (
        <>

            <PresentacionInicio imagen='/img/carta-seis.png' />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 07 de marzo de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Consigue la caja de Combina y Combate de Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon de manera anticipada </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Disfruta de partidas rápidas y de poderosas cartas de promoción de Prelanzamiento con la caja de Combina y Combate de Escarlata y Púrpura-Fuerzas Temporales. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">L</span>a nueva expansión del Juego de Cartas Coleccionables Pokémon, Escarlata y Púrpura-Fuerzas Temporales, llegará el 22 de marzo de 2024, ¡pero puedes visitar tu tienda de juegos habitual para probar algunas de estas nuevas cartas antes de esa fecha! A partir del 9 de marzo de 2024, una selección de comercios pondrá a la venta la caja de Combina y Combate de Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon, lo que dará a los fans la oportunidad de librar unos combates de Prelanzamiento y de disfrutar de esta nueva expansión antes de su lanzamiento oficial. Usa el localizador de eventos para encontrar un evento de Prelanzamiento cerca de ti.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">El formato de Prelanzamiento permite a los jugadores competir con una baraja de 40 cartas, separando cuatro cartas de Premio al comienzo de la partida, en lugar de una baraja de 60 cartas con seis cartas de Premio. Este formato es perfecto para introducir a los nuevos jugadores en el emocionante mundo del Juego de Cartas Coleccionables Pokémon con partidas rápidas y divertidas, además de permitir a los jugadores más experimentados descubrir todo lo que les espera en Escarlata y Púrpura-Fuerzas Temporales. Debido a la limitada selección de cartas y la variedad de las mismas que se pueden obtener en una caja de Combina y combate, los eventos de Prelanzamiento son también una excelente oportunidad para practicar tus habilidades de creación de barajas.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Cada caja de Combina y Combate contiene cuatro paquetes de mejora de Escarlata y Púrpura-Fuerzas Temporales y una baraja de 40 cartas lista para jugar con cartas importantes de esta expansión y de expansiones anteriores, además de una de las cuatro cartas holográficas de promoción con las que mejorar tu baraja de Prelanzamiento. Según la carta de promoción que obtengas, podrás añadir a tu baraja al torrencialmente poderoso Feraligatr, al metálico Metang, al prehistórico Koraidon o al futurista Miraidon. Sea cual sea la carta de promoción que recibas, ¡seguro que dará forma a tu estrategia en el Prelanzamiento!</p>
                        </div>
                        <div className="contenedor-de-titulo">
                            <div className="titulo">
                                <h3>Feraligatr</h3>
                            </div>
                            <div className="linea-separadora"></div>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/svp-89">
                                <div className="im-im" >
                                    <img src="/img/feraligart.png" alt="Feraligart" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Se suele decir que sin esfuerzo no hay premio, y Feraligatr parece que se lo está tomando muy a pecho con su habilidad Corazón Torrencial. Una vez durante tu turno, puedes poner 5 contadores de daño en Feraligatr y, si lo haces, sus ataques harán 120 puntos de daño más al Pokémon Activo de tu rival. Esos 120 puntos deberían dejar con el corazón en la garganta a tu rival en el formato de Prelanzamiento, pero si se le une el ataque Ola Gigante, que ya inflige 160 puntos de daño, ¡Feraligatr puede dejar Fuera de Combate con un solo golpe a un Pokémon ex sin que se lo espere!</p>
                        </div>
                        <div className="contenedor-de-titulo">
                            <div className="titulo">
                                <h3>Metang</h3>
                            </div>
                            <div className="linea-separadora"></div>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/svp-90">
                                <div className="im-im" >
                                    <img src="/img/metang.png" alt="Metang" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Forja tu camino al éxito en el formato de Prelanzamiento con Metang y su poderosa habilidad Creametal. Una vez durante tu turno, puedes mirar las 4 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Metálica Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Las barajas de Prelanzamiento suelen contener más cartas de Energía que las tradicionales debido a la limitada selección de cartas de Entrenador, por lo que seguro que Metang se convertirá en una gran forma de acelerar Energía a cualquier Pokémon que use Energía Metálica o Energía Incolora para sus ataques.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Independientemente de los Pokémon que lleves junto a Metang, lo que está claro es que siempre es buena idea tener más de una copia de Metang para asegurarte de que puedes usar Creametal varias veces durante tu turno, lo que también te abre la puerta a hacer que Metang evolucione a Metagross en el momento adecuado. Si tienes varios Metang en juego, podrás aprovechar los ataques más poderosos de Metagross sin perder la opción de Creametal.</p>
                        </div>
                        <div className="contenedor-de-titulo">
                            <div className="titulo">
                                <h3>Koraidon</h3>
                            </div>
                            <div className="linea-separadora"></div>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/svp-91">
                                <div className="im-im" >
                                    <img src="/img/koraidon.png" alt="Koraidon" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Koraidon aparece como un Pokémon de tipo Dragón por primera vez en JCC Pokémon con Escarlata y Púrpura-Fuerzas Temporales. El plan es impartir el dolor ancestral de Koraidon y sus amistades poniéndolos en el tablero, ya que el ataque Golpe Primitivo inflige 30 puntos de daño por cada uno de tus Pokémon del pasado en juego. Si tienes seis Pokémon del pasado en juego, harás 180 puntos de daño con sólo una Energía Lucha y una Energía de cualquier otro tipo (un costo de ataque flexible que te permite combinar a Koraidon con otros Pokémon del pasado sin importar sus tipos).</p>
                        </div>
                        <div className="contenedor-de-titulo">
                            <div className="titulo">
                                <h3>Miraidon</h3>
                            </div>
                            <div className="linea-separadora"></div>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/svp-92">
                                <div className="im-im" >
                                    <img src="/img/miraidon.png" alt="Miraidon" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Miraidon debutó en JCC Pokémon con la expansión Escarlata y Púrpura como Pokémon de tipo Eléctrico, pero ahora es el momento de mostrar su lado dracónico con este Miraidon de Escarlata y Púrpura-Fuerzas Temporales. Si combinas a Miraidon con otros Pokémon del futuro, su ataque Aceleración Máxima será una forma sencilla de empezar el combate con el pie derecho, pues inflige 40 puntos de daño por una Energía de cualquier tipo y te permite buscar en tu baraja hasta dos cartas de Energía Básica para unirlas a tus Pokémon del futuro de la manera que desees. Esta es la carta de promoción de Prelanzamiento perfecta para quienes buscan acelerar el ritmo de la partida y dejar atrás a sus rivales.</p>
                        </div>
                    <div className="linea-delimitante" style={{ margin: "50px 0 30px 0" }}></div>
                        <div className="parrafo">
                            <p className="texto-normal">Cada caja de Combina y Combate es diferente, por lo que podrás darle tu propio toque al crear tu baraja. Tanto si te vas a acercar a una tienda de juegos como si vas a jugar en casa con un amigo, ¡disfruta de combates rápidos y divertidos con las cartas de la nueva expansión Escarlata y Púrpura-Fuerzas Temporales! Si no puedes asistir a un evento de Prelanzamiento, estas cajas de Combina y Combate estarán a la venta cuando se lance la expansión de manera oficial</p>
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
                        <div className="imagen-tabla">
                            <div className="img-img">
                                <img src="/img/fuerzas-temporales-icono.png" alt="Fuerzas temporales" />
                            </div>
                            <div className="tab-one" style={{ height: "50px", display: "flex", alignItems: "center" }}>
                                <div className="parte two">
                                    <p> Serie </p>
                                </div>
                                <div className="parte one">
                                    <p> Serie Escarlata y Púrpura </p>
                                </div>
                            </div>
                            <div className="tab-two">
                                <div className="parte two">
                                    <p> Fecha de lanzamiento </p>
                                </div>
                                <div className="parte one">
                                    <p> 22 de marzo de 2024 </p>
                                </div>
                            </div>
                            <div className="tab-one">
                                <div className="parte two">
                                    <p> Número de cartas </p>
                                </div>
                                <div className="parte one">
                                    <p> más de 160 </p>
                                </div>
                            </div>
                            <div className="tab-two">
                                <div className="parte two">
                                    <p> ¿Baraja legal estándar? </p>
                                </div>
                                <div className="parte one">
                                    <p> Sí </p>
                                </div>
                            </div>
                            <div className="tab-one" style={{ height: "44px" }}>
                                <div className="parte two">
                                    <p>  </p>
                                </div>
                                <div className="parte on">
                                    <p> </p>
                                </div>
                            </div>
                        </div>
                        <div className="boton-abajo b-a-dos" style={{ display: "none" }}>
                            <button> Juego de Cartas Coleccionables </button>
                        </div>
                    </>
                }

            />

        </>
    )
}
import { Link } from "react-router-dom";
import FooterGuiaUsuario from "./FooterGuiaUsuario";
import "./GuiaUsuario.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function GuiaUsuario() {
    return (
        <div className="guia-de-usuario">
            <div className="contenedor">

                <div className="sitio-web-oficial">
                    <div className="contenedor-imagen">
                        <div className="texto">
                            <h2> Sitio web oficial Pokemon </h2>
                            <p> para padres </p>
                        </div>
                    </div>
                    <div className="texto" style={{ display: "none" }}>
                        <div className="interior">
                            <h2> Sitio web oficial Pokemon </h2>
                            <p>para padres</p>
                        </div>
                    </div>
                    <div className="img" style={{ display: "none" }}>
                        <img src="https://parents.pokemon.com/images/common/box-logo.svg" alt="Titulo" />
                    </div>
                </div>

                <div className="imagen-principal-central">
                    <div className="img">
                        <img src="/img/guia-pokemon-uno.webp" alt="Diversion para todos" />
                        <img style={{ display: "none" }} className="familia-mobile" src="/img/familia-mobile.webp" alt="Diversion para todos" />
                    </div>
                </div>

                <div className="diversion-para-todos">
                    <div className="contenedor-imagen">
                        <div className="img-pikachu">
                            <div className="img">
                                <img src="/img/guia-pokemon-ocho.webp" alt="Pikachu sonriente" />
                            </div>
                        </div>
                        <div className="imagen-texto">
                            <div className="texto">
                                <h4> ¡Pokémon es diversión para todos! </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="que-son-los-pokemon">
                    <div className="informacion">
                        <div className="contenido">
                            <div className="primer-div">
                                <div className="texto">
                                    <p>Pokémon nació en Japón con el lanzamiento de Pokémon Edición Roja y Pokémon Edición Verde para la Game Boy en 1996. Dos años más tarde, Pokémon llegó a Norteamérica con el lanzamiento de Pokémon Edición Roja y Pokémon Edición Azul, además del estreno de la serie de dibujos animados.</p>
                                </div>
                                <div className="texto">
                                    <p>Desde entonces, la marca ha ido creciendo con un juego de cartas coleccionables, películas, libros, torneos en vivo, artículos comerciales y mucho más. Con el crecimiento continuo de Pokémon, The Pokémon Company International (TPCi) mantiene su compromiso de deleitar a los fans de todas las edades con productos excelentes y valiosas experiencias en un ambiente seguro.</p>
                                </div>
                            </div>
                            <div className="titulo">
                                <h3>¿Qué son los Pokémon?  </h3>
                            </div>
                            <div className="texto texto-info">
                                <p> Si preguntas a cualquier niño cuál es su Pokémon favorito, te responderá con entusiasmo. Existen cientos de Pokémon que descubrir junto a tus hijos; los hay grandes y pequeños, adorables o temibles, y todas las posibles variedades que se te ocurran, por lo que todo el mundo encontrará uno con el que entablar un vínculo especial. En el mundo Pokémon, los Entrenadores Pokémon forjan una amistad duradera con sus compañeros Pokémon. Al crear un equipo, viajan en busca de aventuras, entrenan para mejorar sus habilidades y combaten en competiciones amistosas. Puedes aprender más sobre la gran cantidad de diferentes Pokémon que existen en la Pokédex, en el sitio web oficial de Pokémon. </p>
                            </div>
                        </div>
                    </div>
                    <div className="imagen">
                        <div className="div-cuadro">
                            <div className="snorlax">
                                <div className="img img-snorlax">
                                    <img src="/img/guia-poke-uno.webp" alt="Snorlax" />
                                </div>
                                <div className="snorlax-dos">
                                    <div className="img img-mudkip">
                                        <img src="/img/guia-poke-dos.webp" alt=" Mudkip " />
                                    </div>
                                    <div className="img img-eevee">
                                        <img src="/img/guia-poke-tres.webp" alt="Eeevee" />
                                    </div>
                                </div>
                            </div>
                            <div className="eevee">
                                <div className="img img-squirtle">
                                    <img src="/img/guia-poke-cuatro.webp" alt=" Squirtle" />
                                </div>
                                <div className="img img-pokebola">
                                    <img src="/img/guia-poke-seis.webp" alt="Pokebola" />
                                </div>
                                <div className="img img-bulbasur">
                                    <img src="/img/guia-poke-cinco.webp" alt="Bulbasur" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="informacion informacion-dos" style={{ display: "none" }}>
                        <div className="contenido">
                            <div className="titulo">
                                <h3>¿Qué son los Pokémon?  </h3>
                            </div>
                            <div className="texto">
                                <p> Si preguntas a cualquier niño cuál es su Pokémon favorito, te responderá con entusiasmo. Existen cientos de Pokémon que descubrir junto a tus hijos; los hay grandes y pequeños, adorables o temibles, y todas las posibles variedades que se te ocurran, por lo que todo el mundo encontrará uno con el que entablar un vínculo especial. En el mundo Pokémon, los Entrenadores Pokémon forjan una amistad duradera con sus compañeros Pokémon. Al crear un equipo, viajan en busca de aventuras, entrenan para mejorar sus habilidades y combaten en competiciones amistosas. Puedes aprender más sobre la gran cantidad de diferentes Pokémon que existen en la Pokédex, en el sitio web oficial de Pokémon. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="juego-de-cartas-coleccionables-pokemon">
                    <div className="borde-superior">
                        <div className="img">
                            <img src="https://parents.pokemon.com/images/common/box-logo.svg" alt="Borde amarillo superior" />
                        </div>
                    </div>

                    <div className="contenido-medio">
                        <div className="img">
                            <div className="imagen">
                                <img src="/img/guia-pokemon-tres.webp" alt="Jugador de cartas Pokemon" />
                            </div>
                        </div>
                        <div className="contenido">
                            <div className="titulo">
                                <h4> Juego de Cartas Coleccionables Pokemon </h4>
                            </div>
                            <div className="texto">
                                <p> Lanzado poco después de los primeros videojuegos Pokémon, el Juego de Cartas Coleccionables Pokémon (JCC Pokémon) ha cosechado un gran éxito entre los fans de todas las edades durante décadas. Algunos coleccionan las cartas para recrearse con las hermosas ilustraciones de sus personajes Pokémon favoritos, mientras que otros crean barajas para disfrutar de la sofisticada y estratégica mecánica de juego. Los jugadores pueden incluso competir entre ellos en los eventos oficiales de Play! Pokémon, que abarcan desde los encuentros informales de las Ligas Pokémon hasta el Campeonato Mundial Pokémon que se celebra cada año. </p>
                            </div>
                            <div className="boton">
                                <Link to={'/card/expansions/temporal-forces'}>
                                    <div className="contenedor">
                                        <button>
                                            <p> Explora JCC Pokemon </p>
                                            <div className="icono">
                                                <MdKeyboardArrowRight className="icon" />
                                            </div>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="borde-inferior">
                        <div className="img">
                            <img src="https://parents.pokemon.com/images/common/box-logo.svg" alt="Borde amarillo inferior" />
                        </div>
                    </div>
                </div>

                <div className="videojuegos-aplicaciones-pokemon">
                    <div className="videojuegos">
                        <div className="titulo">
                            <h3> Videojuegos y aplicaciones Pokémon </h3>
                        </div>
                        <div className="texto">
                            <p> Los videojuegos Pokémon han sido el núcleo de la marca desde su creación, y siguen levantando pasiones en todo el mundo. Con el paso de los años, se han lanzado multitud de videojuegos Pokémon de diferentes tipos y para todas las edades, dirigidos tanto a los más pequeños, desde preescolar, como a los fans más adultos (teniendo presente que estos juegos <strong>siempre</strong> son adecuados para toda la familia). Los juegos Pokémon también han llegado a los dispositivos móviles con títulos como el popular Pokémon GO. </p>
                        </div>
                        <div className="boton">
                            <Link to={'/aplicaciones'}>
                                <div className="contenedor-boton">
                                    <div className="texto">
                                        <p> Descubre más información sobre los juegos Pokémon </p>
                                    </div>
                                    <div className="icono">
                                        <MdKeyboardArrowRight className="icon" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="imagen">
                        <div className="img">
                            <img src="/img/guia-pokemon-cuatro.webp" alt="Fans de Pokemon jugando" />
                        </div>
                    </div>
                </div>

                <div className="conten">
                    <div className="animacion">
                        <div className="imagen">
                            <div className="img">
                                <img src="/img/guia-pokemon-cinco.webp" alt="Dibjuos de Pokemon" />
                            </div>
                        </div>
                        <div className="contenido">
                            <div className="titulo">
                                <h3> Animación  </h3>
                            </div>
                            <div className="texto">
                                <p> Descubre a los encantadores personajes, tanto humanos como Pokémon, y sigue sus alucinantes aventuras gracias a las series y películas de dibujos animados. </p>
                            </div>
                            <div className="boton">
                                <div className="contenedor-boton">
                                    <Link to={'/dibujos-animados'}>
                                        <div className="texto">
                                            <p> Descubre los dibujos animados Pokemon </p>
                                        </div>
                                    </Link>
                                    <div className="icono">
                                        <MdKeyboardArrowRight className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productos">
                    <div className="contenido">
                        <div className="titulo">
                            <h3> Productos</h3>
                        </div>
                        <div className="texto">
                            <p> Pokémon aparece en una gran variedad de productos que cautivará a los fans de todas las edades. La gama de artículos comerciales incluye juguetes, peluches, ropa, decoraciones para el hogar, dispositivos tecnológicos, adornos de temporada, colaboraciones con diseñadores ¡y muchísimo más! TPCi aspira a llevar la experiencia de Pokémon a un público global, siempre priorizando el disfrute de los más pequeños. </p>
                        </div>
                    </div>
                    <div className="imagen">
                        <div className="img">
                            <img src="/img/guia-pokemon-seis.webp" alt="Fan de Pokemon posando" />
                        </div>
                    </div>
                </div>

                <div className="proteccion">
                    <div className="comprometidos-con-la-proteccion-infantil">
                        <div className="imagen">
                            <div className="img">
                                <img src="/img/guia-pokemon-siete.webp" alt="Chicos felices" />
                            </div>
                        </div>
                        <div className="contenido">
                            <div className="titulo">
                                <h3>Comprometidos con la protección infantil </h3>
                            </div>
                            <div className="texto">
                                <p> En TPCi nos preocupamos por la infancia y, por tanto, estamos comprometidos con la protección infantil. Por ello, colaboramos con la organización National Center for Missing & Exploited Children (NCMEC), dedicada a la protección infantil en EE. UU. Pokémon también es miembro participante con sus cuotas al día de la organización Children’s Advertising Review Unit (CARU), dedicada a la regulación de la publicidad infantil, y del programa de seguridad de la ley de Protección de la Privacidad Infantil en Línea de EE. UU. (COPPA, por sus siglas en inglés). </p>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterGuiaUsuario />

            </div>
        </div>
    )
}
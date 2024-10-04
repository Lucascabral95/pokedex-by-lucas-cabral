import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function JCCPokemonTres() {
    return (
        <>

          <PresentacionInicio imagen='/public/img/carta-siete.png' />

          <StructureSeccions
          
            superior={
                <>
                 <div className="fecha">
                            <p> 23 de febrero de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Un primer vistazo a las cartas de la expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Descubre una nueva carta de AS TÁCTICO, Ferrotesta debuta como Pokémon ex y mucho más en la nueva expansión.</h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">L</span>as filas de los Pokémon del pasado y del futuro siguen creciendo! Te esperan poderosos y nuevos Pokémon, el regreso de las cartas de AS TÁCTICO e ilustraciones increíbles en <span className="texto-celeste">Escarlata y Púrpura-Fuerzas</span> Temporales. Esta expansión, que saldrá al mercado el 22 de marzo de 2024, contiene más de 160 cartas. Demos un primer vistazo a algunas de las impresionantes cartas que cambiarán el juego con la siguiente expansión del Juego de Cartas Coleccionables Pokémon.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡Buena suerte, Entrenadores!</p>
                        </div>
                        <div className="tit-simple p-0 m-0" style={{ margin:'40px 0 16px 0' }}>
                            <h3 className="titulo-simple m-0" style={{ fontSize:'24px' }}> Gengar ex </h3>
                        </div>
                        <div className="linea-delimitante p-0 m-0"> </div>
                        <div className="lista-unitaria">
                            <ul>
                                <li> Ilustracion de <span className="grave"> Nisota Niso</span></li>
                            </ul>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-104">
                                <div className="im-im" >
                                    <img src="/public/img/gengarex.png" alt="Gengar ex" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡El miedo se apoderará de ti cuando veas al Pokémon Sombra que parece salir de la carta para atraparte! Su sonrisa y mirada irradian maldad y picardía. La representación que hace Nisota Niso de Gengar expresa a la perfección la satisfacción que sentirás al usar su habilidad Maldición Persistente, pues coloca contadores de daño en los Pokémon de tu rival cada vez que este una 1 carta de Energía de su mano a uno de sus Pokémon. Tu contrincante necesita unir Energía para poder atacar, ¡lo que te ayudará a conseguir un Fuera de Combate por el camino!</p>
                        </div>
                        <div className="tit-simple p-0 m-0" style={{ margin:'40px 0 16px 0' }}>
                            <h3 className="titulo-simple m-0" style={{ fontSize:'24px' }}> Pokochos Gemelos </h3>
                        </div>
                        <div className="linea-delimitante p-0 m-0"> </div>
                        <div className="lista-unitaria">
                            <ul>
                                <li> Ilustracion de <span className="grave"> AYUMI ODASHIMA</span></li>
                            </ul>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-144">
                                <div className="im-im" >
                                    <img src="/public/img/pokochosgemelos.png" alt="Pokochos Gemelos" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Pase de Combate VIP <span className="texto-celeste">dejará el formato Estándar el 5 de abril de 2024</span>, pero que no cunda el pánico: ¡la carta Pokochos Gemelos llega al rescate! Esta carta de Objeto tan útil te permite buscar en tu baraja hasta 2 Pokémon Básicos con 70 PS o menos y ponerlos en tu Banca. Es ideal para las barajas enfocadas en los Pokémon ex más poderosos, como Charizard ex y Gardevoir ex, ¡que requieren que evolucionen de Pokémon Básicos con pocos PS!</p>
                        </div>
                        <div className="tit-simple p-0 m-0" style={{ margin:'40px 0 16px 0' }}>
                            <h3 className="titulo-simple m-0" style={{ fontSize:'24px' }}> Energía Neosuperior </h3>
                        </div>
                        <div className="linea-delimitante p-0 m-0"> </div>
                        <div className="lista-unitaria">
                            <ul>
                                <li> Ilustracion de <span className="grave"> Nisota Niso</span></li>
                            </ul>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-162">
                                <div className="im-im" >
                                    <img src="/public/img/energíaneosuperior.png" alt="Energía Neosuperior" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Las cartas de AS TÁCTICO debutaron con la expansión Negro y Blanco-Fronteras Cruzadas, y siempre han sido de las cartas de Objeto y de Herramienta Pokémon más potentes, aunque tienen un inconveniente: sólo se puede tener una carta de AS TÁCTICO en la baraja. Y, por primera vez, llega una carta de Energía Especial en formato AS TÁCTICO con todo el poder que eso conlleva. Energía Neosuperior proporciona 2 Energías de cualquier tipo si está unida a un Pokémon de Fase 2, por lo que resulta perfecta para poner la partida a tu favor uniendo una sola Energía, además de darle un toque de estilo a tu baraja gracias a su característico diseño holográfico en magenta.</p>
                        </div>
                        <div className="tit-simple p-0 m-0" style={{ margin:'40px 0 16px 0' }}>
                            <h3 className="titulo-simple m-0" style={{ fontSize:'24px' }}> Drampa </h3>
                        </div>
                        <div className="linea-delimitante p-0 m-0"> </div>
                        <div className="lista-unitaria">
                            <ul>
                                <li> Ilustracion de Mekayu</li>
                            </ul>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-184">
                                <div className="im-im" >
                                    <img src="/public/img/Drampa.png" alt="Drampa" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Drampa es conocido por su gran bondad y ser amistoso con los niños, ¡dos características que quedan reflejadas a la perfección en la carta de Mékayu! Drampa aparece en una escena que parece sacada de un cuento de hadas mientras sobrevuela tranquilamente una ciudad con dos niños en su lomo. Sin embargo, Drampa no es siempre amable: si alguien hiere a sus amistades, la ira se apodera de él. Y su ataque Cañón Iracundo lo demuestra a la perfección, pues inflige 220 puntos de daño si todos tus Pokémon en Banca tienen daño.</p>
                        </div>
                        <div className="tit-simple p-0 m-0" style={{ margin:'40px 0 16px 0' }}>
                            <h3 className="titulo-simple m-0" style={{ fontSize:'24px' }}> Ferrotesta ex </h3>
                        </div>
                        <div className="linea-delimitante p-0 m-0"> </div>
                        <div className="lista-unitaria">
                            <ul>
                                <li> Ilustracion de <span className="grave"> Nisota Niso</span></li>
                            </ul>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-206">
                                <div className="im-im" >
                                    <img src="/public/img/ferrotestaex.png" alt="Ferrotesta ex" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Belleza, poder y justicia están representados en esta carta de rareza Rara Ilustración Especial de Ferrotesta ex, que aparece con una pose solemne entre unos cerezos en flor. No podrás resistirte a la impresionante ilustración que creó nagimiso del potente Pokémon Paradoja delante de la luna. Y la majestuosa fuerza de Ferrotesta ex tiene más que un gran valor estético, ya que su habilidad Orden Cobalto aumenta en 20 puntos el daño que hacen tus Pokémon del futuro. Además, esta habilidad se puede acumular si tienes otras copias de Ferrotesta ex en juego para que los ataques de tus Pokémon del futuro puedan llegar a hacer 80 puntos de daño más. ¡Una paliza realmente futurista!</p>
                        </div>
                        <div className="linea-delimitante" style={{ width: '100%', margin: '50px 0 30px 0'}}></div>
                        <div className="parrafo">
                            <p className="texto-normal">Encontrarás estas fabulosas cartas y muchas otras cuando la expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon salga al mercado el 22 de marzo de 2024.</p>
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
                                <img src="/public/img/fuerzas-temporales-icono.png" alt="Fuerzas temporales" />
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
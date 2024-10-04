import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";
import storeZustand from "../../../zustand";
import MaximizarImagen from "../../MaximizarImagen/MaximizarImagen";

export default function MejoraTuBaraja() {

    const { agrandarImagen, setAgrandarImagen } = storeZustand()

    return (
        <>

            <PresentacionInicio imagen={"/public/img/jcc-pokemon-tres.png"} />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p>5 de abril de 2024</p>
                        </div>
                        <div className="titulo">
                            <h2> Las mejores cartas competitivas de la expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Aprovecha al máximo los Pokémon del pasado y del futuro, así como al regreso de las cartas de AS TÁCTICO, para mejorar tu baraja y alcanzar la gloria. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">E</span>s el momento de impulsar tu juego con las cartas de la expansión <Link to="/card/expansions/temporal-forces" className="celeste">Escarlata y Púrpura-Fuerzas Temporales</Link> de JCC Pokémon. Este set trae nuevos e increíbles Pokémon al campo de combate, como los Pokémon del pasado y del futuro, que tienen ataques y habilidades de otro mundo. Y los combates suben de intensidad con el regreso de las cartas de AS TÁCTICO a JCC Pokémon, unas cartas con unos efectos tan poderosos que sólo podrás tener una en la baraja. ¿Qué esperas? Sigue leyendo para descubrir qué cartas de la expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon revolucionarán el metajuego.</p>
                        </div>
                        <div className="titulo-cartas">
                            <h3> Ferrotesta ex a la cabeza de todos </h3>
                            <div className="linea">  </div>
                        </div>
                        <div className="contenedor-una-carta">
                            <div className="img">
                                <img src="/public/img/carta-destacada-cuatro.png" alt="Ferrotesta ex" onClick={() => setAgrandarImagen('/public/img/carta-destacada-cuatro.png')} />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Ferrotesta ex te está llamando a filas, pues su habilidad Orden Cobalto añade 20 puntos de daño a los ataques de los Pokémon del futuro que no sean Ferrotesta ex. Si un Pokémon del futuro tiene un Tanque de Energía Potenciadora del Futuro unido y hay cuatro Ferrotesta ex en juego, ¡el daño hecho por sus ataques aumenta en 100 puntos! Los Pokémon del futuro tendrán un gran impacto en el juego. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Son muchos los Pokémon del futuro dispuestos a acompañar a Ferrotesta ex en combate, y todos ellos pueden aparecer en el presente gracias a la carta de Objeto Tecnorradar. Ferropalmas ex es una opción popular gracias a que el aumento del daño de Orden Cobalto hace posible conseguir dos cartas de Premio en cada turno con Gracias Amplificadas o Prensa de Brazo. De hecho, ¡se podría ganar la partida en tres turnos! Entre las nuevas opciones con las que nos encontramos están Ferropalmas y Ferrodada, que también están listos para ser leales sirvientes de Ferrotesta ex. Ferropalmas puede infligir grandes cantidades de daño con su ataque Palmas de Superaleación o darte algo de tiempo al dejar Paralizado al Pokémon Activo del rival con Onda Electrificante. Por su parte, si Ferrodada tiene unida una carta de Tanque de Energía Potenciadora del Futuro, dejará Fuera de Combate a un Ferropalmas ex o a un Chien-Pao ex de un solo golpe siempre que haya tres Ferrotesta ex en juego.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Cuesta un ojo de la cara que Ferropalmas ex pueda atacar con Gracias Amplificadas, así que vamos a necesitar incluir cartas como Generador Eléctrico, la nueva carta de AS TÁCTICO Cápsula Reinicio o el nuevo Miraidon para acelerar la Energía. Al ser un Pokémon del futuro, Miraidon puede sacar provecho a Orden Cobalto con su ataque Aceleración Máxima. Cargará a nuestros Pokémon para que ataquen y dejará abierto el camino hacia el Fuera de Combate en los Pokémon del rival. Une la nueva carta de Herramienta Pokémon Relevo Pesado antes de que tu Ferropalmas ex quede Fuera de Combate para quedarte con las cartas de Energía y asegurarte de que los ataques se sigan ejecutando sin descanso. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">El ataque Shotel Gemelas de Ferrotesta ex también puede ser un dolor de cabeza para tu rival, pues inflige 50 puntos de daño a dos de los Pokémon del rival e ignora todos los efectos en estos Pokémon. Si a esto se le une el Pokémon del futuro Ferropaladín ex para repartir contadores de daño con Partículas Taquiónicas, Shotel Gemelas puede sacar Fuera de Combate a Pokémon populares como Charmander, Comfey, Pidgey y Bidoof… ¡hasta a un Manaphy en juego!</p>
                        </div>
                        <div className="titulo-carta">
                            <h3> Bramaluna eclipsa a los rivales del pasado </h3>
                            <div className="linea"></div>
                        </div>
                        <div className="contenedor-una-carta">
                            <div className="img">
                                <img src="/public/img/bramaluna.png" alt="Bramaluna" />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Los Pokémon del pasado resurgen y Bramaluna lidera la carga con su ataque Venganza Emplumada, que inflige 70 puntos de daño al Pokémon Activo del rival, más 10 puntos adicionales por cada carta del pasado en tu pila de descartes. Para poder seguirles el ritmo a los Pokémon ex y Pokémon V, las barajas de Bramaluna deben incluir muchas cartas del pasado, así como formas de descartarlas rápidamente. La nueva Guía de Exploración es una carta de Partidario del pasado que busca y descarta recursos, algo similar a lo que logra Vasija Terrestre. La nueva carta de AS TÁCTICO Tambores del Despertar ayuda a robar estas cartas de la baraja, que también hacen buen equipo con Vitalidad de la Profesora Albora, que une cartas de Energía Básica de la pila de descartes a los Pokémon en juego.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Bramaluna se quedará atrás en la antigüedad si sólo basa su estrategia en las cartas del pasado para prepararse y buscar la victoria. Será esencial incluir tecnología más moderna como Nido Ball para buscar un Pokémon Básico de tu baraja, y Supercaña para recuperar cartas de Pokémon y de Energía Básica de la pila de descartes. Afortunadamente, como nos demuestran Ultra Ball, Botas de Expedición y Poképarada, acopiar recursos y descartar cartas del pasado no son opciones excluyentes.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Puede tomar tiempo enviar suficientes cartas del pasado a la pila de descartes para dejar Fuera de Combate a un Pokémon ex o Pokémon V con Venganza Emplumada. En los primeros turnos de la partida, deberíamos pensar en Koraidon para dejar Fuera de Combate a Pokémon con 180 PS o menos, o pedir ayuda a Melenaleteo para retrasar las tareas de preparación del rival con la habilidad Aleteo de Medianoche. Un punto que hay que tener en cuenta es que, cuando Melenaleteo está en el Puesto Activo, Chien-Pao ex no puede usar Frío Escalofriante para buscar cartas de Energía en la baraja y Comfey tampoco puede usar Selección Floral para robar cartas. Otros Pokémon del pasado que pueden resultar útiles en juego o en la pila de descartes son Reptalada, ya que es capaz de dejar Fuera de Combate a Ferropalmas ex de un solo golpe, y Colmilargo, que ofrece una forma alternativa de ganar la partida.</p>
                        </div>
                        <div className="titulo-carta">
                            <h3> Que no se te pase de largo Colmilargo </h3>
                            <div className="linea"></div>
                        </div>
                        <div className="contenedor-una-carta">
                            <div className="img">
                                <img src="/public/img/cartas-coleccionables-ocho.png" alt="colmilargo" />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Colmilargo llega con un ataque que lleva por nombre Derrumbe de Tierra y que puede descartar hasta 4 cartas de la baraja del rival. Ganar la partida asegurándote de que al rival no le quedan cartas en su baraja que robar al comenzar su turno es el objetivo de la popular baraja de control de Snorlax, lo que hace que los combates contra este Pokémon resulten largos y con periodos de escasa acción. Pero Colmilargo, como el tiempo, no espera a nadie.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Para acelerar la extinción de la baraja del rival con Derrumbe de Tierra, necesitamos jugar una carta de Partidario del pasado en tantos turnos como nos sea posible. Al igual que ocurre con la baraja multiatacante del pasado de Bramaluna, Guía de Exploración y Vitalidad de la Profesora Albora son las cartas de Partidario que permiten a Colmilargo arrasar con la baraja del contrincante. Recuerda que sólo puedes incluir cuatro copias de cada carta de Partidario, pero pueden recuperarse de la pila de descartes con Bloc de Amigos durante la partida.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Haz que dejar Fuera de Combate a Colmilargo sea lo más complicado posible para tu oponente usando cartas de Herramienta Pokémon como Amuleto de Bravura, Tanque de Energía Potenciadora del Pasado o la nueva carta de AS TÁCTICO Capa de Héroes para entregarle una cantidad enorme de PS. Otra estrategia es atrapar en el Puesto Activo a un Pokémon del rival que no esté listo para atacar. Capturador Contraataque o la nueva carta de AS TÁCTICO Capturador Supremo mueven a los Pokémon del contrincante al Puesto Activo, mientras que la nueva carta de Partidario Erin o la carta de Partidario Hermanas Tres Malezas pueden descartar cartas de Objeto que les permitan mover Pokémon a la Banca.</p>
                        </div>
                        <div className="titulo-carta">
                            <h3>Cinccino y su actuación especial</h3>
                            <div className="linea"></div>
                        </div>
                        <div className="contenedor-una-carta">
                            <div className="img">
                                <img src="/public/img/cinccino-coleccionable.png" alt="Cinccino" />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Cinccino demuestra que hay que tener muy en cuenta a los Pokémon contemporáneos. El Pokémon Estola no sólo tiene estilo, sino que además usa una estrategia clásica sobre el campo de combate: infligir grandes cantidades de daño a los Pokémon del rival. El daño que hace Giro Especial se incrementa en 70 puntos por cada Energía Especial unida a Cinccino, lo que quiere decir que sólo necesita unas pocas para conseguir Fueras de Combate de un solo golpe contra Pokémon ex y Pokémon V. Y estos Fueras de Combate se pueden lograr con mayor facilidad gracias a accesorios como Cinturón Colosal, Cinta Vitalidad, Cinturón Elección o Cinta Desafío para aumentar el daño. A eso se le llama vestirse para el éxito.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">La moda puede hacernos incorporar a la baraja de Cinccino a Pokémon como Wigglytuff o Hydreigon para acelerar la Energía Especial a los Pokémon en juego. Pero donde Cinccino queda como anillo al dedo es en el arquetipo de Lugia V-ASTRO. La habilidad Turbo Primigenio de Archeops nos permite buscar en nuestra baraja dos cartas de Energía Especial cada turno y unirlas a un Pokémon en juego. Si usamos esta vía, Cinccino podría tener una cantidad ingente de Energía Especial ya en el segundo turno. Dejar Fuera de Combate a Pokémon que entregan más de una carta de Premio con un Pokémon que sólo entrega una es de las mejores maneras de dar una ligera ventaja a la baraja de Lugia V-ASTRO en la lucha por las cartas de Premio.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Existen otras cuantas cartas de la expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon que harán que Lugia V-ASTRO sea tendencia esta temporada. La carta de Master Ball es un clásico que mejora las probabilidades de sacarle el máximo partido a Astro Invocación al comienzo de la partida, pues reduce la necesidad de depender del lanzamiento de moneda de Aroma Embriagador para encontrar a los Pokémon que queremos. Como la Energía Especial es fácil de encontrar con Turbo Primigenio, no te debe sorprender ver la nueva carta de Energía Neblina en las barajas de Lugia V-ASTRO, ya que protege a los Pokémon de los efectos de los ataques, como los contadores de daño que coloca Mina Perdida de Sableye o los Fueras de Combate instantáneos de Excavación Frenética de Bramaluna ex o Astro Réquiem de Giratina V-ASTRO.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Las barajas de Lugia V-ASTRO con Archeops y Cinccino ya están alcanzando nuevas alturas, y una de ellas se llevó la victoria en la categoría Máster en la Liga de Campeones de Fukuoka (Japón) a comienzos de año... ¡en un torneo con 2,600 jugadores! Los fans de Cinccino esperan que esta carta tenga algo más que un par de minutos de fama.</p>
                        </div>
                        <div className="titulo-carta">
                            <h3>Captura al Capturador Supremo</h3>
                            <div className="linea"></div>
                        </div>
                        <div className="contenedor-una-carta">
                            <div className="img">
                                <img src="/public/img/capturador-supremo.png" alt="Capturador Supremo" />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> El regreso de las cartas de AS TÁCTICO al Juego de Cartas Coleccionables Pokémon es todo un acontecimiento, pero ninguna de ellas es tan vistosa como Capturador Supremo. Esta carta de Objeto tiene el mismo efecto que Guzmán, una popular carta de Partidario que contribuyó al éxito de muchas barajas importantes. Cuando un rival mostraba la carta de Guzmán al buscar en su baraja, solía significar que te tenían acorralado. ¿Se repetirá la historia? </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Lo más destacado es que Capturador Supremo complementa la estrategia de casi todas las barajas. Su principal uso es el de mover uno de los Pokémon clave del rival al Puesto Activo para poder dejarlo Fuera de Combate. Sin embargo, Capturador Supremo también se puede usar para atrapar a uno de los Pokémon del contrincante en el Puesto Activo mientras Snorlax y Colmilargo descartan las cartas de su baraja, o Sableye y Ferropaladín ex siembran la Banca de contadores de daño.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Al contrario de lo que ocurre con Capturador Contraataque, Capturador Supremo se puede utilizar en cualquier momento de la partida, aunque quien use esta carta deberá cambiar también su Pokémon Activo por un Pokémon de su Banca. Esto ayuda a Pokémon como Charizard Radiante y Miraidon ex para atacar en turnos consecutivos. Aunque también podríamos tener problemas si un Pokémon se ve forzado a subir al Puesto Activo cuando no está listo para el combate. ¡Que no te tomen desprevenido!</p>
                        </div>
                        <div className="linea-delimitante"></div>
                        <div className="parrafo">
                            <p className="texto-normal">Esto es sólo una muestra de las impresionantes cartas que encontrarás en la nueva expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon. Con más 160 cartas que coleccionar, más de una decena de nuevos Pokémon ex y siete cartas de AS TÁCTICO, hay un montón de fascinantes combinaciones y estrategias que explorar. ¿Te atreverás a conquistar la historia?</p>
                        </div>

                        <div className="acerca-de-la-escritora">
                            <div className="boton">
                                <p> Acerca de la escritoria </p>
                            </div>
                            <div className="contenido">
                                <div className="img">
                                    <img src="/public/img/ellis.jpg" alt="Ellis Longhurst" />
                                </div>
                                <div className="texto">
                                    <div className="text">
                                        <h5> Ellis Longhurst </h5>
                                        <p>Ellis Longhurst es una escritora colaboradora de Pokemon.com. Compitió en torneos de alto nivel de JCC Pokémon desde 2006 y ha escrito contenido para la comunidad Pokémon desde 2011. Ahora, Ellis aporta un toque australiano a las retransmisiones de Play! Pokémon en los Campeonatos Internacionales y el Campeonato Mundial.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="boton-abajo">
                            <Link to="/juego-de-cartas-coleccionables">
                                <button> Juego de Cartas Coleccionables </button>
                            </Link>
                        </div>


                        {/* {agrandarImagen &&
                            <MaximizarImagen imagen={agrandarImagen} />
                        } */}
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
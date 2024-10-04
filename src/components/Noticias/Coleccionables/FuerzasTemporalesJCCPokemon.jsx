import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function FuerzasTemporalesJCCPokemon() {
    return (
        <>

            <PresentacionInicio imagen="/img/carta-tres.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 14 de marzo de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Desata el draconiano poder del pasado o apuesta por el futuro con las barajas de Electrofuria ex y de Ferrotesta ex en JCC Pokémon Live. </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Revisa los reglamentos mas recientes y preparate para las compotencias oficiales. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">C</span>onsigue mucho más en <span className="texto-celeste">JCC Pokémon Live</span> con el pase de combate del juego. Con este pase de combate, podrás completar misiones para conseguir experiencia y desbloquear nuevos niveles jugando encuentros competitivos o casuales. Cada pase de combate está disponible hasta el lanzamiento de una nueva expansión.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Comienza tu aventura en el pase de combate de <span className="texto-celeste">Escarlata y Púrpura-Fuerzas Temporales</span> de JCC Pokémon con una nueva baraja con Electrofuria ex como protagonista. ¡Avanza en el pase de combate para conseguir paquetes de mejora, créditos, una caja de coleccionistas y 16 cartas adicionales para añadir a tu nueva baraja!</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Además, también puedes canjear cristales a cambio de un pase prémium para desbloquear otra baraja más, esta vez con Ferrotesta ex como protagonista. Los niveles del pase prémium ofrecen toda una variedad de artículos centrados en Electrofuria ex, paquetes de mejora, monedas, otra caja de coleccionistas y cristales, junto con 16 cartas holográficas adicionales para mejorar tu baraja de Ferrotesta ex. El pase prémium + te proporciona una ventaja de 15 niveles, además de los artículos ofrecidos con el pase prémium.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Descubre cómo jugar y mejorar estas poderosas barajas en JCC Pokémon Live. </p>
                        </div>
                        <div className="contenedor-de-titulo">
                            <div className="titulo" id="charizard">
                                <h3> Electrofuria ex </h3>
                            </div>
                            <div className="linea-separadora"> </div>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-123">
                                <div className="im-im" >
                                    <img src="/img/electrofuriaex.png" alt="Electrofuria ex" />
                                </div>
                            </Link>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> <strong>Cartas de Pokemon: 9</strong> </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}> 2 Garganacl PAR 104 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}> 1 Naclstack PAL 122 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}>3 Nacli PAR 102 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Greninja Radiante ASR 046 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <strong>Cartas de Entrenador: 41</strong>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}>4 Damián SVI 166</span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 Órdenes de Jefes (Ghechis) PAL 172 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 e-Nigma PAL 185 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 Poképarada PGO 068 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Vasija Terrestre PAR 163 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Pegatinas de Energía MEW 159 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Piqueta Atrevida ASR 145</p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Nido Ball SVI 181 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Botas de Expedición ASR 156 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}> 3 Caramelo Raro SVI 191 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}> 3 Ultra Ball SVI 196 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}> 2 Cambio SVI 194 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Supercaña PAL 188 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 Tanque de Energía Potenciadora del Pasado PAR 159 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <strong>Cartas de Energía: 10</strong>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 7 Energía Fighting Básica SVE 006 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 3 Energía Lightning Básica SVE 004 </p>
                                </div>
                            </div>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Estrategia inicial </h3>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">El ataque Bramido Atronador de Electrofuria ex puede infligir un daño enorme si descartas la Energía Básica unida a tus Pokémon... ¡incluso de los que están en Banca!</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Luego, recupera cartas de Energía Lucha Básica de tu pila de descartes con la habilidad Halita Vigorizante de <span className="texto-celeste">Garganacl</span>, ¡que también cura al Pokémon al que haya unido Energía y permite a Electrofuria ex utilizar Bramido Atronador de nuevo en tu próximo turno! Con un poco de suerte, <span className="texto-celeste">Pegatinas de Energía</span> también podrá acelerar una carta de Energía de tu pila de descartes, pero no olvides que sólo puedes unirla a un Pokémon en Banca.
                                ¡Y no tengas miedo de utilizar <span className="texto-celeste">Poképarada</span>! Aunque descarta las 3 cartas superiores de la baraja, cualquier carta de Objeto pasa a tu mano, y las cartas de Energía se pueden reciclar con Garganacl o Pegatinas de Energía.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Para conseguir las cartas que te permiten unir más cartas de Energía, tendrás que excavar en tu baraja, y <span className="texto-celeste">Piqueta Atrevida</span> es el objeto perfecto para ello, ya que permite ver la carta superior de la baraja y, si se trata de una carta de Energía Lucha Básica, la une a 1 de tus Pokémon en Banca. Si no encuentras una Energía, de todos modos te quedas con esa carta. Un buen par de <span className="texto-celeste">Botas de Expedición</span> también puede permitirte explorar la carta superior de tu baraja y descartarla si lo deseas. Después, podrás robar una carta.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Alcanza el nivel 16 para desbloquear las cartas indicadas aquí:</p>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Cartas a recibir </h3>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 3 Pelarena ex PAR 108 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Mew ex MEW 151 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Electrofuria ex TEF 123 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Squawkabilly ex PAL 169 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Vitalidad de la Profesora Albora PAR 170 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Noa SVI 183 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p>2 Carrito de Cambio ASR 154</p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Bloc de Amigos SVI 182 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Capturador Supremo TEF 157 </p>
                                </div>
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Muchas de estas cartas se pueden añadir a tu baraja para proporcionar más potencia y flexibilidad, aunque, para añadir cartas, primero debemos sacar otras. Destacamos algunas cartas en la lista de “baraja básica” que puedes cambiar por las nuevas, ¡aunque tienes total libertad para experimentar!</p>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Estrategia mejorada </h3>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">En lugar de depender de evolucionar a Garganacl, de Fase 2, intenta usar a <span className="texto-celeste">Palarena ex</span>, un Pokémon Básico cuya habilidad Absorción Magnética le permite unirse 1 carta de Energía Lucha Básica a sí mismo en cada turno. Pero recuerda que sólo puedes utilizar esta habilidad si a tu rival le quedan 4 cartas de Premio o menos.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="texto-celeste">Vitalidad de la Profesora Albora</span> es la nueva carta de Partidario destacada en esta baraja: ¡no sólo une 1 carta de Energía Básica de tu pila de descartes a 2 de tus Pokémon del pasado, sino que también te permite robar 3 cartas de paso! <span className="texto-celeste">Noa</span> es otra carta de Partidario que puede ayudarte cuando te encuentres en apuros, pues puede devolver a tu mano a un Pokémon atrapado en el Puesto Activo, retirar a un Pokémon que esté cerca de quedar Fuera de Combate y mucho más. Aunque únicamente funciona con Pokémon Básicos, tu lista actualizada ahora está compuesta exclusivamente por Pokémon Básicos.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Y hablando de Pokémon Básicos, <span className="texto-celeste">Mew ex</span> y <span className="texto-celeste">Squawkabilly ex</span> pueden ayudarte a excavar aún más en tu baraja con sus habilidades. Mew ex es especialmente útil gracias a su retirada gratuita, lo que permite ponerlo en juego fácilmente cuando uno de tus Pokémon queda Fuera de Combate y sacar el máximo provecho a todas las cartas de Herramienta Pokémon que se unen a tus Pokémon en Banca.</p>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Se acerca el final </h3>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡Alcanza el nivel 50 para desbloquear una versión Rara Ilustración Especial de Electrofuria ex! Podrás incluir esta carta en tu baraja para acabar con tus contrincantes a velocidades inalcanzables.</p>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-208">
                                <div className="im-img">
                                    <img src="/img/electrofuria.png" alt="Electrofuria ex" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Ahora que dominas el increíble poder de Electrofuria ex, es hora de ver lo que te depara el futuro (¡y, afortunadamente, puedes descubrirlo ahora mismo!).</p>
                        </div>
                        <div className="contenedor-de-titulo">
                            <div className="titulo" id="charizard">
                                <h3> Ferrotesta ex </h3>
                            </div>
                            <div className="linea-separadora"> </div>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-81">
                                <div className="im-im" >
                                    <img src="/img/ferrotestaex.png" alt="Ferrotesta ex " />
                                </div>
                            </Link>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> <strong>Cartas de Pokemon: 13</strong> </p>
                                </div>
                            </div>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Baraja basica </h3>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}> 2 Ferrotesta ex TEF 081 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}> 4 Ferropúas TEF 062 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}>4 Ferropaladín TEF 079 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 3 Miraidon TEF 121 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <strong>Cartas de Entrenador: 32</strong>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}>4 Ciberentusiasta Descifracódigos TEF 145</span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Investigación de Profesores (Profesor Turo) SVI 190 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p>2 Órdenes de Jefes (Ghechis) PAL 172 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 e-Nigma PAL 185 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Generador Eléctrico SVI 170 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Carrito de Cambio ASR 154 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Tecnorradar PAR 180</p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 Nido Ball SVI 181 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <span style={{ background: 'yellow' }}>2 Supercaña PAL 188 </span>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Tanque de Energía Potenciadora del Futuro PAR 164 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <strong>Cartas de Energía: 15</strong>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 11 Energía Lightning Básica SVE 004 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 4 Energía Psychic Básica SVE 005 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 Tanque de Energía Potenciadora del Pasado PAR 159 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <strong>Cartas de Energía: 10</strong>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 7 Energía Fighting Básica SVE 006 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 3 Energía Lightning Básica SVE 004 </p>
                                </div>
                            </div>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Estrategia principal </h3>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"></p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Muchos de tus Pokémon del futuro tienen un alto costo de ataque. Por suerte, Miraidon puede ayudar a cargarlos con su ataque Aceleración Máxima a cambio de una sola Energía, además de infligir 40 puntos de daño a la vez. La habilidad Orden Cobalto de Ferrotesta ex puede aumentar el daño aún más, lo que hace que esta estrategia de ataque sea una pesadilla para tu rival. Además, puedes potenciarla todavía más con <span className="texto-celeste">Tanque de Energía Potenciadora del Futuro</span>, que no sólo añade 20 puntos de daño adicionales, ¡sino que también permite que el Pokémon al que esté unida esta carta se retire sin costo alguno!</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Afortunadamente, existe una forma sencilla de preparar tanto a <span className="texto-celeste">Generador Eléctrico</span> como a Ferropúas. Ciberentusiasta Descifracódigos te permite buscar 2 cartas cualesquiera de tu baraja para después ponerlas en la parte superior en el orden que desees, lo que te ayudará a predecir mejor esos efectos, que de otra forma resultarían completamente aleatorios.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Cuando alcances el nivel 14, conseguirás las siguientes cartas:</p>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Cartas a recibir </h3>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 3 Ferrotesta ex TEF 206 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 3 Ferropalmas ex PAR 248 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 2 Ferropaladín ex PAR 249159 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p>4 Ciberentusiasta Descifracódigos TEF 198</p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-oscuro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p>2 Aspiradora Perdida CRZ 135 </p>
                                </div>
                            </div>
                        </div>
                        <div className="lista-estilo-tabla cont-claro">
                            <div className="contenedor-carta">
                                <div className="carta">
                                    <p> 1 Cápsula Reinicio TEF 158 </p>
                                </div>
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Las cartas destacadas en la lista de “baraja básica” son sugerencias de cartas que se pueden reemplazar por las nuevas, ¡aunque tienes total libertad para experimentar!</p>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Estrategia mejorada </h3>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Con tu lista mejorada, tu estrategia resulta aún más fácil de ejecutar. Utiliza Gracias Amplificadas de <span className="texto-celeste">Ferropalmas ex</span> para conseguir un Fuera de Combate, y así obtener una carta de Premio adicional. Aunque este ataque técnicamente sólo hace 120 puntos de daño, Ferrotesta ex y Tanque de Energía Potenciadora del Futuro aumentan esta cifra hasta 220 puntos de daño si tienes todas estas cartas en juego, lo cual es más que suficiente para dejar Fuera de Combate a algunos Pokémon V y Pokémon ex Básicos. Por si esto fuera poco, puedes lograr Fueras de Combate aún más fácilmente con la ayuda de <span className="texto-celeste">Ferropaladín ex</span> que, cuando pasa al Puesto Activo, coloca 2 contadores de daño en un Pokémon de tu rival gracias a su habilidad Partículas Taquiónicas.</p>
                        </div>
                        <div className="tit-simple">
                            <h3 className="titulo-simple"> Una presencia dominante </h3>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Si logras alcanzar el nivel 50 del pase prémium, ¡puedes obtener un cuarto ejemplar de Ferrotesta ex de rareza Rara Ilustración Especial! Añádelo a tu baraja para comenzar tu reinado con estilo.</p>
                        </div>
                        <div className="carta-encapsulada">
                            <Link to="/card/detail/sv5-206">
                                <div className="im-im">
                                    <img src="/img/ferrotestaexd.png" alt="Ferrotesta ex" />
                                </div>
                            </Link>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡Que disfruten de sus nuevas barajas, Entrenadores!</p>
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
import { Link } from "react-router-dom";
import "./WebsiteCards.scss";
import {
    MdOutlineArrowForwardIos,
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowRight
} from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import JugarAhoraMobile from "./ComponentesMobile/JugarAhoraMobile";
import NovedadesExpansion from "./ComponentesMobile/NovedadesExpansion";
import ProductosDestacados from "./ComponentesMobile/ProductosDestacados";
import GaleriaCartas from "./ComponentesMobile/GaleriaCartasMobile";
import BiCarousel from "./ComponentesMobile/CarouselCartasMobile/BiCarousel.jsx";
import MonoCarousel from "./ComponentesMobile/CarouselCartasMobile/MonoCarousel.jsx";
import HeaderCard from "./ComponentesMobile/HeaderCard/HeaderCard.jsx";
import CarouselDeCartas from "./ComponentesMobile/MenuCategorias/CarouselDeCartas.jsx";
import FooterWebsiteCards from "./ComponentesMobile/FooterWebsiteCards/FooterWebsiteCards.jsx";
import MaximizarImagen from "../MaximizarImagen/MaximizarImagen.jsx";
import storeZustand from "../../zustand.jsx";

export default function WebsiteCards() {
    const { agrandarImagen, setAgrandarImagen } = storeZustand()

    return (
        <div className="website-cards">

            <HeaderCard />

            <CarouselDeCartas />

            {agrandarImagen && <MaximizarImagen imagen={agrandarImagen} />}

            <div className="contenedor-cartas-destacadas" id="cartasDestacadas">
                <div className="contenedor">
                    <div className="titulo-subtitulo">
                        <div className="titulo">
                            <h3> CARTAS DESTACADAS  </h3>
                        </div>
                        <div className="subtitulo">
                            <p>Amplía una carta para verla más de cerca haciendo clic sobre ella, ¡y descubre consejos útiles para usarla en los combates!</p>
                        </div>
                    </div>
                    <div className="contenedor-imagenes contenedor-imagenes-titular" style={{ display: "none" }}>
                        <div className="contenedor-de-cartas-destacadas">
                            <div className="contenedor-de-carta">
                                <div className="img">
                                    <img src="/public/img/carta-destacada-uno.png" alt="Ondulagua ex" onClick={() => setAgrandarImagen('/public/img/carta-destacada-uno.png')} />
                                </div>
                                <div className="boton">
                                    <div className="contenedor-boton">
                                        <FaMagnifyingGlass className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-de-cartas-destacadas">
                            <div className="contenedor-de-carta">
                                <div className="img">
                                    <img src="/public/img/carta-destacada-dos.png" alt="Ferroverdor ex" onClick={() => setAgrandarImagen('/public/img/carta-destacada-dos.png')} />
                                </div>
                                <div className="boton">
                                    <div className="contenedor-boton">
                                        <FaMagnifyingGlass className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-de-cartas-destacadas">
                            <div className="contenedor-de-carta">
                                <div className="img">
                                    <img src="/public/img/carta-destacada-tres.png" alt="Electrofuria ex" onClick={() => setAgrandarImagen('/public/img/carta-destacada-tres.png')} />
                                </div>
                                <div className="boton">
                                    <div className="contenedor-boton">
                                        <FaMagnifyingGlass className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-de-cartas-destacadas">
                            <div className="contenedor-de-carta">
                                <div className="img">
                                    <img src="/public/img/carta-destacada-cuatro.png" alt="Ferrotesta ex" onClick={() => setAgrandarImagen('/public/img/carta-destacada-cuatro.png')} />
                                </div>
                                <div className="boton">
                                    <div className="contenedor-boton">
                                        <FaMagnifyingGlass className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dos-cartas-carousel" style={{ display: 'none' }}>
                        <BiCarousel />
                    </div>

                    <div className="una-carta-carousel" style={{ display: 'none' }}>
                        <MonoCarousel />
                    </div>
                </div>
            </div>

            <div className="galeria-de-cartas">
                <div className="contenedor">
                    <div className="parte-superior p-s-uno">
                        <div className="img-lateral img-lateral-inferior">
                            <img src="/public/img/galeria-borde-superior-izquierdo.png" alt="Borde superior izquierdo" />
                        </div>
                        <div className="acomodador-borde">
                            <div className="img" style={{ backgroundColor: "white" }}>
                                <img src="/public/img/borde-galeria.png" alt="Borde" style={{ rotate: "180deg" }} />
                            </div>
                        </div>
                        <div className="img-lateral img-lateral-inferior">
                            <img src="/public/img/galeria-borde-superior-derecho.png" alt=" Borde inferior derecho" />
                        </div>
                    </div>
                    <div className="contenedor">
                        <div className="contenido-galeria">
                            <div className="pack-cartas">
                                <div className="img rotacion-uno">
                                    <img src="/public/img/galeria-farigiraf.png" alt="Carta de Farigiraf ex" onClick={() => setAgrandarImagen('/public/img/galeria-farigiraf.png')} />
                                </div>
                                <div className="img rotacion-dos">
                                    <img src="/public/img/galeria-morti.png" alt="Carta de Conviccion de Morti" onClick={() => setAgrandarImagen('/public/img/galeria-morti.png')} />
                                </div>
                            </div>
                            <div className="contenido">
                                <div className="titulo">
                                    <h3>GALERÍA DE CARTAS</h3>
                                </div>
                                <div className="subtitulo">
                                    <h4>Dale un vistazo a la expansion Escarlata y Purpura-Fuerza Temporales de JCC Pokemon.</h4>
                                </div>
                                <div className="boton">
                                    <Link to="/card/galeria/fuerzas-temporales">
                                        <div className="boton-contenedor">
                                            <button> VE LA GALERIA DE CARTAS </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="pack-cartas">
                                <div className="img rotacion-tres">
                                    <img src="/public/img/galeria-colagrito.png" alt="Carta de Colagrito" onClick={() => setAgrandarImagen('/public/img/galeria-colagrito.png')} />
                                </div>
                                <div className="img rotacion-cuatro">
                                    <img src="/public/img/galeria-relicanth.png" alt="Carta de Relicanth" onClick={() => setAgrandarImagen('/public/img/galeria-relicanth.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <GaleriaCartas />
                    <div className="parte-superior p-s-dos">
                        <div className="img-lateral">
                            <img src="/public/img/galeria-borde-inferior-izquierdo.png" alt=" Borde inferior derecho" />
                        </div>
                        <div className="acomodador-borde">
                            <div className="img">
                                <img src="/public/img/borde-galeria.png" alt="Borde" />
                            </div>
                        </div>
                        <div className="img-lateral">
                            <img src="/public/img/galeria-borde-superior-izquierdo.png" alt="Borde superior izquierdo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="productos-destacados" id="destacados">
                <div className="contenedor">
                    <div className="titulo">
                        <h2> PRODUCTOS DESTACADOS </h2>
                    </div>
                    <div className="contenedor-de-cards">
                        <div className="card">
                            <div className="imagenes">
                                <div className="img-ilustrativa">
                                    <img src="/public/img/borde-violeta.png" alt="Imagen ilustrativa violeta" />
                                </div>
                                <div className="img-producto">
                                    <img src="/public/img/producto-destacado-uno.png" alt="Caja de Entrenador Elite" />
                                </div>
                                <div className="img-ilustrativa d-flex justify-content-end">
                                    <img src="/public/img/borde-bordo.png" alt="Imagen ilustrativa bordo" />
                                </div>
                            </div>
                            <div className="contenido">
                                <div className="informacion">
                                    <div className="descripcion">
                                        <h3> Caja de Entrenador Elite de Escarlata y Purpura-Fuerzas Temporales JCC Pokemon </h3>
                                    </div>
                                </div>
                                <div className="informacion-extra">
                                    <div className="texto">
                                        <span> ENCONTRAR UNA TIENDA</span>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineArrowForwardIos className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imagenes">
                                <div className="img-ilustrativa">
                                    <img src="/public/img/borde-violeta.png" alt="Imagen ilustrativa violeta" />
                                </div>
                                <div className="img-producto">
                                    <img src="/public/img/producto-destacado-dos.png" alt="Caja de Combina y Combate" />
                                </div>
                                <div className="img-ilustrativa d-flex justify-content-end">
                                    <img src="/public/img/borde-bordo.png" alt="Imagen ilustrativa bordo" />
                                </div>
                            </div>
                            <div className="contenido">
                                <div className="informacion">
                                    <div className="descripcion">
                                        <h3> Caja de Combina y Combate de Escarlata y Purpura-Fuerzas temporales de JCC Pokemon </h3>
                                    </div>
                                </div>
                                <div className="informacion-extra">
                                    <div className="texto">
                                        <span> ENCONTRAR UNA TIENDA</span>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineArrowForwardIos className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imagenes">
                                <div className="img-ilustrativa">
                                    <img src="/public/img/borde-violeta.png" alt="Imagen ilustrativa violeta" />
                                </div>
                                <div className="img-producto">
                                    <img src="/public/img/producto-destacado-tres.png" alt="Caja de paquetes de mejora" />
                                </div>
                                <div className="img-ilustrativa d-flex justify-content-end">
                                    <img src="/public/img/borde-bordo.png" alt="Imagen ilustrativa bordo" />
                                </div>
                            </div>
                            <div className="contenido">
                                <div className="informacion">
                                    <div className="descripcion">
                                        <h3> Lote de paquetes de mejora de Escarlata y Purpura-Fuerzas Temporales de JCC Pokemon </h3>
                                    </div>
                                </div>
                                <div className="informacion-extra">
                                    <div className="texto">
                                        <span> ENCONTRAR UNA TIENDA</span>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineArrowForwardIos className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imagenes">
                                <div className="img-ilustrativa">
                                    <img src="/public/img/borde-violeta.png" alt="Imagen ilustrativa violeta" />
                                </div>
                                <div className="img-producto">
                                    <img src="/public/img/producto-destacado-cuatro.png" alt="Caja de Expositor de paquetes" />
                                </div>
                                <div className="img-ilustrativa d-flex justify-content-end">
                                    <img src="/public/img/borde-bordo.png" alt="Imagen ilustrativa bordo" />
                                </div>
                            </div>
                            <div className="contenido">
                                <div className="informacion">
                                    <div className="descripcion">
                                        <h3> Expositor de paquetes de mejora de Escarlata y Pupura-Fuerzas Temporales de JCC Pokemon </h3>
                                    </div>
                                </div>
                                <div className="informacion-extra">
                                    <div className="texto">
                                        <span> ENCONTRAR UNA TIENDA</span>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineArrowForwardIos className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imagenes">
                                <div className="img-ilustrativa">
                                    <img src="/public/img/borde-violeta.png" alt="Imagen ilustrativa violeta" />
                                </div>
                                <div className="img-producto">
                                    <img src="/public/img/producto-destacado-cinco.png" alt="Caja de Entrenador Elite" />
                                </div>
                                <div className="img-ilustrativa d-flex justify-content-end">
                                    <img src="/public/img/borde-bordo.png" alt="Imagen ilustrativa bordo" />
                                </div>
                            </div>
                            <div className="contenido">
                                <div className="informacion">
                                    <div className="descripcion">
                                        <h3> Pauqete de mejora en fgunda de Escrlata y Purpura-Fuerzas Temporales de JCC Pokemon </h3>
                                    </div>
                                </div>
                                <div className="informacion-extra">
                                    <div className="texto">
                                        <span> ENCONTRAR UNA TIENDA</span>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineArrowForwardIos className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductosDestacados />
                </div>
            </div>

            <div className="galeria-de-cartas">
                <div className="contenedor">
                    <div className="parte-superior p-s-uno parte-superior-borde-novedades" style={{ display: "none" }}>
                        <div className="img-lateral img-lateral-inferior">
                            <img src="/public/img/galeria-borde-superior-izquierdo.png" alt="Borde superior izquierdo" />
                        </div>
                        <div className="acomodador-borde">
                            <div className="img" style={{ backgroundColor: "white" }}>
                                <img src="/public/img/borde-galeria.png" alt="Borde" style={{ rotate: "180deg" }} />
                            </div>
                        </div>
                        <div className="img-lateral img-lateral-inferior">
                            <img src="/public/img/galeria-borde-superior-derecho.png" alt=" Borde inferior derecho" />
                        </div>
                    </div>

                    <div className="novedades-expansion" style={{ display: "block" }}>
                        <div className="contenedor">

                            <div className="titulo">
                                <div className="titu" id="novedades">
                                    <h2> NOVEDADES DE LA EXPANSIÓN </h2>
                                </div>
                                <div className="img">
                                    <svg class="temporal-forces-divider" width="374px" height="36px" viewBox="0 0 374 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M167,14.7560572 C167,13.786224 166.242688,13 165.308518,13 L68.9337163,13 C44.4185625,13 27.8291134,27.9041238 3.6676744,28.5691186 C2.74370796,28.5950122 2,29.3612275 2,30.3192909 L2,32.2365947 C2,33.2158438 2.77545159,34.0173686 3.71869095,33.9997138 C27.8529212,33.5324519 44.435568,23.3809817 68.9337163,23.3809817 L165.308518,23.3809817 C166.242688,23.3809817 167,22.5935807 167,21.6237475 L167,14.7560572 Z M207,14.7560572 C207,13.786224 207.757312,13 208.691482,13 L305.066284,13 C329.581438,13 346.170887,27.9041238 370.332326,28.5691186 C371.256292,28.5950122 372,29.3612275 372,30.3192909 L372,32.2365947 C372,33.2158438 371.224548,34.0173686 370.281309,33.9997138 C346.147079,33.5324519 329.564432,23.3809817 305.066284,23.3809817 L208.691482,23.3809817 C207.757312,23.3809817 207,22.5935807 207,21.6237475 L207,14.7560572 Z" fill="#4EABB3"></path><path d="M181.1149,19 C181.744996,21.7395596 184.13195,23.7851177 186.999259,23.7851177 C189.866568,23.7851177 192.255004,21.7395596 192.8851,19 L202,19 C201.306153,26.8466211 194.864344,33 186.999259,33 C179.135656,33 172.693847,26.8466211 172,19 Z M187,14 C189.21,14 191,15.7916667 191,18 C191,20.2083333 189.21,22 187,22 C184.791667,22 183,20.2083333 183,18 C183,15.7916667 184.791667,14 187,14 Z M187,3 C194.866251,3 201.309015,9.15489749 202,17 L192.886714,17 C192.256524,14.2604404 189.867734,12.2148823 187,12.2148823 C184.132266,12.2148823 181.743476,14.2604404 181.113286,17 L172,17 C172.690985,9.15489749 179.133749,3 187,3 Z" fill="#00435A"></path></g></svg>
                                </div>
                            </div>

                            <div className="contenedor-descripcion-cartas">
                                <div className="descripcion">
                                    <div className="titulo">
                                        <h3> EL REGRESO DE LAS CARTAS DE AS TÁCTICO </h3>
                                    </div>
                                    <div className="desc">
                                        <p> ¡Las cartas de AS TÁCTICO volvieron más vibrantes que nunca! Esta poderosa clase de cartas de Entrenador se lanzó al mercado por primera vez en 2012 como parte de la expansión Negro y Blanco-Fronteras Cruzadas, y siguen jugándose hoy en día en el formato Expandido. Ahora, los Entrenadores podrán portar todo el poder de las flamantes cartas de AS TÁCTICO, que pueden cambiar por completo el rumbo de la partida. Disfruta de la nueva rareza AS TÁCTICO, de cartas de AS TÁCTICO del pasado y del futuro,
                                            e incluso del regreso de una carta de AS TÁCTICO clásica: Master Ball. Sin embargo, estas potentes cartas vienen con un pequeño inconveniente: no puedes incluir más de una carta de AS TÁCTICO en tu baraja. </p>
                                    </div>
                                </div>
                                <div className="cartas">
                                    <div className="img">
                                        <img src="/public/img/tambores-del-despertar.png" alt="Tambores del Despertar" onClick={() => setAgrandarImagen("/public/img/tambores-del-despertar.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/capsula-reinicio.png" alt="Capsula Reinicio" onClick={() => setAgrandarImagen("/public/img/capsula-reinicio.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/capturador-supremo.png" alt="Capturador Supremo" onClick={() => setAgrandarImagen("/public/img/capturador-supremo.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/master-ball.png" alt="Master Ball" onClick={() => setAgrandarImagen("/public/img/master-ball.png")} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor-descripcion-cartas">
                                <div className="cartas">
                                    <div className="img">
                                        <img src="/public/img/flamariete-ex.png" alt="Flamariete ex" onClick={() => setAgrandarImagen("/public/img/flamariete-ex.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/flamariete-ex-dos.png" alt="Flamariete ex" onClick={() => setAgrandarImagen("/public/img/flamariete-ex-dos.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/ferromole-ex.png" alt="Ferromole ex" onClick={() => setAgrandarImagen("/public/img/ferromole-ex.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/ferromole-ex-dos.png" alt="Ferromole ex" onClick={() => setAgrandarImagen("/public/img/ferromole-ex-dos.png")} />
                                    </div>
                                </div>
                                <div className="descripcion">
                                    <div className="titulo">
                                        <h3> LLEGAN MÁS POKÉMON PARADOJA </h3>
                                    </div>
                                    <div className="desc">
                                        <p> Estos Pokémon aparecieron por primera vez en la última actualización de los videojuegos Pokémon Scarlet y Pokémon Violet, ¡y ahora llegaron listos para hacer al mundo de JCC Pokémon arder en llamas y retumbar con estruendo! Flamariete ex y Ferromole ex debutan en JCC Pokémon en forma de Pokémon ex junto al resto de los Pokémon Paradoja. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor-descripcion-cartas">
                                <div className="descripcion">
                                    <div className="titulo">
                                        <h3> POKÉMON REUNIDOS EN LAS CARTAS DE RAREZA RARA ILUSTRACIÓN </h3>
                                    </div>
                                    <div className="desc">
                                        <p> ¿Alguna vez has imaginado cómo podrían interactuar los Pokémon entre ellos fuera de los combates? Estas cartas de rareza Rara Ilustración muestran justamente eso. Gastly y un gran grupo de Pokémon de tipo Fantasma recorren una ciudad oscura, Grotle disfruta de un paseo por el campo con Marill y Starly, y Minccino y Cinccino reciben ayuda para hacer la limpieza. </p>
                                    </div>
                                </div>
                                <div className="cartas">
                                    <div className="img">
                                        <img src="/public/img/gastly.png" alt="Gastly" onClick={() => setAgrandarImagen("/public/img/gastly.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/grotle.png" alt="Grotle" onClick={() => setAgrandarImagen("/public/img/grotle.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/minccino-ex.png" alt="Minccino" onClick={() => setAgrandarImagen("/public/img/minccino-ex.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/cinccino.png" alt="Cinccino" onClick={() => setAgrandarImagen("/public/img/cinccino.png")} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor-descripcion-cartas">
                                <div className="cartas">
                                    <div className="img">
                                        <img src="/public/img/miraidon-carta.png" alt="Miraidon" onClick={() => setAgrandarImagen("/public/img/miraidon-carta.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/koraidon-cart.png" alt="Koraidon" onClick={() => setAgrandarImagen("/public/img/koraidon-cart.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/colmilargo.png" alt="Colmilargo" onClick={() => setAgrandarImagen("/public/img/colmilargo.png")} />
                                    </div>
                                    <div className="img">
                                        <img src="/public/img/ferroverdor.png" alt="Ferroverdor ex" onClick={() => setAgrandarImagen("/public/img/ferroverdor.png")} />
                                    </div>
                                </div>
                                <div className="descripcion">
                                    <div className="titulo">
                                        <h3> FUERZA DEL PASADO Y DEL FUTURO </h3>
                                    </div>
                                    <div className="desc">
                                        <p> Conquista el tablero con hordas de Pokémon del pasado y saca el máximo provecho al ataque Golpe Primitivo de Koraidon. Con seis Pokémon del pasado en juego, puedes hacer hasta 180 puntos de daño a cambio de  . Si prefieres un método más refinado, puedes utilizar el ataque Aceleración Máxima de Miraidon para buscar hasta dos cartas de Energía Básica en tu baraja y unirlas a tus Pokémon del futuro como desees, lo cual queda de lujo para preparar a Ferroverdor ex y su habilidad Propulsor Vernier, o quizá aprovechar la flexibilidad de tener numerosos atacantes del futuro listos. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="parte-superior p-s-dos parte-superior-borde-novedades"
                        // style={{ marginBottom: '-144px', display: 'none' }}  >
                        style={{ display: 'none' }}  >
                        <div className="img-lateral">
                            <img src="/public/img/galeria-borde-inferior-izquierdo.png" alt=" Borde inferior derecho" />
                        </div>
                        <div className="acomodador-borde">
                            <div className="img">
                                <img src="/public/img/borde-galeria.png" alt="Borde" />
                            </div>
                        </div>
                        <div className="img-lateral">
                            <img src="/public/img/galeria-borde-superior-izquierdo.png" alt="Borde superior izquierdo" />
                        </div>
                    </div>
                </div>
            </div>

            <NovedadesExpansion />

            <div className="pokemon-protagonistas" id="protagonistas">
                <div className="titulo">
                    <div className="titu">
                        <h2> POKÉMON PROTAGONISTAS </h2>
                    </div>
                    <div className="img">
                        <svg class="temporal-forces-divider" width="374px" height="36px" viewBox="0 0 374 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M167,14.7560572 C167,13.786224 166.242688,13 165.308518,13 L68.9337163,13 C44.4185625,13 27.8291134,27.9041238 3.6676744,28.5691186 C2.74370796,28.5950122 2,29.3612275 2,30.3192909 L2,32.2365947 C2,33.2158438 2.77545159,34.0173686 3.71869095,33.9997138 C27.8529212,33.5324519 44.435568,23.3809817 68.9337163,23.3809817 L165.308518,23.3809817 C166.242688,23.3809817 167,22.5935807 167,21.6237475 L167,14.7560572 Z M207,14.7560572 C207,13.786224 207.757312,13 208.691482,13 L305.066284,13 C329.581438,13 346.170887,27.9041238 370.332326,28.5691186 C371.256292,28.5950122 372,29.3612275 372,30.3192909 L372,32.2365947 C372,33.2158438 371.224548,34.0173686 370.281309,33.9997138 C346.147079,33.5324519 329.564432,23.3809817 305.066284,23.3809817 L208.691482,23.3809817 C207.757312,23.3809817 207,22.5935807 207,21.6237475 L207,14.7560572 Z" fill="#4EABB3"></path><path d="M181.1149,19 C181.744996,21.7395596 184.13195,23.7851177 186.999259,23.7851177 C189.866568,23.7851177 192.255004,21.7395596 192.8851,19 L202,19 C201.306153,26.8466211 194.864344,33 186.999259,33 C179.135656,33 172.693847,26.8466211 172,19 Z M187,14 C189.21,14 191,15.7916667 191,18 C191,20.2083333 189.21,22 187,22 C184.791667,22 183,20.2083333 183,18 C183,15.7916667 184.791667,14 187,14 Z M187,3 C194.866251,3 201.309015,9.15489749 202,17 L192.886714,17 C192.256524,14.2604404 189.867734,12.2148823 187,12.2148823 C184.132266,12.2148823 181.743476,14.2604404 181.113286,17 L172,17 C172.690985,9.15489749 179.133749,3 187,3 Z" fill="#00435A"></path></g></svg>
                    </div>
                </div>
                <div className="contenedor-pokemon-protagonistas">
                    <div className="imagenes-contenedor">
                        <div className="imagenes">
                            <div className="img">
                                <img src="/public/img/pokemon-protagonista-uno.png" alt="Deerling" onClick={() => setAgrandarImagen('/public/img/pokemon-protagonista-uno.png')} />
                            </div>
                            <div className="img">
                                <img src="/public/img/pokemon-protagonista-dos.png" alt="Sawsbuck" onClick={() => setAgrandarImagen('/public/img/pokemon-protagonista-dos.png')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenedor-contenido">
                    <div className="titulo">
                        <h2> Pokemon Estacional </h2>
                    </div>
                    <div className="texto">
                        <p> A Deerling y Sawsbuck se les conoce como Pokémon Estacional, y estas dos nuevas cartas de rareza Rara Ilustración son el ejemplo perfecto de la relación entre estos Pokémon y los cambios estacionales que suceden a su alrededor. La representación de Deerling impulsándose hacia adelante creada por Susumu Maeya no sólo destaca el salto de una estación a la siguiente, sino que también representa una conexión excelente entre estas dos imágenes de hermosos colores. </p>
                    </div>
                </div>
                <div className="contenedor-pokemon-protagonistas">
                    <div className="imagenes-contenedor tres-imagenes">
                        <div className="imagenes">
                            <div className="img">
                                <img src="/public/img/excadrill.png" alt="Excadrill" onClick={() => setAgrandarImagen('/public/img/excadrill.png')} />
                            </div>
                            <div className="img">
                                <img src="/public/img/metagross.png" alt="Metagross" onClick={() => setAgrandarImagen('/public/img/metagross.png')} />
                            </div>
                            <div className="img">
                                <img src="/public/img/mudsdale.png" alt="Mudsdale" onClick={() => setAgrandarImagen('/public/img/mudsdale.png')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenedor-contenido">
                    <div className="titulo">
                        <h2> Échame una mano </h2>
                    </div>
                    <div className="texto">
                        <p> Existe más de una forma de enfatizar la intensidad del vínculo entre los Pokémon y sus Entrenadores. Metagross, Excadrill y Mudsdale (¡y no nos olvidemos de Mudbray!) hacen uso de sus destrezas únicas para ayudar a las personas en sus vidas cotidianas. ¿Y quién no querría tener a estos serviciales Pokémon a su lado? </p>
                    </div>
                </div>
            </div>

            <div className="fondo-de-escritorio" id="fondos">
                <div className="contenedor">

                    <div className="titulo-subtitulo">
                        <div className="titulo">
                            <h3> FONDOS DE ESCRITORIO </h3>
                        </div>
                        <div className="subtitulo">
                            <p> Decora el fondo de tu celular o computadora con los fondos de pantalla de Escarlata y Púrpura-Fuerzas Temporales. </p>
                        </div>
                    </div>

                    <div className="contenedor-cards">
                        <div className="card">
                            <div className="img">
                                <img src="/public/img/fondo-uno.jpg" alt="Fondo de pantalla" />
                            </div>
                            <div className="contenido">
                                <div className="texto">
                                    <p> Selecciona el tamaño: </p>
                                </div>
                                <div className="contenedor-calidad">
                                    <div className="texto">
                                        <div className="text">
                                            <span> Celular (640x1136) </span>
                                        </div>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineKeyboardArrowDown className="icon" />
                                    </div>
                                </div>
                                <div className="boton">
                                    <div className="contenedor">
                                        <button> DESCARGAR </button>
                                        <MdOutlineKeyboardArrowRight className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="/public/img/fondo-dos.jpg" alt="Fondo de pantalla" />
                            </div>
                            <div className="contenido">
                                <div className="texto">
                                    <p> Selecciona el tamaño: </p>
                                </div>
                                <div className="contenedor-calidad">
                                    <div className="texto">
                                        <div className="text">
                                            <span> Celular (640x1136) </span>
                                        </div>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineKeyboardArrowDown className="icon" />
                                    </div>
                                </div>
                                <div className="boton">
                                    <div className="contenedor">
                                        <button> DESCARGAR </button>
                                        <MdOutlineKeyboardArrowRight className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="/public/img/fondo-tres.jpg" alt="Fondo de pantalla" />
                            </div>
                            <div className="contenido">
                                <div className="texto">
                                    <p> Selecciona el tamaño: </p>
                                </div>
                                <div className="contenedor-calidad">
                                    <div className="texto">
                                        <div className="text">
                                            <span> Celular (640x1136) </span>
                                        </div>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineKeyboardArrowDown className="icon" />
                                    </div>
                                </div>
                                <div className="boton">
                                    <div className="contenedor">
                                        <button> DESCARGAR </button>
                                        <MdOutlineKeyboardArrowRight className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src="/public/img/fondo-cuatro.jpg" alt="Fondo de pantalla" />
                            </div>
                            <div className="contenido">
                                <div className="texto">
                                    <p> Selecciona el tamaño: </p>
                                </div>
                                <div className="contenedor-calidad">
                                    <div className="texto">
                                        <div className="text">
                                            <span> Celular (640x1136) </span>
                                        </div>
                                    </div>
                                    <div className="icono">
                                        <MdOutlineKeyboardArrowDown className="icon" />
                                    </div>
                                </div>
                                <div className="boton">
                                    <div className="contenedor">
                                        <button> DESCARGAR </button>
                                        <MdOutlineKeyboardArrowRight className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jugar-ahora">
                <div className="contenedor">

                    <div className="contenido">
                        <div className="imagenes">
                            <div className="img imagen-uno">
                                <img src="/public/img/pokemon-live-footer.png" alt="Pokemon Live" />
                            </div>
                            <div className="img imagen-dos">
                                <img src="/public/img/consola.png" alt="Consola Nintendo" />
                            </div>
                            <div className="dos-images">
                                <div className="img">
                                    <img src="/public/img/avatar-uno.png" alt="Avatar 1" />
                                </div>
                                <div className="img">
                                    <img src="/public/img/avatar-dos.png" alt="Avatar 2" />
                                </div>
                            </div>
                        </div>
                        <div className="texto">
                            <div className="text">
                                <p> ¡Desafía a los jugadores a combates de JCC Pokémon en cualquier momento y lugar con JCC Pokémon Live y las nuevas cartas de la expansión Escarlata y Púrpura-Fuerzas Temporales! ¿Quieres reforzar tus barajas favoritas con el poder prehistórico de las cartas del pasado o diseñar novedosas estrategias con el toque futurista de las cartas del futuro? ¿O tal vez buscas la pieza que te falta con el regreso de las cartas de AS TÁCTICO?
                                    Sea cual sea el caso, hay mucho que descubrir mientras amplías tu colección usando las cartas con código de JCC Pokémon Live.  </p>
                            </div>
                            <div className="boton">
                                <div className="bot">
                                    <button> ¡JUGAR AHORA! </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <JugarAhoraMobile />

            <FooterWebsiteCards />

        </div>
    )
}
import PresentacionInicio from "./PresentacionInicio.jsx";
import StructureSeccions from "./StructureSeccions.jsx";
import { Link } from "react-router-dom";

export default function Ogerpon() {
    return (
        <>

            <PresentacionInicio imagen="/img/oge.png" />

            <StructureSeccions
                superior={
                    <>
                        <div className="fecha">
                            <p> 14 de marzo de 2024 </p>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Disfruta del tráiler de lanzamiento para descubrir las nuevas cartas de esta expansión, a la venta el 24 de mayo de 2024.</h4>
                        </div>
                        <div className="titulo">
                            <h2> Ogerpon debuta en la expansión Escarlata y Púrpura-Mascarada Crepuscular de JCC Pokémon </h2>
                        </div>
                        <div class="video">
                            <iframe
                                width="584"
                                height="315"
                                src="https://www.youtube.com/embed/1v40IJOXlls"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            <div className="descripcion">
                                <p> Aviso: Si haces clic en el video de YouTube arriba, saldrás del sitio web de Pokémon. The Pokémon Company International no se responsabiliza del contenido de ningún sitio web vinculado que no esté administrado por The Pokémon Company International.
                                    Las políticas de privacidad y las prácticas de seguridad de estos sitios web pueden no seguir las normas de The Pokémon Company International. </p>
                            </div>
                        </div>

                        <div className="parrafo">
                            <p className="texto-normal"> <span className="resal">L</span>a siguiente expansión del Juego de Cartas Coleccionables Pokémon, <span className="texto-celeste">  Escarlata y Púrpura-Mascarada Crepuscular </span>, nos lleva a Noroteo, un lugar en el que las personas y los Pokémon conviven en armonía con la naturaleza.
                                Las historias cuentan de un misterioso Pokémon enmascarado conocido como Ogerpon, aunque ya no será un misterio en JCC Pokémon cuando veas las seis nuevas cartas con este Pokémon legendario como protagonista. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> En el video podrás darle un primer vistazo a <strong> Ogerpon Máscara Turquesa </strong> y a cuatro Ogerpon ex diferentes, cada uno de ellos con su máscara propia. <strong> Ogerpon Máscara Turquesa ex, Ogerpon Máscara Fuente ex, Ogerpon Máscara Horno ex y Ogerpon Máscara Cimiento ex.  </strong> llegan con diferentes tipos, así como ataques y habilidades únicos.
                                Y no nos podemos olvidar de la carta de Objeto <strong> Máscara del Ogro </strong>, que te ayudará a poner a los Ogerpon ex en juego. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Disfruta de este adelanto de las nuevas e increíbles cartas, y prepárate para la expansión Escarlata y Púrpura-Mascarada Crepuscular de JCC Pokémon, que llega al mercado el 24 de mayo de 2024.</p>
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
                                <img src="/img/mascara-crepuscular.png" alt="Mascarada Crepuscular" />
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
                                    <p> 20 de mayo de 2024 </p>
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
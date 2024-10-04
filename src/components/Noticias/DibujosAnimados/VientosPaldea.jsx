import { Link } from "react-router-dom"
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio"
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions"

export default function VientosPaldea() {
    return (
        <>

            <PresentacionInicio imagen="/img/dibujo-siete.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 13 de diciembre de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> El cuarto episodio de Pokemon: Vientgos de Paldea ya esta disponible </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Embárcate en una aventura Pokémon por la región de Paldea. </h4>
                        </div>
                        <div class="video">
                            <iframe
                                width="584"
                                height="315"
                                src="https://www.youtube.com/embed/Em4GmamXmHM"
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
                            <p className="texto-normal"> <span className="resal">L</span>a última entrega de Pokémon: Vientos de Paldea, una nueva serie de animación original compuesta por cuatro episodios, ya está disponible en el <span className="texto-celeste">canal oficial de YouTube de Pokémon</span>. 
                            La serie está producida por WIT STUDIO, el estudio de animación que también trabajó en la premiada <span className="texto-celeste">Pokémon: Nieves de Hisui</span>. Pokémon: Vientos de Paldea está ambientada en la región de Paldea y cuenta la historia de tres estudiantes de la academia —Ohara, Alix y Omahr— que trabajan para cumplir sus sueños junto a sus compañeros Pokémon. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> El director Clavel les pide a nuestros tres protagonistas que hagan un video para los estudiantes de primer año y los estudiantes de intercambio en el que se pueda observar lo que hace tan especial a la academia. Uniendo sus ideas, consiguen darle vida al video. En él aparecen una versión del himno interpretada por la famosa rapera Lima y una presentación de los Líderes de Gimnasio de la región a cargo de e-Nigma. 
                            También se pueden ver las maravillas que los tres estudiantes descubrieron durante su búsqueda del tesoro, el día a día en la academia, increíbles paisajes y las personas y Pokémon que habitan la región. El resultado de este proyecto es un video increíble que va más allá de las cuatro paredes de la academia y que se expande por toda Paldea. Y, por fin, llegó el momento de que salga a la luz. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> No te pierdas los primeros tres episodios, <span className="texto-celetes">Exhala, Inhala</span> y <span className="texto-celeste">Toma un respiro</span>, antes de descurbrir el fascinante desenlace. </p>
                        </div>
                        <div className="boton-abajo">
                            <Link to={''}>
                                <button> Dibujos animados </button>
                            </Link>
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
                            <button> Dibujos animados </button>
                        </div>
                    </>
                }

            />

        </>
    )
}
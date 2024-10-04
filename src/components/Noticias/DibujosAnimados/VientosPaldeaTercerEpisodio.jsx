import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio.jsx";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions.jsx";

export default function VientosPaldeaTercerEpisodio() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/tercer-episodio-paldea.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 22 de noviembre de 2023 </p>
                        </div>
                        <div className="titulo">
                            <h2> El tercer episodio de Pokemon: Vientos de Paldea ya esta disponible en Youtube </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Omahr y Quaxly quieren infiltrarse en el Team Star y conseguir una historia exclusiva sobre ellos. ¡Descubre qué aventuras les esperan! </h4>
                        </div>
                        <div class="video">
                            <iframe
                                width="584"
                                height="315"
                                src="https://www.youtube.com/embed/aL0vVcwTyeo"
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
                            <p className="texto-normal"> <span className="resal">L</span>a tercera entrega de Pokémon: Vientos de Paldea, una nueva serie de animación original compuesta por cuatro episodios, ya está disponible en el <span className="texto-celeste"> <a href="https://www.youtube.com/PokemonLATAM" target="_blank" rel="noopener noreferrer">canal oficial de YouTube de Pokémon</a> </span>. 
                            La serie está producida por WIT STUDIO, el estudio de animación que también trabajó en la premiada serie <span className="texto-celeste"> <a href="https://www.youtube.com/watch?v=fDJpj1p0e3c&ab_channel=Pok%C3%A9monLatam" target="_blank" rel="noopener noreferrer">Pokémon: Nieves de Hisui</a></span>.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Pokémon: Vientos de Paldea está ambientada en la región de Paldea y cuenta la historia de tres estudiantes de la academia —Ohara, Alix y Omahr— quienes trabajan para cumplir sus sueños. En este episodio, seguiremos los pasos de Omahr, miembro del periódico de la academia. Después de que rechazaran su propuesta de escribir sobre el combate entre 
                            Mencía y Alix y de ver que éste último y Ohara están inmersos en la grabación del video, Omahr decide buscar su próximo proyecto para estar a la altura.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">De pronto, le llega la inspiración: ¡infiltrarse en una base del Team Star y conseguir una historia exclusiva! ¿Qué aventuras les esperarán a Omahr y a su compañero Pokémon Quaxly?</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Descúbrelo en el tercer episodio en YouTube y mantente al día para no perderte el último episodio de Pokémon: Vientos de Paldea.</p>
                        </div>
                        <div className="boton-abajo">
                            <button> Dibujos animados </button>
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
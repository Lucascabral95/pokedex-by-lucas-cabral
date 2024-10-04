import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function HorizontesPokemonDos() {
    return (
        <>

            <PresentacionInicio imagen={"/public/img/dibujo-nueve.png"} />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 22 de enero de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> La serie Horizontes Pokémon se estrenará el 7 de marzo </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> No te pierdas una nueva y maravillosa historia Pokémon, que pronto llegará a Netflix. </h4>
                        </div>
                        <div class="video">
                            <iframe
                                width="584"
                                height="315"
                                src="https://www.youtube.com/embed/jv5FUngnSH4"
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
                            <p className="texto-normal"> <span className="resal">L</span>a serie <span className="texto-celeste">Horizontes Pokémon</span> ahora se estrenará <strong>en Netflix el 7 de marzo</strong>, un poco después de lo previamente anunciado. Prepárate para presenciar las increíbles aventuras de Liko, Rod y muchos otros amigos... ¡y enemigos! Y por supuesto, también descubrirás una infinidad de asombrosos Pokémon en el camino.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Conoce más sobre la serie Horizontes Pokémon en el sitio oficial.</p>
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
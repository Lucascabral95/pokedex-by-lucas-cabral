import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions"
import { Link } from "react-router-dom";

export default function HorizontesPokemon() {
    return (
        <>

            <PresentacionInicio imagen="/img/dibujo-dos.png" />

            <StructureSeccions
                superior={
                    <>
                        <div className="fecha">
                            <p> 07 de marzo de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Disfruta ya de la serie Horizontes Pokémon en Netflix </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Sigue a Liko y Rod mientras se embarcan en un emocionante viaje en esta nueva serie de dibujos animados. </h4>
                        </div>
                        <div class="video">
                            <iframe
                                width="584"
                                height="315"
                                src="https://www.youtube.com/embed/c6zx6PZK_Bk"
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
                            <div className="texto-normal"> <span className="resal">C</span>omienza un nuevo viaje de dibujos animados con el estreno de la serie <span className="texto-celeste">Horizontes Pokémon</span>  , ya disponible en <span className="texto-celeste"> Netflix </span>.
                                En esta aventura totalmente nueva, una chica llamada Liko recibe a su primera compañera Pokémon, Sprigatito. Pero pronto es perseguida por los Exploradores, un grupo misterioso que está determinado a robar el colgante que ella usa. </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Pero Liko no está sola, ya que la Tacleada de Voltionautas, un grupo de viajeros liderado por Friede y el Capitán Pikachu, le ofrecen protección a bordo de su dirigible. Mientras tanto, un chico llamado Rod sueña con convertirse en Entrenador Pokémon junto a su próximo compañero Pokémon Fuecoco,
                                sin saber el secreto que esconde su Pokébola ancestral. ¡Juntos, Liko, Rod y la Tacleada de Voltionautas parten hacia nuevos horizontes! </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Si quieres irte preparando para las nuevas y emocionantes aventuras de Liko y Rod, puedes ver el nuevo tráiler de la serie Horizontes Pokémon en este enlace. También puedes disfrutar de la canción de la serie en inglés, “Becoming Me”, disponible a través de <span className="texto-celestes">una gran variedad de plataformas</span>.
                                Y si de repente sientes que quieres unirte al coro de la canción (y no te culpamos), dale un vistazo a <span className="texto-celeste">la versión especial con la letra para que puedas cantar</span>. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> No importa si eres fan de antaño de los dibujos animados Pokémon, o si has estado esperando el momento perfecto para adentrarte, sin lugar a duda este nuevo viaje a través del mundo Pokémon traerá sorpresa tras sorpresa. ¡Visita <span className="texto-celeste">Netflix</span> para empezar a disfrutar de la serie Horizontes Pokémon! </p>
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
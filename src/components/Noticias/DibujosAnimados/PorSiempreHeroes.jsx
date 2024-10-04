import { Link } from "react-router-dom"
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio"
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions"

export default function PorSiempreHeroes() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/dibujo-seis.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 22 de diciembre de 2023 </p>
                        </div>
                        <div className="titulo">
                            <h2> Pokémon por Siempre y Héroes Pokémon ya están disponibles para su compra digital </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Diviértete viendo la cuarta y quinta película, que ya están a la venta en iTunes y Google Play. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> <span className="texto-celeste">R</span>evive algunas de las clásicas aventuras cinemáticas de Ash y Pikachu cuando quieras, ahora que Pokémon por Siempre y Héroes Pokémon están disponibles para su compra en iTunes y Google Play.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> En <span className="resal">Pokémon por Siempre - Celebi: La Voz del Bosque</span>, Ash, Misty y Brock se encuentran con el Pokémon Mítico Celebi, que tiene el poder de viajar a través del tiempo, mientras exploran un bosque. También conocen y se hacen amigos de un chico llamado Sammy,
                                quien protegía a Celebi de ser capturado hace 40 años atrás cuando de repente fue transportado al presente. Desafortunadamente, Celebi sigue corriendo peligro, pero esta vez en manos de Iron Mask, el merodeador. Ash y sus amigos deberán entrar en batalla para salvar a Celebi y regresar a Sammy a su era correspondiente. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Puedes encontrar <b>Pokemon por siempre </b>aqui: </p>
                        </div>
                        <div className="lista-simple">
                            <ul>
                                <li>iTunes</li>
                                <li>Google Play</li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> <span className="texto-celeste">Héroes Pokémon: Latios y Latias</span> narra la historia de la ciudad de Altomare, la cual es protegida por los Pokémon Legendarios Latios y Latias. Mientras visitaba la ciudad para participar en una carrera a través de sus canales,
                                Ash descubre que un par de ladronas llamadas Annie y Oakley están en búsqueda de los dos Pokémon Legendarios y de un objeto misterioso llamado Joya Alma. Este malvado plan amenaza no solamente a Latios y Latias, sino también a toda la ciudad. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Puedes encontrar <b>Heroes Pokemon </b>aqui: </p>
                        </div>
                        <div className="lista-simple">
                            <ul>
                                <li> iTunes </li>
                                <li> Google Play </li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Ambas peliculas ya estan disponibles para su compra, ¡asi que agarra tus palomitas y disfruta de toda la accion Pokemon! </p>
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
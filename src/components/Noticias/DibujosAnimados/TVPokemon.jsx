import { Link } from "react-router-dom"
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio.jsx"
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions.jsx"

export default function TVPokemon() {
    return (
        <>

            <PresentacionInicio imagen="/img/dibujo-cinco.jpg" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 08 de enero de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> TV Pokémon llega a su fin en marzo de 2024 </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> El servicio finalizará próximamente; te contamos dónde puedes seguir disfrutando de los dibujos animados Pokémon. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> <span className="resal">Q</span>ueremos agradecer a todos los fans que han disfrutado de TV Pokémon durante todos estos años. La aplicación y el sitio web de TV Pokémon van a cerrar, y el servicio finalizará el 28 de marzo de 2024. A partir del 8 de enero de 2024, los fans ya no podrán descargar la app TV Pokémon desde el App Store, Google Play, Roku Channel Store, Amazon Appstore, Nintendo eShop y Pokemon.com/LATAM. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> No obstante, todos los usuarios que hayan descargado la aplicación en sus dispositivos antes del 8 de enero de 2024 podrán seguir viendo el contenido disponible hasta la retirada completa de la aplicación el 28 de marzo de 2024. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Recopilamos una <span className="texto-celeste">lista de lugares</span> en los que podrás disfrutar de la serie de dibujos animados y otro contenido de Pokémon. Sigue visitando <span className="texto-celeste">Pokemon.com/LATAM</span> para estar al tanto de las últimas novedades de Pokémon. De nuevo, ¡gracias por ver nuestro contenido! </p>
                        </div>
                        <div className="parrafo">
                            <span className="texto-celeste">Suscríbete al boletín informativo del Club de Entrenadores Pokémon para estar al tanto de las últimas novedades.</span>
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
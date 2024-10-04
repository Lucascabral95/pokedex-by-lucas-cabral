import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function PlayPokemonPrimerTrimestre() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/evento-uno.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 18 de marzo de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Actualizacion de los reglamentos de Play! Pokemon para el primer trismestra de 2024 </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Revisa los eglamentso mas recientes y preparate para las compotencias oficiales. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">L</span>os reglamentos de Play! Pokémon se revisan de forma periódica para garantizar que las competencias de la Serie de Campeonatos se desarrollen de forma equilibrada. <span className="texto-celeste">Los documentos normativos se actualizaron para reflejar la última revisión del primer trimestre de 2024</span>.
                                Recomendamos a los Profesores y jugadores de videojuegos y JCC Pokémon que se familiaricen con los reglamentos más recientes antes de que comience su próximo torneo.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡Buena suerte, Entrenadores!</p>
                        </div>
                        <div className="boton-abajo">
                            <button> Eventos de Play! Pokemon </button>
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
                            <button> Eventos de Play! Pokemon </button>
                        </div>
                    </>
                }

            />

        </>
    )
}
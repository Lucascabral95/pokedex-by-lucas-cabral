import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function PlayPokemonActualizacion() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/evento-ocho.jpg" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 09 de noviembre de 2023 </p>
                        </div>
                        <div className="titulo">
                            <h2> Actualización de los reglamentos de Play! Pokémon para el cuarto trimestre de 2023 </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Revisa los reglamentos más recientes y prepárate para las competencias oficiales. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">L</span>os reglamentos de Play! Pokémon se revisan de forma periódica para garantizar que las competencias de la Serie de Campeonatos se desarrollen de forma equilibrada. Los documentos normativos se actualizaron para reflejar la última revisión del cuarto trimestre de 2023. Recomendamos a los Profesores y jugadores de videojuegos y JCC Pokémon que se familiaricen con los reglamentos más recientes antes de que comience su próximo torneo.</p>
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
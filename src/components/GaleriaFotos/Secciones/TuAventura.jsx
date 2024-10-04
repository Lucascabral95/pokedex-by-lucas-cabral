import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function TuAventura() {
    return (
        <>

            <PresentacionInicio imagen={'/img/aventura-jcc-pokemon.png'} />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 05 de septiembre de 2023 </p>
                        </div>
                        <div className="titulo">
                            <h2> Emprende tu aventura en JCC Pokémon en los eventos de demostración en la Liga </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Asiste a uno de estos eventos en una de las tiendas participantes para descubrir el juego y obtener una baraja de prueba de un Pokémon V. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> <span className="resal">¿Q</span>uieres aprender a jugar al Juego de Cartas Coleccionables Pokémon pero no tienes claro cómo dar tus primeros pasos en tu propio camino a la cima? Desde ahora, las tiendas que participan en eventos de Play! Pokémon organizan eventos de demostración en la Liga para aprender a jugar a JCC Pokémon. Asiste a uno de estos eventos para aprender a jugar ¡y consigue una de las tres barajas de prueba únicas de 30 cartas con Lucario V, Umbreon V o Greninja V como protagonistas! </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> Visita el localizador de tiendas de Pokémon para encontrar los establecimientos que celebran estos eventos en la Liga para aprender a jugar a JCC Pokémon. ¡Pásala genial en el comienzo de tu aventura en JCC Pokémon! </p>
                        </div>

                        <div className="bot d-flex">
                            <div className="boton-abajo">
                                <Link to="/jcc-pokemon">
                                    <button>Juego de Cartas Coleccionables </button>
                                </Link>
                            </div>
                            <div className="boton-abajo">
                                <button> Eventos de Play! Pokemon  </button>
                            </div>
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
                    </>
                }

            />

        </>
    )
}
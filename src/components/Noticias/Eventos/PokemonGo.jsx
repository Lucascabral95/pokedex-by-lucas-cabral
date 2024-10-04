import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function PokemonGo() {
    return (
        <>

            <PresentacionInicio imagen="/img/evento-siete.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 08 de enero de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Pokémon GO se une a los eventos de Juego Organizado en Latinoamérica </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Los Entrenadores pueden participar en eventos oficiales de Pokémon GO, incluyendo Desafíos y Copas de Pokémon GO. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">os jugadores de <span className="texto-celeste">Pokémon GO</span> en Latinoamérica ya pueden formar parte de eventos oficiales de Juego Organizado en sus tiendas locales. Tal como los eventos del Juego de Cartas Coleccionables Pokémon que ya ocurren en estos establecimientos, los eventos de Pokémon GO les brindan a los Entrenadores la oportunidad de conectarse con su comunidad local, desarrollar nuevas habilidades y ganar premios y gastos de viaje cubiertos.</span></p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Los <span className="texto-celeste">Desafíos de Liga de Pokémon GO</span> son competencias que por lo regular se llevan a cabo en tiendas de juegos que organizan eventos de Play! Pokémon. Estos torneos locales de menor tamaño son accesibles para principiantes y sirven como una excelente manera de aprender los fundamentos sobre los combates contra otros jugadores de Pokémon GO, poniendo a prueba sus habilidades a la vez.
                                Las Copas de Liga de Pokémon GO son torneos de mayor dificultad que por lo regular se llevan a cabo en los mismos establecimientos que los Desafíos de Liga de Pokémon GO. <span className="texto-celeste">Las Copas de Liga de Pokémon GO</span> les brindan a los Entrenadores la oportunidad de obtener Championship Points y de poner en práctica sus habilidades en competencias más grandes.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="texto-celeste">¡Buscan un evento de Play! Pokemon cerca de ti y empieza a jugar! </span></p>
                        </div>
                        <div className="buttonss">
                            <button> Pokemon GO </button>
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
                        <div className="buttonss bss-dos" style={{ display: "none" }}>
                            <button> Pokemon GO </button>
                            <button> Eventos de Play! Pokemon </button>
                        </div>
                    </>
                }

            />

        </>
    )
}
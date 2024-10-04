import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function PlayPokemonCampeonatos() {
    return (
        <>

            <PresentacionInicio imagen={"/img/evento-dos.png"} />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 18 de marzo de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Novedades sobre los eventos locales de junio de la Serie de Campeonatos </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Los eventos con Championship Points se pondrán en pausa durante junio, aunque seguirá habiendo premios en las Ligas Pokémon junto a un trío de nuevas cartas holográficas de promoción.</h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"> <span className="resal">L</span>a temporada 2024 de la serie de Campeonatos Pokémon está por terminar, por lo que no se celebrarán eventos locales de la Serie de Campeonatos durante el mes de junio. Esto incluye los <span className="texto-celeste">Desafíos de Liga</span> y <span className="texto-celeste">Copas de Liga</span> 
                            de JCC Pokémon, los <span className="texto-celeste">Desafíos de Liga</span> y <span className="texto-celeste">Copas de Liga de Pokémon GO</span>, y los <span className="texto-celeste">Desafíos de Puntuación Clasificatoria</span> y <span className="texto-celeste">Midseason Showdowns</span> de videojuegos Pokémon. El <span className="texto-celeste">Campeonato Internacional Pokémon de Norteamérica 2024</span> es el último evento con Championship Points de la temporada, por lo que esta pausa permitirá a los jugadores descansar y ofrecerá una transición más fluida a la temporada 2025 que comienza en julio. </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Durante este periodo, las <span className="texto-celeste">Ligas Pokémon</span> tendrán una mayor libertad para organizar eventos amistosos, como los de los formatos alternativos; ¡así que pásala bien y experimenta con tus Pokémon favoritos! Si aún no has probado los formatos alternativos, como el Desafío de Líder de Gimnasio de JCC Pokémon, la Copa Caos de los videojuegos Pokémon o la Copa Chica de Pokémon GO, este es el momento para probarlo todo.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¿Buscas una Liga Pokémon? Usa el <span className="texto-celeste">localizador de eventos</span> para encontrar ubicaciones cerca de ti, y ponte en contacto con el organizador para obtener más información sobre el programa de eventos y la disponibilidad de las promociones.</p>
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
import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function PlayPokemonSerie4() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/evento-cinco.png" />

            <StructureSeccions

                superior={
                    <>
                    <div className="fecha">
                            <p> 07 de febrero de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Consigue paquetes de premio de Play! Pokémon de la Serie 4 en tu tienda de juegos más cercana </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> Participa en eventos en tu Liga local para obtener estos paquetes de premio especiales con populares cartas de JCC Pokémon. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">H</span>az nuevas amistades (o incluso rivalidades) mientras pones a prueba tus habilidades con el Juego de Cartas Coleccionables Pokémon en los eventos de tu tienda Play! 
                            Pokémon más cercana. No sólo podrás formar parte de la emocionante y divertida competencia, sino que también recibirás un paquete de premio de JCC Pokémon especial por asistir a estos torneos. La <span className="texto-celeste">Serie 4</span> de los paquetes de premio estará disponible a partir del 14 de febrero de 2024 en las tiendas participantes.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Cada paquete de premio contiene seis cartas, de entre un total de aproximadamente 100, todas ellas legales en el formato Estándar. Entre ellas se incluyen desde los Pokémon más populares hasta exclusivas versiones holográficas de cartas clásicas de los torneos. Cada una de ellas contiene un logo especial de Play! Pokémon. Estas son algunas de las interesantes cartas que podrás encontrar en la Serie 4:</p>
                        </div>
                        <div className="lista-simple">
                            <ul>
                                <li>Charizard ex</li>
                                <li>Pidgeot ex</li>
                                <li>Kyore</li>
                                <li>e-Nigma</li>
                                <li>Energia Inversion</li>
                            </ul>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Tanto si eres un Entrenador competitivo como casual, los paquetes de premio te ofrecen una forma exclusiva de ampliar tu colección mientras disfrutas de los eventos de Play! Pokémon en la tienda de juegos más cercana. La manera en que los paquetes de premio se distribuyen varía según el establecimiento. Cuanto más activos sean los eventos, más paquetes de premio entregarán, así que intenta asistir a todos los eventos que puedas.</p>
                        </div>
                        <div className="buttonss">
                            <button> Juego de Cartas Colecciónables</button>
                            <button> Eventos de Play! Pokemon</button>
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
                            <button> Juego de Cartas Colecciónables</button>
                            <button> Eventos de Play! Pokemon</button>
                        </div>
                    </>
                }

            />

        </>
    )
}
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function EscarletaYPurpura() {
    return (
        <div className="contenedor-de-productos-en-venta">

            <StructureSeccions

                inferior={
                    <>
                        <div className="regresar">
                            <Link to="/jcc-pokemon/galeria-de-productos">
                                <button> Regresar a la Galeria </button>
                            </Link>
                        </div>
                        <div className="imagen-tabla">
                            <div className="img-img">
                                <img src="/public/img/fuerzas-temporales-icono.png" alt="Fuerzas temporales" />
                            </div>
                            <div className="tab-one" style={{ height: "50px", display: "flex", alignItems: "center" }}>
                                <div className="parte two">
                                    <p> Serie </p>
                                </div>
                                <div className="parte one">
                                    <p> Serie Escarlata y Púrpura </p>
                                </div>
                            </div>
                            <div className="tab-two">
                                <div className="parte two">
                                    <p> Fecha de lanzamiento </p>
                                </div>
                                <div className="parte one">
                                    <p> 22 de marzo de 2024 </p>
                                </div>
                            </div>
                            <div className="tab-one">
                                <div className="parte two">
                                    <p> Número de cartas </p>
                                </div>
                                <div className="parte one">
                                    <p> más de 160 </p>
                                </div>
                            </div>
                            <div className="tab-two">
                                <div className="parte two">
                                    <p> ¿Baraja legal estándar? </p>
                                </div>
                                <div className="parte one">
                                    <p> Sí </p>
                                </div>
                            </div>
                            <div className="tab-one" style={{ height: "44px" }}>
                                <div className="parte two">
                                    <p>  </p>
                                </div>
                                <div className="parte on">
                                    <p> </p>
                                </div>
                            </div>
                        </div>
                        <div className="boton-abajo b-a-dos" style={{ display: "none" }}>
                            <button> Juego de Cartas Coleccionables </button>
                        </div>
                    </>
                }

                superior={
                    <>
                        <div className="titulo">
                            <h2> Escarlata y Púrpura-Fuerzas Temporales </h2>
                        </div>
                        <div className="img-single">
                            <img src="/public/img/fuerza-temporal-uno.png" alt="Escarlata y Púrpura-Fuerzas Temporales" />
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">¡La lista de Pokémon del pasado y del futuro sigue aumentando! Ondulagua ex llega desde tiempos ancestrales junto a Electrofuria ex, mientras que Ferroverdor ex imparte justicia mística con tecnología de punta acompañado de Ferrotesta ex. Más allá del Área Cero, Wugtrio y Farigiraf mutan sus tipos como Pokémon ex Teracristal, y Entrenadores Pokémon de todo el mundo ansían el regreso de las excepcionales y poderosísimas cartas de AS TÁCTICO. ¡Prepárate para un combate atemporal entre bestias salvajes y apariciones cibernéticas con la expansión Escarlata y Púrpura-Fuerzas Temporales de JCC Pokémon!</p>
                        </div>
                        <div className="lista-normal">
                            <ul>
                                <li> Más de 160 cartas </li>
                                <li> El regreso de las cartas de AS TÁCTICO: 6 cartas de Entrenador y 1 Energía Especial </li>
                                <li> Más Pokémon del pasado y del futuro </li>
                                <li>Más de una docena de nuevos Pokémon ex, incluyendo los Pokémon ex Teracristal de tipos cambiantes</li>
                                <li> Montones de cartas de Pokémon y de Entrenador con ilustraciones especiales </li>
                            </ul>
                        </div>
                    </>
                }

            />

        </div>
    )
}
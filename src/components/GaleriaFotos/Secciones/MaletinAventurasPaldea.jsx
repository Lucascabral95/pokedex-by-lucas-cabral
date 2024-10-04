import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function MaletinAventurasPaldea() {
    return (
        <>

            <PresentacionInicio imagen={'/public/img/galeria-cartas-diecisiete.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Maletín Aventuras en Paldea de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 1er trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> ¡A los Entrenadores Pokémon les espera todo un mundo de aventuras en la región de Paldea! Prepárate para el combate con un montón de cartas de promoción listas para jugar que incluyen Pokémon tan adorables como peleoneros. Y, por si esto fuera poco, ¡también encontrarás un buen puñado de paquetes de mejora para hacer aún más amigos! Además, podrás decorar tus dispositivos con calcomanías especiales, presumir tu colección con un miniálbum y entretenerte con un muñeco apretable de Pikachu. </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> El maletín Aventuras en Paldea de JCC Pokémon contiene: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li> 7 cartas holográficas de promoción de Pikachu, Sprigatito ex, Pawmi, Pawmo, Pawmot ex, Tandemaus y Maushold ex </li>
                            <li>  1 hoja con calcomanías especiales</li>
                            <li>  1 miniálbum</li>
                            <li> 1 muñeco apretable de Pikachu </li>
                            <li> 6 paquetes de mejora de JCC Pokémon </li>
                            <li> 1 carta con código para <span className="celeste">JCC Pokémon Live</span> </li>
                        </ul>
                    </div>
                    </>
                }

                inferior={
                    <>
                        <div className="regresar">
                            <Link to="/jcc-pokemon/galeria-de-productos">
                                <button> Regresar a la Galeria </button>
                            </Link>
                        </div>
                    </>
                }

            />

        </>
    )
}
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function LotePaquetesDeMejora() {
    return (
        <>

            <PresentacionInicio imagen={'/img/galeria-cartas-siete.png'} />

            <StructureSeccions

                superior={
                    <>
                        <div className="titulo">
                            <h2>Lote de paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea</h2>
                        </div>
                        <div className="fecha">
                            <p> Lanzamiento: 1er trimestre de 2024 </p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Amplía tu colección de JCC Pokémon con el lote de paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea, ¡que contiene seis paquetes de mejora! Esta expansión no se vende en paquetes de mejora individuales, por lo que el lote de paquetes de mejora es una forma rápida de descubrir sus muchos Pokémon variocolor, entre los que se encuentran Tinkaton, Ceruledge, Dondozo y más de 100 más. Y no pierdas de vista a Colmilargo y Ferrodada como Pokémon ex, ni a Charizard, Forretress y Espathra como Pokémon ex Teracristal variocolor. ¡Resplandece junto a ellos y descubre las fulgurantes maravillas de la expansión Escarlata y Púrpura-Destinos de Paldea!</p>
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
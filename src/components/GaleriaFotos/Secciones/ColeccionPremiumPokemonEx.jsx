import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function ColeccionPremiumPokemonEx() {
    return (
        <>

            <PresentacionInicio imagen={'/img/galeria-cartas-once.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2> Colección prémium Pokémon ex de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon </h2>
                    </div>
                    <div className="fecha">
                        <p>Lanzamiento: 2do trimestre de 2024</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> ¡Ilumina el combate con un Pokémon ex variocolor! Capturar a un Pokémon variocolor siempre ha sido una hazaña titánica, pero ahora, en cada una de estas colecciones, podrás incorporar a tu equipo a tres de estos resplandecientes Pokémon. La Evolución final aparece como un Pokémon ex variocolor, mientras que el Pokémon Básico y el de Fase 1 se unirán al combate en forma de cartas de promoción, y podrás presumir de esta cadena evolutiva al completo con un protector magnético con capacidad para tres cartas. También hallarás al Pokémon ex protagonista como carta de gran tamaño, ¡así como un buen puñado de paquetes de mejora de la expansión Escarlata y Púrpura-Destinos de Paldea para seguir ampliando tu colección! </p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Cada colección prémium Pokémon ex de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon contiene: </p>
                    </div>
                    <div className="lista-normal">
                        <ul>
                            <li> 1 carta holográfica de promoción grabada en relieve de Meowscarada ex variocolor, Skeledirge ex variocolor o Quaquaval ex variocolor </li>
                            <li> 1 carta holográfica de promoción grabada en relieve de Floragato variocolor, Crocalor variocolor o Quaxwell variocolor </li>
                            <li> 1 carta holográfica de promoción grabada en relieve de Sprigatito variocolor, Fuecoco variocolor o Quaxly variocolor </li>
                            <li> 1 carta holográfica de gran tamaño de Meowscarada ex variocolor, Skeledirge ex variocolor o Quaquaval ex variocolor </li>
                            <li> 8 paquetes de mejora de Escarlata y Púrpura-Destinos de Paldea de JCC Pokémon </li>
                            <li> 1 protector magnético para 3 cartas con soporte de exhibición </li>
                            <li>1 carta con código para <span className="celeste">JCC Pokémon Live</span>  </li>
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
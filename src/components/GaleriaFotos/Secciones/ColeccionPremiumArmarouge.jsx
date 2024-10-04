import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import { Link } from "react-router-dom";

export default function ColeccionPremiumArmarouge() {
    return (
        <>

            <PresentacionInicio imagen={'/img/galeria-cartas-seis.png'} />

            <StructureSeccions

                superior={
                    <>
                    <div className="titulo">
                        <h2>Colección prémium Armarouge ex de JCC Pokémon</h2>
                    </div>
                <div className="fecha">
                    <p> Lanzamiento: 2do trimestro de 2024 </p>
                </div>
                <div className="parrafo">
                    <p className="texto-normal">Se cree que la armadura de Armarouge ex es el origen de su increíble fuerza, ¡y que quienes subestimen su poder ígneo saldrán quemados! Con un ataque y una habilidad poderosísimos, este Pokémon ex puede aumentar su capacidad defensiva y ofensiva conforme incendia todo a su paso a través del combate. Armarouge ex aparece aquí en forma de carta holográfica de promoción, grabada en relieve y lista para jugar, mientras que Charcadet y Ceruledge echan aún más leña al fuego en forma de cartas holográficas de promoción.</p>
                </div>
                <div className="parrafo">
                    <p className="texto-normal">La colección prémium Armarouge ex de JCC Pokémon contiene:</p>
                </div>
                <div className="lista-normal">
                    <ul>
                        <li>1 carta holográfica de promoción grabada en relieve de Armarouge ex</li>
                        <li>2 cartas holográficas de promoción de Charcadet y Ceruledge</li>
                        <li>6 paquetes de mejora de JCC Pokémon</li>
                        <li>1 protector magnético para cartas con soporte de exhibición</li>
                        <li>65 fundas para cartas de Armarouge y Ceruledge</li>
                        <li>1 carta con código para <span className="celeste">JCC Pokémon Live</span></li>
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
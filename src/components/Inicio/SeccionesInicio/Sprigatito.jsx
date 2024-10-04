import PresentacionInicio from "./PresentacionInicio";
import StructureSeccions from "./StructureSeccions";
import { Link } from "react-router-dom";

export default function Sprigatito() {
    return (
        <>

          <PresentacionInicio imagen="/public/img/sprigatito-presentacion.png" />

            <StructureSeccions superior={
                <>
                    <div className="fecha">
                        <p> 15 de marzo de 2024 </p>
                    </div>
                    <div className="titulo">
                        <h2> Consigue a la Sprigatito de Liko como regalo misterioso en Pokémon Scarlet o Pokémon Violet </h2>
                    </div>
                    <div className="contenedor-subtitulo">
                        <h4> Usa la contraseña para añadir a este Pokémon tan peculiar a tu equipo. </h4>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> <span className="resal">A</span>ñade a la Sprigatito de Liko con la <strong>Cinta Camarada</strong> y expande los horizontes de tu equipo de <span className="texto-celeste">Pokémon Scarlet</span> o <span className="texto-celeste">Pokémon Violet</span> .
                            Cuando lleve la Cinta Camarada y salte al terreno de combate, podrás ver el apodo "Sprigatito de Liko". </p>
                    </div>
                    <div className="contenedor-de-imagen">
                        <img src="/public/img/sprigatito-combate.png" alt="Sprigatito combate" />
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Liko y su compañera Pokémon Sprigatito aparecieron por primera vez en <span className="texto-celeste">la serie Horizontes Pokémon</span>. Junto a su amigo Rod, recorrerán el mundo Pokémon con los Tacleada de Voltionautas e intentarán resolver el misterio del colgante que la abuela de Liko le regaló.
                            Ya puedes disfrutar de la serie Horizontes Pokémon en <span className="texto-celeste">Netflix</span>. </p>
                    </div>
                    <div className="contenedor-de-imagen">
                        <img src="/public/img/sprigatito-sonriendo.png" alt="Sprigatito sonriendo" />
                    </div>
                    <div className="contenedor-lista">
                        <p>Sigue estos pasos para recibir tu regalo: </p>
                        <div className="lista">
                            <ul>
                                <li> <span style={{ color: 'black' }}>1.</span> Inicia Pokémon Scarlet o Pokémon Violet.</li>
                                <li> <span style={{ color: 'black' }}>2.</span> Selecciona <strong>Poképortal</strong> en el menú.</li>
                                <li> <span style={{ color: 'black' }}>3.</span> Selecciona <strong>Regalo misterioso</strong> y, después, <strong>Recibir mediante código o contraseña</strong> para conectarte a internet.</li>
                                <li> <span style={{ color: 'black' }}>4.</span> Introduce la contraseña <span style={{ backgroundColor: 'yellow', color: 'black' }}> L1K0W1TH906 </span>.</li>
                                <li> <span style={{ color: 'black' }}>5.</span> Espera a recibir el Pokémon (los Pokémon aparecen en tu equipo o en las cajas).</li>
                                <li> <span style={{ color: 'black' }}>6.</span> Asegúrate de guardar la partida.</li>
                            </ul>
                        </div>
                        <p>Esta contraseña caduca a las <strong>16:59 PDT del 30 de septiembre de 2024</strong>. </p>
                        <p> ¡Esperamos que se diviertan miau-cho con este Pokémon tan adorable! </p>
                    </div>
                    <div className="buttonss">
                        <button> Videojuegos y aplicaciones </button>
                        <button> Dibujos animados </button>
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

                        <div className="buttonss bss-dos" style={{ display: 'none' }}>
                        <button> Videojuegos y aplicaciones </button>
                        <button> Dibujos animados </button>
                    </div>
                    </>
                }
            />
        </>
    )
}  
import "./IndexDibujosAnimados.scss";
import StructureSeccions from "../Inicio/SeccionesInicio/StructureSeccions.jsx";
import { Link } from "react-router-dom";

export default function IndexDibujosAnimados() {
    return (
        <>

            <StructureSeccions

                estilo={"contenedor-estructural-inicio-pagina"}
                
                estiloInferior={"estilo-inferior-inferior"}

                superior={
                    <>
                        <div className="contenedor-imagen-mas-grande">
                            <Link to="/noticias/disfruta-ya-de-la-serie-horizontes-pokemon-en-netflix">
                                <div className="img-img">
                                    <img src="/public/img/dibujo-dos.png" alt="Horizonte Serie Netflix" />
                                </div>
                                <div className="contenido">
                                    <div className="titulo">
                                        <h3>Comienza una nueva aventura de dibujos animados Pokemon</h3>
                                    </div>
                                    <div className="texto">
                                        <p>La serie Horizontes Pokemon ya esta disponible en Netflix. Sintoniza para presenciar el increible viaje de Liko y Rod.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="contenedor-de-pics">
                            <div className="imagee imagee-uno">
                                <Link to="/noticias/trivia-de-la-serie-viajes-definitivos-pokemon">
                                    <div className="im">
                                        <img src="/public/img/dibujo-cuatro.png" alt="Viajes Defitivos Quiz" />
                                    </div>
                                </Link>
                                <Link to="/noticias/trivia-de-la-serie-viajes-definitivos-pokemon">
                                    <div className="tti">
                                        <h3>Trivia de Viajes Definitivos Pokemon</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="imagee imagee-dos">
                                <Link to="/dibujos-animados/series">
                                    <div className="im">
                                        <img src="/public/img/dibujo-once.jpg" alt="Serie Pokemon" />
                                    </div>
                                </Link>
                                <Link to="/dibujos-animados/series">
                                    <div className="tti">
                                        <h3>Episodios de la serie Pokemon</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="contenedor-imagen-mas-grande" onClick={() => window.location.href = '/noticias/tv-pokemon-llega-a-su-fin-en-marzo-de-2024'}>
                            <div className="img-img">
                                <img src="/public/img/dibujo-cinco.jpg" alt="Pokemon TV" style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} />
                            </div>
                            <div className="contenido cimg-uno">
                                <div className="titulo">
                                    <h3>TV Pokemon cerrara en marzo de 2024</h3>
                                </div>
                            </div>
                        </div>

                        <div className="contenedor-imagen-mas-grande" style={{ marginTop: '16px' }} onClick={() => window.location.href = '/dibujos-animados/donde-ver-los-episodios-y-peliculas-pokemon'}>
                            <div className="img-img">
                                <img src="/public/img/dibujo-diez.png" alt="Pokemon TV" style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} />
                            </div>
                            <div className="contenido cimg-dos">
                                <div className="titulo">
                                    <h3>¡Descubre dónde puedes ver Pokémon!</h3>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-chico-peliculas" onClick={() => window.location.href = '/dibujos-animados/peliculas'}>
                            <div className="img-img">
                                <div className="img">
                                    <img src="/public/img/peliculas-pokemon.jpg" alt="Peliculas Pokemon" />
                                </div>
                            </div>
                            <div className="cont">
                                <div className="texto">
                                    <h3> Peliculas Pokemon </h3>
                                </div>
                            </div>
                        </div>
                    </>
                }

            />

        </>
    )
}
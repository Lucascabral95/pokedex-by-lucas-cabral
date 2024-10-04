import PresentacionInicio from "../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../Inicio/SeccionesInicio/StructureSeccions";
import "./DibujosAnimados.scss";
import { Link } from "react-router-dom";

export default function DibujosAnimados() {
    return (
        <>

            <PresentacionInicio imagen="/img/dibujo-diez.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="titulo">
                            <h2> Dónde ver los episodios y películas Pokémon </h2>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">E</span>sta guía explica dónde puedes capturar los emocionantes episodios de toda la serie Pokémon, así como las épicas aventuras de las películas Pokémon y otros divertidos dibujos animados Pokémon. Tanto los episodios como las películas están disponibles a través de servicios de streaming, y mediante alquiler o compra digital.</p>
                        </div>
                        <div className="contenedor-de-ubicacion">
                            <div className="titulo-de-donde-ver">
                                <h3> VIDEOS A LA CARTA </h3>
                            </div>
                            <div className="contenedor-de-imagen-promocional">
                                <a href="https://www.netflix.com/ar/" target="_blank">
                                    <Link to="/">
                                        <div className="img-img">
                                            <img src="/img/netflix.png" alt="Netflix" />
                                        </div>
                                    </Link>
                                </a>
                            </div>
                            <div className="contenedor-de-imagen-promocional">
                                <a href="https://www.primevideo.com/?ref_=sd_allcat_apv" target="_blank">
                                    <Link to="/">
                                        <div className="img-img">
                                            <img src="/img/primevideo.png" alt="Prime Video" />
                                        </div>
                                    </Link>
                                </a>
                            </div>
                            <div className="contenedor-de-imagen-promocional">
                                <a href="https://www.roku.com/es-mx/" target="_blank">
                                    <Link to="">
                                        <div className="img-img">
                                            <img src="/img/roku.png" alt="The Roku Channel" />
                                        </div>
                                    </Link>
                                </a>
                            </div>
                            <div className="contenedor-de-imagen-promocional">
                                <a href="https://www.youtube.com/playlist?list=PLfU52v5ZmY_591DFVDVwvqZavje4D-07g" target="_blank">
                                    <Link to="/">
                                        <div className="img-img">
                                            <img src="/img/youtube.png" alt="Youtube" />
                                        </div>
                                    </Link>
                                </a>
                            </div>
                            <div className="titulo-de-donde-ver">
                                <h3> COMPRA O ALQUILER DIGITAL </h3>
                            </div>
                            <div className="contenedor-de-imagen-promocional">
                                <a href="https://www.amazon.com/gp/video/storefront/ref=sxts_1_0_7afea99e-eb2e-4566-8436-75b72ba9b801?ie=UTF8&benefitId=vdppokuspdzypnep15k&pd_rd_w=B9JSI&content-id=amzn1.sym.7afea99e-eb2e-4566-8436-75b72ba9b801:amzn1.sym.7afea99e-eb2e-4566-8436-75b72ba9b801&pf_rd_p=7afea99e-eb2e-4566-8436-75b72ba9b801&pf_rd_r=D9D7HGR7J2WNFNZXT1F4&pd_rd_wg=yBxML&pd_rd_r=304a8f19-2f2f-4269-b372-6af7ea059975&qid=1692808164" target="_blank">
                                    <Link to="">
                                        <div className="img-img">
                                            <img src="/img/amazon.png" alt="Amazon" />
                                        </div>
                                    </Link>
                                </a>
                            </div>
                            <div className="contenedor-de-imagen-promocional">
                                <a href="https://www.apple.com/mx/itunes/" target="_blank">
                                    <Link to="/">
                                        <div className="img-img">
                                            <img src="/img/itunesstore.png" alt="iTunes Store" />
                                        </div>
                                    </Link>
                                </a>
                            </div>
                            <div className="contenedor-de-imagen-promocional">
                                <a href="https://play.google.com/store/movies" target="_blank">
                                    <Link to="/">
                                        <div className="img-img">
                                            <img src="/img/googleplay.png" alt="Google Play" />
                                        </div>
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </>
                }

            />

        </>
    )
}
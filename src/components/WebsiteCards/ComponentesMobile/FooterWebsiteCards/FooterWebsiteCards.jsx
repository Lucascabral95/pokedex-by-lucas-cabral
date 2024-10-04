import "./FooterWebsiteCards.scss"
import { BsMailbox } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function FooterWebsiteCards() {
    return (
        <div className="footer-website-cards">
            <div className="contenedor">

                <div className="div-superior">
                    <div className="div-chico">
                        <div className="imagenes">
                            <a href="https://web.facebook.com/PokemonOficialLatAm/?brand_redir=2166260486745668" target="_blank">
                                <div className="img">
                                    <div className="imagen imagen-fb">
                                        <FaFacebook className="icon fb" />
                                    </div>
                                </div>
                            </a>
                            <a href="https://twitter.com/pokemon_es_esp" target="_blank">
                                <div className="img">
                                    <div className="imagen imagen-x">
                                        <FaSquareXTwitter className="icon x" />
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/user/PokemonOficialES" target="_blank">
                                <div className="img">
                                    <div className="imagen imagen-yt">
                                        <FaYoutube className="icon yt" />
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/pokemonesp/" target="_blank">
                                <div className="img">
                                    <div className="imagen imagen-ig">
                                        <RiInstagramFill className="icon ig" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="contenedor-interno">
                            <div className="suscribirse">
                                <div className="contenedor">
                                    <BsMailbox className="icon" />
                                    <p> ¡SUSCRÍTE A NUESTRO BOLETÍN! </p>
                                </div>
                            </div>
                            <div className="contenedor-boton-suscripcion">
                                <div className="boton">
                                    <button> Suscribirse </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-grande">
                        <div className="contenedor">
                            <div className="img-pokemon-company">
                                <Link to="/inicio">
                                    <img src="/public/img/pokemon-company.png" alt="The Pokemon Company" />
                                </Link>
                            </div>
                            <div className="imagen-coppa">
                                <div className="img-coppa">
                                    <a href="https://caru.bbbprograms.org/seal/confirmation/1596150491" target="_blank">
                                        <img src="/public/img/coppa-logo.png" alt="Coppa Safe Harbor" />
                                    </a>
                                </div>
                            </div>
                            <div className="politicas">
                                <div className="texto">
                                    <p>
                                        <Link to="/terminos-y-condiciones/aviso-de-privacidad"> Politica de privacidad </Link>
                                        |
                                        <Link to="/terminos-y-condiciones/condiciones-de-uso"> Condiciones de uso </Link>
                                        |
                                    </p>
                                    <p>
                                        <Link to="/terminos-y-condiciones/atencion-al-cliente"> Servicio de atencion al cliente </Link>
                                        |
                                        <Link to="/terminos-y-condiciones/foros"> Foros </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-ultimo">
                        <div className="contenedor-boton-pais">
                            <button> España </button>
                        </div>
                    </div>
                </div>

                <div className="div-inferior">
                    <div className="texto">
                        <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. y otros países.  </p>
                    </div>
                    <div className="texto">
                        <p> App Store es una marca de servicio de Apple Inc. Android, Google Play y el logotipo de Google Play son marcas comerciales de Google LLC. </p>
                    </div>
                    <div className="texto">
                        <p> ©️2024 Pokémon. ©️1995-2024 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®️ y los nombres de los personajes son marcas de Nintendo. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
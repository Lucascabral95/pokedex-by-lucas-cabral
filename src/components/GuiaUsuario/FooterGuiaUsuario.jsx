import "./FooterGuiaUsuario.scss";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function FooterGuiaUsuario() {
    return (
        <div className="footer-guia-usuario">
            <div className="contenedor">

                <div className="parte-superior">
                    <div className="div">
                        <Link to={'/inicio'}>
                            <div className="img img-pokemon-company">
                                <img src="/img/pokemon-company-gris.webp" alt="The Pokemon Company" />
                            </div>
                        </Link>
                        <a href="https://caru.bbbprograms.org/seal/Confirmation/1596150491" target="_blank">
                            <div className="img img-coppa">
                                <img src="https://parents.pokemon.com/images/logos/caru-logo.svg" alt="Caru Coppa" />
                            </div>
                        </a>
                    </div>
                    <div className="div">
                        <div className="contenedorr">
                            <a href="https://web.facebook.com/PokemonOficialLatAm/?brand_redir=230809307041021&locale=es_LA" target="_blank">
                                <div className="contenedor-icono">
                                    <FaFacebookF className="icon" />
                                </div>
                            </a>
                            <a href="https://twitter.com/Pokemon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                            <div className="contenedor-icono">
                                <BsTwitterX className="icon" />
                            </div>
                            </a>
                            <a href="https://www.youtube.com/@PokemonOficialES" target="_blank">
                            <div className="contenedor-icono">
                                <TfiYoutube className="icon" />
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="div">
                        <div className="boton">
                            <div className="contenedor-boton">
                                <button> América Latina </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parte-inferior">
                    <div className="terminos">
                        <span>
                            <Link className="link-footer" to={'/atencion-al-cliente'}>
                                Servicio de atencion al cliente
                            </Link>
                        </span>
                        <span>
                            <Link className="link-footer" to={'/terminos-y-condiciones/condiciones-de-uso'}>
                                Terminos de uso
                            </Link>
                        </span>
                        <span>
                            <Link className="link-footer" to={'/terminos-y-condiciones/aviso-de-privacidad'}>
                                Aviso de Privacidad
                            </Link>
                        </span>
                        <span>
                            <Link className="link-footer" to={'/terminos-y-condiciones/informacion-legal'}>
                                Informacion legal
                            </Link>
                        </span>
                    </div>
                    <div className="texto">
                        <p> ©️ 2023 Pokémon. ©️ 1995-2023 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® y los nombres de los personajes son marcas de Nintendo. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
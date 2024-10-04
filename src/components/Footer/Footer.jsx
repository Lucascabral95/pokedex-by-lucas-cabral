import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    const paisesDelFormulario = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo (Brazzaville)',
        'Congo (Kinshasa)',
        'Costa Rica',
        'Côte d’Ivoire',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'East Timor',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Greece',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Korea',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia'
    ]

    return (
        <div className="footer">
            <div className="contenedor-footer">

                <div className="registrate">
                    <div className="title-registrate">
                        <h2 className="title"> ¡Regístrate para recibir correos electrónicos de Pokémon! </h2>
                    </div>
                    <div className="contenedor-email-newsletter">
                        <div className="correo">
                            <div className="correo-electronico">
                                <input className="input-email" type="text" placeholder="Correo electrónico" />
                            </div>
                            <div className="pais-fecha-nacimiento">
                                <div className="div-input">
                                    <select name="pais" id="pais">
                                        {paisesDelFormulario.map((item, index) => (
                                            <option key={index} selected={item === 'Argentina'}> {item} </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="div-input">
                                    <input type="text" placeholder="Fecha de nacimiento" className="input-nacimiento" />
                                </div>
                            </div>
                            <div className="registro registro-primero">
                                <div className="boton-registrate">
                                    <button className="registrate"> Registrate </button>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter">
                            <div className="recibir-recibir">
                                <span className="recibir"> Me gustaría recibir correos electrónicos acerca de: </span>
                            </div>
                            <div className="check-contenedor">
                                <div className="check">
                                    <div className="checkk">
                                        <input type="checkbox" className="check-input" />
                                    </div>
                                    <div className="contenedor-check-texto">
                                        <span className="check-texto"> Videojuegos, aplicaciones y muchas más cosas de Pokemon </span>
                                    </div>
                                </div>
                                <div className="check">
                                    <div className="checkk">
                                        <input type="checkbox" className="check-input" />
                                    </div>
                                    <div className="contenedor-check-texto">
                                        <span className="check-texto"> Acepto los <span className="check-texto-subrayado"> Términos de uso</span> y la <span className="check-texto-subrayado"> Aviso sobre la privacidad</span> de Pokemon.com/LATAM </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="registro registro-segundo" style={{ display: 'none' }}>
                            <div className="boton-registrate">
                                <button className="registrate"> Registrate </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pokemon-company">
                    <div className="pokemon">
                        <div className="title">
                            <h2 className="titulo"> The Pokémon Company </h2>
                        </div>
                        <ul>
                            <li> <Link to={'/noticias'} className="link"> Novedades </Link> </li>
                            <li> <Link to={'/terminos-y-condiciones/guia-de-usuario'} className="link"> Guía para padres y tutores </Link> </li>
                            <li> <Link to={'/atencion-al-cliente'} className="link"> Servicio de atención al cliente </Link> </li>
                            <li> <Link to={'/terminos-y-condiciones/sobre-nuestra-compania'} className="link"> Sobre nuestra compañía </Link> </li>
                            <li> <Link to={''} className="link"> Seleccionar país o región </Link> </li>
                            <li> <a href="https://pokemon.gamespress.com/es" target="_blank" className="link"> Sitio de prensa </a> </li>
                        </ul>
                    </div>

                    <div className="icono iconos-de-logos">
                        <div className="imagen-logo">
                            <a title={`External: https://www.facebook.com/PokemonOficialLatAm`} target="_blank" href="https://www.facebook.com/PokemonOficialLatAm">
                                <img src="/public/img/facebook.logo.png" alt="Facebook logo" />
                            </a>
                        </div>
                        <div className="imagen-logo">
                            <a title={`External: https://www.youtube.com/PokemonLATAM`} target="_blank" href="https://www.youtube.com/PokemonLATAM">
                                <img src="/public/img/youtube.logo.png" alt="Youtube logo" />
                            </a>
                        </div>
                        <div className="imagen-logo">
                            <a title={`External: https://twitter.com/PokemonLATAM`} target="_blank" href="https://twitter.com/PokemonLATAM">
                                <img src="/public/img/x.logo.png" alt="Twitter logo" />
                            </a>
                        </div>
                    </div>

                    <div className="terminos-condiciones">
                        <div className="img-coppa">
                            <img src="/public/img/coppa.png" alt="Coppa" />
                        </div>
                        <ul className="ul-terminos-condiciones">
                            <li>
                                <Link to={'/terminos-y-condiciones/condiciones-de-uso'} className="link-terminos">
                                    Términos de uso
                                </Link>
                            </li>
                            <li>
                                <Link to={'/terminos-y-condiciones/aviso-de-privacidad'} className="link-terminos">
                                    Aviso sobre la privacidad
                                </Link>
                            </li>
                            <li>
                                <Link to={'/terminos-y-condiciones/pagina-de-cookies'} className="link-terminos">
                                    Página de Cookies
                                </Link>
                            </li>
                            <li>
                                <Link to={'/terminos-y-condiciones/informacion-legal'} className="link-terminos">
                                    Información legal
                                </Link>
                            </li>
                        </ul>
                        <div className="fecha-pokemon">
                            <p className="texto"> ©2024 Pokémon. ©1995 - 2024 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo. </p>
                        </div>
                    </div>
                </div>

                <div className="conent-datos-personales">
                    <div className="contenedor-datos-personales">
                        <div className="credito">
                            <p> Developed with love by Lucas Cabral 💜🚀 </p>
                        </div>
                        <div className="contenedor-de-iconos">
                            <a href="https://github.com/Lucascabral95" target="_blank" className="icono">
                                <FaGithub className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/lucas-gast%C3%B3n-cabral/" target="_blank" className="icono">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="https://www.instagram.com/lucascabral95/" target="_blank" className="icono">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="https://www.facebook.com/lucas.cabral3" target="_blank" className="icono">
                                <FaFacebook className="icon" />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
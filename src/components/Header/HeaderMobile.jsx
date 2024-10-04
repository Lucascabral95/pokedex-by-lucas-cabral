import "./HeaderMobile.scss"
import { useEffect, useState } from "react";
import { MdOutlineMenu, MdKeyboardArrowRight, MdCatchingPokemon } from "react-icons/md";
import { ImMobile2 } from "react-icons/im";
import { IoCardSharp, IoNewspaperOutline } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function HeaderMobile() {
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeCategorias, setActiveCategorias] = useState(false);

    useEffect(() => {
        if (activeMenu) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "auto";
        }
    }, [activeMenu]);

    const activacionBotonesMenu = (value) => {
    }

    return (
        <div className="header-mobile">
            <div className="contenedor-header-mobile">

                <div className="primer-contenedor">
                    <div className="primer-div">
                        <Link to={'/'}>
                            <img src="/img/logo-pokemon.png" alt="Logo de Pokemon" />
                        </Link>
                    </div>
                    <div className="segundo-div">
                        <Link to={'/'}>
                            <img src="/img/quienes-somos.png" alt="Quienes somos" />
                        </Link>
                    </div>
                    <div className="tercer-div" onClick={() => activeMenu ? null : setActiveCategorias(!activeCategorias)}>
                        <div className="icon">
                            <MdKeyboardArrowRight className="icono" />
                        </div>
                    </div>
                </div>

                <div className="segundo-contenedor">
                    <div className="menu-hamburguesa" onClick={() => activeCategorias ? null : setActiveMenu(!activeMenu)}
                        style={{ backgroundColor: activeMenu ? "#000000" : "#313131" }}>
                        <div>
                            <MdOutlineMenu className="icono" style={{ color: activeMenu ? "#444444" : "white" }} />
                        </div>
                    </div>
                    <div className="logo-pokemon">
                        <div>
                            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Logo de Pokemon" />
                        </div>
                    </div>
                </div>

                <div className="contenedor-de-categorias" style={{ display: activeMenu ? "flex" : "none" }}>
                    <Link to="/inicio" >
                        <div className="contenedor" >
                            <div className="borde">
                                <div className="borde-de-color" style={{ backgroundColor: "#919191" }}>

                                </div>
                            </div>
                            <div className="icono">
                                <MdCatchingPokemon className="iconoo" />
                            </div>
                            <div className="categoria">
                                <p> Inicio </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/pokedex">
                        <div className="contenedor">
                            <div className="borde">
                                <div className="borde-de-color" style={{ backgroundColor: "#E3350D" }}>

                                </div>
                            </div>
                            <div className="icono">
                                <MdCatchingPokemon className="iconoo" />
                            </div>
                            <div className="categoria">
                                <p> Pokedex </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/aplicaciones">
                        <div className="contenedor">
                            <div className="borde">
                                <div className="borde-de-color" style={{ backgroundColor: "#EE6B2F" }}>

                                </div>
                            </div>
                            <div className="icono">
                                <ImMobile2 className="iconoo" />
                            </div>
                            <div className="categoria">
                                <p> Aplicaciones </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cardlist">
                        <div className="contenedor">
                            <div className="borde">
                                <div className="borde-de-color" style={{ backgroundColor: "#E6BC2F" }}>

                                </div>
                            </div>
                            <div className="icono">
                                <IoCardSharp className="iconoo" />
                            </div>
                            <div className="categoria">
                                <p> Juego de Cartas Coleccionables </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dibujos-animados">
                        <div className="contenedor">
                            <div className="borde">
                                <div className="borde-de-color" style={{ backgroundColor: "#4DAD5B" }}>

                                </div>
                            </div>
                            <div className="icono">
                                <FaCirclePlay className="iconoo" />
                            </div>
                            <div className="categoria">
                                <p> Dibujos animados </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/eventos-de-play-pokemon">
                        <div className="contenedor">
                            <div className="borde">
                                <div className="borde-de-color" style={{ backgroundColor: "#30A7D7" }}>

                                </div>
                            </div>
                            <div className="icono">
                                <GiTrophyCup className="iconoo" />
                            </div>
                            <div className="categoria">
                                <p> Eventos de Play! Pokemon </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/noticias">
                        <div className="contenedor">
                            <div className="borde">
                                <div className="borde-de-color" style={{ backgroundColor: "#1B53BA" }}>

                                </div>
                            </div>
                            <div className="icono">
                                <IoNewspaperOutline className="iconoo" />
                            </div>
                            <div className="categoria">
                                <p> Noticas </p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="boton-cierre" style={{ display: activeCategorias ? "flex" : "none" }}
                    onClick={() => setActiveCategorias(!activeCategorias)} >
                    <MdKeyboardArrowRight className="icono-cierre" />
                </div>

                <div className="contenedor-de-secciones" style={{ display: activeCategorias ? "block" : "none" }}>
                    <div className="contenedor-imagen">
                        <img src="/img/pokemon-negro.png" alt="Pokemon" />
                    </div>
                    <div className="contenedor-imagen">
                        <img src="/img/scarlet-violet.jpg" alt="Scarlet and Violet" />
                    </div>
                    <div className="contenedor-imagen">
                        <img src="/img/foros-pokemon.png" alt="Foros" />
                    </div>
                    <div className="contenedor-imagen">
                        <img src="/img/aplicaciones-pokemon.png" alt="Aplicaciones" />
                    </div>
                </div>

            </div>
        </div >
    )
}
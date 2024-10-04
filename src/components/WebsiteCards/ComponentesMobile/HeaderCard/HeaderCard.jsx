import "./HeaderCard.scss";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import CuerpoComoJugar from "./CategoriaStructure/CuerpoComoJugar.jsx";
import CuerpoJCCPokemon from "./CategoriaStructure/CuerpoJCCPokemon.jsx";
import CuerpoExpansiones from "./CategoriaStructure/CuerpoExpansiones.jsx";
import CuerpoCartas from "./CategoriaStructure/CuerpoCartas.jsx";
import storeZustand from "../../../../zustand.jsx";
import ExpansionesHeaderCard from "./SeccionesDesplegables/Expansiones.jsx";
import CartasDesplegable from "./SeccionesDesplegables/Cartas.jsx";
import JCCPokemonLiveDesplegable from "./SeccionesDesplegables/JCCPokemonLive.jsx";
import ComoJugarDesplegable from "./SeccionesDesplegables/ComoJugar.jsx";

export default function HeaderCard() {
    const { activeMenu, setActiveMenu, reiniciarMenu, setReiniciarMenu } = storeZustand();
    const [visibilidadDeLasCategorias, setVisibilidadDeLasCategorias] = useState(false);
    const [activeCategoria, setActiveCategoria] = useState({
        expansiones: false,
        cartas: false,
        jccPokemon: false,
        comoJugar: false
    });
    const [categoriaHeaderSeleccionada, setCategoriaHeaderSeleccionada] = useState({
        expansiones: false,
        cartas: false,
        jccPokemon: false,
        comoJugar: false
    });

    const activarCategoria = (categoria) => {
        setActiveMenu(false);
        setActiveCategoria(prevState => ({
            ...prevState,
            expansiones: categoria === 'expansiones',
            cartas: categoria === 'cartas',
            jccPokemon: categoria === 'jccPokemon',
            comoJugar: categoria === 'comoJugar'
        }));
    };

    const actividadMenu = () => {
        setActiveMenu(!activeMenu);
        setVisibilidadDeLasCategorias(!visibilidadDeLasCategorias);
    };

    useEffect(() => {
        if (reiniciarMenu) {
            setActiveCategoria({
                expansiones: false,
                cartas: false,
                jccPokemon: false,
                comoJugar: false
            })
            setReiniciarMenu(false)
            setActiveMenu(true)
        }
    }, [reiniciarMenu]);

    const actualizarCategoriaMenu = (category) => {
        setCategoriaHeaderSeleccionada(prevState => ({
            ...prevState,
            expansiones: category === 'expansiones' && !prevState.expansiones,
            cartas: category === 'cartas' && !prevState.cartas,
            jccPokemon: category === 'jccPokemon' && !prevState.jccPokemon,
            comoJugar: category === 'comoJugar' && !prevState.comoJugar
        }))
    };

    return (
        <>

            <div className="contenedor-header" style={{ userSelect: 'none' }}>
                <div className="logo">
                    <Link to={"/expansions/temporal-forces"}>
                        <div className="img-img">
                            <img src="/img/logo-juego-cartas-coleccionables.png" alt="Logo Pokemon de Cartas Colleccionables" />
                        </div>
                    </Link>
                </div>
                <div className="secciones">
                    <div className="seccion seccion-expansiones" onClick={() => actualizarCategoriaMenu("expansiones")}>
                        <h4>EXPANSIONES</h4>
                        <MdKeyboardArrowDown className="icon" />
                    </div>
                    <div className="seccion seccion-cartas" onClick={() => actualizarCategoriaMenu("cartas")}>
                        <h4>CARTAS</h4>
                        <MdKeyboardArrowDown className="icon" />
                    </div>
                    <div className="seccion seccion-jcc-pokemon" onClick={() => actualizarCategoriaMenu("jccPokemon")}>
                        <h4>JCC POKEMON LIVE</h4>
                        <MdKeyboardArrowDown className="icon" />
                    </div>
                    <div className="seccion seccion-como-jugar" onClick={() => actualizarCategoriaMenu("comoJugar")}>
                        <h4>COMO JUGAR</h4>
                        <MdKeyboardArrowDown className="icon" />
                    </div>
                    <Link to={"/noticias"}>
                        <div className="seccion seccion-noticias">
                            <h4>NOTICIAS</h4>
                        </div>
                    </Link>
                    <div className="seccion seccion-donde-jugar">
                        <h4>DONDE JUGAR</h4>
                    </div>
                    {activeMenu || visibilidadDeLasCategorias ?
                        <div className="seccion display-menu-hamburguesa" style={{ padding: "0px 8px 0px 16px", display: 'none' }} onClick={() => { setActiveMenu(false); setVisibilidadDeLasCategorias(false) }}>
                            <IoMdClose className="icono-menu" />
                        </div>
                        :
                        <div className="seccion display-menu-hamburguesa" style={{ padding: "0px 8px 0px 16px", display: 'none' }} onClick={actividadMenu}>
                            <IoIosMenu className="icono-menu" />
                        </div>
                    }
                </div>
            </div>

            {categoriaHeaderSeleccionada.expansiones &&
                <ExpansionesHeaderCard />
            }

            {categoriaHeaderSeleccionada.cartas &&
                <CartasDesplegable />
            }

            {categoriaHeaderSeleccionada.jccPokemon &&
                <JCCPokemonLiveDesplegable />
            }

            {categoriaHeaderSeleccionada.comoJugar &&
                <ComoJugarDesplegable />
            }

            <div className="menu-hamburguesa-mobile" style={{ display: activeMenu && Object.values(activeCategoria).every(valor => !valor) ? "block" : "none" }}>
                <div className="contenedor">

                    <div className="seccion seccion-mobile-expansiones" style={{ borderTop: '3px solid #DEAF4F' }} onClick={() => activarCategoria('expansiones')}>
                        <div className="categoria">
                            <div className="texto">
                                <p>EXPANSIONES</p>
                            </div>
                        </div>
                        <div className="contenedor-boton">
                            <div className="boton">
                                <MdKeyboardArrowRight className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="seccion seccion-mobile-cartas" onClick={() => activarCategoria('cartas')}>
                        <div className="categoria">
                            <div className="texto">
                                <p>CARTAS</p>
                            </div>
                        </div>
                        <div className="contenedor-boton">
                            <div className="boton">
                                <MdKeyboardArrowRight className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="seccion seccion-mobile-jccPokemon" onClick={() => activarCategoria('jccPokemon')}>
                        <div className="categoria">
                            <div className="texto">
                                <p> JCC POKÉMON LIVE </p>
                            </div>
                        </div>
                        <div className="contenedor-boton">
                            <div className="boton">
                                <MdKeyboardArrowRight className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="seccion seccion-mobile-comoJugar" onClick={() => activarCategoria('comoJugar')}>
                        <div className="categoria">
                            <div className="texto">
                                <p> CÓMO JUGAR </p>
                            </div>
                        </div>
                        <div className="contenedor-boton">
                            <div className="boton">
                                <MdKeyboardArrowRight className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="seccion seccion-sin-boton seccion-mobile-noticias">
                        <div className="categoria">
                            <div className="texto">
                                <p> NOTICIAS </p>
                            </div>
                        </div>
                    </div>
                    <div className="seccion seccion-sin-boton seccion-mobile-comoComprar" style={{ borderBottom: '3px solid #DEAF4F' }}>
                        <div className="categoria">
                            <div className="texto">
                                <p> CÓMO COMPRAR </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {visibilidadDeLasCategorias &&
                <>
                    {activeCategoria.expansiones && <CuerpoExpansiones />}

                    {activeCategoria.cartas && <CuerpoCartas />}

                    {activeCategoria.jccPokemon && <CuerpoJCCPokemon />}

                    {activeCategoria.comoJugar && <CuerpoComoJugar />}
                </>
            }

        </>
    )
}
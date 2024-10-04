import { Link } from "react-router-dom";
import "./Header.scss";
import { MdCatchingPokemon } from "react-icons/md";
import { ImMobile2 } from "react-icons/im";
import { IoCardSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import storeZustand from "../../zustand.jsx";
import HeaderMobile from "./HeaderMobile.jsx";

export default function Header() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const { setLocation } = storeZustand();

    const redireccion = (value) => {
        switch (value) {
            case "inicio":
                return () => (window.location.href = "/inicio");
            case "pokedex":
                return () => (window.location.href = "/pokedex");
            case "aplicaciones":
                return () => (window.location.href = "/aplicaciones");
            case "cartas":
                return () => (window.location.href = "/cardlist");
            case "dibujos":
                return () => (window.location.href = "/dibujos-animados");
            case "eventos":
                // return () => (window.location.href = "/eventos");
                return () => (window.location.href = "/card/expansions/temporal-forces");
            case "noticias":
                return () => (window.location.href = "/noticias");
            default:
                return () => (window.location.href = "/");
        }
    }

    useEffect(() => {
        setLocation(window.location.pathname);
    }, [window.location.pathname]);

    useEffect(() => {
        setCategoriaSeleccionada(window.location.pathname.slice(1) || "inicio");
    }, [window.location.pathname]);

    return (
        <>
            <div className="header">

                <div className="contenedor-etiquetas">
                    <div className="interior">
                        <div className="interior-interior">
                            <div className="tag-chica shadow">
                                <Link to="/">
                                    <img src="/public/img/logo-pokemon.png" alt="Logo Pokemon" />
                                </Link>
                            </div>
                            <div className="tag-chica shadow">
                                <Link to="/">
                                    <img src="/public/img/quienes-somos.png" alt="Quienes somos" />
                                </Link>
                            </div>
                            <div className="tag-larga">
                                <Link to="/">
                                    <img src="/public/img/pokemon-negro.png" alt="Pokemon Negro" />
                                </Link>
                            </div>
                            <div className="tag-larga">
                                <Link to="/">
                                    <img src="/public/img/scarlet-violet.jpg" alt="Scarlet Violet" />
                                </Link>
                            </div>
                            <div className="tag-larga">
                                <Link to="/">
                                    <img src="/public/img/foros-pokemon.png" alt="Foros de Pokemon" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <navbar className="navbar" >
                        <div className="navbar-contenedor">
                            <div className="interior-navbar" onClick={redireccion("inicio")} >
                                <div className="contenido-categoria inicio" style={{ backgroundColor: categoriaSeleccionada === "inicio" ? "#919191" : "" }}>
                                    <div className="img-img">
                                        <MdCatchingPokemon className="icono" style={{ color: categoriaSeleccionada === "inicio" ? "white" : "" }} />
                                    </div>
                                    <div className="p-p">
                                        <p style={{ color: categoriaSeleccionada === "inicio" ? "white" : "" }}>Inicio</p>
                                    </div>
                                </div>
                                <div className="destelo-color" style={{ backgroundColor: "#919191", borderBottomLeftRadius: "6px" }}>
                                </div>
                            </div>
                            <div className="interior-navbar" onClick={redireccion("pokedex")} >
                                <div className="contenido-categoria pokedex" style={{ backgroundColor: categoriaSeleccionada === "pokedex" || categoriaSeleccionada.includes("detalle") ? "#E3350D" : "" }} >
                                    <div className="img-img">
                                        <MdCatchingPokemon className="icono" style={{ color: categoriaSeleccionada === "pokedex" || categoriaSeleccionada.includes("detalle") ? "white" : "" }} />
                                    </div>
                                    <div className="p-p">
                                        <p style={{ color: categoriaSeleccionada === "pokedex" || categoriaSeleccionada.includes("detalle") ? "white" : "" }}>Pokédex</p>
                                    </div>
                                </div>
                                <div className="destelo-color" style={{ backgroundColor: '#E3350D' }}>
                                </div>
                            </div>
                            <div className="interior-navbar" onClick={redireccion("aplicaciones")} >
                                <div className="contenido-categoria aplicaciones" style={{
                                    backgroundColor: categoriaSeleccionada === "aplicaciones" ? "#EE6B2F" : "",
                                    color: categoriaSeleccionada === "aplicaciones" ? "white" : ""
                                }}>
                                    <div className="img-img">
                                        <ImMobile2 className="icono" style={{ color: categoriaSeleccionada === "aplicaciones" ? "white" : "" }} />
                                    </div>
                                    <div className="p-p">
                                        <p style={{ color: categoriaSeleccionada === "aplicaciones" ? "white" : "" }}>Aplicaciones</p>
                                    </div>
                                </div>
                                <div className="destelo-color" style={{ backgroundColor: '#EE6B2F' }}>
                                </div>
                            </div>
                            <div className="interior-navbar" onClick={redireccion("cartas")} >
                                <div className="contenido-categoria cartas" style={{ backgroundColor: categoriaSeleccionada === "cartas" || categoriaSeleccionada.includes("card") ? "#E6BC2F" : "" || categoriaSeleccionada.includes("jcc-pokemon") ? "#E6BC2F" : "" , color: categoriaSeleccionada === "cartas" ? "white" : "" }}>
                                    <div className="img-img">
                                        <IoCardSharp className="icono" style={{ color: categoriaSeleccionada === "cartas" || categoriaSeleccionada.includes("card") ? "white" : "" || categoriaSeleccionada.includes("jcc-pokemon") ? "white" : ""}} />
                                    </div>
                                    <div className="p-p" style={{ margin: "0px" }}>
                                        <p style={{ color: categoriaSeleccionada === "cartas" || categoriaSeleccionada.includes("card") ? "white" : ""  || categoriaSeleccionada.includes("jcc-pokemon") ? "white" : "" }}> Juego de Cartas Coleccionables </p>
                                    </div>
                                </div>
                                <div className="destelo-color" style={{ backgroundColor: '#E6BC2F' }}>
                                </div>
                            </div>
                            <div className="interior-navbar" onClick={redireccion("dibujos")} >
                                <div className="contenido-categoria dibujos" style={{ backgroundColor: categoriaSeleccionada === "dibujos" || categoriaSeleccionada.includes("dibujo") ? "#4DAD5B" : "", color: categoriaSeleccionada === "dibujos" ? "white" : "" }} >
                                    <div className="img-img">
                                        <FaCirclePlay className="icono" style={{ color: categoriaSeleccionada === "dibujos" || categoriaSeleccionada.includes("dibujo") ? "white" : "" }} />
                                    </div>
                                    <div className="p-p">
                                        <p style={{ color: categoriaSeleccionada === "dibujos" || categoriaSeleccionada.includes("dibujo") ? "white" : "" }}> Dibujos animados </p>
                                    </div>
                                </div>
                                <div className="destelo-color" style={{ backgroundColor: '#4DAD5B' }}>
                                </div>
                            </div>
                            <div className="interior-navbar" onClick={redireccion("eventos")} >
                                <div className="contenido-categoria eventos" style={{ backgroundColor: categoriaSeleccionada === "eventos" || categoriaSeleccionada.includes("eventos") ? "#30A7D7" : "", color: categoriaSeleccionada === "eventos" ? "white" : "" }} >
                                    <div className="img-img">
                                        <GiTrophyCup className="icono" style={{ color: categoriaSeleccionada === "eventos" || categoriaSeleccionada.includes("eventos") ? "white" : "" }} />
                                    </div>
                                    <div className="p-p" style={{ margin: "0px" }}>
                                        <p style={{ color: categoriaSeleccionada === "eventos" || categoriaSeleccionada.includes("eventos") ? "white" : "" }}>Eventos de Play! Pokémon</p>
                                    </div>
                                </div>
                                <div className="destelo-color" style={{ backgroundColor: '#30A7D7' }}>
                                </div>
                            </div>
                            <div className="interior-navbar" onClick={redireccion("noticias")} >
                                <div className="contenido-categoria noticias" style={{ backgroundColor: categoriaSeleccionada === "noticias" || categoriaSeleccionada.includes("noticias") ? "#1B53BA" : "", color: categoriaSeleccionada === "noticias" ? "white" : "" }} >
                                    <div className="img-img">
                                        <IoNewspaperOutline className="icono" style={{ color: categoriaSeleccionada === "noticias" || categoriaSeleccionada.includes("noticias") ? "white" : "" }} />
                                    </div>
                                    <div className="p-p">
                                        <p style={{ color: categoriaSeleccionada === "noticias" || categoriaSeleccionada.includes("noticias") ? "white" : "" }}>Noticias</p>
                                    </div>
                                </div>
                                <div className="destelo-color" style={{ backgroundColor: '#1B53BA', borderBottomRightRadius: "6px" }}>
                                </div>
                            </div>
                        </div>
                    </navbar>
                </div>
            </div>

            {/* <div style={{ overflow: 'hidden' }}> */}
            <HeaderMobile />
            {/* </div> */}

        </>
    )
}
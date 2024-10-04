import "./HeaderMobileGaleria.scss"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";

export default function HeaderMobileGaleria(props) {
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => setActiveMenu(false), [
        props.verTodas,
        props.asTactico,
        props.cartasPasadoFuturo,
        props.ilustracionesEspeciales,
        props.pokemonEx,
        props.raraHiper,
    ]);

    return (
        <div className="header-mobile-galeria">
            <div className="contenedor">

                <div className="cont-principal">
                    <div className="contenedor-texto-icon" onClick={() => setActiveMenu(!activeMenu)}>
                        <div className="texto">
                            <p> {props.categoriaActual} </p>
                        </div>
                        <div className="contenedor-boton">
                            <div className="boton">
                                <MdOutlineKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cont-secundario" style={{ display: activeMenu ? "flex" : "none" }} onClick={props.verTodas}>
                    <div className="contenedor-texto-icon">
                        <div className="texto">
                            <p> VER TODAS </p>
                        </div>
                    </div>
                </div>

                <div className="cont-secundario" style={{ display: activeMenu ? "flex" : "none" }} onClick={props.asTactico}>
                    <div className="contenedor-texto-icon">
                        <div className="texto">
                            <p> AS TÁCTICO </p>
                        </div>
                    </div>
                </div>

                <div className="cont-secundario" style={{ display: activeMenu ? "flex" : "none" }} onClick={props.ancianoFuturo}>
                    <div className="contenedor-texto-icon">
                        <div className="texto">
                            <p> CARTAS DEL PASADO Y DEL FUTURO </p>
                        </div>
                    </div>
                </div>

                <div className="cont-secundario" style={{ display: activeMenu ? "flex" : "none" }} onClick={props.illustrationRare}>
                    <div className="contenedor-texto-icon">
                        <div className="texto">
                            <p> ILUSTRACIONES ESPECIALES </p>
                        </div>
                    </div>
                </div>

                <div className="cont-secundario" style={{ display: activeMenu ? "flex" : "none" }} onClick={props.doubleRare}>
                    <div className="contenedor-texto-icon">
                        <div className="texto">
                            <p> POKÉMON EX </p>
                        </div>
                    </div>
                </div>

                <div className="cont-secundario" style={{ display: activeMenu ? "flex" : "none" }} onClick={props.raraHiper}>
                    <div className="contenedor-texto-icon">
                        <div className="texto">
                            <p> RARA HÍPER </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
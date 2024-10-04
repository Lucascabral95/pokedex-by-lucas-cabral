import "./EstructuraTerminosCondiciones.scss"
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EstructuraTerminosCondiciones(props) {
    const [activeInformacion, setActiveInformacion] = useState(true);
    const [informacionSeleccionada, setInformacionSeleccionada] = useState({
        atencionAlCliente: false,
        pokemonCompanyInternational: false,
        guiaPokemon: false,
        avisoPrivacidad: false,
        paginaCookies: false,
        condicionesDeUso: false,
        informacionLegal: false
    });

    const seleccionarInformacion = (informacion) => {
        setInformacionSeleccionada({
            atencionAlCliente: false,
            pokemonCompanyInternational: false,
            guiaPokemon: false,
            avisoPrivacidad: false,
            paginaCookies: false,
            condicionesDeUso: false,
            informacionLegal: false,
            [informacion]: true
        });
    }

    useEffect(() => {
        location.pathname === "/terminos-y-condiciones/sobre-nuestra-compania" && setInformacionSeleccionada({ ...informacionSeleccionada, pokemonCompanyInternational: true });
        location.pathname === "/terminos-y-condiciones/aviso-de-privacidad" && setInformacionSeleccionada({ ...informacionSeleccionada, avisoPrivacidad: true });
        location.pathname === "/terminos-y-condiciones/pagina-de-cookies" && setInformacionSeleccionada({ ...informacionSeleccionada, paginaCookies: true });
        location.pathname === "/terminos-y-condiciones/condiciones-de-uso" && setInformacionSeleccionada({ ...informacionSeleccionada, condicionesDeUso: true });
        location.pathname === "/terminos-y-condiciones/informacion-legal" && setInformacionSeleccionada({ ...informacionSeleccionada, informacionLegal: true });
    }, []);

    return (
        <>

            <div className="contenedor-de-terminos-y-condiciones">

                <div className="contenedor-informacion">
                    <div className="informacion"
                        style={{ borderBottomLeftRadius: !activeInformacion ? "5px" : "0px", borderBottomRightRadius: !activeInformacion ? "5px" : "0px" }}
                        onClick={() => setActiveInformacion(!activeInformacion)}>
                        <div className="texto">
                            <p> Informacion </p>
                        </div>
                        <div className="icono">
                            <MdKeyboardArrowUp style={{ transform: activeInformacion ? "rotate(180deg)" : "rotate(0deg)" }} className="icon" />
                        </div>
                    </div>
                    <Link to="/atencion-al-cliente">
                        <div className="seccion" style={{ display: activeInformacion ? "block" : "none", backgroundColor: informacionSeleccionada.atencionAlCliente ? "#1DAFEA" : "#D9D9D9" }} onClick={() => seleccionarInformacion("atencionAlCliente")}>
                            <div className="texto">
                                <p style={{ color: informacionSeleccionada.atencionAlCliente ? "white" : "#616161" }}> Servicio de atencion al cliente </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/terminos-y-condiciones/sobre-nuestra-compania" >
                        <div className="seccion" style={{ display: activeInformacion ? "block" : "none", backgroundColor: informacionSeleccionada.pokemonCompanyInternational ? "#1DAFEA" : "#D9D9D9" }} onClick={() => seleccionarInformacion("pokemonCompanyInternational")} >
                            <div className="texto">
                                <p style={{ color: informacionSeleccionada.pokemonCompanyInternational ? "white" : "#616161" }}> Acerca de The Pokemon Company International </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/terminos-y-condiciones/guia-de-usuario">
                        <div className="seccion" style={{ display: activeInformacion ? "block" : "none", backgroundColor: informacionSeleccionada.guiaPokemon ? "#1DAFEA" : "#D9D9D9" }} onClick={() => seleccionarInformacion("guiaPokemon")} >
                            <div className="texto">
                                <p style={{ color: informacionSeleccionada.guiaPokemon ? "white" : "#616161" }}> Guia de pokemon para padres/tutores </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/terminos-y-condiciones/aviso-de-privacidad">
                        <div className="seccion" style={{ display: activeInformacion ? "block" : "none", backgroundColor: informacionSeleccionada.avisoPrivacidad ? "#1DAFEA" : "#D9D9D9" }} onClick={() => seleccionarInformacion("avisoPrivacidad")} >
                            <div className="texto">
                                <p style={{ color: informacionSeleccionada.avisoPrivacidad ? "white" : "#616161" }}> Aviso de privacidad </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/terminos-y-condiciones/pagina-de-cookies">
                        <div className="seccion" style={{ display: activeInformacion ? "block" : "none", backgroundColor: informacionSeleccionada.paginaCookies ? "#1DAFEA" : "#D9D9D9" }} onClick={() => seleccionarInformacion("paginaCookies")} >
                            <div className="texto">
                                <p style={{ color: informacionSeleccionada.paginaCookies ? "white" : "#616161" }}> Pagina de cookies </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/terminos-y-condiciones/condiciones-de-uso">
                        <div className="seccion" style={{ display: activeInformacion ? "block" : "none", backgroundColor: informacionSeleccionada.condicionesDeUso ? "#1DAFEA" : "#D9D9D9" }} onClick={() => seleccionarInformacion("condicionesDeUso")} >
                            <div className="texto">
                                <p style={{ color: informacionSeleccionada.condicionesDeUso ? "white" : "#616161" }}> Condiciones de uso </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/terminos-y-condiciones/informacion-legal">
                        <div className="seccion"
                            style={{ display: activeInformacion ? "block" : "none", borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', backgroundColor: informacionSeleccionada.informacionLegal ? "#1DAFEA" : "#D9D9D9" }} onClick={() => seleccionarInformacion("informacionLegal")} >
                            <div className="texto">
                                <p style={{ color: informacionSeleccionada.informacionLegal ? "white" : "#616161" }}> Informacion legal </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="contenedor-contenido">
                    <div className="contenedor">

                        {props.contenido}

                    </div>
                </div>

            </div>
        </>
    )

}
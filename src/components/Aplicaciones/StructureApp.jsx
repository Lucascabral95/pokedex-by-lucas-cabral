import PresentacionInicio from "../Inicio/SeccionesInicio/PresentacionInicio"
import StructureSeccions from "../Inicio/SeccionesInicio/StructureSeccions"
import "./StructureApp.scss"
import { Link } from "react-router-dom"

export default function StructureApp(props) {
    return (
        <>

            <PresentacionInicio imagen={props.imagen} />

            <StructureSeccions

                superior={
                    <>
                        {props.cuerpoDeLaApp}
                        <div className="parrafo" style={{ marginTop: "34px" }}>
                            <p style={{ fontSize: "14.4px" }} className="text-center texto-normal">Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. y otros países. App Store es una marca de servicio de Apple Inc. Android, Google Play y el logotipo de Google Play son marcas comerciales de Google Inc.</p>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="regresar">
                            <Link to="/aplicaciones">
                                <button> Volver a Galería </button>
                            </Link>
                        </div>
                        {props.cuerpoLogo &&
                            <div className="contenedor-google-play">
                                <div className="img-img">
                                    <img src={props.imagenLogo} alt="Logo de la app" />
                                </div>
                                <div className="contenido">
                                    {props.cuerpoLogo &&
                                        <>
                                            {props.cuerpoLogo}
                                        </>
                                    }
                                </div>
                            </div>
                        }
                        {props.cuerpoGooglePlay &&
                            <div className="contenedor-google-play">
                                <div className="img-img">
                                    <img src="/public/img/google-play.jpg" alt="Google Play" />
                                </div>
                                <div className="contenido">
                                    {props.cuerpoGooglePlay &&
                                        <>
                                            {props.cuerpoGooglePlay}
                                        </>
                                    }
                                </div>
                            </div>
                        }
                        {props.cuerpoAppStore &&
                            <div className="contenedor-google-play">
                                <div className="img-img">
                                    <img src="/public/img/app-store.jpg" alt="App Store" />
                                </div>
                                <div className="contenido">
                                    {props.cuerpoAppStore &&
                                        <>
                                            {props.cuerpoAppStore}
                                        </>
                                    }
                                </div>
                            </div>
                        }
                        {props.cuerpoNintendoSwitch &&
                            <div className="contenedor-google-play">
                                <div className="img-img">
                                    <img src="/public/img/nintendo-switch.jpg" alt="Nintendo Switch" />
                                </div>
                                <div className="contenido">
                                    {props.cuerpoNintendoSwitch &&
                                        <>
                                            {props.cuerpoNintendoSwitch}
                                        </>
                                    }
                                </div>
                            </div>
                        }
                        {props.cuerpoAmazon &&
                            <div className="contenedor-google-play">
                                <div className="img-img">
                                    <img src="/public/img/amazon-amazon.jpg" alt="Amazon Store" />
                                </div>
                                <div className="contenido">
                                    {props.cuerpoAmazon &&
                                        <>
                                            {props.cuerpoAmazon}
                                        </>
                                    }
                                </div>
                            </div>
                        }
                        {props.cuerpoExtraImagenUno &&
                            <div className="contenedor-imagen-extra">
                                <div className="img-extra">
                                    <img src={props.cuerpoExtraImagenUno} alt="Website" />
                                </div>
                                <div className="contenido-extra">
                                    <h3> {props.cuerpoExtraTituloUno} </h3>
                                </div>
                            </div>
                        }
                        {props.cuerpoExtraImagenDos &&
                            <div className="contenedor-imagen-extra">
                                <div className="img-extra">
                                    <img src={props.cuerpoExtraImagenDos} alt="Website" />
                                </div>
                                <div className="contenido-extra">
                                    <h3> {props.cuerpoExtraTituloDos} </h3>
                                </div>
                            </div>
                        }
                    </>
                }

            />

        </>
    )
}
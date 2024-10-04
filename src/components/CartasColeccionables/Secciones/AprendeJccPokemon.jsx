import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";

export default function AprendeJccPokemon() {
    return (
        <>

             <PresentacionInicio imagen={'/img/jcc-pokemon-uno.png'} />

             <StructureSeccions 
             
             superior={
                <>
                </>
             }

             inferior={
                <>
                    <div className="regresar">
                        <Link to="/noticias">
                            <button> Regresar a Noticias </button>
                        </Link>
                    </div>
                    <div className="imagen-tabla">
                        <div className="img-img">
                            <img src="/img/fuerzas-temporales-icono.png" alt="Fuerzas temporales" />
                        </div>
                        <div className="tab-one" style={{ height: "50px", display: "flex", alignItems: "center" }}>
                            <div className="parte two">
                                <p> Serie </p>
                            </div>
                            <div className="parte one">
                                <p> Serie Escarlata y Púrpura </p>
                            </div>
                        </div>
                        <div className="tab-two">
                            <div className="parte two">
                                <p> Fecha de lanzamiento </p>
                            </div>
                            <div className="parte one">
                                <p> 22 de marzo de 2024 </p>
                            </div>
                        </div>
                        <div className="tab-one">
                            <div className="parte two">
                                <p> Número de cartas </p>
                            </div>
                            <div className="parte one">
                                <p> más de 160 </p>
                            </div>
                        </div>
                        <div className="tab-two">
                            <div className="parte two">
                                <p> ¿Baraja legal estándar? </p>
                            </div>
                            <div className="parte one">
                                <p> Sí </p>
                            </div>
                        </div>
                        <div className="tab-one" style={{ height: "44px" }}>
                            <div className="parte two">
                                <p>  </p>
                            </div>
                            <div className="parte on">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div className="boton-abajo b-a-dos" style={{ display: "none" }}>
                        <button> Juego de Cartas Coleccionables </button>
                    </div>
                </>
             }
             
             />

        </>
    )
}
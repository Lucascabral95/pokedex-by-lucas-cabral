import "./CategoriaStructure.scss"
import { MdKeyboardArrowRight } from "react-icons/md"
import storeZustand from "../../../../../zustand.jsx"

export default function CategoriaStructure(props) {
      const { setReiniciarMenu } = storeZustand();

    return (
        <div className="categoria-estructura">
            <div className="contenedor">

                <div className="seccion-titulo">
                    <div className="contenedor-boton" onClick={() => setReiniciarMenu(true)}>
                        <div className="boton">
                            <MdKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <div className="texto">
                        <div className="text">
                            <p> {props.nombreCategoria} </p>
                        </div>
                    </div>
                </div>

                {props.primerosPasos &&
                    <div className="primeros-pasos">
                        <div className="titulo">
                            <p> PRIMEROS PASOS </p>
                        </div>
                        <div className="contenido">
                            {props.primerosPasos}
                        </div>
                    </div>
                }

                {props.recursos &&
                    <div className="primeros-pasos">
                        <div className="titulo">
                            <p> RECURSOS </p>
                        </div>
                        <div className="contenido">
                            {props.recursos}
                        </div>
                    </div>
                }

                {props.otrasFormasDeJugar &&
                    <div className="primeros-pasos">
                        <div className="titulo">
                            <p> OTRAS FORMAS DE JUGAR </p>
                        </div>
                        <div className="contenido">
                            {props.otrasFormasDeJugar}
                        </div>
                    </div>
                }

                {props.galeriasRecientes &&
                    <div className="primeros-pasos">
                        <div className="titulo">
                            <p> GALERÍAS RECIENTES </p>
                        </div>
                        <div className="contenido">
                            {props.galeriasRecientes}
                        </div>
                    </div>
                }

                {props.galeriasAnteriores &&
                    <div className="primeros-pasos">
                        <div className="titulo">
                            <p> GALERÍAS ANTERIORES </p>
                        </div>
                        <div className="contenido">
                            {props.galeriasAnteriores}
                        </div>
                    </div>
                }

                {props.resumen &&
                    <div className="primeros-pasos">
                        <div className="titulo">
                            <p> GALERÍAS ANTERIORES </p>
                        </div>
                        <div className="contenido">
                            {props.resumen}
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
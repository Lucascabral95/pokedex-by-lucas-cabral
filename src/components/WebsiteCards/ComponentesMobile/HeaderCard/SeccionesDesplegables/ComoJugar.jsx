import DesplegableHeader from "../DesplegableHeader";
import { FaLink } from "react-icons/fa6";

export default function ComoJugarDesplegable() {
    return (
        <>

            <DesplegableHeader

                cuerpo={
                    <>

                        <div className="div div-expansiones">
                            <div className="titulo">
                                <h3> PRIMEROS PASOS </h3>
                            </div>
                            <div className="tipo">
                                <h4> Mi Primer Combate </h4>
                            </div>
                            <div className="tipo">
                                <h4> Guia para padres y tutores </h4>
                            </div>
                            <div className="tipo">
                                <h4> Aprende a jugar </h4>
                            </div>
                            <div className="tipo">
                                <h4> Academia Top Deck </h4>
                            </div>
                        </div>

                        <div className="div div-expansiones">
                            <div className="titulo">
                                <h3> RECURSOS </h3>
                            </div>
                            <div className="tipo topJCC">
                                <h4> Libro de reglas </h4> <FaLink className="icon" />
                            </div>
                            <div className="tipo topJCC">
                                <h4> Base de datos de crtas de JCC </h4> <FaLink className="icon" />
                            </div>
                        </div>

                        <div className="div div-expansiones">
                            <div className="titulo">
                                <h3> OTRAS FORMAS DE JUGAR </h3>
                            </div>
                            <div className="tipo">
                                <h4> Pokecartura </h4>
                            </div>
                            <div className="tipo">
                                <h4> Incursion Max </h4>
                            </div>
                        </div>

                    </>
                }
            />

        </>
    )
}
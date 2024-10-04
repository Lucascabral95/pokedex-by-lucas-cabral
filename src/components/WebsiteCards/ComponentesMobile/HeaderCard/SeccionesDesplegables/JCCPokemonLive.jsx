import DesplegableHeader from "../DesplegableHeader.jsx";
import { FaLink } from "react-icons/fa6";

export default function JCCPokemonLiveDesplegable() {
    return (
        <>

            <DesplegableHeader

                cuerpo={
                    <>

                        <div className="div div-expansiones" >
                            <div className="titulo">
                                <h3> RESUMEN </h3>
                            </div>
                            <div className="tipo topJCC">
                                <h4> Pase de combate </h4>
                            </div>
                            <div className="tipo topJCC">
                                <h4> Actualizaciones </h4>
                            </div>
                            <div className="tipo topJCC">
                                <h4> Notas de parches </h4> <FaLink className="icon" />
                            </div>
                            <div className="tipo topJCC">
                                <h4> Canjea de codigos </h4> <FaLink className="icon" />
                            </div>
                        </div>

                    </>
                }

            />

        </>
    )
}
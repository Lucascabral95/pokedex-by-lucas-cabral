import Structure from "../../Structure/Structure.jsx";
import "./StructureSeccions.scss"

export default function StructureSeccions(props) {
    return (
        <>
        
            <Structure cuerpo={
                // <div className="contenedor-estructural-inicio">
                <div className={`contenedor-estructural-inicio ${props.estilo}`}>

                    {props.superior &&
                        <div className="parte-superior">
                            {props.superior}
                        </div>
                    }

                    {props.inferior &&
                        // <div className="parte-inferior ">
                        <div className={`parte-inferior ${props.estiloInferior}`}>
                            {props.inferior}
                        </div>
                    }

                    {props.medio &&
                        <div className="mitad-mitad">
                            {props.medio}
                        </div>
                    }

                    {props.ultimo &&
                        <div className="ultima-parte">
                            {props.ultimo}
                        </div>
                    }

                </div>
            } />
        </>
    )
}
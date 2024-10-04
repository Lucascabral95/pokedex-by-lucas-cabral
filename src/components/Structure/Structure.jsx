import "./Structure.scss"

export default function Structure(props) {
    return (
        <div className="contenedor-estructura">
            <div className="contenedor">
                <div className="contenedor-inicio">

                 {props.cuerpo}

                </div>
            </div>

                 {props.carousel}

        </div>
    )
}
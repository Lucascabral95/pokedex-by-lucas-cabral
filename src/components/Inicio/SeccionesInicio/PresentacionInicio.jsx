import "./PresentacionInicio.scss"

export default function PresentacionInicio(props) {
    return (
        <div className="contenedor-estructura p-0 d-flex justify-content-between align-items-center"
            style={{ backgroundImage: `url(/img/fondo-negro.png)`, height: "334px", marginTop: "90px", marginBottom: "-7px" }}>
            <div className="presentacion-inicio">
                <div className="contenedor p-0" >
                    <div className="img-img-img">
                        <img src={props.imagen} alt="Imagen presentacion" />
                    </div>
                </div>
            </div>
        </div>
    )
}
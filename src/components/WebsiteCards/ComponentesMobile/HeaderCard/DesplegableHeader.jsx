import "./DesplegableHeaderCard.scss";

export default function DesplegableHeader(props) {
    return (
        <div className="desplegable-header-card">
            <div className="contenedor">

                {props.cuerpo}

            </div>
        </div>
    );
}
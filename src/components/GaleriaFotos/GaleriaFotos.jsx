import "./GaleriaFotos.scss";
import Productos from "../../JSON/GaleriaDeProductos.json"
import { Link } from "react-router-dom";

export default function GaleriaFotos() {
    return (
        <>

            <div className="asistencia-pokemon asistencia-pokemon-galeria-de-productos">
                <div className="contenedor">

                    <div className="galeria-contenedor">
                        <div className="contenedor-de-imagen">
                            <Link to={'/card/expansions/temporal-forces'}>
                            <div className="img">
                                <img src="/img/galeria-cartas-.png" alt="Portada de la Galeria" />
                            </div>
                            <div className="titulo-foto">
                                <div className="tit">
                                    <h3> Escarlata y Purpura-Fuerzas Temporales de JCC Pokemon  </h3>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="titulo-de-galeria">
                            <h2>  Galeria de productos de JCC Pokemon </h2>
                        </div>

                        <div className="contenedor-de-productos">
                            {Productos.map((item, index) => (
                                <div className="card-product" key={index}>
                                    <Link to={`${item.link}`}>
                                        <div className="img">
                                            <img src={item.imagen} alt={item.texto} />
                                        </div>
                                        <div className="titulo-texto">
                                            <h4> {item.titulo} </h4>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
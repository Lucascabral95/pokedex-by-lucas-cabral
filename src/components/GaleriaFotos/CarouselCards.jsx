import "./CarouselCards.scss";
import Cards from "../../JSON/CarouselCartasDestacadas.json"
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function CarouselCards() {
    const [cartas, setCartas] = useState(Cards);
    const [indices, setIndices] = useState({
        primerIndice: 0,
        segundoIndice: 5
    });

    const anterior = () => {
        if (indices.primerIndice !== 0) {
            setIndices({
                primerIndice: indices.primerIndice - 1,
                segundoIndice: indices.segundoIndice - 1
            })
        } else {
            setIndices({
                primerIndice: cartas.length - 5,
                segundoIndice: cartas.length
            })
        }
    }

    const siguiente = () => {
        if (indices.segundoIndice < cartas.length) {
            setIndices({
                primerIndice: indices.primerIndice + 1,
                segundoIndice: indices.segundoIndice + 1
            })
        } else {
            setIndices({
                primerIndice: 0,
                segundoIndice: 5
            })
        }
    }

    return (
        <div className="carousel-cards">
            <div className="contenedor">

                <div className="div-cartas-destacadas">
                    <div className="cartas">
                        <p> Cartas Destacadas </p>
                    </div>
                </div>

                <div className="botones">
                    <div className="boton-izquierdo">
                        <MdKeyboardArrowLeft onClick={anterior} className="icon" />
                    </div>
                    <div className="boton-derecho">
                        <MdKeyboardArrowRight onClick={siguiente} className="icon" />
                    </div>
                </div>

                <div className="contenedor-imagenes">
                    {cartas.slice(indices.primerIndice, indices.segundoIndice).map((item, index) => (
                        <div className="contenedor" key={index}>
                            <Link to={item.link}>
                                <div className="img">
                                    <img src={item.imagen} alt={item.titulo} />
                                </div>
                                <div className="contenido">
                                    <div className="titulo">
                                        <h4> {item.titulo} </h4>
                                    </div>
                                    <div className="descripcion">
                                        <p> {item.descripcion} </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="contenedor-imagenes contenedor-imagenes-mobile" style={{ display: "none" }}>
                    {cartas.map((item, index) => (
                        <div className="contenedor" key={index}>
                            <Link to={item.link}>
                                <div className="img">
                                    <img src={item.imagen} alt={item.titulo} />
                                </div>
                                <div className="contenido">
                                    <div className="titulo">
                                        <h4> {item.titulo} </h4>
                                    </div>
                                    <div className="descripcion">
                                        <p> {item.descripcion} </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
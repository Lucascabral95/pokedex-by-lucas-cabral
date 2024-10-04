import "./Carousel.scss"
import CarouselDeCartas from "../../../../JSON/CarouselCartas.json";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function CarouselStructure(props) {
    const [currentElements, setCurrentElements] = useState({
        primerElemento: props.primerElemento,
        ultimoElemento: props.ultimoElemento
    });
    
    const paginaAnterior = () => {
        if (currentElements.primerElemento !== 0) {
            setCurrentElements({
                primerElemento: currentElements.primerElemento - 1,
                ultimoElemento: currentElements.ultimoElemento - 1
            })
        }
    }

    const paginaSiguiente = () => {
        if (currentElements.ultimoElemento < CarouselDeCartas.length) {
            setCurrentElements({
                primerElemento: currentElements.primerElemento + 1,
                ultimoElemento: currentElements.ultimoElemento + 1
            })
        }
    }

    return (
        <div className="carousel-de-cartas">
            <div className="contenedor">

                <div className="boton-pagina">
                    <div className="boton b-izquierdo" onClick={paginaAnterior} >
                        <MdOutlineKeyboardArrowRight className="icon" 
                        style={{ transform: "rotate(180deg)", justifyContent: "flex-start" }} />
                    </div>
                </div>

                <div className="contenedor-de-imagenes">
                    {CarouselDeCartas.slice(currentElements.primerElemento, currentElements.ultimoElemento).map((carta) => (
                        <div className="contenedor-de-carta">
                            <div className="img">
                                <img src={carta.imagen} alt={carta.descripcion} />
                            </div>
                            <div className="boton">
                                <div className="contenedor-boton">
                                    <FaMagnifyingGlass className="icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="boton-pagina">
                    <div className="boton b-derecho" onClick={paginaSiguiente}>
                        <MdOutlineKeyboardArrowRight className="icon" style={{ justifyContent: "flex-end" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}
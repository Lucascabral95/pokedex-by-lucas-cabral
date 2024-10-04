import Carousel from "../Structure/Carousel";
import Structure from "../Structure/Structure";
import "./Inicio.scss";
import destacados from "../../JSON/Destacados.json";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Inicio() {
    const [onCarousel, setOnCarousel] = useState(false);
    const [currentIndexs, setCurrentIndexs] = useState({
        primero: 0,
        ultimo: 5
    });

    const handleAnterior = () => {
        if (currentIndexs.primero === 0) {
            setCurrentIndexs({
                primero: destacados.length - 6,
                ultimo: destacados.length - 1
            })
        } else {
            setCurrentIndexs({
                primero: currentIndexs.primero - 1,
                ultimo: currentIndexs.ultimo - 1
            })
        }
    }

    const handleSiguiente = () => {
        if (currentIndexs.ultimo === destacados.length - 1) {
            setCurrentIndexs({
                primero: 0,
                ultimo: 5
            })
        } else {
            setCurrentIndexs({
                primero: currentIndexs.primero + 1,
                ultimo: currentIndexs.ultimo + 1
            })
        }
    }

    return (
        <>
            <Structure cuerpo={
                <>
                    <div className="div-imagen-mayor">
                        <Link to={'/card/expansions/temporal-forces'}>
                            <div className="img">
                                <img src="/img/fuerzas-temporales.png" alt="Fuerza temporales" />
                            </div>
                        </Link>
                        <div className="texto">
                            <div className="tt">
                                <div className="title">
                                    <h3> Nuevo Pokémon Paradoje distorsionan el espacio-tiempo en Escarlata y Purpura - Fuerzas especiales  </h3>
                                </div>
                                <div className="text">
                                    <p> Descubre nuevos Pokemon del pasado y del futuro, el regreso de las poderosas cartas de AS TACTICO
                                        y mucho mas en la proxima expansion de JCC Pokemon. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-imagenes-menores">
                        <div className="contenedor ogerpon">
                            <Link to={'/noticias/ogerpon'}>
                                <div className="img">
                                    <img src="/img/inicio-gif.gif" alt="GIF Ogerpon" />
                                </div>
                                <div className="texto">
                                    <div className="tt">
                                        <h3> Ogerpon y sus máscaras llegan a JCC Pokémon </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="contenedor c-f-t">
                            <Link to={'/noticias/escarlata-purpura'}>
                                <div className="img">
                                    <img src="/img/fuerzas-temporales-cartas.png" alt="Cartas Fuerzas Temporales" />
                                </div>
                                <div className="texto">
                                    <div className="tt">
                                        <h3> Escarlata y Púrpura Feruzas Temporales en JCC Pokémon </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="contenedor scarlatito">
                            <Link to={'/noticias/sprigatito'}>
                                <div className="img">
                                    <img src="/img/poke-scarlet-violet.png" alt="Scargatito" />
                                </div>
                                <div className="texto">
                                    <div className="tt">
                                        <h3> Live Añade a la Sprigatito de Liko a tu equipo </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </>
            } />

            <Carousel titulo="Pokemons destacados"
                carousel={
                    <div className="carousel-pokemons-destacados" onMouseOver={() => setOnCarousel(true)} onMouseLeave={() => setTimeout(() => setOnCarousel(false), 300)}>
                        {destacados.slice(currentIndexs.primero, currentIndexs.ultimo).map((item, index) => (
                            <div className="contenedor" key={index} style={{ width: index === 2 ? "28%" : "18%", height: index === 2 ? "370px" : "330px" }}>
                                <div className="img-img">
                                    <img src={item.imagen} alt={item.nombre} />
                                </div>
                                <div className="contenido" onClick={() => window.location.href = `/detalle/${item.nombre.toLowerCase()}`}
                                    style={{ cursor: "pointer", height: index === 2 ? "240px" : "110px", backgroundColor: index === 2 ? "#232323" : "#313131" }}>
                                    <div className="name-id">
                                        <p> {item.nombre} </p> <p style={{ display: index !== 2 ? "none" : "block" }}> {item.id} </p>
                                    </div>
                                    <div className="tipo">
                                        <div className="titulo">
                                            <h4 style={{ display: index !== 2 ? "none" : "block" }}> Tipo </h4>
                                        </div>
                                        <div className="tipos" style={{ display: index !== 2 ? "none" : "block" }}>
                                            <div className="d-flex">
                                                {item.tipos.map((tipo, index) => (
                                                    <div className="con" key={index}>
                                                        <p> {tipo} </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tipo" style={{ display: index !== 2 ? "none" : "flex" }}>
                                        <div className="titulo">
                                            <h4>  Habilidad </h4>
                                        </div>
                                        <div className="habilidad">
                                            <div className="div">
                                                <p> {item.Habilidades[0]} {item.Habilidades[1] ? " / " : ""} {item.Habilidades[1]} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {onCarousel &&
                            <div className="butts">
                                <div className="bu-div" style={{ marginLeft: "50px" }} onClick={handleAnterior}>
                                    <MdKeyboardArrowLeft className="i-i" />
                                </div>
                                <div className="bu-div" style={{ marginRight: "50px" }} onClick={handleSiguiente}>
                                    <MdKeyboardArrowRight className="i-i" />
                                </div>
                            </div>
                        }


                    </div>
                }
            />
        </>
    )
}
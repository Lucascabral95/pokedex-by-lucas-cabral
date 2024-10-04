import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import "./MovieDetailContainer.scss";
import { Link, useParams } from "react-router-dom";
import Peliculas from "../../../JSON/Peliculas.json"
import { useEffect, useState } from "react";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions.jsx";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function MovieDetailContainer() {
    const { id } = useParams();
    const [infoPelicula, setInfoPelicula] = useState({});
    const [idActual, setIdActual] = useState(id);

    useEffect(() => {
        const filtrarDatos = Peliculas.find(i => i.id === parseInt(idActual));
        setInfoPelicula(filtrarDatos);
    }, [infoPelicula, id, idActual]);

    const peliculaAnterior = () => {
        if (idActual !== 1) {
            setIdActual(infoPelicula.id - 1);
        }
    }

    const peliculaSiguiente = () => {
        if (idActual < 22) {
            setIdActual(infoPelicula.id + 1);
        }
    }

    return (
        <>

            <PresentacionInicio imagen={`${infoPelicula.imagen}`} />

            <StructureSeccions

                superior={
                    <>

                        <div className="contenedor-de-botones-peliculas" style={{ justifyContent: infoPelicula.id !== 1 ? 'space-between' : 'flex-end' }}>
                            {infoPelicula.id !== 1 &&
                                <div className="boton boton-anterior" onClick={peliculaAnterior}>
                                    <div className="icono">
                                        <IoIosArrowDropleftCircle className="icon" />
                                    </div>
                                    <div className="texto">
                                        <p> <span>Pelicula</span> anterior </p>
                                    </div>
                                    {/* <div className="texto" onClick={peliculaAnterior}>
                                        <p> <span>Pelicula</span> anterior </p>
                                    </div> */}
                                </div>
                            }
                            {infoPelicula.id !== 22 &&
                                <div className="boton boton-siguiente" onClick={peliculaSiguiente}>
                                    {/* <div className="texto" onClick={peliculaSiguiente}>
                                        <p> <span>Pelicula</span> siguiente </p>
                                    </div> */}
                                    <div className="texto">
                                        <p> <span>Pelicula</span> siguiente </p>
                                    </div>
                                    <div className="icono">
                                        <IoIosArrowDropleftCircle className="icon" style={{ transform: "rotate(180deg)" }} />
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="subtitulo-pelicula">
                            <div className="subtitulo">
                                <h4> Fecha de lanzamiento: {infoPelicula.año} </h4>
                            </div>
                        </div>
                        <div className="titulo-pelicula">
                            <div className="titulo">
                                <h3> {infoPelicula.pelicula} </h3>
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Disfruta viendo la película Pokémon Los secretos de la selva en <span className="texto-celeste">iTunes</span> y <span className="texto-celeste">Google Play</span>.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">{infoPelicula.sinopsis} </p>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="contenedor-imagen-pelicula">
                            <div className="img">
                                <img src={infoPelicula.imagenPelicula} alt={infoPelicula.pelicula} />
                            </div>
                        </div>
                    </>
                }

            />

        </>
    )
}
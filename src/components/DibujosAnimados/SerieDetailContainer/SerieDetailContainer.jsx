import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions";
import "./SerieDetailContainer.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Series from "../../../JSON/Series.json"
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function SerieDetailContainer() {
    const { id } = useParams();
    const [infoSerie, setInfoSerie] = useState({});
    const [idActual, setIdActual] = useState(id);

    useEffect(() => {
        const filtrarDatos = Series.find(i => i.id === parseInt(idActual));
        setInfoSerie(filtrarDatos);
    }, [id, infoSerie, idActual]);

    const serieAnterior = () => {
        if (id !== 1) {
            setIdActual(infoSerie.id - 1);
        }
    }

    const serieSiguiente = () => {
        if (id < 25) {
            setIdActual(infoSerie.id + 1);
        }
    }

    return (
        <>

            <PresentacionInicio imagen={infoSerie.imagen} />

            <StructureSeccions

                superior={
                    <>
                        <div className="contenedor-de-botones-peliculas" style={{ justifyContent: infoSerie.id !== 1 ? 'space-between' : 'flex-end' }}>
                            {infoSerie.id !== 1 &&
                                <div className="boton boton-anterior" onClick={serieAnterior}>
                                    <div className="icono">
                                        <IoIosArrowDropleftCircle className="icon" />
                                    </div>
                                    <div className="texto">
                                        <p> <span>Pelicula</span> anterior </p>
                                    </div>
                                    {/* <div className="texto" onClick={serieAnterior}>
                                        <p> <span>Pelicula</span> anterior </p>
                                    </div> */}
                                </div>
                            }
                            {infoSerie.id !== 25 &&
                                <div className="boton boton-siguiente" onClick={serieSiguiente}>
                                    {/* <div className="texto" onClick={serieSiguiente}>
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
                                <h4> Fecha de lanzamiento: {infoSerie.año} </h4>
                            </div>
                        </div>
                        <div className="titulo-pelicula">
                            <div className="titulo">
                                <h3> {infoSerie.pelicula} </h3>
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Disfruta viendo la película Pokémon Los secretos de la selva en <span className="texto-celeste">iTunes</span> y <span className="texto-celeste">Google Play</span>.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">{infoSerie.sinopsis} </p>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="contenedor-imagen-pelicula">
                            <div className="img">
                                <img src={infoSerie.imagenPelicula} alt={infoSerie.pelicula} />
                            </div>
                        </div>
                    </>
                }

            />

        </>
    )
}
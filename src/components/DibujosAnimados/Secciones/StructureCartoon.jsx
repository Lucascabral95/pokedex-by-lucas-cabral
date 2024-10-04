import Structure from "../../Structure/Structure"
import "./StructureCartoon.scss"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

export default function StructureCartoon(props) {
    const [data, setData] = useState(props.mapeo);
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);

    useEffect(() => {
        setLoadingSkeleton(true);
        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 600);
    }, []);

    return (
        <>

            <Structure cuerpo={

                <div className="StructureCartoon">
                    <div className="contenedor-img-contenido">
                        <div className="img-img">
                            <img src={props.imagen} alt="Portada" />
                        </div>
                        <div className="contenido">
                            <div className="titulo">
                                <h3> {props.titulo} </h3>
                            </div>
                            {props.texto &&
                                <div className="texto">
                                    <p> {props.subtitulo} </p>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="contenedor-de-peliculas">
                        {data.map((item, index) => (
                            <div className="cont-pelicula" key={index}>
                                <Link to={`${item.link}`}>
                                    <div className="img-img">
                                        {loadingSkeleton ? <Skeleton width={"100%"} height={120.16} /> : <img src={item.imagen} alt={item.pelicula} />}
                                    </div>
                                    <div className="ano">
                                        <p> {item.año} </p>
                                    </div>
                                    <div className="titulo">
                                        <p> {item.pelicula} </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            } />

        </>
    )
}
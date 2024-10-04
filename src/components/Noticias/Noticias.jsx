import "./Noticias.scss"
import StructureSeccions from "../Inicio/SeccionesInicio/StructureSeccions.jsx"
import { Link } from "react-router-dom"
import NoticiasPokemon from "../../JSON/NoticiasPokemon.json";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Structure from "../Structure/Structure.jsx";
import Skeleton from "react-loading-skeleton";

export default function Noticias() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
    const [currentCategory, setCurrentCategory] = useState('Todas las noticias');
    const [activeCategoria, setActiveCategoria] = useState(false);
    const [data, setData] = useState([]);
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [indice, setIndice] = useState({
        primero: 0,
        ultimo: 9,
        paginaActual: 0
    });

    useEffect(() => {
        if (categoriaSeleccionada === "Todas") {
            setData(NoticiasPokemon);
            setCurrentCategory('Todas las noticias');
        } else if (categoriaSeleccionada === "Coleccionable") {
            let filtradoColeccionable = NoticiasPokemon.filter((noticia) => noticia.tipo === "Coleccionable");
            setData(filtradoColeccionable);
            setCurrentCategory('Juego de Cartas Coleccionables');
        } else if (categoriaSeleccionada === "Eventos") {
            let filtradoEventos = NoticiasPokemon.filter((noticia) => noticia.tipo === "Eventos");
            setData(filtradoEventos);
            setCurrentCategory('Eventos de Play! Pokemon');
        } else if (categoriaSeleccionada === "Dibujos") {
            let filtradoDibujos = NoticiasPokemon.filter((noticia) => noticia.tipo === "Dibujos");
            setData(filtradoDibujos);
            setCurrentCategory('Dibujos animados');
        }
        // }, [categoriaSeleccionada, currentCategory, indice, data]);
    }, [categoriaSeleccionada, currentCategory, indice]);

    useEffect(() => {
        setLoadingSkeleton(true);
        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 200);
    }, [indice, categoriaSeleccionada]);

    const cargarNoticias = () => {
        if (indice.paginaActual <= Math.ceil(data.length / indice.ultimo)) {
            setIndice({
                ultimo: indice.ultimo + 9,
                paginaActual: indice.paginaActual + 1
            })
        }
    }

    const comportamientoCategoria = (value) => {
        setActiveCategoria(!activeCategoria);
        setCategoriaSeleccionada(value);
        if (value !== 'Todas') {
            setIndice({
                primero: 0,
                ultimo: 9,
                paginaActual: 1
            })
        } else {
            setIndice({
                primero: 0,
                ultimo: 9,
                paginaActual: 0
            })
        }
    }

    return (
        <>

            <div className="middle-desktop">
                <StructureSeccions
                    medio={
                        <>
                            <div className="middle">
                                <Link to="/noticias/escarlata-purpura">
                                    <div className="img-img">
                                        <img src="/img/fuerzas-temporales-cartas.png" alt="Fuerzas Temporales Cartas" />
                                    </div>
                                    <div className="contenido">
                                        <p className="fecha">21 de marzo de 2024</p>
                                        <p className="titulo"> Juego de Cartas Coleccionables </p>
                                        <div className="texto">
                                            <h4> El Juego de Cartas Coleccionables Pokemon Live incorpora Escarlata Y Purpura-Fuerzas
                                                Temporales de JCC Pokemon </h4>
                                        </div>
                                        <p className="final"> La nueva expansión incluye increíbles cartas de AS TÁCTICO, Pokémon Teracristal, y Pokémon del pasado y del futuro. </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="middle">
                                <Link to="/noticias/estrategias-para-las-barajas-coleccionables">
                                    <div className="img-img">
                                        <img src="/img/cartas-live.png" alt="Cartas Live" />
                                    </div>
                                    <div className="contenido">
                                        <p className="fecha">19 de marzo de 2024</p>
                                        <p className="titulo"> Juego de Cartas Coleccionables </p>
                                        <div className="texto">
                                            <h4> Estrategias para las barajas iniciales del Juego de Cartas Coleccionables Pokemon Live de marzo
                                                de 2024 </h4>
                                        </div>
                                        <p className="final"> Aprovechá el poder legedndario de Giratina V-ASTRO, caldea el ambiente con Charizard ex y mucho más. </p>
                                    </div>
                                </Link>
                            </div>
                        </>
                    }
                />
            </div>

            <Structure cuerpo={
                <>
                    <div className="middle middle-mobile" style={{ display: 'none' }}>
                        <Link to="/noticias/escarlata-purpura">
                            <div className="img-img">
                                <img src="/img/fuerzas-temporales-cartas.png" alt="Fuerzas Temporales Cartas" />
                            </div>
                            <div className="contenido">
                                <p className="fecha">21 de marzo de 2024</p>
                                <p className="titulo"> Juego de Cartas Coleccionables </p>
                                <div className="texto">
                                    <h4> El Juego de Cartas Coleccionables Pokemon Live incorpora Escarlata Y Purpura-Fuerzas
                                        Temporales de JCC Pokemon </h4>
                                </div>
                                <p className="final"> La nueva expansión incluye increíbles cartas de AS TÁCTICO, Pokémon Teracristal, y Pokémon del pasado y del futuro. </p>
                            </div>
                        </Link>
                    </div>
                    <div className="middle middle-mobile" style={{ display: 'none' }}>
                        <Link to="/noticias/barajas-iniciales">
                            <div className="img-img">
                                <img src="/img/cartas-live.png" alt="Cartas Live" />
                            </div>
                            <div className="contenido">
                                <p className="fecha">19 de marzo de 2024</p>
                                <p className="titulo"> Juego de Cartas Coleccionables </p>
                                <div className="texto">
                                    <h4> Estrategias para las barajas iniciales del Juego de Cartas Coleccionables Pokemon Live de marzo
                                        de 2024 </h4>
                                </div>
                                <p className="final"> Aprovechá el poder legedndario de Giratina V-ASTRO, caldea el ambiente con Charizard ex y mucho más. </p>
                            </div>
                        </Link>
                    </div>
                </>
            } />

            <Structure cuerpo={
                <div className="interior-ultima-parte" style={{ marginTop: '-300px', paddingTop: '40px' }}>
                    <div className="line">
                        <div className="linea-delimitante">
                        </div>
                    </div>
                    <div className="botones-de-categorias">
                        <div className="but" onClick={() => setActiveCategoria(!activeCategoria)}>
                            <button> {currentCategory} </button>
                            <div className="icon">
                                <MdKeyboardArrowDown className="iconn" />
                            </div>
                        </div>
                    </div>

                    <div className="botones-de-categorias-extras"
                        style={{ display: activeCategoria ? 'block' : 'none' }}>
                        <div className="botones-de-categorias bdc-dos" onClick={() => comportamientoCategoria('Todas')} >
                            <div className="but" >
                                <button> Todas las noticias </button>
                            </div>
                        </div>
                        <div className="botones-de-categorias bdc-dos" onClick={() => comportamientoCategoria('Coleccionable')} >
                            <div className="but" >
                                <button> Juego de Cartas Coleccionables </button>
                            </div>
                        </div>
                        <div className="botones-de-categorias bdc-dos" onClick={() => comportamientoCategoria('Dibujos')}>
                            <div className="but" >
                                <button> Dibujos Animados </button>
                            </div>
                        </div>
                        <div className="botones-de-categorias bdc-dos" onClick={() => comportamientoCategoria('Eventos')} >
                            <div className="but" >
                                <button> Eventos de Play! Pokémon </button>
                            </div>
                        </div>
                    </div>

                    <div className="contenedor">

                        {data.slice(indice.primero, indice.ultimo).map((item, index) => (
                            <div className="un-tercio" key={index}>
                                <Link to={item.link}>
                                    <div className="img-img">
                                        {loadingSkeleton ? <Skeleton width={283.19} height={160.2} /> : <img src={item.imagen} alt={item.descripcion} />}
                                    </div>
                                    <div className="contenido">
                                        <p className="fecha"> {item.fecha} </p>
                                        <p className="titulo"> {item.subtitulo} </p>
                                        <div className="texto">
                                            <h4> {item.titulo} </h4>
                                        </div>
                                        <p className="final"> {item.cuerpo} </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {indice.paginaActual < Math.ceil(data.length / indice.ultimo) &&
                        <div className="boton-mostrar-mas" onClick={cargarNoticias}>
                            <div className="buttt">
                                <button> Cargar más noticias </button>
                            </div>
                        </div>
                    }
                </div>
            } />
        </>
    )
}
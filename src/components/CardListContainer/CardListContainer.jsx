import "./CardListContainer.scss"
import { useState, useEffect } from "react"
import { TiTick } from "react-icons/ti";
import axios from "axios";
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom";
import { RiArrowLeftSFill } from "react-icons/ri";
import BusquedaCategorias from "./BusquedaCategorias/BusquedaCategorias";

export default function CardListContainer() {
    const [tipoSeleccionado, setTipoSeleccionado] = useState({
        planta: false,
        fuego: false,
        agua: false,
        rayo: false,
        psiquico: false,
        lucha: false,
        oscura: false,
        metalica: false,
        incolora: false,
        hada: false,
        dragon: false
    });
    const [typess, setTypess] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cantidadAMostrar, setElementosAMostrar] = useState(12);
    const [cartasInfo, setCartasInfo] = useState({
        total_cartas: 0,
        total_pages: 0
    });
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [arrayTipos, setArrayTipos] = useState([]);
    const [busquedaActive, setBusquedaActive] = useState({
        valorVerdadero: false,
        valorRepetitivo: false
    });

    useEffect(() => {
        async function fetchPokemonsByType() {
            try {
                let arr = [];
                let cantidadDeCartas = 0;

                for (const tipo of arrayTipos) {
                    let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=types:${tipo}&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                    arr.push(...res.data.data);
                    cantidadDeCartas += res.data.totalCount
                }

                setTypess(arr);
                const totalCount = cantidadDeCartas

                setCartasInfo({
                    total_cartas: totalCount,
                    total_pages: Math.ceil(totalCount / cantidadAMostrar) - 1
                });
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            }
        }

        fetchPokemonsByType();
        // }, [currentPage, busquedaActive, arrayTipos]);
    }, [currentPage, busquedaActive]);

    useEffect(() => {
        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 1400);
        setLoadingSkeleton(true);
        // }, [currentPage, busquedaActive, arrayTipos]);
    }, [currentPage, busquedaActive]);

    const handlePaginaAnterior = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handlePaginaSiguiente = () => {
        setCurrentPage(currentPage + 1);
    }

    const handleRestablecer = () => {
        setArrayTipos([])
        setTipoSeleccionado({
            planta: false,
            fuego: false,
            agua: false,
            rayo: false,
            psiquico: false,
            lucha: false,
            oscura: false,
            metalica: false,
            incolora: false,
            hada: false,
            dragon: false
        })
    }

    const addType = (tipo) => {
        if (arrayTipos.includes(tipo)) {
            setArrayTipos(arrayTipos.filter(tipoInArray => tipoInArray !== tipo));
            console.log(`${tipo} eliminado de la lista de tipos`, arrayTipos);
        } else {
            setArrayTipos([...arrayTipos, tipo]);
            console.log(`${tipo} agregado a la lista de tipos`, arrayTipos);
        }
    }

    const handleSearch = () => {
        setBusquedaActive({
            valorVerdadero: true,
            valorRepetitivo: !busquedaActive.valorRepetitivo
        })

        console.log(`Valor verdadero: ${busquedaActive.valorVerdadero}`);
        console.log(`Valor repetitivo: ${busquedaActive.valorRepetitivo}`);
    }

    return (
        <>
            <div className="main main-cardlist" style={{ padding: '40px 0px 0px', marginTop: "0" }}>
                <div className="itemListContainer" style={{ padding: '0px 0px 0px', marginTop: "0" }}>
                    <div className="card-container">

                        <div className="contenedor-titulo-list-card">
                            <h2 className="titulo"> Base de datos de cartas TCG </h2>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mayor-card-list">
                <div className="contenedor-card-list">

                    <div className="contenedor-parte-superior">
                        <div className="parte-superior first">
                            <div className="titulo">
                                <h3 className="title"> Búsqueda de nombre de la carta y palabra clave </h3>
                            </div>
                            <div className="inputs">
                                <div className="div-input">
                                    <p> Nombre de la carta </p>
                                    <input type="text" />
                                </div>
                                <div className="div-input">
                                    <p> Texto de la carta  </p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="parte-superior second">
                            <div className="inputs-2">
                                <div className="textoo-titulo" style={{ display: 'none' }} >
                                    <h3 className="title"> Evolución </h3>
                                </div>
                                <div className="textoo">
                                    <p> Evoluciona de  </p>
                                </div>
                                <div className="div-input">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="parte-inferior">
                        <div className="tipo-de-energia">
                            <div className="title"> Tipo de energía </div>
                        </div>

                        <div className="tipo-energia-elementos">
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.planta ? '0 0 10px 5px rgba(0, 255, 0, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType('grass'); setTipoSeleccionado({ ...tipoSeleccionado, planta: !tipoSeleccionado.planta }) }} >
                                <div className="icono" style={{ backgroundPosition: "-25px -50px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Planta </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.planta ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.planta ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.fuego ? '0 0 10px 5px rgba(255, 0, 0, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType('fire'); setTipoSeleccionado({ ...tipoSeleccionado, fuego: !tipoSeleccionado.fuego }) }}>
                                <div className="icono" style={{ backgroundPosition: "0px 0px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Fuego </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.fuego ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.fuego ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.agua ? '0 0 10px 5px rgba(0, 0, 255, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType('water'); setTipoSeleccionado({ ...tipoSeleccionado, agua: !tipoSeleccionado.agua }) }} >
                                <div className="icono" style={{ backgroundPosition: "-75px -50px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Agua </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.agua ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.agua ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.rayo ? '0 0 10px 5px rgba(255, 255, 0, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType('lightning'); setTipoSeleccionado({ ...tipoSeleccionado, rayo: !tipoSeleccionado.rayo }) }}>
                                <div className="icono" style={{ backgroundPosition: "-50px -50px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Rayo </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.rayo ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.rayo ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.psiquico ? '0 0 10px 5px rgba(255, 0, 255, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType('psychic'); setTipoSeleccionado({ ...tipoSeleccionado, psiquico: !tipoSeleccionado.psiquico }) }} >
                                <div className="icono" style={{ backgroundPosition: "-75px -25px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Psíquico </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.psiquico ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.psiquico ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.lucha ? '0 0 10px 5px rgba(255, 127, 80, 0.5)' : '0px 0px 0px 0px #ff7f50' }}
                                onClick={() => { addType('fighting'); setTipoSeleccionado({ ...tipoSeleccionado, lucha: !tipoSeleccionado.lucha }) }} >
                                <div className="icono" style={{ backgroundPosition: "-50px -25px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Lucha </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.lucha ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.lucha ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.oscura ? '0 0 10px 5px rgba(77, 124, 148, 0.5)' : '0px 0px 0px 0px #4D7C94' }}
                                onClick={() => { addType('darkness'); setTipoSeleccionado({ ...tipoSeleccionado, oscura: !tipoSeleccionado.oscura }) }} >
                                <div className="icono" style={{ backgroundPosition: "0px -50px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Oscura </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.oscura ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.oscura ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.metalica ? '0 0 10px 5px rgba(186, 179, 166, 0.5)' : '0px 0px 0px 0px #BAB3A6' }}
                                onClick={() => { addType('metal'); setTipoSeleccionado({ ...tipoSeleccionado, metalica: !tipoSeleccionado.metalica }) }} >
                                <div className="icono" style={{ backgroundPosition: "-75px 0px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Metálica </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.metalica ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.metalica ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.incolora ? '0 0 10px 5px rgba(230, 226, 224, 0.5)' : '0px 0px 0px 0px #E6E2E0' }}
                                onClick={() => { addType('colorless'); setTipoSeleccionado({ ...tipoSeleccionado, incolora: !tipoSeleccionado.incolora }) }} >
                                <div className="icono" style={{ backgroundPosition: "-25px 0px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Incolora </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.incolora ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.incolora ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.hada ? '0 0 10px 5px rgba(166, 70, 70, 0.5)' : '0px 0px 0px 0px #aa4646' }}
                                onClick={() => { addType('fairy'); setTipoSeleccionado({ ...tipoSeleccionado, hada: !tipoSeleccionado.hada }) }} >
                                <div className="icono" style={{ backgroundPosition: "50px 0px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Hada </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.hada ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.hada ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor" style={{ boxShadow: tipoSeleccionado.dragon ? '0 0 10px 5px rgba(200, 161, 74, 0.5)' : '0px 0px 0px 0px #C8A14A' }}
                                onClick={() => { addType('dragon'); setTipoSeleccionado({ ...tipoSeleccionado, dragon: !tipoSeleccionado.dragon }) }} >
                                <div className="icono" style={{ backgroundPosition: "0px -25px" }}>
                                </div>
                                <div className="tipo-texto">
                                    <p> Dragón </p>
                                </div>
                                <div className="cont-circulo">
                                    <div className="circulo" style={{ backgroundColor: tipoSeleccionado.dragon ? 'white' : '#4B4B4B' }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado.dragon ? 'block' : 'none' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="restablecer-buscar">
                        <div className="boton-restablecer">
                            <button onClick={handleRestablecer}> Restablecer </button>
                        </div>
                        <div className="boton-buscar">
                            <button onClick={handleSearch}> Buscar </button>
                        </div>
                    </div>

                </div>
            </div>

            <BusquedaCategorias />

            {arrayTipos.length !== 0 && busquedaActive.valorVerdadero === true &&
                <div className="main p-0" style={{ marginTop: '-70px' }}>
                    <div className="itemListContainer" style={{ padding: '20px 0px' }}>

                        <div className="card p-0">
                            <div className="title-titulo-card" style={{ margin: '16px 0px 12px' }}>
                                <h2 className="text-center" style={{ fontSize: '28px', color: '#A4A4A4' }}> Resultados de la busqueda </h2>
                            </div>

                            <div className="cont">
                                {typess.map((type, index) => (
                                    <div className="imagen" key={index}>
                                        {loadingSkeleton ?
                                            <Skeleton className="skeleton-cardList" />
                                            :
                                            <Link to={`/card/detail/${type.id}`}>
                                                <img src={type.images.small} alt={type.name} />
                                            </Link>
                                        }
                                    </div>
                                ))}
                            </div>

                            <div className="botones-de-card">
                                <div className="contenedor">
                                    <div className="boton" onClick={handlePaginaAnterior} >
                                        <RiArrowLeftSFill className="icono" />
                                    </div>
                                    <div className="numero-pagina">
                                        {loadingSkeleton ?
                                            <Skeleton width={60} height={20} style={{ backgroundColor: '#30A7D7' }} />
                                            :
                                            <span> {currentPage} de {cartasInfo.total_pages} </span>
                                        }
                                    </div>
                                    <div className="boton" onClick={handlePaginaSiguiente} >
                                        <RiArrowLeftSFill className="icono" style={{ transform: 'rotate(180deg)' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }

        </>
    )
}
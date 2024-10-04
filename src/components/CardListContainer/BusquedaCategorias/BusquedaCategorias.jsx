import "./BusquedaCategorias.scss"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { RiArrowLeftSFill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

export default function BusquedaCategorias() {
    const [activeCategory, setActiveCategory] = useState({
        tipo: false,
        rareza: false,
        PS: false,
        costoDeRetirada: false,
        costoTotalDelAtaque: false,
        debilidadYResistencia: false,
        debilidades: false,
        busquedaPokemon: false,
        busquedaPokemonID: false
    })
    const [puntosEstadisticas, setPuntosEstadisticas] = useState({
        ps: 0,
        costoDeRetirada: 3,
        costoTotalAtaque: 3,
        debilidades: ''
    });
    const [tipoDeCartaSeleccionada, setTipoDeCartaSeleccionada] = useState({
        BREAK: false,
        baby: false,
        basic: false,
        EX: false,
        GX: false,
        goldenrodGameCorner: false,
        item: false,
        LEGEND: false,
        levelUp: false,
        MEGA: false,
        pokemonTool: false,
        pokemonToolF: false,
        rapidStrike: false,
        restored: false,
        rocketSecretMachine: false,
        singleStrike: false,
        special: false,
        stadium: false,
        stage1: false,
        stage2: false,
        supporter: false,
        TAGTEAM: false,
        technicalMachine: false,
        V: false,
        VMAX: false
    });
    const [rarezaSeleccionada, setRarezaSeleccionada] = useState({
        amazingRare: false,
        common: false,
        LEGEND: false,
        promo: false,
        Rare: false,
        rareACE: false,
        rareBREAK: false,
        rareHolo: false,
        rareHoloEX: false,
        rareHoloGX: false,
        rareHoloLVX: false,
        rareHoloStar: false,
        rareHoloV: false,
        rareHoloVMAX: false,
        rarePrime: false,
        rarePrismStar: false,
        rareRainbow: false,
        rareShining: false,
        rareShiny: false,
        rareShinyGX: false,
        rareUltra: false,
        unCommon: false
    });
    const [datos, setDatos] = useState([])
    const [tipoDeCarta, setTipoDeCarta] = useState([]);
    const [rareza, setRareza] = useState([]);
    const [tipoSeleccionado2, setTipoSeleccionado2] = useState({
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
    const [arrayTipos2, setArrayTipos2] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [cartasInfo, setCartasInfo] = useState({
        total_cartas: 0,
        total_pages: 0
    });
    const [cantidadAMostrar, setElementosAMostrar] = useState(12);
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [nombrePokemonBusqueda, setNombrePokemonBusqueda] = useState('');
    const [IDBusqueda, setIDBusqueda] = useState('');

    useEffect(() => {
        async function fetchPokemonsByType() {
            try {
                if (activeCategory.rareza) {
                    let arr = []
                    let cantidadDeCartas = 0;
                    for (const object of rareza) {
                        let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=rarity:"${object}"&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                        arr.push(...res.data.data);
                        cantidadDeCartas += res.data.totalCount
                    }
                    setDatos(arr)

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                } else if (activeCategory.tipo) {
                    let arr = [];
                    let cantidadDeCartas = 0;
                    for (const object of tipoDeCarta) {
                        let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=subtypes:"${object}"&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                        arr.push(...res.data.data);
                        cantidadDeCartas += res.data.totalCount
                    }
                    setDatos(arr);

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                } else if (activeCategory.PS) {
                    let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=hp:[${puntosEstadisticas.ps} TO *]&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                    let cantidadDeCartas = res.data.totalCount
                    setDatos(res.data.data);

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                } else if (activeCategory.costoDeRetirada) {
                    let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=convertedRetreatCost:[${puntosEstadisticas.costoDeRetirada} TO *]&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                    let cantidadDeCartas = res.data.totalCount
                    setDatos(res.data.data);

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                } else if (activeCategory.costoTotalDelAtaque) {
                    const res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=attacks.convertedEnergyCost:[${puntosEstadisticas.costoTotalAtaque} TO 5]&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                    let cantidadDeCartas = res.data.totalCount
                    setDatos(res.data.data);

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                } else if (activeCategory.debilidades) {
                    let arr = [];
                    let cantidadDeCartas = 0;
                    for (const object of arrayTipos2) {
                        let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=weaknesses.type:"${object}"&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                        arr.push(...res.data.data);
                        cantidadDeCartas += res.data.totalCount
                    }
                    setDatos(arr);

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                } else if (activeCategory.busquedaPokemon) {
                    let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${nombrePokemonBusqueda.replace(/\s/g, '')}&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                    let cantidadDeCartas = res.data.totalCount
                    setDatos(res.data.data);

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                } else if (activeCategory.busquedaPokemonID) {
                    let res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${IDBusqueda.replace(/\s/g, '')}&pageSize=${cantidadAMostrar}&page=${currentPage}`);
                    let cantidadDeCartas = res.data.totalCount
                    setDatos(res.data.data);

                    setCartasInfo({
                        total_cartas: cantidadDeCartas,
                        total_pages: Math.ceil(cantidadDeCartas / cantidadAMostrar)
                    })
                }
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            }
        }

        fetchPokemonsByType();
    }, [activeCategory, tipoDeCarta, rareza, puntosEstadisticas, arrayTipos2, currentPage, nombrePokemonBusqueda, IDBusqueda]);

    const addRarity = (rar) => {
        if (rareza.includes(rar)) {
            setRareza(rareza.filter((rare) => rare !== rar));
        } else {
            setRareza([...rareza, rar]);
        }
    }

    const addType = (tipo) => {
        if (tipoDeCarta.includes(tipo)) {
            setTipoDeCarta(tipoDeCarta.filter((t) => t !== tipo));
        } else {
            setTipoDeCarta([...tipoDeCarta, tipo]);
        }
    }

    const dinamicaDivs = (section) => {
        setActiveCategory(prevState => {
            const newState = {};
            for (const key in prevState) {
                newState[key] = key === section ? !prevState[key] : false;
            }
            return newState;
        });
    };

    const addType2 = (tipo) => {
        setArrayTipos2(prevState => {
            if (prevState.includes(tipo)) {
                console.log(`${tipo} eliminado de la lista de tipos`, prevState.filter(tipoInArray => tipoInArray !== tipo));
                return prevState.filter(tipoInArray => tipoInArray !== tipo);
            } else {
                console.log(`${tipo} agregado a la lista de tipos`, [...prevState, tipo]);
                return [...prevState, tipo];
            }
        });
    }

    const handlePaginaAnterior = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handlePaginaSiguiente = () => {
        if (currentPage < cartasInfo.total_pages) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 800);

        setLoadingSkeleton(true);
    }, [currentPage, datos]);

    return (
        <div className="buscador-completo">
            <div className="contenedor">

                <div className="contenedor-tipo" onClick={() => dinamicaDivs('tipo')}>
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> Tipo de carta </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.tipo ? "block" : "none" }}>
                    <div className="contenedor-interno" style={{ padding: "20px 0px 10px" }}>
                        <div className="titulo-rareza">
                            <button> Seleccionar todo </button>
                        </div>
                        <div className="distribuidor">
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, BREAK: !tipoDeCartaSeleccionada.BREAK }); addType('BREAK') }}>
                                    <div className="texto">
                                        <span> Evolución especial </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.BREAK ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.BREAK ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, baby: !tipoDeCartaSeleccionada.baby }); addType('Baby') }}>
                                    <div className="texto">
                                        <span> Bebé </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.baby ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.baby ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, basic: !tipoDeCartaSeleccionada.basic }); addType('Basic') }}>
                                    <div className="texto">
                                        <span> Básico </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.basic ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.basic ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, EX: !tipoDeCartaSeleccionada.EX }); addType('EX') }}>
                                    <div className="texto">
                                        <span> EX </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.EX ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.EX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, GX: !tipoDeCartaSeleccionada.GX }); addType('GX') }}>
                                    <div className="texto">
                                        <span> GX </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.GX ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.GX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, goldenrodGameCorner: !tipoDeCartaSeleccionada.goldenrodGameCorner }); addType('Goldenrod Game Corner') }}>
                                    <div className="texto">
                                        <span> Rincón de Juegos Goldenrod </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.goldenrodGameCorner ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.goldenrodGameCorner ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, item: !tipoDeCartaSeleccionada.item }); addType("Item") }}>
                                    <div className="texto">
                                        <span> Objeto </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.item ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.item ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, LEGEND: !tipoDeCartaSeleccionada.LEGEND }); addType("LEGEND") }}>
                                    <div className="texto">
                                        <span> LEGENDA </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.LEGEND ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.LEGEND ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, levelUp: !tipoDeCartaSeleccionada.levelUp }); addType("Level-Up") }}>
                                    <div className="texto">
                                        <span> Subir de nivel </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.levelUp ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.levelUp ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, MEGA: !tipoDeCartaSeleccionada.MEGA }); addType("MEGA") }}>
                                    <div className="texto">
                                        <span> MEGA </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.MEGA ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.MEGA ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, pokemonTool: !tipoDeCartaSeleccionada.pokemonTool }); addType("Pokémon Tool") }}>
                                    <div className="texto">
                                        <span> Herramienta Pokémon </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.pokemonTool ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.pokemonTool ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, pokemonToolF: !tipoDeCartaSeleccionada.pokemonToolF }); addType("Pokémon Tool F") }}>
                                    <div className="texto">
                                        <span> Herramienta Pokémon F </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.pokemonToolF ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.pokemonToolF ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, rapidStrike: !tipoDeCartaSeleccionada.rapidStrike }); addType("Rapid Strike") }}>
                                    <div className="texto">
                                        <span> Golpe Rápido </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.rapidStrike ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.rapidStrike ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, restored: !tipoDeCartaSeleccionada.restored }); addType("Restored") }}>
                                    <div className="texto">
                                        <span> Restauración </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.restored ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.restored ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, rocketSecretMachine: !tipoDeCartaSeleccionada.rocketSecretMachine }); addType("Rocket's Secret Machine") }}>
                                    <div className="texto">
                                        <span> Máquina Secreta del Equipo Rocket </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.rocketSecretMachine ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.rocketSecretMachine ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, singleStrike: !tipoDeCartaSeleccionada.singleStrike }); addType("Single Strike") }}>
                                    <div className="texto">
                                        <span> Golpe único </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.singleStrike ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.singleStrike ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, special: !tipoDeCartaSeleccionada.special }); addType("Special") }}>
                                    <div className="texto">
                                        <span> Especial </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.special ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.special ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, stadium: !tipoDeCartaSeleccionada.stadium }); addType("Stadium") }}>
                                    <div className="texto">
                                        <span> Estadio </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.stadium ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.stadium ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, stage1: !tipoDeCartaSeleccionada.stage1 }); addType("Stage 1") }}>
                                    <div className="texto">
                                        <span> Nivel 1 </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.stage1 ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.stage1 ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, stage2: !tipoDeCartaSeleccionada.stage2 }); addType("Stage 2") }}>
                                    <div className="texto">
                                        <span> Nivel 2 </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.stage2 ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.stage2 ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, supporter: !tipoDeCartaSeleccionada.supporter }); addType("Supporter") }}>
                                    <div className="texto">
                                        <span> Soporte </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.supporter ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.supporter ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, TAGTEAM: !tipoDeCartaSeleccionada.TAGTEAM }); addType("TAG TEAM") }}>
                                    <div className="texto">
                                        <span> Dúo de Etiqueta </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.TAGTEAM ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.TAGTEAM ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, technicalMachine: !tipoDeCartaSeleccionada.technicalMachine }); addType("Technical Machine") }}>
                                    <div className="texto">
                                        <span> Máquina Técnica </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.technicalMachine ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.technicalMachine ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, V: !tipoDeCartaSeleccionada.V }); addType("V") }}>
                                    <div className="texto">
                                        <span> V </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.V ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.V ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setTipoDeCartaSeleccionada({ ...tipoDeCartaSeleccionada, VMAX: !tipoDeCartaSeleccionada.VMAX }); addType("VMAX") }}>
                                    <div className="texto">
                                        <span> V-MAX </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: tipoDeCartaSeleccionada.VMAX ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: tipoDeCartaSeleccionada.VMAX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo" onClick={() => dinamicaDivs("rareza")}>
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> Rareza </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.rareza ? "block" : "none" }}>
                    <div className="contenedor-interno" style={{ padding: "20px 0px 10px" }}>
                        <div className="titulo-rareza">
                            <button> Seleccionar todo </button>
                        </div>
                        <div className="distribuidor">
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, amazingRare: !rarezaSeleccionada.amazingRare }); addRarity('Amazing Rare') }}>
                                    <div className="texto">
                                        <span> Rara Asombrosa </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.amazingRare ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.amazingRare ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, common: !rarezaSeleccionada.common }); addRarity('Common') }}>
                                    <div className="texto">
                                        <span> Común </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.common ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.common ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, LEGEND: !rarezaSeleccionada.LEGEND }); addRarity('LEGEND') }}>
                                    <div className="texto">
                                        <span> LEYENDA </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.LEGEND ? "white" : "#4B4B4B" }} >
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.LEGEND ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, promo: !rarezaSeleccionada.promo }); addRarity('Promo') }}>
                                    <div className="texto">
                                        <span> Promocional  </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.promo ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.promo ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rare: !rarezaSeleccionada.rare }); addRarity('Rare') }}>
                                    <div className="texto">
                                        <span> Rara </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rare ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rare ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareACE: !rarezaSeleccionada.rareACE }); addRarity('Rare ACE') }}>
                                    <div className="texto">
                                        <span> Rara Ace </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareACE ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareACE ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareBREAK: !rarezaSeleccionada.rareBREAK }); addRarity('Rare BREAK') }}>
                                    <div className="texto">
                                        <span> Rara BREAK </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareBREAK ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareBREAK ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareHolo: !rarezaSeleccionada.rareHolo }); addRarity('Rare Holo') }}>
                                    <div className="texto">
                                        <span> Rara Holo </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareHolo ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareHolo ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareHoloEX: !rarezaSeleccionada.rareHoloEX }); addRarity('Rare Holo EX') }}>
                                    <div className="texto">
                                        <span> Rara Holo EX </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareHoloEX ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareHoloEX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareHoloGX: !rarezaSeleccionada.rareHoloGX }); addRarity('Rare Holo GX') }}>
                                    <div className="texto">
                                        <span> Rara Holo GX </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareHoloGX ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareHoloGX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareHoloLVX: !rarezaSeleccionada.rareHoloLVX }); addRarity('Rare Holo LV.X') }}>
                                    <div className="texto">
                                        <span> Rara Holo LV.X </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareHoloLVX ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareHoloLVX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareHoloStar: !rarezaSeleccionada.rareHoloStar }); addRarity('Rare Holo Star') }}>
                                    <div className="texto">
                                        <span> Rara Holo Star </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareHoloStar ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareHoloStar ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareHoloV: !rarezaSeleccionada.rareHoloV }); addRarity('Rare Holo V') }}>
                                    <div className="texto">
                                        <span> Rara Holo V </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareHoloV ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareHoloV ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareHoloVMAX: !rarezaSeleccionada.rareHoloVMAX }); addRarity('Rare Holo VMAX') }}>
                                    <div className="texto">
                                        <span> Rara Holo VMAX </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareHoloVMAX ? "white" : "#4B4B4B" }} >
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareHoloVMAX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rarePrime: !rarezaSeleccionada.rarePrime }); addRarity('Rare Prime') }}>
                                    <div className="texto">
                                        <span> Rara Prime </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rarePrime ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rarePrime ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareRainbow: !rarezaSeleccionada.rareRainbow }); addRarity('Rare Rainbow') }}>
                                    <div className="texto">
                                        <span> Rara Rainbow </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareRainbow ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareRainbow ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareSecret: !rarezaSeleccionada.rareSecret }); addRarity('Rare Secret') }}>
                                    <div className="texto">
                                        <span> Rara Secret </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareSecret ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareSecret ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareShining: !rarezaSeleccionada.rareShining }); addRarity('Rare Shining') }}>
                                    <div className="texto">
                                        <span> Rara Shining </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareShining ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareShining ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareShiny: !rarezaSeleccionada.rareShiny }); addRarity('Rare Shiny') }}>
                                    <div className="texto">
                                        <span> Rara Shiny </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareShiny ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareShiny ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareShinyGX: !rarezaSeleccionada.rareShinyGX }); addRarity('Rare Shiny GX') }}>
                                    <div className="texto">
                                        <span> Rara Shiny GX </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareShinyGX ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareShinyGX ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, rareUltra: !rarezaSeleccionada.rareUltra }); addRarity('Rare Ultra') }}>
                                    <div className="texto">
                                        <span> Rara Ultra </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.rareUltra ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.rareUltra ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tipos-de-rareza">
                                <div className="contenedor" onClick={() => { setRarezaSeleccionada({ ...rarezaSeleccionada, unCommon: !rarezaSeleccionada.unCommon }); addRarity('Poco Común') }}>
                                    <div className="texto">
                                        <span> Poco Común </span>
                                    </div>
                                    <div className="circle" style={{ backgroundColor: rarezaSeleccionada.unCommon ? "white" : "#4B4B4B" }}>
                                        <TiTick className="iconooo" style={{ display: rarezaSeleccionada.unCommon ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo" onClick={() => dinamicaDivs("PS")} >
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> PS </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.PS ? "block" : "none" }} >
                    <div className="contenedor-interno">
                        <div className="texto">
                            <p> {puntosEstadisticas.ps} - 340 </p>
                        </div>
                        <div className="input-range">
                            <div className="span">
                                <span> {puntosEstadisticas.ps} </span>
                            </div>
                            <input
                                type="range"
                                min="0" max="340"
                                value={puntosEstadisticas.ps} onChange={e => setPuntosEstadisticas({ ...puntosEstadisticas, ps: e.target.value })} />
                            <div className="span">
                                <span> 340 </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo" onClick={() => dinamicaDivs("costoDeRetirada")}>
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> Costo de retirada </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.costoDeRetirada ? "block" : "none" }}>
                    <div className="contenedor-interno">
                        <div className="texto">
                            {/* <p> {puntosEstadisticas.costoDeRetirada} - 5 </p> */}
                            <p> {puntosEstadisticas.costoDeRetirada} - 4 </p>
                        </div>
                        <div className="input-range">
                            <div className="span">
                                <span> {puntosEstadisticas.costoDeRetirada} </span>
                            </div>
                            <input
                                type="range"
                                // min="0" max="5"
                                min="0" max="4"
                                value={puntosEstadisticas.costoDeRetirada} onChange={e => setPuntosEstadisticas({ ...puntosEstadisticas, costoDeRetirada: e.target.value })} />
                            <div className="span">
                                <span> 4 </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo" onClick={() => dinamicaDivs("costoTotalDelAtaque")}>
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> Costo total del ataque </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.costoTotalDelAtaque ? "block" : "none" }}>
                    <div className="contenedor-interno">
                        <div className="texto">
                            <p> {puntosEstadisticas.costoTotalAtaque} - 5 </p>
                        </div>
                        <div className="input-range">
                            <div className="span">
                                <span> {puntosEstadisticas.costoTotalAtaque} </span>
                            </div>
                            <input
                                type="range"
                                min="0" max="5"
                                value={puntosEstadisticas.costoTotalAtaque} onChange={e => setPuntosEstadisticas({ ...puntosEstadisticas, costoTotalAtaque: e.target.value })} />
                            <div className="span">
                                <span> 5 </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo" onClick={() => dinamicaDivs("debilidades")}>
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> Debilidades </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.debilidades ? "block" : "none" }} >
                    <div className="contenedor-interno" style={{ padding: "20px 0px 10px" }}>
                        <div className="f">
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.planta ? '0 0 10px 5px rgba(0, 255, 0, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType2("grass"); setTipoSeleccionado2({ ...tipoSeleccionado2, planta: !tipoSeleccionado2.planta }) }} >
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "-25px -50px" }}> </div>
                                    <div className="texto">
                                        <p> Planta </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.planta ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.planta ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.fuego ? '0 0 10px 5px rgba(255, 0, 0, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType2("fire"); setTipoSeleccionado2({ ...tipoSeleccionado2, fuego: !tipoSeleccionado2.fuego }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "0px 0px" }}> </div>
                                    <div className="texto">
                                        <p> Fuego </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.fuego ? "white" : "#4B4B4B" }} >
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.fuego ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.agua ? '0 0 10px 5px rgba(0, 0, 255, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType2("water"); setTipoSeleccionado2({ ...tipoSeleccionado2, agua: !tipoSeleccionado2.agua }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "-75px -50px" }}> </div>
                                    <div className="texto">
                                        <p> Agua </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.agua ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.agua ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.rayo ? '0 0 10px 5px rgba(255, 255, 0, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType2("lightning"); setTipoSeleccionado2({ ...tipoSeleccionado2, rayo: !tipoSeleccionado2.rayo }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "-50px -50px" }}> </div>
                                    <div className="texto">
                                        <p> Rayo </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.rayo ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.rayo ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.psiquico ? '0 0 10px 5px rgba(255, 0, 255, 0.5)' : '0px 0px 0px 0px #00ff00' }}
                                onClick={() => { addType2("psychic"); setTipoSeleccionado2({ ...tipoSeleccionado2, psiquico: !tipoSeleccionado2.psiquico }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "-75px -25px" }}> </div>
                                    <div className="texto">
                                        <p> Psiquico </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.psiquico ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.psiquico ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.lucha ? '0 0 10px 5px rgba(255, 127, 80, 0.5)' : '0px 0px 0px 0px #ff7f50' }}
                                onClick={() => { addType2("fighting"); setTipoSeleccionado2({ ...tipoSeleccionado2, lucha: !tipoSeleccionado2.lucha }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "-50px -25px" }}> </div>
                                    <div className="texto">
                                        <p> Lucha </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.lucha ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.lucha ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.oscura ? '0 0 10px 5px rgba(77, 124, 148, 0.5)' : '0px 0px 0px 0px #4D7C94' }}
                                onClick={() => { addType2("darkness"); setTipoSeleccionado2({ ...tipoSeleccionado2, oscura: !tipoSeleccionado2.oscura }) }} >
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "0px -50px" }}> </div>
                                    <div className="texto">
                                        <p> Oscura </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.oscura ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.oscura ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.metalica ? '0 0 10px 5px rgba(186, 179, 166, 0.5)' : '0px 0px 0px 0px #BAB3A6' }}
                                onClick={() => { addType2("metal"); setTipoSeleccionado2({ ...tipoSeleccionado2, metalica: !tipoSeleccionado2.metalica }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "-75px 0px" }}> </div>
                                    <div className="texto">
                                        <p> Metálica </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.metalica ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.metalica ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.incolora ? '0 0 10px 5px rgba(230, 226, 224, 0.5)' : '0px 0px 0px 0px #E6E2E0' }}
                                onClick={() => { addType2("colorless"); setTipoSeleccionado2({ ...tipoSeleccionado2, incolora: !tipoSeleccionado2.incolora }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "-25px 0px" }}> </div>
                                    <div className="texto">
                                        <p> Incolora </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.incolora ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.incolora ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.hada ? '0 0 10px 5px rgba(166, 70, 70, 0.5)' : '0px 0px 0px 0px #aa4646' }}
                                onClick={() => { addType2("fairy"); setTipoSeleccionado2({ ...tipoSeleccionado2, hada: !tipoSeleccionado2.hada }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "50px 0px" }}> </div>
                                    <div className="texto">
                                        <p> Hada </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.hada ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.hada ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="debilidades" style={{ boxShadow: tipoSeleccionado2.dragon ? '0 0 10px 5px rgba(200, 161, 74, 0.5)' : '0px 0px 0px 0px #C8A14A' }}
                                onClick={() => { addType2("dragon"); setTipoSeleccionado2({ ...tipoSeleccionado2, dragon: !tipoSeleccionado2.dragon }) }}>
                                <div className="icono0-texto">
                                    <div className="ic" style={{ backgroundPosition: "0px -25px" }}> </div>
                                    <div className="texto">
                                        <p> Dragón </p>
                                    </div>
                                </div>
                                <div className="circulo">
                                    <div className="cir" style={{ backgroundColor: tipoSeleccionado2.dragon ? "white" : "#4B4B4B" }}>
                                        <TiTick className="icon" style={{ display: tipoSeleccionado2.dragon ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo" onClick={() => dinamicaDivs("busquedaPokemon")}>
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> Buscador por nombre </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.busquedaPokemon ? 'block' : 'none' }}>
                    <div className="contenedor-interno" style={{ paddingBottom: '30px' }}>
                        <div className="titulo-ilustrador">
                            <div>
                                <h6> ¿Buscás cartas de un Pokemón en específico? Escribe su nombre acá. </h6>
                            </div>
                        </div>
                        <div className="input-search-ilustrador">
                            <form>
                                <input type="text" placeholder="Nombre del Pokemón" onChange={e => setNombrePokemonBusqueda(e.target.value)} />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo" onClick={() => dinamicaDivs("busquedaPokemonID")}>
                    <div className="contenedor-interno">
                        <div className="tipo">
                            <p> Buscador por ID </p>
                        </div>
                        <div className="icono">
                            <div className="c">
                                <MdKeyboardArrowDown className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-tipo-contenido" style={{ display: activeCategory.busquedaPokemonID ? 'block' : 'none' }}>
                    <div className="contenedor-interno" style={{ paddingBottom: '30px' }}>
                        <div className="titulo-ilustrador">
                            <div>
                                <h6> ¿Buscás cartas de un Pokemón en específico? Escribe su ID de la pokédex acá. </h6>
                            </div>
                        </div>
                        <div className="input-search-ilustrador">
                            <form>
                                <input type="text" placeholder="Nombre del Pokemón" onChange={e => setIDBusqueda(e.target.value)} />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="contte">
                    {datos && datos.length > 0 && (
                        <div className="contenedor-busqueda-avanzada">
                            <div className="contenedor-externo-imagen">
                                {datos.map((card, index) => (
                                    <div className="contenedor-interno-imagen" key={index} >
                                        <div className="flex-avanzado">
                                            <Link to={`/card/detail/${card.id}`}>
                                                <img className="img-avanzada" src={card.images.small} alt={card.name} />
                                                {/* {loadingSkeleton ?
                                                    <Skeleton width={245} height={342} /> : <img className="img-avanzada" src={card.images.small} alt={card.name} />
                                                } */}
                                            </Link>
                                        </div>
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
                    )}
                </div>

            </div>
        </div>
    )
}
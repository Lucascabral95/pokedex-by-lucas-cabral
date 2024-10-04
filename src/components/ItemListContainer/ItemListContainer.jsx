import "./ItemListContainer.scss"
import { MdCatchingPokemon } from "react-icons/md"
import { LuRefreshCw } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import storeZustand from "../../zustand.jsx";
import Skeleton from 'react-loading-skeleton'

export default function ItemListContainer() {
    const { pokemons, setPokemons, pokemonBusqueda } = storeZustand();
    const [activeFiltro, setActiveFiltro] = useState(false);
    const [cantidadPokemons, setCantidadPokemons] = useState(20);
    const [datosLista, setDatosLista] = useState([]);
    const [pokemoness, setPokemoness] = useState([]);
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    //
    const [pokemonsAzar, setPokemonsAzar] = useState([])
    const [cantidadPokemonsAzar, setCantidadPokemonsAzar] = useState(12);
    const [activePokemonAzar, setActivePokemonAzar] = useState(false);
    //
    // filtro de mayor id
    const [activeNegativa, setActiveNegativa] = useState(false);
    //
    // filtro de orden alfabetico; asc/desc
    const [activeAlfabetifo, setActiveAlfabetifo] = useState(false);
    //
    useEffect(() => {
        async function obtenerDatos() {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${cantidadPokemons}`);
                const listaPokemon = res.data.results;
                const nuevosPokemons = [];

                for (const pokemon of listaPokemon) {
                    const resPokemon = await axios.get(pokemon.url);
                    const datosPokemon = resPokemon.data;
                    nuevosPokemons.push(datosPokemon);
                }

                setPokemons(nuevosPokemons);
            } catch (error) {
                console.error('Error al obtener datos del Pokémon:', error);
            }
        }

        if (!activeNegativa) {
            obtenerDatos();
        }
    }, [cantidadPokemons, activeNegativa]);

    useEffect(() => {
        async function obtenerPokemon() {
            try {
                let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
                setDatosLista(res.data.results);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerPokemon()
    }, [activeNegativa])

    useEffect(() => {
        if (pokemonBusqueda.trim() !== '') {
            let nombreDePokemones = datosLista.filter(pokemon => {
                const nombrePokemon = pokemon.name.toLowerCase();
                // const busqueda = pokemonBusqueda.toLowerCase();
                const busqueda = pokemonBusqueda.toLowerCase().replace(/\s+/g, '');
                const idPokemon = pokemon.url.split('/')[6];

                let coincidencias = 0;
                for (let i = 0; i < busqueda.length; i++) {
                    if (nombrePokemon[i] === busqueda[i] || idPokemon[i] === busqueda[i]) {
                        coincidencias++;
                    } else {
                        break;
                    }
                }

                return coincidencias === busqueda.length;
            }).map(pokemon => {
                const resPokemon = axios.get(pokemon.url);
                return resPokemon.then(res => res.data);
            });

            Promise.all(nombreDePokemones).then(pokemonsFiltrados => setPokemoness(pokemonsFiltrados))

            console.log(`Los pokemones que coinciden con ${pokemonBusqueda} son`, nombreDePokemones);
        }
    }, [datosLista, pokemonBusqueda]);

    useEffect(() => {
        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 800);
    }, [pokemonBusqueda, datosLista, pokemoness]);

    useEffect(() => {
        async function obtenerPokemon() {
            try {
                let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
                const allPokemon = res.data.results;
                const pokemonsNuevos = [];
                for (let i = 0; i < cantidadPokemonsAzar; i++) {
                    const randomIndex = Math.floor(Math.random() * allPokemon.length);
                    const randomPokemon = allPokemon[randomIndex];
                    pokemonsNuevos.push(randomPokemon);
                }

                const arrayRes2 = [];
                for (const pokemon of pokemonsNuevos) {
                    const res2 = await axios.get(pokemon.url);
                    arrayRes2.push(res2.data);
                }

                setPokemonsAzar(prevPokemons => [...prevPokemons, ...arrayRes2]);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerPokemon();
    }, [cantidadPokemonsAzar]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const totalPokemonCount = 1025;
                const offset = Math.max(totalPokemonCount - cantidadPokemons, 0);
                const limit = cantidadPokemons;
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
                const results = response.data.results.sort((a, b) => b.url.split('/')[6] - a.url.split('/')[6]);

                let resultados = [];
                for (const pokes of results) {
                    const res = await axios.get(pokes.url);
                    resultados.push(res.data);
                }
                setPokemons(resultados);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        if (activeNegativa) {
            fetchPokemon();
        }
    }, [activeNegativa, cantidadPokemons, activeAlfabetifo]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
                const resultados = activeAlfabetifo === 'asc' ? res.data.results.sort((a, b) => a.name.localeCompare(b.name)) : res.data.results.sort((a, b) => b.name.localeCompare(a.name));
                const pokemones = resultados.slice(0, cantidadPokemons);
                const pokemonsOrdenados = [];
                for (const datos of pokemones) {
                    const resPokemon = await axios.get(datos.url);
                    pokemonsOrdenados.push(resPokemon.data);
                }
                setPokemons(pokemonsOrdenados);
            } catch (error) {
                console.error(error);
            }
        };

        if (activeAlfabetifo === 'asc' || activeAlfabetifo === 'desc') {
            fetchData();
        }
    }, [cantidadPokemons, activeAlfabetifo]);

    const getBackgroundColor2 = (pokemon) => {
        const type = pokemon.types[0]?.type.name;

        switch (type) {
            case 'normal':
                return '#A4ACAF';
            case 'grass':
                return '#9BCC50';
            case 'fire':
                return '#FD7D24';
            case 'water':
                return '#4592C4';
            case 'electric':
                return '#EED535';
            case 'rock':
                return '#A38C21';
            case 'ice':
                return '#51C4E7';
            case 'poison':
                return '#B97FC9';
            case 'flying':
                return '#7DC0D3';
            case 'bug':
                return '#729F3F';
            case 'ghost':
                return '#7B62A3';
            case 'dark':
                return '#707070';
            case 'steel':
                return '#9EB7B8';
            case 'fairy':
                return '#FDB9E9';
            case 'dragon':
                return '#F16E57';
            case 'psychic':
                return '#F366B9';
            case 'ground':
                return '#AB9842';
            case 'fighting':
                return '#D56723';
            default:
                return 'gray';
        }
    };

    const getBackgroundColor = (pokemon) => {
        const type = pokemon.types[1]?.type.name;

        switch (type) {
            case 'normal':
                return '#A4ACAF';
            case 'grass':
                return '#9BCC50';
            case 'fire':
                return '#FD7D24';
            case 'water':
                return '#4592C4';
            case 'electric':
                return '#EED535';
            case 'rock':
                return '#A38C21';
            case 'ice':
                return '#51C4E7';
            case 'poison':
                return '#B97FC9';
            case 'flying':
                return '#7DC0D3';
            case 'bug':
                return '#729F3F';
            case 'ghost':
                return '#7B62A3';
            case 'dark':
                return '#707070';
            case 'steel':
                return '#9EB7B8';
            case 'fairy':
                return '#FDB9E9';
            case 'dragon':
                return '#F16E57';
            case 'psychic':
                return '#F366B9';
            case 'ground':
                return '#AB9842';
            case 'fighting':
                return '#D56723';
            default:
                return 'gray';
        }
    };

    const getColorLetter = (pokemon) => {
        const type2 = pokemon.types[1]?.type.name;

        switch (type2) {
            case 'bug':
                return 'white';
            case 'dragon':
                return 'white';
            case 'fire':
                return 'white';
            case 'ghost':
                return 'white';
            case 'psychic':
                return 'white';
            case 'dark':
                return 'white';
            case 'fighting':
                return 'white';
            case 'poison':
                return 'white';
            case 'rock':
                return 'white';
            case 'water':
                return 'white';
            default:
                return 'black';

        }
    }

    const getColorLetter2 = (pokemon) => {
        const type2 = pokemon.types[0]?.type.name;

        switch (type2) {
            case 'bug':
                return 'white';
            case 'dragon':
                return 'white';
            case 'fire':
                return 'white';
            case 'ghost':
                return 'white';
            case 'psychic':
                return 'white';
            case 'dark':
                return 'white';
            case 'fighting':
                return 'white';
            case 'poison':
                return 'white';
            case 'rock':
                return 'white';
            case 'water':
                return 'white';
            default:
                return 'black';

        }
    }

    return (
        <div className="itemListContainer">
            <div className="contenedor-item-list">

                <div className="sorprendeme" onClick={() => setActivePokemonAzar(true)}>
                    <div className="contenedor-icon">
                        <LuRefreshCw className="icono" color="white" size={20} />
                    </div>
                    <div className="contenedor-texto">
                        <p className="texto-sorprendeme"> ¡Sorpréndeme! </p>
                    </div>
                </div>

                <div className="filtro">
                    <div className="ordenar">
                        <p className="texto-ordenar"> Ordenar por: </p>
                    </div>
                    <div className="filtro-busqueda" onClick={() => setActiveFiltro(!activeFiltro)}>
                        <div className="img-filtro">
                            <div className="img-img">
                                <MdCatchingPokemon className="icono" color="white" size={20} />
                            </div>
                            <div className="texto-filtro-contenedor">
                                <p className="texto-filtro"> Número inferior </p>
                            </div>
                        </div>
                        <div className="more">
                            <div className="cont" style={{ transform: activeFiltro ? 'rotate(180deg)' : 'none' }}>
                                <IoIosArrowDown className="icono" color="white" size={20} />
                            </div>
                        </div>

                        <div className="contenido-filtro" style={{ display: activeFiltro ? 'block' : 'none' }}>
                            <div className="contenido" onClick={() => { setActiveNegativa(false), setActiveAlfabetifo(false), setActivePokemonAzar(false) }}>
                                <span className="contenido-filtro-texto" > Número inferior </span>
                            </div>
                            <div className="contenido" onClick={() => { setActiveNegativa(true), setActiveAlfabetifo(false), setActivePokemonAzar(false) }}>
                                <span className="contenido-filtro-texto" > Número superior </span>
                            </div>
                            <div className="contenido" onClick={() => { setActiveAlfabetifo('asc'), setActivePokemonAzar(false) }}>
                                <span className="contenido-filtro-texto"> A-Z </span>
                            </div>
                            <div className="contenido" onClick={() => { setActiveAlfabetifo('desc'), setActivePokemonAzar(false) }}>
                                <span className="contenido-filtro-texto"> Z-A </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card-container">
                <div className="container-container">
                    {activePokemonAzar === true ? (
                        <>
                            {pokemonsAzar.map((item, index) => (
                                <div className="card" key={index}>
                                    <div className="img-img-img">
                                        <Link to={`/detalle/${item.name}`}>
                                            <img src={item.sprites.front_default} alt={item.name} />
                                        </Link>
                                    </div>
                                    <div className="contenido-del-pokemon">
                                        <p className="id"> N.º 000{item.id} </p>
                                        <p className="nombre-pokemon">
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </p>
                                        <div className="tipos">
                                            <div className="tipo" style={{ backgroundColor: getBackgroundColor2(item) }}>
                                                <p className="tipo-texto" style={{ color: getColorLetter2(item) }}>
                                                    {item.types[0].type.name[0].toUpperCase() + item.types[0].type.name.slice(1)}
                                                </p>
                                            </div>
                                            <div className="tipo" style={{ backgroundColor: getBackgroundColor(item), display: item.types[1] ? 'flex' : 'none' }}>
                                                <p className="tipo-texto" style={{ color: getColorLetter(item) }}>
                                                    {item.types[1]?.type.name && item.types[1]?.type.name.charAt(0).toUpperCase() + item.types[1]?.type.name.slice(1)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {pokemonBusqueda !== '' ? (
                                <>
                                    {loadingSkeleton === false ? (
                                        <>
                                            {pokemoness.map((item, index) => (
                                                <div className="card" key={index}>
                                                    <div className="img-img-img">
                                                        <Link to={`/detalle/${item.name}`}>
                                                            <img src={item.sprites.front_default} alt={item.name} />
                                                        </Link>
                                                    </div>
                                                    <div className="contenido-del-pokemon">
                                                        <p className="id"> N.º 000{item.id} </p>
                                                        <p className="nombre-pokemon">
                                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                                        </p>
                                                        <div className="tipos">
                                                            <div className="tipo" style={{ backgroundColor: getBackgroundColor2(item) }}>
                                                                <p className="tipo-texto" style={{ color: getColorLetter2(item) }}>
                                                                    {item.types[0].type.name[0].toUpperCase() + item.types[0].type.name.slice(1)}
                                                                </p>
                                                            </div>
                                                            <div className="tipo" style={{ backgroundColor: getBackgroundColor(item), display: item.types[1] ? 'flex' : 'none' }}>
                                                                <p className="tipo-texto" style={{ color: getColorLetter(item) }}>
                                                                    {item.types[1]?.type.name && item.types[1]?.type.name.charAt(0).toUpperCase() + item.types[1]?.type.name.slice(1)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {pokemoness.map((item, index) => (
                                                <div className="card" key={index}>
                                                    <div className="img-img-img">
                                                        <Link to={`/detalle/${item.name}`}>
                                                            <Skeleton variant="rectangular" width={205.19} height={205.19} />
                                                        </Link>
                                                    </div>
                                                    <div className="contenido-del-pokemon">
                                                        <p className="id"> N.º 000{item.id} </p>
                                                        <p className="nombre-pokemon">
                                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                                        </p>
                                                        <div className="tipos">
                                                            <div className="tipo" style={{ backgroundColor: getBackgroundColor2(item) }}>
                                                                <p className="tipo-texto" style={{ color: getColorLetter2(item) }}>
                                                                    {item.types[0].type.name[0].toUpperCase() + item.types[0].type.name.slice(1)}
                                                                </p>
                                                            </div>
                                                            <div className="tipo" style={{ backgroundColor: getBackgroundColor(item), display: item.types[1] ? 'flex' : 'none' }}>
                                                                <p className="tipo-texto" style={{ color: getColorLetter(item) }}>
                                                                    {item.types[1]?.type.name && item.types[1]?.type.name.charAt(0).toUpperCase() + item.types[1]?.type.name.slice(1)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    {pokemons.map((item, index) => (
                                        <div className="card" key={index}>
                                            <div className="img-img-img">
                                                <Link to={`/detalle/${item.name}`}>
                                                    <img src={item.sprites.front_default} alt={item.name} />
                                                </Link>
                                            </div>
                                            <div className="contenido-del-pokemon">
                                                <p className="id"> N.º 000{item.id} </p>
                                                <p className="nombre-pokemon">
                                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                                </p>
                                                <div className="tipos">
                                                    <div className="tipo" style={{ backgroundColor: getBackgroundColor2(item) }}>
                                                        <p className="tipo-texto" style={{ color: getColorLetter2(item) }}>
                                                            {item.types[0].type.name[0].toUpperCase() + item.types[0].type.name.slice(1)}
                                                        </p>
                                                    </div>
                                                    <div className="tipo" style={{ backgroundColor: getBackgroundColor(item), display: item.types[1] ? 'flex' : 'none' }}>
                                                        <p className="tipo-texto" style={{ color: getColorLetter(item) }}>
                                                            {item.types[1]?.type.name && item.types[1]?.type.name.charAt(0).toUpperCase() + item.types[1]?.type.name.slice(1)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {pokemonBusqueda === '' && (
                <div className="boton-cargar-pokemons">
                    {activePokemonAzar ? (
                        <button onClick={() => setCantidadPokemonsAzar(cantidadPokemonsAzar + 20)} className="boton-cargar"> Cargar más Pokémon </button>)
                        : (
                            <>
                                <button onClick={() => setCantidadPokemons(cantidadPokemons + 20)} className="boton-cargar"> Cargar más Pokémon </button>
                            </>
                        )}
                </div>
            )}

        </div>
    )
}
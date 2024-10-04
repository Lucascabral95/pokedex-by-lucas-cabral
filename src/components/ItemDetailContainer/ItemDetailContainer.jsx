import "./ItemDetailContainer.scss"
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselCard from "./Cards/CarouselCard";
import storeZustand from "../../zustand.jsx";

export default function ItemDetailContainer() {
    const { pokemon } = useParams();
    const [pokemonElegido, setPokemonElegido] = useState([]);
    const [descripcion, setDescripcion] = useState("");
    const [firstTypeWeaknesses, setFirstTypeWeaknesses] = useState([]);
    const [botonSeleccionado, setBotonSeleccionado] = useState({
        derecha: false,
        izquierda: false
    });
    const [anteriorPosteriorPokemones, setAnteriorPosteriorPokemones] = useState({
        anteriorPokemon: null,
        posteriorPokemon: null
    });
    const { setPokemonMomentaneo } = storeZustand();

    useEffect(() => {
        async function obtenerDatos() {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const datosPokemon = res.data;
                setPokemonElegido(datosPokemon);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerDatos();
    }, [pokemon]);

    useEffect(() => {
        async function obtenerDescripcion() {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
                const datosPokemon = res.data;
                setDescripcion(datosPokemon.flavor_text_entries.find(entry => entry.language.name === 'es'));
                console.log(descripcion);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerDescripcion();
    }, [pokemon])

    useEffect(() => {
        const fetchWeaknesses = async () => {
            try {
                // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonElegido.name}`);
                const { data } = response;
                const pokemonTypes = data.types.map((type) => type.type.name);

                const firstType = pokemonTypes[0];

                const fetchTypeWeaknesses = async () => {
                    const typeResponse = await axios.get(`https://pokeapi.co/api/v2/type/${firstType}`);
                    const { damage_relations } = typeResponse.data;
                    const firstTypeWeaknesses = damage_relations.double_damage_from.map((weakness) => weakness.name);
                    setFirstTypeWeaknesses(firstTypeWeaknesses);
                };

                fetchTypeWeaknesses();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchWeaknesses();
    }, [pokemon, pokemonElegido]);

    const cambiarDePokemon = (pokemon) => {
        if (pokemonElegido.id === 1 && pokemon === 'anterior') {
            axios.get(`https://pokeapi.co/api/v2/pokemon/pecharunt`)
                .then((res) => {
                    setPokemonElegido(res.data)
                })
                .catch((err) => console.log(err))
        } else if (pokemonElegido.id === 1025 && pokemon !== 'anterior') {
            axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
                .then((res) => {
                    setPokemonElegido(res.data)
                })
                .catch((err) => console.log(err))
        }
        else {
            if (pokemon === 'anterior') {
                let pokemonAnterior = pokemonElegido.id - 1
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonAnterior}`)
                    .then((res) => {
                        setPokemonElegido(res.data)
                    })
                    .catch((err) => console.log(err))
            } else {
                let pokemonSiguiente = pokemonElegido.id + 1
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSiguiente}`)
                    .then((res) => {
                        setPokemonElegido(res.data)
                    })
                    .catch((err) => console.log(err))
            }
        }
    }

    useEffect(() => {
        async function obtenerAnteriorPosterior() {
            let pokemonAnterior = pokemonElegido.id - 1;
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonAnterior === 0 ? 1025 : pokemonAnterior}`);
                setAnteriorPosteriorPokemones(prevState => ({
                    ...prevState,
                    anteriorPokemon: res.data
                }));
            } catch (err) {
                console.log(err);
            }
        }

        obtenerAnteriorPosterior();
    }, [pokemonElegido, botonSeleccionado]);

    useEffect(() => {
        async function obtenerAnteriorPosterior() {
            let pokemonPosterior = pokemonElegido.id + 1;
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonPosterior === 1026 ? 1 : pokemonPosterior}`);
                setAnteriorPosteriorPokemones(prevState => ({
                    ...prevState,
                    posteriorPokemon: res.data
                }));
            } catch (err) {
                console.log(err);
            }
        }

        obtenerAnteriorPosterior();
    }, [pokemonElegido, botonSeleccionado]);

    useEffect(() => {
        console.log(pokemonElegido);
    }, [pokemonElegido]);

    const pokePruebaa = pokemonElegido.name;

    const [pokemonData, setPokemonData] = useState({
        primeraForma: '',
        // segundaForma: [],
        segundaForma: '',
        terceraForma: '',
    });

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokePruebaa}`);
                const pokemonSpeciesUrl = pokemonResponse.data.species.url;

                const pokemonSpeciesResponse = await axios.get(pokemonSpeciesUrl);
                const evolutionChainUrl = pokemonSpeciesResponse.data.evolution_chain.url;

                const evolutionChainResponse = await axios.get(evolutionChainUrl);
                const evolutionChainData = evolutionChainResponse.data.chain;

                const primeraForma = evolutionChainData.species.name.charAt(0).toUpperCase() + evolutionChainData.species.name.slice(1);
                // const segundaForma = evolutionChainData.evolves_to.map(form => ({
                //     species: {
                //         name: form.species.name.charAt(0).toUpperCase() + form.species.name.slice(1)
                //     }
                // }));
                const segundaForma = evolutionChainData.evolves_to[0]?.species.name.charAt(0).toUpperCase() + evolutionChainData.evolves_to[0]?.species.name.slice(1) || '';
                const terceraForma = evolutionChainData.evolves_to[0]?.evolves_to[0]?.species.name.charAt(0).toUpperCase() + evolutionChainData.evolves_to[0]?.evolves_to[0]?.species.name.slice(1) || '';

                setPokemonData({
                    primeraForma,
                    segundaForma,
                    terceraForma
                });
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        getPokemonData();
    }, [pokePruebaa, pokemon, pokemonElegido]);

    const [informacionEvolutiva, setInformacionEvolutiva] = useState({
        primeraForma: [],
        segundaForma: [],
        terceraForma: [],
    });

    useEffect(() => {
        async function obtenerInformacionEvolutiva() {
            try {
                const resPrimeraForma = await axios.get(`https://pokeapi.co/api/v2/pokemon/${(pokemonData.primeraForma).toLowerCase()}`);
                const resSegundaForma = await axios.get(`https://pokeapi.co/api/v2/pokemon/${(pokemonData.segundaForma).toLowerCase()}`);
                const resTerceraForma = await axios.get(`https://pokeapi.co/api/v2/pokemon/${(pokemonData.terceraForma).toLowerCase()}`);

                const primeraForma = resPrimeraForma.data;
                const segundaForma = resSegundaForma.data;
                const terceraForma = resTerceraForma.data;

                let fusion = [primeraForma, segundaForma, terceraForma];
                // console.log(`El arbol de evoluciones de ${pokemon} es: ${fusion.map(form => form.name).join(' > ')}`);
                setInformacionEvolutiva({
                    primeraForma: fusion[0],
                    segundaForma: fusion[1],
                    terceraForma: fusion[2]
                })
            } catch (error) {
                console.error(error);
            }
        }

        obtenerInformacionEvolutiva();
    }, [pokemonElegido, pokemonData, pokemon]);

    let hpArrayDefinitivo = []
    let ataqueArrayDefinitivo = [];
    let defensaArrayDefinitivo = [];
    let ataqueEspecialArrayDefinitivo = [];
    let defensaEspecialArrayDefinitivo = [];
    let velocidadArrayDefinitivo = [];

    if (pokemonElegido && pokemonElegido.stats) {
        const stats = pokemonElegido.stats;

        const calcularDivs = (baseStat) => {
            const divsBlancos = 16 - Math.floor(baseStat / 10);
            const divsAzules = Math.floor(baseStat / 10);
            return [divsBlancos, divsAzules];
        };

        stats.forEach((stat, index) => {
            const [divsBlancos, divsAzules] = calcularDivs(stat.base_stat);

            for (let i = 0; i < divsBlancos; i++) {
                switch (index) {
                    case 0:
                        hpArrayDefinitivo.push(
                            <div key={i} className="caja-estadisticas" style={{ backgroundColor: 'white' }}>
                            </div>
                        );
                        break;
                    case 1:
                        ataqueArrayDefinitivo.push(
                            <div key={i} className="caja-estadisticas" style={{ backgroundColor: 'white' }}>
                            </div>
                        );
                        break;
                    case 2:
                        defensaArrayDefinitivo.push(
                            <div key={i} className="caja-estadisticas" style={{ backgroundColor: 'white' }}>
                            </div>
                        );
                        break;
                    case 3:
                        ataqueEspecialArrayDefinitivo.push(
                            <div key={i} className="caja-estadisticas" style={{ backgroundColor: 'white' }}>
                            </div>
                        );
                        break;
                    case 4:
                        defensaEspecialArrayDefinitivo.push(
                            <div key={i} className="caja-estadisticas" style={{ backgroundColor: 'white' }}>
                            </div>
                        );
                        break;
                    case 5:
                        velocidadArrayDefinitivo.push(
                            <div key={i} className="caja-estadisticas" style={{ backgroundColor: 'white' }}>
                            </div>
                        );
                        break;
                    default:
                        break;
                }
            }

            for (let i = 0; i < divsAzules; i++) {
                switch (index) {
                    case 0:
                        hpArrayDefinitivo.push(
                            <div key={i + divsBlancos} className="caja-estadisticas" style={{ backgroundColor: '#30a7d7' }}>
                            </div>
                        );
                        break;
                    case 1:
                        ataqueArrayDefinitivo.push(
                            <div key={i + divsBlancos} className="caja-estadisticas" style={{ backgroundColor: '#30a7d7' }}>
                            </div>
                        );
                        break;
                    case 2:
                        defensaArrayDefinitivo.push(
                            <div key={i + divsBlancos} className="caja-estadisticas" style={{ backgroundColor: '#30a7d7' }}>
                            </div>
                        );
                        break;
                    case 3:
                        ataqueEspecialArrayDefinitivo.push(
                            <div key={i + divsBlancos} className="caja-estadisticas" style={{ backgroundColor: '#30a7d7' }}>
                            </div>
                        );
                        break;
                    case 4:
                        defensaEspecialArrayDefinitivo.push(
                            <div key={i + divsBlancos} className="caja-estadisticas" style={{ backgroundColor: '#30a7d7' }}>
                            </div>
                        );
                        break;
                    case 5:
                        velocidadArrayDefinitivo.push(
                            <div key={i + divsBlancos} className="caja-estadisticas" style={{ backgroundColor: '#30a7d7' }}>
                            </div>
                        );
                        break;
                    default:
                        break;
                }
            }
        });
    } else {
        console.error("El Pokémon elegido o sus estadísticas son indefinidos.");
    }

    const getBackgroundColor = (pokemon) => {

        switch (pokemon) {
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

        switch (pokemon) {
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
        <div className="main">
            <div className="itemDetailContainer">

                <div className="contenedor-de-todo">
                    <div className="contenedor-del-detail">
                        <div className="primera-mitad" style={{ backgroundColor: botonSeleccionado.izquierda ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }}
                            onMouseOver={() => setBotonSeleccionado({ ...botonSeleccionado, izquierda: true })} onMouseOut={() => setBotonSeleccionado({ ...botonSeleccionado, izquierda: false })}
                            onClick={() => cambiarDePokemon('anterior')}>
                            <div className="interior-superior" style={{ backgroundColor: botonSeleccionado.izquierda ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }}>
                                <div className="contenedor-icono">
                                    <MdKeyboardArrowLeft className="icono" />
                                </div>
                                <div className="cont">
                                    {anteriorPosteriorPokemones.anteriorPokemon?.id < 10 ? (
                                        <p> Nº 000{anteriorPosteriorPokemones.anteriorPokemon?.id} </p>
                                    ) : anteriorPosteriorPokemones.anteriorPokemon?.id < 100 ? (
                                        <p> Nº 00{anteriorPosteriorPokemones.anteriorPokemon?.id} </p>
                                    ) : anteriorPosteriorPokemones.anteriorPokemon?.id < 1000 ? (
                                        <p> Nº 0{anteriorPosteriorPokemones.anteriorPokemon?.id} </p>
                                    ) : (
                                        <p> Nº {anteriorPosteriorPokemones.anteriorPokemon?.id} </p>
                                    )}
                                </div>
                                <div className="cont-nombre">
                                    <p> {anteriorPosteriorPokemones.anteriorPokemon?.name.charAt(0).toUpperCase() + anteriorPosteriorPokemones.anteriorPokemon?.name.slice(1)} </p>
                                </div>
                            </div>
                        </div>

                        <div className="primera-mitad segunda-mitad" style={{ backgroundColor: botonSeleccionado.derecha ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }}
                            onMouseOver={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: true })} onMouseOut={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: false })}
                            onClick={() => cambiarDePokemon('siguente')}>
                            <div className="interior-superior segunda-mitad-superior" style={{ backgroundColor: botonSeleccionado.derecha ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }}
                                onMouseOver={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: true })} onMouseOut={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: false })}
                                onClick={() => cambiarDePokemon('siguente')}>
                                <div className="cont-nombre">
                                    <p> {anteriorPosteriorPokemones.posteriorPokemon?.name.charAt(0).toUpperCase() + anteriorPosteriorPokemones.posteriorPokemon?.name.slice(1)} </p>
                                </div>
                                <div className="cont">
                                    {anteriorPosteriorPokemones.posteriorPokemon?.id < 10 ? (
                                        <p> Nº 000{anteriorPosteriorPokemones.posteriorPokemon?.id} </p>
                                    ) : anteriorPosteriorPokemones.posteriorPokemon?.id < 100 ? (
                                        <p> Nº 00{anteriorPosteriorPokemones.posteriorPokemon?.id} </p>
                                    ) : anteriorPosteriorPokemones.posteriorPokemon?.id < 1000 ? (
                                        <p> Nº 0{anteriorPosteriorPokemones.posteriorPokemon?.id} </p>
                                    ) : (
                                        <p> Nº {anteriorPosteriorPokemones.posteriorPokemon?.id} </p>
                                    )}
                                </div>
                                <div className="contenedor-icono">
                                    <MdKeyboardArrowRight className="icono" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="parte-de-bajo" style={{ backgroundColor: botonSeleccionado.izquierda ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }} >
                        <div className="img-img img-izquierda" style={{ backgroundColor: botonSeleccionado.izquierda ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }}
                            onMouseOver={() => setBotonSeleccionado({ ...botonSeleccionado, izquierda: true })} onMouseOut={() => setBotonSeleccionado({ ...botonSeleccionado, izquierda: false })}
                            onClick={() => cambiarDePokemon('anterior')}>
                            <img style={{ backgroundColor: botonSeleccionado.izquierda ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }} src="/public/img/curva-pokedex-izquierda.png" alt="Recodo Pokedex"
                                onMouseOver={() => setBotonSeleccionado({ ...botonSeleccionado, izquierda: true })} onMouseOut={() => setBotonSeleccionado({ ...botonSeleccionado, izquierda: false })}
                                onClick={() => cambiarDePokemon('anterior')} />
                        </div>
                        <div className="parte-media">
                            <p className="nombre-pokemon">{pokemonElegido.name && pokemonElegido.name.charAt(0).toUpperCase() + pokemonElegido.name.slice(1)}</p>
                            {pokemonElegido &&
                                <p className="id-pokemon">
                                    {pokemonElegido.id < 10
                                        ? `Nº 000${pokemonElegido.id}`
                                        : pokemonElegido.id < 100
                                            ? `Nº 00${pokemonElegido.id}`
                                            : pokemonElegido.id < 1000
                                                ? `Nº 0${pokemonElegido.id}`
                                                : `Nº ${pokemonElegido.id}.`
                                    }
                                </p>
                            }
                        </div>
                        <div className="img-img img-derecha" style={{ backgroundColor: botonSeleccionado.derecha ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }}
                            onMouseOver={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: true })} onMouseOut={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: false })}
                            onClick={() => cambiarDePokemon('siguiente')}>
                            <img src="/public/img/curva-pokedex-derecha.png" alt="Recodo Pokedex" style={{ backgroundColor: botonSeleccionado.derecha ? '#30A7D7' : '#A4A4A4', transition: 'background-color 0.2s' }}
                                onMouseOver={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: true })} onMouseOut={() => setBotonSeleccionado({ ...botonSeleccionado, derecha: false })}
                                onClick={() => cambiarDePokemon('siguiente')} />
                        </div>
                    </div>
                </div>

                <div className="contenedor-card-detail">
                    <div className="cont-mayor">
                        <div className="contenedor-mayor">
                            <div className="img-img-img">
                                <img src={pokemonElegido.sprites?.front_default} alt={pokemonElegido.name} />
                            </div>
                            <div className="contenedor-de-estadisticas">
                                <div className="titulo-titulo">
                                    <h3 className="titulo-puntos"> Puntos de base </h3>
                                </div>
                                <div className="contenedor-gigante-puntos-base">
                                    <div className="estadisticas">
                                        {hpArrayDefinitivo}
                                        <p className="caja-estadisticas-texto"> HP </p>
                                    </div>
                                    <div className="estadisticas">
                                        {ataqueArrayDefinitivo}
                                        <p className="caja-estadisticas-texto"> Ataque </p>
                                    </div>
                                    <div className="estadisticas">
                                        {defensaArrayDefinitivo}
                                        <p className="caja-estadisticas-texto"> Defensa </p>
                                    </div>
                                    <div className="estadisticas">
                                        {ataqueEspecialArrayDefinitivo}
                                        <p className="caja-estadisticas-texto"> Ataque Especial </p>
                                    </div>
                                    <div className="estadisticas">
                                        {defensaEspecialArrayDefinitivo}
                                        <p className="caja-estadisticas-texto"> Defensa Especial </p>
                                    </div>
                                    <div className="estadisticas">
                                        {velocidadArrayDefinitivo}
                                        <p className="caja-estadisticas-texto"> Velocidad </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-mayor-segundo">
                            {descripcion?.flavor_text === '' || descripcion?.flavor_text === null || descripcion?.flavor_text === undefined ? (
                                <p>No hay descripción disponible del pokemon.</p>
                            ) : (
                                <p>{descripcion?.flavor_text}</p>
                            )}
                            <div className="datos">
                                <div className="datos-fisicos">
                                    <p className="texto-blanco"> Altura </p>
                                    <p className="texto-negro"> {(parseFloat(pokemonElegido.height) / 10)} m</p>
                                    <p className="texto-blanco"> Peso </p>
                                    <p className="texto-negro"> {parseFloat(pokemonElegido.weight) / 10} kg </p>
                                    <p className="texto-blanco"> Sexo </p>
                                    <p className="texto-negro">
                                        {pokemonElegido.gender_rate === -1 ? "Genderless" : pokemonElegido.gender_rate === 0 ? "100% Female" : "100% Male"}
                                    </p>
                                </div>
                                <div className="datos-fisicos">
                                    <p className="texto-blanco"> Categoria </p>
                                    {pokemonElegido.types && (
                                        <p className="texto-negro"> {pokemonElegido.types[0].type.name.charAt(0).toUpperCase() + pokemonElegido.types[0].type.name.slice(1)} {pokemonElegido.types.slice(1).map(type => ', ' + type.type.name)}</p>
                                    )}
                                    <p className="texto-blanco"> Habilidad(es) </p>
                                    {pokemonElegido.abilities && (
                                        <p className="texto-negro">{pokemonElegido.abilities[0].ability.name.charAt(0).toUpperCase() + pokemonElegido.abilities[0].ability.name.slice(1)}
                                            {pokemonElegido.abilities.slice(1).map(ability => ', ' + ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1))}</p>
                                    )}
                                </div>
                            </div>
                            <div className="contenedor-de-tipos">
                                <h3 className="titulo-tipo-debilidad"> Tipo </h3>
                                <div className="tipos">
                                    {pokemonElegido.types && (
                                        <>
                                            {pokemonElegido.types.map((tipo, index) => (
                                                <div className="div-tipos" key={index} style={{ backgroundColor: getBackgroundColor(tipo.type.name) }}>
                                                    <p style={{ color: getColorLetter(tipo.type.name) }}> {tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1)} </p>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                                <h3 className="titulo-tipo-debilidad"> Debilidad </h3>
                                <div className="tipos">
                                    {firstTypeWeaknesses.map((weakness, index) => (
                                        <div className="div-tipos" key={index} style={{ backgroundColor: getBackgroundColor(weakness) }}>
                                            <p style={{ color: getColorLetter(weakness) }}> {weakness.charAt(0).toUpperCase() + weakness.slice(1)} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-evoluciones-involuciones">
                    <div className="interior-contenedor-evoluciones-involuciones">

                        <div className="title-evoluciones">
                            <h3 className="title"> Evoluciones </h3>
                        </div>

                        <div className="contenedor-imagenes">

                            <div className="imagen">
                                <div className="im-img">
                                    <Link to={`/detalle/${informacionEvolutiva.primeraForma.name}`}>
                                        <img src={informacionEvolutiva.primeraForma.sprites?.front_default} alt={informacionEvolutiva.primeraForma.name} />
                                    </Link>
                                </div>
                                <div className="nombre">
                                    <Link to={`/detalle/${informacionEvolutiva.primeraForma.name}`}>
                                        <span className="nombre-texto"> {informacionEvolutiva.primeraForma.name && informacionEvolutiva.primeraForma.name.charAt(0).toUpperCase() + informacionEvolutiva.primeraForma.name.slice(1)} </span>
                                    </Link>
                                    {informacionEvolutiva &&
                                        <Link to={`/detalle/${informacionEvolutiva.primeraForma.name}`}>
                                            <span className="id-texto">
                                                {informacionEvolutiva.primeraForma.id < 10
                                                    ? `Nº 000${informacionEvolutiva.primeraForma.id}`
                                                    : pokemonElegido.id < 100
                                                        ? `Nº 00${informacionEvolutiva.primeraForma.id}`
                                                        : informacionEvolutiva.primeraForma.id < 1000
                                                            ? `Nº 0${informacionEvolutiva.primeraForma.id}`
                                                            : `Nº ${informacionEvolutiva.primeraForma.id}.`
                                                }
                                            </span>
                                        </Link>
                                    }
                                </div>
                                <div className="tipos">
                                    {informacionEvolutiva.primeraForma.types?.map((tipo, index) => (
                                        <div className="contenedor-tipo" key={index} style={{ backgroundColor: getBackgroundColor(tipo.type.name) }} >
                                            <p style={{ color: getColorLetter(tipo.type.name) }}> {tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1)} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {informacionEvolutiva.segundaForma.name &&
                                <>
                                    <div className="contenedor-flecha-derecha">
                                        <div>
                                            <MdKeyboardArrowRight className="icono" />
                                        </div>
                                    </div>

                                    <div className="imagen">
                                        <div className="im-img">
                                            <Link to={`/detalle/${informacionEvolutiva.segundaForma.name}`}>
                                                <img src={informacionEvolutiva.segundaForma.sprites?.front_default} alt={informacionEvolutiva.segundaForma.name} />
                                            </Link>
                                        </div>
                                        <div className="nombre">
                                            <Link to={`/detalle/${informacionEvolutiva.segundaForma.name}`}>
                                                <span className="nombre-texto"> {informacionEvolutiva.segundaForma.name && informacionEvolutiva.segundaForma.name.charAt(0).toUpperCase() + informacionEvolutiva.segundaForma.name.slice(1)} </span>
                                            </Link>
                                            {informacionEvolutiva &&
                                                <Link to={`/detalle/${informacionEvolutiva.segundaForma.name}`}>
                                                    <span className="id-texto">
                                                        {informacionEvolutiva.segundaForma.id < 10
                                                            ? `Nº 000${informacionEvolutiva.segundaForma.id}`
                                                            : pokemonElegido.id < 100
                                                                ? `Nº 00${informacionEvolutiva.segundaForma.id}`
                                                                : informacionEvolutiva.segundaForma.id < 1000
                                                                    ? `Nº 0${informacionEvolutiva.segundaForma.id}`
                                                                    : `Nº ${informacionEvolutiva.segundaForma.id}.`
                                                        }
                                                    </span>
                                                </Link>
                                            }
                                        </div>
                                        <div className="tipos">
                                            {informacionEvolutiva.segundaForma.types?.map((tipo, index) => (
                                                <div className="contenedor-tipo" key={index} style={{ backgroundColor: getBackgroundColor(tipo.type.name) }} >
                                                    <p style={{ color: getColorLetter(tipo.type.name) }}> {tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1)} </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            }

                            {informacionEvolutiva.terceraForma.name !== undefined &&
                                <>
                                    <div className="contenedor-flecha-derecha">
                                        <div>
                                            <MdKeyboardArrowRight className="icono" />
                                        </div>
                                    </div>

                                    <div className="imagen">
                                        <div className="im-img">
                                            <Link to={`/detalle/${informacionEvolutiva.terceraForma.name}`}>
                                                <img src={informacionEvolutiva.terceraForma.sprites?.front_default} alt={informacionEvolutiva.terceraForma.name} />
                                            </Link>
                                        </div>
                                        <div className="nombre">
                                            <Link to={`/detalle/${informacionEvolutiva.terceraForma.name}`}>
                                                <span className="nombre-texto"> {informacionEvolutiva.terceraForma.name && informacionEvolutiva.terceraForma.name.charAt(0).toUpperCase() + informacionEvolutiva.terceraForma.name.slice(1)} </span>
                                            </Link>
                                            {informacionEvolutiva &&
                                                <Link to={`/detalle/${informacionEvolutiva.terceraForma.name}`}>
                                                    <span className="id-texto">
                                                        {informacionEvolutiva.terceraForma.id < 10
                                                            ? `Nº 000${informacionEvolutiva.terceraForma.id}`
                                                            : pokemonElegido.id < 100
                                                                ? `Nº 00${informacionEvolutiva.terceraForma.id}`
                                                                : informacionEvolutiva.terceraForma.id < 1000
                                                                    ? `Nº 0${informacionEvolutiva.terceraForma.id}`
                                                                    : `Nº ${informacionEvolutiva.terceraForma.id}.`
                                                        }
                                                    </span>
                                                </Link>
                                            }
                                        </div>
                                        <div className="tipos">
                                            {informacionEvolutiva.terceraForma.types?.map((tipo, index) => (
                                                <div className="contenedor-tipo" key={index} style={{ backgroundColor: getBackgroundColor(tipo.type.name) }} >
                                                    <p style={{ color: getColorLetter(tipo.type.name) }}> {tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1)} </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            }

                        </div>
                    </div>

                    <div className="contenedor-boton-pokedex">
                        <div className="contenedor">
                            <Link to={`/pokedex`}>
                                <button className="boton-pokedex">
                                    Ir a la Pokédex
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <CarouselCard pokemon={pokemonElegido.name} />

            </div>
        </div>
    )
}
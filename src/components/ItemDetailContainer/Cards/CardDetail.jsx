import "./CardDetail.scss"
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton"
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import CarouselCard from "./CarouselCard.jsx";
import storeZustand from "../../../zustand.jsx";

export default function CardDetail() {
    const { card } = useParams();
    const [cardData, setCardData] = useState([]);
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const { pokemonMomentaneo } = storeZustand();
    const [pokemonMisterioso, setPokemonMisterioso] = useState('');

    // useEffect(() => {
    //     async function datosPokemon() {
    //         try {
    //             const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${card}`);
    //             setCardData(response.data.data);
    //             // console.log(`El numero de pokedex de este pokemon es: ${cardData.nationalPokedexNumbers}`);
    //         } catch (error) {
    //             console.error('Error fetching Pikachu cards:', error);
    //         }
    //     }

    //     datosPokemon();
    // }, [card, cardData]);
    useEffect(() => {
        async function fetchData() {
            try {
                const cardResponse = await axios.get(`https://api.pokemontcg.io/v2/cards/${card}`);
                const cardData = cardResponse.data.data;
                setCardData(cardData);

                const pokedexNumber = cardData.nationalPokedexNumbers[0]; // Suponiendo que nationalPokedexNumbers es un array
                const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedexNumber}`);
                const pokemonData = pokemonResponse.data;
                setPokemonMisterioso(pokemonData);
                console.log(`El nombre del pokemon misterioso es: ${pokemonMisterioso.name}, y el id es: ${pokemonMisterioso.id}`);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [card]);

    const iconoDeTipoo = (tipos) => {
        const iconos = {
            Fire: '0px 0px',
            Water: '-75px -50px',
            Grass: '-25px -50px',
            Lightning: '-50px -50px',
            Psychic: '-75px -25px',
            Fighting: '-50px -25px',
            Metal: '-75px 0px',
            Darkness: '-75px -25px',
            Fairy: '0px -50px',
            Dragon: '0px -25px',
            Colorless: '-25px 0px',
            Trainer: '-75px -50px',
        };

        const tipo = Array.isArray(tipos) ? tipos[0] : tipos;
        return iconos[tipo] || '';
    };

    return (
        <div className="main">
            <div className="itemDetailContainer" style={{ backgroundImage: `url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')` }}>
                <div className="card-detail">
                    <div className="itemCardDetail">

                        <div className="imagen-card">
                            <div className="imagen">
                                <img src={cardData.images?.small} alt={card.name} />
                            </div>
                            <div className="botones" >
                                <div className="moldeador" style={{ display: 'flex', justifyContent: 'center' }} >
                                    <div className="contenedor">
                                        {/* <Link to={`/detalle/${pokemonMomentaneo && pokemonMomentaneo}`} className="boton-texto">
                                            Busca a {pokemonMomentaneo && pokemonMomentaneo.charAt(0).toUpperCase() + pokemonMomentaneo.slice(1)} en la Pokédex
                                        </Link> */}
                                        <Link to={`/detalle/${pokemonMisterioso && pokemonMisterioso.name}`} className="boton-texto">
                                            Busca a {pokemonMisterioso && pokemonMisterioso.name.charAt(0).toUpperCase() + pokemonMisterioso.name.slice(1)} en la Pokédex
                                        </Link>
                                    </div>
                                </div>
                                <div className="moldeador" style={{ display: 'flex', justifyContent: 'center' }} >
                                    <div className="contenedor">
                                        <Link to={'/cardlist'} className="boton-texto">
                                            Explorá más cartas
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="datos-card">
                            <div className="titulo-carta">
                                <h3 className="title"> {cardData && cardData.name} </h3>
                            </div>
                            <div className="tipo-carta">
                                <div className="texto-icono">
                                    <div className="texto">
                                        <h3 className="title">
                                            {cardData && cardData.supertype} {cardData && cardData.subtypes?.map((subtype) => <span> {subtype} </span>)}
                                        </h3>
                                    </div>
                                    <div className="icono">
                                        <h3 className="title"> PS{cardData && cardData.hp} </h3>
                                        <div title={cardData && cardData.types} className="icono-de-tipo" style={{ backgroundPosition: iconoDeTipoo(cardData.types) }}>  </div>
                                    </div>
                                </div>
                                {cardData.evolvesTo &&
                                    <div className="seccion-evolutiva">
                                        <p className="evolucion-texto"> Evoluciona a: </p>
                                        <p className="evolucion-nombre"> {cardData && cardData.evolvesTo} </p>
                                    </div>
                                }
                            </div>

                            <div className="caracteristicas">
                                <div className="titulo-caracteristica">
                                    <div className="titulo">
                                        <h3 className="title"> Reglas para los equipos de {cardData && cardData.subtypes?.map((subtype) => <span> {subtype} </span>)}
                                        </h3>
                                    </div>
                                </div>
                                <div className="texto">
                                    <p className="texto-p">
                                        {cardData.rules && cardData.rules.length > 0 ? cardData.rules[0] : "No hay reglas para esta carta."}
                                    </p>
                                </div>
                            </div>

                            {cardData.attacks && cardData.attacks.map((item, index) => (
                                <div className="caracteristicas" key={index}>
                                    <div className="titulo-ataque">
                                        <div className="tit">
                                            <div className="contenedor-titulo-icon">
                                                <div className="i">
                                                    {item.cost && item.cost.map((cost, index) => (
                                                        <div title={cost} className="icono-de-tipo" key={index} style={{ backgroundPosition: iconoDeTipoo(cost) }}> </div>
                                                    ))}
                                                </div>
                                                <h3 className="titulo"> {item.name} </h3>
                                            </div>
                                            <h3 className="dano"> {item.damage === '' ? "No damage" : item.damage} </h3>
                                        </div>
                                    </div>
                                    <div className="texto">
                                        <p className="texto-p"> {item.text} </p>
                                    </div>
                                </div>
                            ))}

                            <div className="contenedor-debilidades-resistencia">
                                <div className="debilidad-resistencia">
                                    {cardData.weaknesses && cardData.weaknesses.map((weakness, index) => (
                                        <div className="debilidad" key={index}>
                                            <p className="debilidad-texto"> Debilidad </p>
                                            <div className="tipo-debilidad">
                                                <div className="div-icono-tipo">
                                                    <div title={weakness.type} className="icono-de-tipo" style={{ backgroundPosition: iconoDeTipoo([weakness.type]) }}>  </div>
                                                </div>
                                                <p className="debilidad-texto-dos">  {weakness.value} </p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="debilidad">
                                        <p className="debilidad-texto"> Resistencia </p>
                                    </div>
                                    <div className="debilidad">
                                        <p className="debilidad-texto"> Coste de retirada </p>
                                        <div className="contenedor-icono-del-tipo">
                                            {cardData.retreatCost && cardData.retreatCost.map((retreatCost, index) => (
                                                <div title={retreatCost} className="icono-de-tipo" style={{ backgroundPosition: iconoDeTipoo([retreatCost]) }} key={index}> </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="rareza-precio">
                                    <div className="rareza">
                                        <div className="texto">
                                            <p className="texto-rareza"> Rareza </p>
                                        </div>
                                        <div className="texto">
                                            <Link className="rareza-tipo" to={''}>
                                                {cardData && cardData.rarity}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="rareza">
                                        <div className="texto">
                                            <p className="texto-rareza"> Precio promedio </p>
                                        </div>
                                        <div className="texto">
                                            {cardData.tcgplayer &&
                                                <a target="_blank" href={cardData.tcgplayer && cardData.tcgplayer?.url} className="rareza-tipo">
                                                    {cardData.tcgplayer && cardData.tcgplayer?.prices?.holofoil?.mid === undefined ? "Sin existencias." : `€ ${cardData.tcgplayer?.prices?.holofoil?.mid}`}
                                                </a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ilustrador">
                                <div className="contenedor">
                                    <p className="texto-ilustrador"> Ilustrador: <span className="ilustrador-nombre"> {cardData && cardData.artist} </span> </p>
                                </div>
                            </div>

                        </div>

                        <div className="botones-mobile" style={{ display: "none" }} >
                            <div className="moldeador" style={{ display: 'flex', justifyContent: 'center' }} >
                                <div className="contenedor">
                                    {/* <Link to={`/detalle/${pokemonMomentaneo && pokemonMomentaneo}`} className="boton-texto">
                                        Busca a {pokemonMomentaneo && pokemonMomentaneo.charAt(0).toUpperCase() + pokemonMomentaneo.slice(1)} en la Pokédex
                                    </Link> */}
                                    <Link to={`/detalle/${pokemonMisterioso && pokemonMisterioso.name}`} className="boton-texto">
                                        Busca a {pokemonMisterioso && pokemonMisterioso.name.charAt(0).toUpperCase() + pokemonMisterioso.name.slice(1)} en la Pokédex
                                    </Link>
                                </div>
                            </div>
                            <div className="moldeador" style={{ display: 'flex', justifyContent: 'center' }} >
                                <div className="contenedor">
                                    <Link to={'/cardlist'} className="boton-texto">
                                        Explorá más cartas
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <CarouselCard pokemon={`${pokemonMomentaneo}`} /> */}
                <CarouselCard pokemon={`${pokemonMisterioso && pokemonMisterioso.name}`} />
                {/* <CarouselCard pokemon={`${cardData.nationalPokedexNumbers}`} /> */}

            </div>
        </div>
    )
}
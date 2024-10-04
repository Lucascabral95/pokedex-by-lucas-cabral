import './CarouselCard.scss'
import { IoCardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Skeleton from 'react-loading-skeleton';

export default function CarouselCard({ pokemon }) {
    const [card, setCard] = useState([]);
    const [onCarousel, setOnCarousel] = useState(false);
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [elementosCarousel, setElementosCarousel] = useState({
        primero: 0,
        ultimo: 5
    });

    useEffect(() => {
        async function fetchPikachuCards() {
            try {
                const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon.toLocaleLowerCase()}`);
                let cartas = [];
                let data = response.data.data
                for (const object of data) {
                    let id = {
                        id: object.id,
                        images: object.images.small
                    }
                    cartas.push(id);
                }
                setCard(cartas);
            } catch (error) {
                console.error('Error fetching Pikachu cards:', error);
            }
        }

        fetchPikachuCards();
    }, [pokemon]);

    useEffect(() => {
        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 1200);
        setLoadingSkeleton(true);
    }, [pokemon]);

    return (
        <>
            {card.length > 0 && (

                <div className="carousel-card" onMouseOver={() => setOnCarousel(true)} onMouseLeave={() => setTimeout(() => setOnCarousel(false), 300)}>
                    <div className="contenedor-card">

                        <div className="titulo-carta">
                            <div className="card-dd">
                                <IoCardSharp className='card-icon' />
                            </div>
                            <div className="txt">
                                <p className='texto'> Cartas de: {pokemon && pokemon.charAt(0).toUpperCase() + pokemon.slice(1)} </p>
                            </div>
                        </div>

                        <div className="carousel-mayor" >
                            <div className="contenedor-carousel">
                                {onCarousel &&
                                    <>
                                        <div className="flecha-izquierda" onClick={() => setElementosCarousel(prev => {
                                            const nuevoPrimero = prev.primero - 1 < 0 ? card.length - 5 : prev.primero - 1;
                                            return { primero: nuevoPrimero, ultimo: nuevoPrimero + 5 }
                                        })} >
                                            <MdKeyboardArrowLeft className="flecha" />
                                        </div>
                                        <div className="flecha-derecha" onClick={() => setElementosCarousel(prev => {
                                            const nuevoPrimero = prev.primero + 1 > card.length - 5 ? 0 : prev.primero + 1;
                                            return { primero: nuevoPrimero, ultimo: nuevoPrimero + 5 }
                                        })}>
                                            <MdKeyboardArrowRight className="flecha" />
                                        </div>
                                    </>
                                }
                                {card.slice(elementosCarousel.primero, elementosCarousel.ultimo).map((card, index) => (
                                    <div className='image-nombre' key={index}>
                                        <div className="image" style={{ opacity: index === 2 ? 1 : 0.4 }}>
                                            <Link to={`/card/detail/${card.id}`}>
                                                {loadingSkeleton ? <Skeleton height={340} width={247.27} /> : <img src={card.images} alt={pokemon} />}
                                            </Link>
                                        </div>
                                        <div className="contenedor-nombre" style={{ backgroundColor: index === 2 ? '#232323' : '' }}>
                                            <div className="nombre-nombre">
                                                {pokemon &&
                                                    <>
                                                        <p className="nombre">{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</p>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>

            )}
        </>
    )
}

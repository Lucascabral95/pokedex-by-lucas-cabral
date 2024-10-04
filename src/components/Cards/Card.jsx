import "./Card.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import { RiArrowLeftSFill } from "react-icons/ri";

export default function Card({ poke }) {
    // const { poke } = useParams();
    const [card, setCard] = useState([])
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [elementosAMostrar, setElementosAMostrar] = useState(20);
    const [currentPage, setCurrentPage] = useState(0);

    const pokemon = { poke }

    useEffect(() => {
        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 3000);
        // }, [poke]);
    }, [{ poke }]);

    useEffect(() => {
        async function fetchPikachuCards() {
            try {
                const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${poke.toLocaleLowerCase()}`);
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
                console.log('Pikachu cards:', cartas);


                console.log('Pikachu cards:', response.data.data);
            } catch (error) {
                console.error('Error fetching Pikachu cards:', error);
            }
        }

        fetchPikachuCards();
    }, [pokemon]);

    let arrayPrueba = []
    const cantidadDeElementos = card.length

    const paginaAnterior = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const paginaSiguiente = () => {
        if (currentPage < Math.ceil(cantidadDeElementos / elementosAMostrar) - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    for (let i = currentPage * elementosAMostrar; i < (currentPage + 1) * elementosAMostrar && i < card.length; i++) {
        arrayPrueba.push(
            <div>
                <div className="imagen">
                    {loadingSkeleton ?
                        <Skeleton height={200} width={340} />
                        :
                        <Link to={`/card/detail/${card[i]?.id}`}>
                            <img src={card[i]?.images} alt={pokemon} />
                        </Link>
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="main">
            <div className="itemListContainer" style={{ marginTop: '-8px' }}>

                <div className="card" style={{ paddingTop: '60px' }}>

                    <div className="cont">
                        {arrayPrueba}
                    </div>

                    <div className="botones-de-card">
                        <div className="contenedor">
                            <div className="boton" onClick={paginaAnterior}>
                                <RiArrowLeftSFill className="icono" />
                            </div>
                            <div className="numero-pagina">
                                {/* <span> {currentPage + 1} de {Math.ceil(cantidadDeElementos / elementosAMostrar)} </span> */}
                                <span> {currentPage + 1} de {Math.ceil(cantidadDeElementos / elementosAMostrar)} </span>
                            </div>
                            <div className="boton" onClick={paginaSiguiente}>
                                <RiArrowLeftSFill className="icono" style={{ transform: 'rotate(180deg)' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
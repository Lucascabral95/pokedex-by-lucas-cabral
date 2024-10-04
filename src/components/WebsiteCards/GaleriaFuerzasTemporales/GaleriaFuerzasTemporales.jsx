import "./GaleriaFuerzasTemporales.scss"
import HeaderCard from "../ComponentesMobile/HeaderCard/HeaderCard"
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import HeaderMobileGaleria from "./HeaderMobileGaleria";
import ListaVerMas from "./ListaVerMas";
import FooterWebsiteCards from "../ComponentesMobile/FooterWebsiteCards/FooterWebsiteCards";

export default function GaleriaFuerzasTemporales() {
    const [data, setData] = useState([]);
    const [cartaSeleccionada, setCartaSeleccionada] = useState({
        todas: false,
        asTactico: false,
        cartasPasadoFuturo: false,
        ilustracionesEspeciales: false,
        pokemonEx: false,
        raraHiper: true
    });
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [filtroCarta, setFiltroCarta] = useState('Hyper Rare');
    const [traduccionFiltroActual, setTraduccionFiltroActual] = useState('');

    useEffect(() => {
        if (filtroCarta === 'Todas') {
            setTraduccionFiltroActual('TODAS')
        } else if (filtroCarta === 'ACE SPEC Rare') {
            setTraduccionFiltroActual('AS TÁCTICO')
        } else if (filtroCarta === 'ancianoFuturo') {
            setTraduccionFiltroActual('CARTAS DEL PASADO Y DEL FUTURO')
        } else if (filtroCarta === 'Illustration Rare') {
            setTraduccionFiltroActual('ILUSTRACIONES ESPECIALES')
        } else if (filtroCarta === 'Double Rare') {
            setTraduccionFiltroActual('POKÉMON EX')
        } else if (filtroCarta === 'Hyper Rare') {
            setTraduccionFiltroActual('RARA HÍPER')
        }
    }, [filtroCarta]);

    useEffect(() => {
        async function fetchData() {
            try {
                let res;
                if (filtroCarta === 'Todas') {
                    res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=set.name:"Temporal Forces"`);
                    setData(res.data.data);
                } else if (filtroCarta === 'ancianoFuturo') {
                    const datos = ["Ancient", "Future"];
                    const array = [];

                    for (const object of datos) {
                        try {
                            const res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=subtypes:"${object}"`);
                            array.push(...res.data.data);
                        } catch (error) {
                            console.error("Error fetching data:", error);
                        }
                    }

                    setData(array);
                } else {
                    res = await axios.get(`https://api.pokemontcg.io/v2/cards?q=rarity:"${filtroCarta}"`);
                    const cartasFiltradas = res.data.data.filter(card => card.set.name === 'Temporal Forces');
                    setData(cartasFiltradas);
                }
            } catch (error) {
                console.log(error);
            }
            setLoadingSkeleton(false);
        }

        fetchData();
    }, [filtroCarta]);

    const seleccionarBoton = (boton) => {
        setCartaSeleccionada({
            todas: false,
            asTactico: false,
            cartasPasadoFuturo: false,
            ilustracionesEspeciales: false,
            pokemonEx: false,
            raraHiper: false,
            [boton]: true,
        });
    };

    useEffect(() => {
        setLoadingSkeleton(true);
        const timer = setTimeout(() => {
            setLoadingSkeleton(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, [filtroCarta]);

    return (
        <>

            <div className="margin-de-header">
                <HeaderCard />
            </div>

            <div className="galeria-fuerzas-temporales">
                <div className="contenedor-banner">

                    <div className="img-borde img-borde-violeta">
                        <img src="/img/borde-violeta.png" alt="Borde violeta" />
                    </div>

                    <div className="img-borde img-borde-violeta img-borde-violeta-medio">
                        <div className="img-interior">
                            <img src="/img/borde-violeta.png" alt="Borde violeta" />
                        </div>
                    </div>
                    <div className="img-borde img-borde-violeta img-borde-violeta-chico">
                        <div className="img-interior">
                            <img src="/img/borde-violeta.png" alt="Borde violeta" />
                        </div>
                    </div>

                    <div className="informacion-bi-cartas">
                        <div className="fuerzas-temporales-informacion">
                            <div className="img">
                                <img src="/img/fuerzas-temporales-carta.png" alt="Fuerzas Temporales" />
                            </div>
                            <div className="titulo">
                                <h5>ECHA UN VISTAZO A LA EXPANSIÓN ESCARLATA Y PÚRPURA-FUERZAS TEMPORALES DE JCC POKÉMON.</h5>
                            </div>
                            <div className="texto">
                                <p>Descubre las cartas de la nueva expansión de JCC Pokémon, incluido el debut de los Pokémon recién descubiertos en El tesoro oculto del Área Cero,
                                    Parte II: El disco índigo, así como potentes cartas de Pokémon y de Entrenador del pasado y del futuro, hermosas cartas de rareza Rara Ilustración y mucho más.</p>
                            </div>
                        </div>
                        <div className="dos-cartas">
                            <div className="img imagen-uno">
                                <img src="/img/carta-destacada-cuatro.png" alt="Ferrotesta ex" />
                            </div>
                            <div className="img imagen-dos">
                                <img src="/img/carta-destacada-uno.png" alt="Ondulagua ex" />
                            </div>
                        </div>
                    </div>

                    <div className="img-borde img-borde-bordo">
                        <img src="/img/borde-bordo.png" alt="Borde Bordo" />
                    </div>

                    <div className="img-borde img-borde-bordo img-borde-bordo-medio">
                        <div className="img-interior">
                            <img src="/img/borde-bordo.png" alt="Borde Bordo" />
                        </div>
                    </div>

                    <div className="img-borde img-borde-bordo img-borde-bordo-chico">
                        <div className="img-interior">
                            <img src="/img/borde-bordo.png" alt="Borde Bordo" />
                        </div>
                    </div>

                </div>

                <div className="contenedor-navbar">
                    <div className="seccion seccion-interna-izquierda">
                        <div className="seccion-interna">
                            <Link to="/card/expansions/temporal-forces">
                                <div className="interno">
                                    <p> IR A LA PÁGINA DE LA EXPANSIÓN  </p> <MdKeyboardArrowRight className="icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="seccion seccion-interna-derecha">
                        <div className="seccion-interna">
                            <Link to="/card/expansions/temporal-forces">
                                <div className="interno">
                                    <p> ENCUENTRA UNA TIENDA </p> <MdKeyboardArrowRight className="icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="tipos-de-cartas">
                <div className="contenedor">

                    <div className="contenedor-botones">
                        <div className="boton" style={{ backgroundImage: cartaSeleccionada.todas && 'linear-gradient(to right, #76E0E9 0%, #E4EED1 100%)', border: cartaSeleccionada.todas && '4px solid #1E5968' }}
                            onClick={() => { setFiltroCarta("Todas"); seleccionarBoton("todas") }}>
                            <p style={{ color: cartaSeleccionada.todas && 'black' }}> VER TODAS </p>
                        </div>
                        <div className="boton" style={{ backgroundImage: cartaSeleccionada.asTactico && 'linear-gradient(to right, #76E0E9 0%, #E4EED1 100%)', border: cartaSeleccionada.asTactico && '4px solid #1E5968' }}
                            onClick={() => { setFiltroCarta('ACE SPEC Rare'); seleccionarBoton("asTactico") }}>
                            <p style={{ color: cartaSeleccionada.asTactico && 'black' }}> AS TACTICO </p>
                        </div>
                        <div className="boton" style={{ backgroundImage: cartaSeleccionada.ancianoFuturo && 'linear-gradient(to right, #76E0E9 0%, #E4EED1 100%)', border: cartaSeleccionada.ancianoFuturo && '4px solid #1E5968' }}
                            onClick={() => { setFiltroCarta('ancianoFuturo'); seleccionarBoton("ancianoFuturo") }}>
                            <p style={{ color: cartaSeleccionada.ancianoFuturo && 'black' }}> CARTAS DEL PASADO Y DEL FUTURO </p>
                        </div>
                        <div className="boton" style={{ backgroundImage: cartaSeleccionada.illustrationRare && 'linear-gradient(to right, #76E0E9 0%, #E4EED1 100%)', border: cartaSeleccionada.illustrationRare && '4px solid #1E5968' }}
                            onClick={() => { setFiltroCarta('Illustration Rare'); seleccionarBoton("illustrationRare") }} >
                            <p style={{ color: cartaSeleccionada.illustrationRare && 'black' }}> ILUSTRACIONES ESPECIALES </p>
                        </div>
                        <div className="boton" style={{ backgroundImage: cartaSeleccionada.doubleRare && 'linear-gradient(to right, #76E0E9 0%, #E4EED1 100%)', border: cartaSeleccionada.doubleRare && '4px solid #1E5968' }}
                            onClick={() => { setFiltroCarta('Double Rare'); seleccionarBoton("doubleRare") }}>
                            <p style={{ color: cartaSeleccionada.doubleRare && 'black' }}> POKEMON EX </p>
                        </div>
                        <div className="boton" style={{ backgroundImage: cartaSeleccionada.raraHiper && 'linear-gradient(to right, #76E0E9 0%, #E4EED1 100%)', border: cartaSeleccionada.raraHiper && '4px solid #1E5968' }}
                            onClick={() => { setFiltroCarta('Hyper Rare'); seleccionarBoton("hyperRare") }}>
                            <p style={{ color: cartaSeleccionada.raraHiper && 'black' }}> RARA HIPER </p>
                        </div>
                    </div>

                    <HeaderMobileGaleria
                        categoriaActual={traduccionFiltroActual}

                        verTodas={() => { setFiltroCarta("Todas"); seleccionarBoton("todas") }}

                        asTactico={() => { setFiltroCarta('ACE SPEC Rare'); seleccionarBoton("asTactico") }}

                        ancianoFuturo={() => { setFiltroCarta('ancianoFuturo'); seleccionarBoton("ancianoFuturo") }}

                        illustrationRare={() => { setFiltroCarta('Illustration Rare'); seleccionarBoton("illustrationRare") }}

                        doubleRare={() => { setFiltroCarta('Double Rare'); seleccionarBoton("doubleRare") }}

                        raraHiper={() => { setFiltroCarta('Hyper Rare'); seleccionarBoton("hyperRare") }}
                    />

                    <div className="contenedor-de-cartas">

                        {data && data.map((item, index) => (
                            <div className="carta" key={index}>
                                <Link to={`/card/detail/${item.id}`}>
                                    <div className="img" >
                                        {loadingSkeleton
                                            ?
                                            <Skeleton width={245} height={342} className="imagen-skeleton" />
                                            :
                                            <img src={item.images.small} alt={item.name} />
                                        }
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

            <ListaVerMas />

            <FooterWebsiteCards />

        </>
    )
}
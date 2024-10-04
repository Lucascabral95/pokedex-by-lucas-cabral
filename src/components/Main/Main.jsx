import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx"
import "./Main.scss"
import { MdSearch } from "react-icons/md"
import storeZustand from "../../zustand.jsx"

export default function Main() {
    const { setPokemonBusqueda } = storeZustand(); 

    return (
        <div className="main">
            <div className="contenedor-del-main">

                <div className="titulo-pokedex">
                    <div className="contenedor-titulo">
                        <h1 className="title">  Pokédex </h1> 
                    </div>
                </div>

                <div className="contenedor-buscador">
                    <div className="buscador">
                        <div className="primera-mitad">
                            <div className="cont-texto">
                                <span className="texto-nombre"> Nombre o número </span>
                            </div>
                            <div className="buscador-icono">
                                <div className="input-busqueda">
                                    <input type="text" onChange={(e) => setPokemonBusqueda(e.target.value)} />
                                </div>
                                <div className="icono-search">
                                    <div className="icono-icono">
                                        <MdSearch className="icono" size={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="instruccion">
                                <span className="texto-instruccion">
                                    ¡Usá la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, habilidad y demás datos!
                                </span>
                            </div>
                        </div>
                        <div className="segunda-mitad">
                            <div className="busca-pokemon">
                                <span className="nombre"> Busca un Pokemon por su nombre o usando su número de la Pokédex Nacional  </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor-mostrar-busqueda">
                    <div className="primer-contenedor">
                    </div>
                    <div className="segundo-contenedor">
                        <div className="cont">
                            <img src="/public/img/borde-derecho.png" alt="Recodo izquierdo" className="primera-img" />
                            <div className="t-t">
                                <p className="texto-sorpresa"> Mostrar búsqueda avanzada </p>
                            </div>
                            <img src="/public/img/borde-izquierdo.png" alt="recodo derecho" className="segunda-img" />
                        </div>
                    </div>
                </div>

                <ItemListContainer />

            </div>
        </div>
    )
}
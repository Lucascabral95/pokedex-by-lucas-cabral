import "./AsistenciaPokemon.scss";
import ArrayAsistenciaPokemon from "../../JSON/AtencionAlCliente.json"
import { Link } from "react-router-dom";

export default function AsistenciaPokemon() {
    return (
        <>

            <div className="asistencia-pokemon">
                <div className="contenedor">

                    <div className="titulo">
                        <h3> Te damos la bienvenida al servicio de atención al cliente de The Pokemon Company </h3>
                    </div>

                    <div className="contenedor-array">

                        {ArrayAsistenciaPokemon.map((item, index) => (
                            <div className="card" key={index}>
                                <Link to={`/${item.link}`}>
                                    <div className="img">
                                        <img src={item.imagen} alt={item.texto} />
                                    </div>
                                </Link>
                                <div className="contenedor-texto">
                                    <p> {item.texto} </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="div-final">
                        <div className="linea-delimitadora">  </div>
                        <div className="imagen">
                            <img src="/public/img/tres-pokemons.png" alt="Tres Pokemons" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-asistencia-cliente">
                <div className="contenedor">

                    <Link to={'/atencion-al-cliente'}>
                        <div className="img">
                            <img src="/public/img/po-internacional.png" alt="The Pokemon Company Internacional" />
                        </div>
                    </Link>

                    <div className="contenido-medio">
                        <span> © 2024 Pokémon <Link to={'/terminos-y-condiciones/condiciones-de-uso'} className="link"> Condiciones de uso </Link> |
                            <Link to={'/terminos-y-condiciones/aviso-de-privacidad'} className="link"> Política de privacidad </Link> |
                            <Link to={'/terminos-y-condiciones/informacion-legal'} className="link"> Información legal </Link> |
                            <Link to={'/inicio'} className="link"> Pokemon.es </Link> | <Link className="link" to={'/terminos-y-condiciones/guia-de-usuario'}>Pokemon para padres</Link> </span>
                    </div>

                    <div className="idioma">
                        <p> Español </p>
                    </div>

                </div>
            </div>


        </>
    )
}
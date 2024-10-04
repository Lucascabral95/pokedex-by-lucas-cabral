import { Link } from "react-router-dom";
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio.jsx";
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions.jsx";

export default function JCCPokemon() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/evento-seis.png" />

            <StructureSeccions

                superior={
                    <>
                        <div className="fecha">
                            <p> 12 de enero de 2024 </p>
                        </div>
                        <div className="titulo">
                            <h2> Anuncio de la rotación del formato Estándar de JCC Pokémon en 2024 </h2>
                        </div>
                        <div className="contenedor-subtitulo">
                            <h4> La rotación del formato Estándar en el juego competitivo de 2024 entrará en vigor el 5 de abril de 2024. </h4>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal"><span className="resal">E</span>n cada temporada de la Serie de Campeonatos, <span className="texto-celeste">Juego Organizado Pokémon</span> retira expansiones antiguas del formato Estándar con el propósito de mantener un buen entorno de juego competitivo. Esta rotación estimula a los jugadores experimentados
                                a crear nuevas estrategias y a la vez facilita que los nuevos jugadores participen en eventos de Play! Pokémon usando las expansiones más recientes. JCC Pokémon Live también realiza esta rotación para que los jugadores jueguen siempre con las mismas reglas,</p>
                        </div>
                        <div className="titulo-informativo">
                            <h3> Formato Estándar para 2024 </h3>
                            <div className="linea-delimitante"> </div>
                        </div>
                        <div className="carta-encapsulada">
                            <div className="im-im" >
                                <img src="/public/img/battle-vip-pass.png" alt="Battle VIP Pass" />
                            </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Las cartas con la marca de regulación "E" dejarán de ser legales para jugar en el formato Estándar de 2024. Las cartas con las marcas de regulación "F", "G" y "H" seguirán siendo legales, así como las futuras marcas de regulación que puedan establecerse. La legalidad de una carta ya no está determinada por su expansión. Aunque una carta pertenezca a una expansión reciente, los jugadores deberán guiarse por la marca de regulación situada en 
                            la parte inferior de la carta para determinar si esta es legal o no. Las cartas nuevas seguirán requiriendo el periodo de espera correspondiente para que se consideren legales, lo cual generalmente es dos semanas después de su lanzamiento. En adelante, lo normal es que las cartas con la marca de regulación legal más antigua desaparezcan del formato Estándar cuando se introduzca una nueva.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Para los eventos en persona de Play! Pokémon, la rotación del formato Estándar entrará en vigor el 5 de abril de 2024. Para la versión digital en JCC Pokémon Live, la rotación del formato Estándar entrará en vigor el 21 de marzo de 2024. Esto hará que los jugadores dispongan de una plataforma oficial en la que probar el nuevo formato Estándar antes de participar en los eventos en persona.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Las versiones antiguas de las cartas que actualmente son legales para competir pueden seguir utilizándose aunque no tengan una marca de regulación. Por ejemplo, la carta <span className="texto-celeste">Caramelo Raro</span> de la expansión Sol y Luna puede seguir utilizándose porque la carta <span className="texto-celeste">Caramelo Raro</span> de la expansión Escarlata y Púrpura de JCC Pokémon tiene la marca de regulación "G". Y, aunque la carta <span className="texto-celetes">Juez</span> de la expansión Espada y Escudo-Golpe Fusión tiene la marca de regulación "E" (que sale del formato Estándar), aún se puede utilizar debido a que la carta <span className="texto-celeste">Juez</span> de la expansión Escarlata y Púrpura tiene la marca de regulación "G". Asegúrate de consultar el <span className="texto-celeste">Manual de reglas de los torneos de Play! Pokémon</span> para saber qué cartas reimpresas se pueden utilizar.</p>
                        </div>
                        <div className="titulo-informativo">
                            <h3> Formato expandido para 2024 </h3>
                            <div className="linea-delimitante"> </div>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">El formato Expandido no cambiará, manteniendo la serie Negro y Blanco y las posteriores. Los jugadores deberán verificar qué formato se está usando antes de decidir qué baraja llevar a sus eventos. Al igual que en el formato Estándar, las nuevas expansiones pasan a ser válidas para jugar en torneos dos semanas después de salir al mercado.</p>
                        </div>
                        <div className="parrafo">
                            <p className="texto-normal">Ten en cuenta que algunas cartas están actualmente prohibidas en el formato Expandido. Puedes encontrar la lista de las cartas prohibidas aquí.</p>
                        </div>
                        <div className="linea-delimitante" style={{ margin: "40px 0 30px" }}></div>
                        <div className="parrafo">
                            <p className="texto-normal">Asegurate de visitar <span className="texto-celeste">Pokemon.com/LATAM</span> Para conocer las ultimas novedades sobre la serie de Escarlata y Purpura de JCC Pokemon.</p>
                        </div>
                        <div className="buttonss">
                            <button style={{ width: "fit-content" }}> Juegos de Cartas Coleccionables </button>
                            <button> Eventos de Play! Pokemon </button>
                        </div>
                    </>
                }

                inferior={
                    <>
                        <div className="regresar">
                            <Link to="/noticias">
                                <button> Regresar a Noticias </button>
                            </Link>
                        </div>
                        <div className="buttonss bss-dos" style={{ display: "none" }}>
                            <button> Juego de Cartas Coleccionables </button>
                            <button> Eventos de Play! Pokemon </button>
                        </div>
                    </>
                }

            />

        </>
    )
}
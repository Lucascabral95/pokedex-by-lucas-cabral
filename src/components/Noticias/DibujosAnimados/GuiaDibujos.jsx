import { Link } from "react-router-dom"
import PresentacionInicio from "../../Inicio/SeccionesInicio/PresentacionInicio"
import StructureSeccions from "../../Inicio/SeccionesInicio/StructureSeccions"

export default function GuiaDibujos() {
    return (
        <>

            <PresentacionInicio imagen="/public/img/dibujo-ocho.png" />

            <StructureSeccions superior={
                <>
                    <div className="fecha">
                        <p> 21 de marzo de 2024 </p>
                    </div>
                    <div className="titulo">
                        <h2> Nuestra guía de 2023 de dibujos animados Pokémon en Netflix, YouTube, Twitch y mucho más </h2>
                    </div>
                    <div className="contenedor-subtitulo">
                        <h4> Si quieres vivir una aventura animada Pokémon durante estas fiestas, nosotros te ayudaremos a encontrar algo genial para ver. </h4>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> <span className="resal">C</span>onforme va terminando el año y comienza la temporada festiva, no hay mejor momento para juntarte con tu familia y amigos para ver
                            (o volver a ver) y disfrutar de todos los dibujos animados Pokémon disponibles. ¡Hay muchísimas series y especiales nuevas, clásicos muy queridos e incluso un show emocionante que se estrenará muy pronto!</p>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Cada martes durante diciembre, también podrás sintonizar <span className="texto-celeste">el canal oficial de Pokemon en Twitch</span> para disfrutar de un maratón especial festivo. Los maratones empiezan a las 2 p. m.
                            PST, así que no te pierdas ni un minuto de la diversión (sólo disponible en inglés). </p>
                    </div>
                    <div className="contenedor-de-titulo">
                        <div className="titulo">
                            <h3> NUEVAS AVENTURAS </h3>
                        </div>
                        <div className="linea-separadora">   </div>
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Ve las batallas de Ash y su inseparable compañero Pikachu mientras buscan convertirse en Campeones Mundiales en la serie Viajes Definitivos Pokémon, ya disponible en Netflix. También puedes atrapar una colección de episodios especiales llamada Aventuras de un Maestro Pokémon,
                            que sigue al dúo después de su increíble victoria mientras se lanzan hacia un viaje de pura nostalgia. Y asegúrate de sintonizar Netflix el 28 de diciembre de 2023 para el estreno de Concierge Pokémon. Esta serie animada en stop-motion se sitúa en el Resort Pokémon, un destino vacacional para Pokémon. </p>
                    </div>
                    <div className="contenedor-de-imagen">
                        <img src="/public/img/dibujo-noticias-uno.png" alt="Dibujo" />
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Hay mucho que ver en el canal oficial de Pokémon en YouTube. Échale un vistazo a Pokémon: Vientos de Paldea, una nueva serie de dibujos animados de cuatro episodios que sigue las aventuras de tres estudiantes de una academia en la región de Paldea mientras buscan cumplir sus sueños.
                            Una chica llamada Ava descubre su pasión por el Juego de Cartas Coleccionables Pokémon y se dispone a llegar a la cima de la Serie de Campeonatos en Pokémon: Senda a la cima. Además, el detective de renombre internacional está de regreso para descubrir la verdad detrás de cierto postre rebelde en el corto animado Un nuevo caso para Tim y Pikachu: la desaparición del flan de Tim. </p>
                    </div>
                    <div className="contenedor-de-titulo">
                        <div className="titulo">
                            <h3>  VIAJES CLÁSICOS </h3>
                        </div>
                        <div className="linea-separadora"></div>
                    </div>
                    <div className="contenedor-de-imagen">
                        <img src="/public/img/dibujo-noticias-dos.png" alt="Dibujo" />
                    </div>
                    <p className="parrafo">
                        <p className="texto-normal"> El canal oficial de Pokémon en YouTube también ofrece varias series animadas limitadas que le permite a los espectadores adentrarse aún más en el mundo Pokémon. No te pierdas las siguientes series: </p>
                    </p>
                    <div className="lista-simple">
                        <ul>
                            <li>
                                <span> Pokémon: Nieves de Hisui </span> </li>
                            <li> Evoluciones Pokémon  </li>
                            <li> POKÉTOON </li>
                        </ul>
                    </div>
                    <p className="parrafo">
                        <p className="texto-normal"> Ya mencionamos el fin de las aventuras de Ash y Pikachu en la serie Viajes Definitivos Pokémon, pero no olvides que hay cientos de episodios de la serie Pokémon que los llevaron a ese momento culminante. Dale un vistazo a nuestra guía para saber dónde puedes atrapar sus inolvidables viajes. </p>
                    </p>
                    <div className="contenedor-de-titulo">
                        <div className="titulo">
                            <h3>  PRÓXIMAS AVENTURAS </h3>
                        </div>
                        <div className="linea-separadora"></div>
                    </div>
                    <div className="contenedor-de-imagen">
                        <img src="/public/img/dibujo-nueve.png" alt="Dibujo" />
                    </div>
                    <div className="parrafo">
                        <p className="texto-normal"> Ciertamente, hay muchos dibujos animados Pokémon para disfrutar, ¡pero hay todavía más en el horizonte! La serie Horizontes Pokémon se estrenará en Netflix el 23 de febrero de 2024. Esta nueva serie sigue las aventuras de Liko y Rod quienes, junto con sus compañeros Pokémon Sprigatito y Fuecoco, se embarcan en un viaje a través de diferentes regiones con nuevos amigos y adorables Pokémon. A lo largo de su camino, recibirán ayuda de Friede, Capitán Pikachu y otros miembros de la Tacleada de Voltionautas mientras trabajan juntos para evadir al grupo misterioso de los Exploradores.
                            Agarren sus palomitas y pónganse cómodos, Entrenadores. ¡Tienen muchísimos dibujos animados Pokémon de lujo que disfrutar durante estas fiestas! </p>
                    </div>
                    <div className="boton-abajo">
                        <Link to={''}>
                            <button> Dibujos animados </button>
                        </Link>
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
                    </>
                }
            />

        </>
    )
}
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import { useEffect } from "react";
import Card from "../components/Cards/Card.jsx";
import CardDetail from "../components/ItemDetailContainer/Cards/CardDetail.jsx";
import CardListContainer from "../components/CardListContainer/CardListContainer.jsx";
import CardID from "../components/Cards/CardID.jsx";
import Inicio from "../components/Inicio/Inicio.jsx";
import Sprigatito from "../components/Inicio/SeccionesInicio/Sprigatito.jsx";
import EscarlataPurpura from "../components/Inicio/SeccionesInicio/EscarlataPurpura.jsx";
import Ogerpon from "../components/Inicio/SeccionesInicio/Ogerpon.jsx";
import Noticias from "../components/Noticias/Noticias.jsx";
import GuiaDibujos from "../components/Noticias/DibujosAnimados/GuiaDibujos.jsx";
import HorizontesPokemon from "../components/Noticias/DibujosAnimados/HorizontesPokemon.jsx";
import HorizontesPokemonDos from "../components/Noticias/DibujosAnimados/HorizontesPokemonDos.jsx";
import TriviaViajesDefinitivos from "../components/Noticias/DibujosAnimados/TriviaViajesDefinitivos.jsx";
import TVPokemon from "../components/Noticias/DibujosAnimados/TVPokemon.jsx";
import PorSiempreHeroes from "../components/Noticias/DibujosAnimados/PorSiempreHeroes.jsx";
import VientosPaldea from "../components/Noticias/DibujosAnimados/VientosPaldea.jsx";
import VientosPaldeaTercerEpisodio from "../components/Noticias/DibujosAnimados/VientosPaldeaTercerEpisodio.jsx";
import PlayPokemonPrimerTrimestre from "../components/Noticias/Eventos/PlayPokemonPrimerTrimestre.jsx";
import PlayPokemonCampeonatos from "../components/Noticias/Eventos/PlayPokemonCampeonatos.jsx";
import CampeonatoInternacionaEuropa from "../components/Noticias/Eventos/CampeonatoInternacionaEuropa.jsx";
import PlayPokemonLocal from "../components/Noticias/Eventos/PlayPokemonLocal.jsx";
import PlayPokemonSerie4 from "../components/Noticias/Eventos/PlayPokemonSerie4.jsx";
import JCCPokemon from "../components/Noticias/Eventos/JCCPokemon.jsx";
import PokemonGo from "../components/Noticias/Eventos/PokemonGo.jsx";
import PlayPokemonActualizacion from "../components/Noticias/Eventos/PlayPokemonActualizacion.jsx";
import Dragapult from "../components/Noticias/Eventos/Dragaoult.jsx";
import EstrategiasCombate from "../components/Noticias/Coleccionables/EstrategiasCombate.jsx";
import FuerzasTemporalesJCCPokemon from "../components/Noticias/Coleccionables/FuerzasTemporalesJCCPokemon.jsx";
import Farigiraf from "../components/Noticias/Coleccionables/Farigiraf.jsx";
import JCCPokemonDos from "../components/Noticias/Coleccionables/JCCPokemonDos.jsx";
import JCCPokemonTres from "../components/Noticias/Coleccionables/JCCPokemonTres.jsx";
import Mimikyu from "../components/Noticias/Coleccionables/Mimikyu,.jsx";
import DibujosAnimados from "../components/DibujosAnimados/DibujosAnimados.jsx";
import IndexDibujosAnimados from "../components/DibujosAnimados/IndexDibujosAnimados.jsx";
import MoviesSection from "../components/DibujosAnimados/Secciones/MoviesSection.jsx";
import SeriesSection from "../components/DibujosAnimados/Secciones/SeriesSection.jsx";
import Aplicaciones from "../components/Aplicaciones/Aplicaciones.jsx";
import AppPokemonLive from "../components/Aplicaciones/NombresAplicaciones/AppPokemonLive.jsx";
import AppPokemonSleep from "../components/Aplicaciones/NombresAplicaciones/AppPokemonSleep.jsx";
import AppPokemonUNITE from "../components/Aplicaciones/NombresAplicaciones/AppPokemonUNITE.jsx";
import AppPokemonGO from "../components/Aplicaciones/NombresAplicaciones/AppPokemonGO.jsx";
import AppPokemonMastersEX from "../components/Aplicaciones/NombresAplicaciones/AppPokemonMastersEX.jsx";
import AppPokemonHome from "../components/Aplicaciones/NombresAplicaciones/AppPokemonHome.jsx";
import AppPokemonCafeMix from "../components/Aplicaciones/NombresAplicaciones/AppPokemonCafeMix.jsx";
import AppPokemonSmile from "../components/Aplicaciones/NombresAplicaciones/AppPokemonSmile.jsx";
import AppPokemonRumbleRush from "../components/Aplicaciones/NombresAplicaciones/AppPokemonRumbleRush.jsx";
import AppPokemonQuest from "../components/Aplicaciones/NombresAplicaciones/AppPokemonQuest.jsx";
import AppPokemonCasaJuegos from "../components/Aplicaciones/NombresAplicaciones/AppPokemonCasaJuegos.jsx";
import AppPokemonMagikarp from "../components/Aplicaciones/NombresAplicaciones/AppPokemonMagikarp.jsx";
import AppPokemonShuffle from "../components/Aplicaciones/NombresAplicaciones/AppPokemonShuffle.jsx";
import MovieDetailContainer from "../components/DibujosAnimados/MovieDetailContainer/MovieDetailContainer.jsx";
import SerieDetailContainer from "../components/DibujosAnimados/SerieDetailContainer/SerieDetailContainer.jsx";
import WebsiteCards from "../components/WebsiteCards/WebsiteCards.jsx";
import GaleriaFuerzasTemporales from "../components/WebsiteCards/GaleriaFuerzasTemporales/GaleriaFuerzasTemporales.jsx";
import EstructuraTerminosCondiciones from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/EstructuraTerminosCondiciones.jsx";
import AtencionAlCLiente from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/AtencionAlCLiente.jsx";
import ThePokemonCompany from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/ThePokemonCompany.jsx";
import InformacionLegal from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/InformacionLegal.jsx";
import CondicionesDeUso from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/CondicionesUso.jsx";
import AvisoDePrivacidad from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/AvisoDePrivacidad.jsx";
import PaginaDeCookiess from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/PaginaDeCookies.jsx";
import GuiaUsuario from "../components/GuiaUsuario/GuiaUsuario.jsx";
import AsistenciaPokemon from "../components/AsistenciaPokemon/AsistenciaPokemon.jsx";
import CartasColeccionables from "../components/CartasColeccionables/CartasColeccionables.jsx";
import IlustracionesEscarlataPupura from "../components/CartasColeccionables/Secciones/IlustracionesEscarlataPupura.jsx";
import PokemonParadoja from "../components/CartasColeccionables/Secciones/PokemonParadoja.jsx";
import JccPokemonLive from "../components/CartasColeccionables/Secciones/JccPokemonLive.jsx";
import CajaEntrenadorElite from "../components/CartasColeccionables/Secciones/CajaEntrenadorElite.jsx";
import MejoraTuBaraja from "../components/CartasColeccionables/Secciones/MejoraTuBaraja.jsx";
import AprendeJccPokemon from "../components/CartasColeccionables/Secciones/AprendeJccPokemon.jsx";
import GaleriaFotos from "../components/GaleriaFotos/GaleriaFotos.jsx";
import EscarletaYPurpura from "../components/GaleriaFotos/Secciones/EscarletaYPurpura.jsx";
import CajaEntrenadorEliteTemporales from "../components/GaleriaFotos/Secciones/CajaEntrenadorEliteTemporales.jsx";
import ColeccionPremiumArmarouge from "../components/GaleriaFotos/Secciones/ColeccionPremiumArmarouge.jsx";
import LotePaquetesDeMejora from "../components/GaleriaFotos/Secciones/LotePaquetesDeMejora.jsx";
import BarajaCombate from "../components/GaleriaFotos/Secciones/BarajaCombate.jsx";
import ColeccionTorneoPremium from "../components/GaleriaFotos/Secciones/ColeccionTorneoPremium.jsx";
import ColeccionGrafaiai from "../components/GaleriaFotos/Secciones/ColeccionGrafaiai.jsx";
import ColeccionPremiumPokemonEx from "../components/GaleriaFotos/Secciones/ColeccionPremiumPokemonEx.jsx";
import LataDestinos from "../components/GaleriaFotos/Secciones/LataDestinos.jsx";
import BarajaCombateDeluxe from "../components/GaleriaFotos/Secciones/BarajaCombateDeluxe.jsx";
import CajaEntrenadorElitePaldea from "../components/GaleriaFotos/Secciones/CajaEntrenadorElitePaldea.jsx";
import ColeccionConPegatinas from "../components/GaleriaFotos/Secciones/ColeccionConPegatinas.jsx";
import LataApilable from "../components/GaleriaFotos/Secciones/LataApilable.jsx";
import MaletinAventurasPaldea from "../components/GaleriaFotos/Secciones/MaletinAventurasPaldea.jsx";
import ColeccionMabosstiff from "../components/GaleriaFotos/Secciones/ColeccionMabosstiff.jsx";
import TuAventura from "../components/GaleriaFotos/Secciones/TuAventura.jsx";
import SobreNosotros from "../components/WebsiteCards/GaleriaFuerzasTemporales/TerminosCondiciones/SobreNosotros.jsx";
import CardAnimation from "../components/Animaciones/CardAnimation.jsx";

export default function PublicRoutes() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const validPaths = [
        "/terminos-y-condiciones",
        "/terminos-y-condiciones/sobre-nuestra-compania",
        "/terminos-y-condiciones/aviso-de-privacidad",
        "/terminos-y-condiciones/pagina-de-cookies",
        "/terminos-y-condiciones/condiciones-de-uso",
        "/terminos-y-condiciones/informacion-legal",
        "/",
        "/inicio",
        "/pokedex",
        "/aplicaciones",
        "/cardlist",
    ];

    return (
        <>

            <Header />

            <Routes>

                <Route path="/*" element={<Main />} />
                <Route path="/pokedex" element={<Main />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/header" element={<Header />} />
                <Route path="/pokemon/detalle/:nombre" element={<ItemDetailContainer />} />
                <Route path="/lista" element={<ItemListContainer />} />
                <Route path="/detalle/:pokemon" element={<ItemDetailContainer />} />
                <Route path="/poke" element={<ItemDetailContainer />} />
                <Route path="/card/:poke" element={<Card />} />
                <Route path="/card/detail/:card" element={<CardDetail />} />
                <Route path="/cardlist" element={<CardListContainer />} />
                <Route path="/test/:carta" element={<CardID />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/noticias/sprigatito" element={<Sprigatito />} />
                <Route path="/noticias/escarlata-purpura" element={<EscarlataPurpura />} />
                <Route path="/noticias/ogerpon" element={<Ogerpon />} />
                <Route path="/noticias/nuestra-guia-de-2023-de-dibujos-animados-pokemon-en-netflix-youtube-twitch-y-mucho-mas" element={<GuiaDibujos />} />
                <Route path="/noticias/disfruta-ya-de-la-serie-horizontes-pokemon-en-netflix" element={<HorizontesPokemon />} />
                <Route path="/noticias/la-serie-horizontes-pokemon-se-estrenara-el-7-de-marzo" element={<HorizontesPokemonDos />} />
                <Route path="/noticias/trivia-de-la-serie-viajes-definitivos-pokemon" element={<TriviaViajesDefinitivos />} />
                <Route path="/noticias/tv-pokemon-llega-a-su-fin-en-marzo-de-2024" element={<TVPokemon />} />
                <Route path="/noticias/pokemon-por-siempre-y-heroes-pokemon-ya-estan-disponibles-para-su-compra-digital" element={<PorSiempreHeroes />} />
                <Route path="/noticias/el-cuarto-episodio-de-pokemon-vientos-de-paldea-ya-esta-disponible" element={<VientosPaldea />} />
                <Route path="/noticias/el-tercer-episodio-de-pokemon--vientos-de-paldea-ya-esta-disponible-en-youtube" element={<VientosPaldeaTercerEpisodio />} />
                <Route path="/noticias/actualizacion-de-los-reglamentos-de-play-pokemon-para-el-primer-trimestre-de-2024" element={<PlayPokemonPrimerTrimestre />} />
                <Route path="/noticias/novedades-sobre-los-eventos-locales-de-junio-de-la-serie-de-campeonatos" element={<PlayPokemonCampeonatos />} />
                <Route path="/noticias/obten-un-pokemon-durante-la-transmision-del-campeonato-internacional-de-europa-2024" element={<CampeonatoInternacionaEuropa />} />
                <Route path="/noticias/celebra-el-dia-de-pokemon-en-un-evento-local-de-play-pokemon" element={<PlayPokemonLocal />} />
                <Route path="/noticias/consigue-paquetes-de-premio-de-play-pokemon-de-la-serie-4-en-tu-tienda-de-juegos-mas-cercana" element={<PlayPokemonSerie4 />} />
                <Route path="/noticias/anuncio-de-la-rotacion-del-formato-estandar-de-jcc-pokemon-en-2024" element={<JCCPokemon />} />
                <Route path="/noticias/pokemon-go-se-une-a-los-eventos-de-juego-organizado-en-latinoamerica" element={<PokemonGo />} />
                <Route path="/noticias/actualizacion-de-los-reglamentos-de-play-pokemon-para-el-cuarto-trimestre-de-2023" element={<PlayPokemonActualizacion />} />
                <Route path="/noticias/consigue-al-dragapult-de-alex-gomez-berna-y-anade-la-carta-ferropaladin-ex-a-tu-coleccion-en-jcc-pokemon-live" element={<Dragapult />} />
                <Route path="/noticias/estrategias-para-las-barajas-del-pase-de-combate-de-escarlata-y-purpura-fuerzas-temporales-de-jcc-pokemon" element={<FuerzasTemporalesJCCPokemon />} />
                <Route path="/noticias/ogerpon-debuta-en-la-expansion-escarlata-y-purpura-mascarada-crepuscular-de-jcc-pokemon" element={<Ogerpon />} />
                <Route path="/noticias/farigiraf-ex-cinturon-colosal-y-mucho-mas-de-escarlata-y-purpura-fuerzas-temporales-de-jcc-pokemon" element={<Farigiraf />} />
                <Route path="/noticias/consigue-la-caja-de-combina-y-combate-de-escarlata-y-purpura-fuerzas-temporales-de-jcc-pokemon-de-manera-anticipada" element={<JCCPokemonDos />} />
                <Route path="/noticias/un-primer-vistazo-a-las-cartas-de-la-expansion-escarlata-y-purpura-fuerzas-temporales-de-jcc-pokemon" element={<JCCPokemonTres />} />
                <Route path="/noticias/brilla-con-luz-propia-con-mimikyu-gardevoir-ex-charizard-ex-y-muchos-mas-en-escarlata-y-purpura-destinos-de-paldea" element={<Mimikyu />} />
                <Route path="/noticias/estrategias-para-las-barajas-coleccionables" element={<EstrategiasCombate />} />
                <Route path="/noticias/emprende-tu-aventura-en-pokemon" element={<TuAventura />} />
                <Route path="/dibujos-animados/donde-ver-los-episodios-y-peliculas-pokemon" element={<DibujosAnimados />} />
                <Route path="/dibujos-animados" element={<IndexDibujosAnimados />} />
                <Route path="/dibujos-animados/peliculas" element={<MoviesSection />} />
                <Route path="/dibujos-animados/series" element={<SeriesSection />} />

                {/* Aplicaciones                 */}
                <Route path="/aplicaciones" element={<Aplicaciones />} />
                <Route path="/aplicaciones/pokemon-live" element={<AppPokemonLive />} />
                <Route path="/aplicaciones/pokemon-sleep" element={<AppPokemonSleep />} />
                <Route path="/aplicaciones/pokemon-unite" element={<AppPokemonUNITE />} />
                <Route path="/aplicaciones/pokemon-go" element={<AppPokemonGO />} />
                <Route path="/aplicaciones/pokemon-masters-ex" element={<AppPokemonMastersEX />} />
                <Route path="/aplicaciones/pokemon-home" element={<AppPokemonHome />} />
                <Route path="/aplicaciones/pokemon-cafe-mix" element={<AppPokemonCafeMix />} />
                <Route path="/aplicaciones/pokemon-smile" element={<AppPokemonSmile />} />
                <Route path="/aplicaciones/pokemon-rumble-rush" element={<AppPokemonRumbleRush />} />
                <Route path="/aplicaciones/pokemon-quest" element={<AppPokemonQuest />} />
                <Route path="/aplicaciones/pokemon-casa-de-juegos" element={<AppPokemonCasaJuegos />} />
                <Route path="/aplicaciones/pokemon-magikarp-jump" element={<AppPokemonMagikarp />} />
                <Route path="/aplicaciones/pokemon-shuffle-mobile" element={<AppPokemonShuffle />} />

                {/* detalles de peliculas y series */}
                <Route path="/dibujos-animados/pelicula/:id" element={<MovieDetailContainer />} />
                <Route path="/dibujos-animados/serie/:id" element={<SerieDetailContainer />} />

                {/* pagina web de cartas | galeria de cartas */}
                <Route path="/card/expansions/temporal-forces" element={<WebsiteCards />} />
                <Route path="/card/galeria/fuerzas-temporales" element={<GaleriaFuerzasTemporales />} />

                {/* Terminos y condiciones */}
                <Route path="/terminos-y-condiciones" element={<EstructuraTerminosCondiciones />} />
                <Route path="/terminos-y-condiciones/atencion-al-cliente" element={<AtencionAlCLiente />} />
                <Route path="/terminos-y-condiciones/the-pokemon-company" element={<ThePokemonCompany />} />
                <Route path="/terminos-y-condiciones/guias-pokemon" element={<AtencionAlCLiente />} />
                <Route path="/terminos-y-condiciones/aviso-de-privacidad" element={<AvisoDePrivacidad />} />
                <Route path="/terminos-y-condiciones/pagina-de-cookies" element={<PaginaDeCookiess />} />
                <Route path="/terminos-y-condiciones/condiciones-de-uso" element={<CondicionesDeUso />} />
                <Route path="/terminos-y-condiciones/informacion-legal" element={<InformacionLegal />} />
                <Route path="/terminos-y-condiciones/guia-de-usuario" element={<GuiaUsuario />} />
                <Route path="/terminos-y-condiciones/sobre-nuestra-compania" element={<SobreNosotros />} />
                <Route path="/atencion-al-cliente" element={<AsistenciaPokemon />} />

                {/* JCC POKEMON */}
                <Route path="/jcc-pokemon" element={<CartasColeccionables />} />
                <Route path="/jcc-pokemon/ilustraciones-escarlata-purpura" element={<IlustracionesEscarlataPupura />} />
                <Route path="/jcc-pokemon/pokemon-paradoja" element={<PokemonParadoja />} />
                <Route path="/jcc-pokemon/jcc-pokemon-live" element={<JccPokemonLive />} />
                <Route path="/jcc-pokemon/caja-entrenador-elite" element={<CajaEntrenadorElite />} />
                <Route path="/jcc-pokemon/mejora-tu-baraja" element={<MejoraTuBaraja />} />
                <Route path="/jcc-pokemon/aprende-jcc-pokemon" element={<AprendeJccPokemon />} />

                {/* galeria de productos */}
                <Route path="/jcc-pokemon/galeria-de-productos" element={<GaleriaFotos />} />
                <Route path="/jcc-pokemon/galeria-de-productos/caja-entrenador-elite-escarlata-purpura-mascarada-crepuscular" element={<CajaEntrenadorElite />} />
                <Route path="/jcc-pokemon/galeria-de-productos/lata-coalision-paradojica" element={<PokemonParadoja />} />
                <Route path="/jcc-pokemon/galeria-de-productos/escarlata-y-purpura-fuerzas-temporales" element={<EscarletaYPurpura />} />
                <Route path="/jcc-pokemon/galeria-de-productos/caja-de-entrenador-elite-de-escarlata-y-purpura-fuerzas-temporales" element={<CajaEntrenadorEliteTemporales />} />
                <Route path="/jcc-pokemon/galeria-de-productos/coleccion-premium-armarouge-ex" element={<ColeccionPremiumArmarouge />} />
                <Route path="/jcc-pokemon/galeria-de-productos/lote-de-paquetes-de-mejora-de-escarlata-y-purpura-destinos-de-paldea" element={<LotePaquetesDeMejora />} />
                <Route path="/jcc-pokemon/galeria-de-productos/baraja-combate-ex-de-melmetal-ex-baraja-combate-ex-de-houndoom-ex" element={<BarajaCombate />} />
                <Route path="/jcc-pokemon/galeria-de-productos/coleccion-torneo-premium-e-nigma" element={<ColeccionTorneoPremium />} />
                <Route path="/jcc-pokemon/galeria-de-productos/coleccion-grafaiai-ex" element={<ColeccionGrafaiai />} />
                <Route path="/jcc-pokemon/galeria-de-productos/coleccion-premium-pokemon-ex-de-escarlata-y-purpura-destinos-de-paldea" element={<ColeccionPremiumPokemonEx />} />
                <Route path="/jcc-pokemon/galeria-de-productos/lata-escarlata-y-purpura-destinos-de-paldea" element={<LataDestinos />} />
                <Route path="/jcc-pokemon/galeria-de-productos/baraja-combate-deluxe-de-ninetales-ex-y-baraja-combate-deluxe-de-zapdos-ex" element={<BarajaCombateDeluxe />} />
                <Route path="/jcc-pokemon/galeria-de-productos/caja-de-entrenador-elite-de-escarlata-y-purpura-destinos-de-paldea" element={<CajaEntrenadorElitePaldea />} />
                <Route path="/jcc-pokemon/galeria-de-productos/coleccion-con-pegatina-especial-de-escarlata-y-purpura-destinos-de-paldea" element={<ColeccionConPegatinas />} />
                <Route path="/jcc-pokemon/galeria-de-productos/lata-apilable" element={<LataApilable />} />
                <Route path="/jcc-pokemon/galeria-de-productos/maletin-aventuras-en-paldea" element={<MaletinAventurasPaldea />} />
                <Route path="/jcc-pokemon/galeria-de-productos/coleccion-mabosstiff-ex" element={<ColeccionMabosstiff />} />

                <Route path="/animaciones" element={<CardAnimation />} />

            </Routes>

            {
                (
                    validPaths.includes(location.pathname) ||
                    location.pathname.startsWith("/noticias") ||
                    location.pathname.startsWith("/dibujos") ||
                    location.pathname.startsWith("/detalle") || 
                    location.pathname.startsWith("/card/detail")  
                )
                &&
                <Footer />
            }

        </>
    )
}
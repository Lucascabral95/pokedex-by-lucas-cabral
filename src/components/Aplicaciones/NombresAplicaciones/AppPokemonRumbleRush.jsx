import { Link } from "react-router-dom";
import StructureApp from "../StructureApp.jsx";


export default function AppPokemonRumbleRush() {
  return (
    <>

      <StructureApp

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Pokémon Rumble Rush</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"> <strong>Pokémon Rumble Rush finalizó su servicio el 22 de julio de 2020. </strong></p>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">¡E</span>repárate para la aventura! En Pokémon Rumble Rush, viajarás a islas desconocidas, lucharás contra Pokémon salvajes y encontrarás objetos útiles. ¿Serás capaz de reunir compañeros Pokémon lo suficientemente fuertes para enfrentarte a los superjefes de las islas en esta amena expedición?</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡La victoria está en tus manos!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Gracias a los sencillos controles de este juego, explorar islas desconocidas es simple y divertido. Tu Pokémon se dirigirá al Pokémon salvaje más cercano automáticamente mientras recorre cada una de las fases. Toca la pantalla para dirigir los ataques. Si das toques rápidos, atacará a mayor velocidad. Y si mantienes presionada la pantalla durante unos segundos, cargarás un movimiento más poderoso.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Sea cual sea tu táctica preferida, ¡necesitarás reunir muchos Pokémon para que unan sus fuerzas y te ayuden a completar tus misiones! </p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Encuentra amigos Pokémon</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">A medida que luches contra Pokémon salvajes, verás que algunos de ellos se unirán a ti. Cuantos más Pokémon de la misma especie captures, más fuertes serán los siguientes que se alíen contigo, así que atrapa muchos ejemplares para conseguir a unos cuantos de peso pesado. Y, si tu colección se vuelve demasiado numerosa, envía algunos al Club de Aventureros para recibir monedas como recompensa.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Eso sí, asegúrate de quedarte con los Pokémon más poderosos. Incluso si no estás explorando las islas, puedes poner a prueba su fuerza y ganar valiosas recompensas en torneos.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡Aprieta las tuercas!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¡Tus compañeros Pokémon contarán con ayuda para el combate! A veces descubrirás minerales a lo largo de tu recorrido por distintas zonas de las islas. Puedes forjar engranajes a partir de estos para equipárselos a tus Pokémon.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Hay dos tipos de engranajes. Además de los engranajes normales, que fortalecen las características individuales de un Pokémon y lo vuelven más eficaz en combate, también recibirás engranajes de aliado que permiten que tu Pokémon llame a otro para que le eche una mano. ¡Elige los más adecuados para que tu Pokémon salga victorioso!</p>
            </div>
          </>
        }

        imagen="/img/app-nueve.jpg"

      />

    </>
  )
}
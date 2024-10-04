import StructureApp from "../StructureApp.jsx";

export default function AppPokemonLive() {
  return (
    <>

      <StructureApp

        imagen="/img/pokemon-live-azul.png"

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Pokémon Live</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">E</span>l Juego de Cartas Coleccionables Pokémon Live es una versión completamente gratuita y en línea del Juego de Cartas Coleccionables Pokémon. Inicia sesión con tu <span className="texto-azul">cuenta gratuita del Club de Entrenadores Pokémon</span> en Pokemon.com/LATAM y expande tu colección virtual de cartas, avanzando en el juego a través de las diferentes plataformas en que está disponible: computadoras con Windows y Mac, tabletas iPad y Android, así como dispositivos móviles.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Enfréntate en combates de JCC Pokémon</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Combate contra Entrenadores de todo el mundo en partidas de JCC Pokémon con diferentes modos y formatos. El modo competitivo y el modo casual son diferentes, aunque los jugadores pueden obtener recompensas completando las misiones diarias en ambos modos.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">El modo competitivo cuenta con una escalera competitiva que otorga recompensas adicionales al final de cada mes según la posición más alta que hayas alcanzado. Combate en el modo competitivo para obtener puntos de rango, subir en la clasificación y conseguir más recompensas. Los puntos de rango no se pueden perder hasta que se alcance la Liga Super Ball. A partir de este nivel, sí que podrás perderlos cada vez que seas derrotado en una partida. Actualmente, sólo se puede jugar en el modo competitivo con el formato Estándar.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Las partidas del modo casual cuentan a la hora de completar las misiones diarias y para subir de nivel en el pase de combate. También, conceden las mismas recompensas que se pueden obtener en el modo competitivo, a excepción de los puntos de rango. En el modo casual se puede escoger entre jugar con el formato Estándar o el Expandido para perfeccionar tus habilidades antes de desafiar a los jugadores más experimentados en el modo competitivo. Antes de jugar contra otras personas, los jugadores también pueden usar una función que les permite probar una baraja de su elección contra un jugador generado por el juego con inteligencia artificial (IA).</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Crea tu colección de JCC Pokémon Live</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">El lanzamiento de cada expansión de JCC Pokémon coincide con un nuevo pase de combate de JCC Pokémon Live repleto de recompensas. Cada pase de combate incluye una baraja de 60 cartas lista para jugar, y se puede mejorar con el pase de combate prémium que desbloquea una baraja adicional. Subir de nivel en el pase de combate desbloqueará nuevas cartas con las que potenciar las barajas obtenidas, así como monedas, cristales y créditos con los que empezar a crear tu colección de JCC Pokémon Live.
                También puedes ganar artículos de moda con los que personalizar tu avatar, además de monedas, fundas y cajas para cartas con las que dar un toque creativo a tus barajas competitivas. <span className="texto-azul">Para obtener más información sobre el pase de combate de JCC Pokémon Live, consulta la página del pase de combate</span>.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Si eres coleccionista de cartas físicas de JCC Pokémon, también puedes canjear las cartas con código que encontrarás en los productos de JCC Pokémon que lo especifican, y desbloquear así recompensas digitales, ¡como paquetes de mejora, barajas ya preparadas, cartas de promoción y mucho más!</p>
            </div>
          </>
        }

        imagenLogo="/img/pokemon-live-azul.png"

        cuerpoLogo={
          <>
            <p>Fecha De Lanzamiento: <strong>8 de junio de 2023</strong></p>
            <p>Genero: <strong>Juego de Cartas Coleccionables</strong></p>
            <p>Plataforma: <strong>Windows y Mac</strong></p>
            <p>Jugadores: <strong>1-2</strong></p>
          </>
        }

        cuerpoAppStore={
          <>
            <p>Plataforma: <strong>Dispositivos iOS (dispositivos moviles) y iPadOS (tabletas) </strong></p>
          </>
        }

        cuerpoGooglePlay={
          <>
            <p>Plataforma: <strong>Dispositivos Android</strong></p>
          </>
        }

        cuerpoExtraImagenUno="/img/pokemon-live-uno.png"
        cuerpoExtraTituloUno="Visita la pagina web"
        cuerpoExtraImagenDos="/img/pokemon-live-dos.jpg"
        cuerpoExtraTituloDos="Caneja codigos de JCC Pokemon Live"

      />

    </>
  )
}
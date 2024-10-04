import StructureApp from "../StructureApp.jsx";

export default function AppPokemonSmile() {
  return (
    <>

      <StructureApp

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Pokémon Smile</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">A</span>nimar a los más pequeños a que se laven los dientes puede ser difícil, ¡pero Pokémon Smile hará que cepillarse los dientes se convierta en toda una aventura! En este juego de descarga gratuita, los niños podrán cepillarse los dientes y rescatar a sus amigos Pokémon atrapados por las bacterias que provocan caries utilizando la cámara del dispositivo móvil.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡Ayuda a los Pokémon!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Tras un buen cepillado, los niños derrotarán a las problemáticas bacterias y liberarán a los Pokémon que estaban ocultos. Si hacen un buen trabajo, podrán rescatar al Pokémon. Hay más de 100 especies de Pokémon para rescatar, ¡así que los peques estarán deseando que llegue el momento de lavarse los dientes de nuevo para completar su Pokédex!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Si se cepillan los dientes frecuentemente, podrán ganar Pokéaccesorios que aparecerán en sus cabezas mientras juegan. ¡Seguro que les encantará ver cómo les quedan los sombreros de Pokémon o, mejor aún, lo pasarán genial luciendo como un Pokémon! Además, podrán sacarse fotos con los Pokéaccesorios y decorarlas para crear imágenes de lo más divertidas.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡Una estupenda manera de cepillarse los dientes!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Pokémon Smile tiene una opción para programar avisos y que los pequeñines sepan cuándo tienen que lavarse los dientes. También se puede activar un temporizador de entre uno y tres minutos para que puedan saber durante cuánto tiempo tienen que cepillarse.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Y, si se cepillan los dientes a menudo, ganarán medallas. ¿Podrán conseguir el título de líder del cepillado? También hay consejos para que los niños aprendan a cepillarse los dientes mejor.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¡Con Pokémon Smile, los pequeñines lo pasarán en grande rescatando Pokémon y adquiriendo el hábito de cepillarse los dientes!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¡Visita la 
                <a style={{ margin: "0px 4px" }} href="https://smile.pokemon.com/es-mx/" target="_blank">
                   página oficial 
                </a>
                 para no perderte ni un detalle!</p>
            </div>
          </>
        }

        imagen="/img/app-ocho.jpg"

        imagenLogo="/img/pokemon-smile-uno.jpg"
        cuerpoLogo={
          <>
            <p>Genero: <strong>Seguimiento del sueño</strong></p>
            <p>Jugadores: <strong>1-</strong></p>
          </>
        }

        cuerpoGooglePlay={
          <>
            <p>Fecha de lanzamiento: <strong>Verano del 2023</strong></p>
            <p>Plataforma: <strong>Dispositivos Android</strong></p>
          </>
        }

      />

    </>
  )
}
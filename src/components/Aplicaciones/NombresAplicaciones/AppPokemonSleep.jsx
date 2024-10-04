import StructureApp from "../StructureApp.jsx";

export default function AppPokemonSleep() {
  return (
    <>

      <StructureApp

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Pokémon Sleep</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">¿E</span>otas que te falta energía por las mañanas? ¿Te aburre tu rutina para irte a dormir? ¡Con Pokémon Sleep podrás divertirte mientras duermes! Jugar es muy sencillo: sólo tienes que dejar tu dispositivo móvil cerca de la almohada e irte a dormir. ¡Vas a querer despertarte por las mañanas!</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡El sueño de los campeones!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Deja tu celular cerca de la almohada cuando te acuestes para llevar un control de tu ciclo de sueño y dejar los datos registrados. Cuanto más duermas, mayor será tu puntuación al despertarte y más Pokémon te encontrarás alrededor de Snorlax. Tu ciclo de sueño se clasificará dentro de uno de los tres tipos de sueño (ligero, medio o profundo) y los Pokémon con un patrón similar al tuyo aparecerán junto a Snorlax.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¡Hasta puede que te encuentres con algún Pokémon durmiendo en una postura inusual! Cada Pokémon tiene distintas posturas al dormir. ¿Podrás descubrirlas todas y completar tu DormiDex?</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Pokémon GO Plus +</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="app-img">
              <img src="/img/pokemon-go-plus.jpg" alt="Pokemon Go Plus" />
            </div>
            <div className="parrafo">
              <p className="texto-normal">Investigar el sueño de los Pokémon será mucho más fácil con el accesorio Pokémon GO Plus +, con el que podrás registrar tu sueño con sólo pulsar un botón. Pokémon GO Plus + utiliza la tecnología Bluetooth de baja energía para conectarse con Pokémon Sleep. Cuando llegue la hora de irte a la cama, mantén pulsado el botón central del accesorio, colócalo al lado de tu almohada y vete a dormir. Además de ayudarte a registrar tu sueño, gracias a Pokémon GO Plus +, Pikachu puede avisarte cuando sea la hora de despertarte o de irte a dormir.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Está previsto que Pokémon Sleep llegue a todo el mundo, a excepción de ciertas regiones, en verano de 2023 y el accesorio Pokémon GO Plus +, el 14 de julio de 2023.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Visita <span className="texto-celeste">Pokemon.com/LATAM</span> para enterarte de todos los detalles sobre Pokémon Sleep.</p>
            </div>
          </>
        }

        imagen="/img/app-dos.jpg"

        imagenLogo="/img/pokemon-sleep-logo.png"
        cuerpoLogo={
          <>
            <p>Genero: <strong>Seguimiento del sueño</strong></p>
            <p>Jugadores: <strong>1-</strong></p>
          </>
        }

        cuerpoAppStore={
          <>
            <p>Fecha de lanzamiento: <strong>Verano del 2023 </strong></p>
            <p>Plataforma: <strong>iOS </strong></p>
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
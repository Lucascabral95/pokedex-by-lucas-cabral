import { Link } from "react-router-dom";
import StructureApp from "../StructureApp";


export default function AppPokemonShuffle() {
  return (
    <>

      <StructureApp

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Pokémon Shuffle Mobile</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">¡P</span>ásatelo en grande con el juego de emparejamiento de Pokémon Shuffle Mobile! Supera diferentes fases alineando Pokémon iguales para hacerlos desaparecer del área de juego. Causa daño al Pokémon salvaje al que te estás enfrentando e intenta capturarlo una vez que superes la fase. No hay límite de tiempo, así que puedes tomarte tu tiempo antes de elegir el movimiento perfecto. ¡Captura tantos Pokémon como puedas y úsalos para combatir contra aún más Pokémon!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Con Pokémon Shuffle Mobile podrás: </p>
            </div>
            <div className="lista-normal">
              <ul>
                <li> Combatir y capturar mas de 150 pokemons</li>
                <li> Megaevolucionar poderosos Pokemon para que te ayuden en combate </li>
                <li> Usar una amplia variedad de tecnicas y movimientos Pokemon </li>
                <li> Disfrutar de emocionantes y nuevos fases que seran añadidas regularmente. </li>
                <li> Aprender a jugar facilmente si eres fan de los rompecabezas y disfrutar de elementos de juego muy familiares si eres fan de Pokemon </li>
                <li> Compartir tu progreso en Pokemon Shuffle Mobile y ayudar a tus amigos en Facebook. </li>
              </ul>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Pokémon Shuffle Mobile es un juego que sólo existe en versión descargable y puede descargarse sin ningún costo inicial. Podrás disfrutar de prácticamente todas las funciones de Pokémon Shuffle Mobile sin tener que pagar nada. Hay un límite en el número de fases que puedes jugar sin tomarte un descanso. Este número se restablecerá al cabo de un tiempo, pero también puedes adquirir objetos en la tienda del juego para poder continuar jugando inmediatamente si así lo deseas.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">También puedes adquirir contenido de pago, como objetos de apoyo para tus combates, con los que podrás avanzar en el juego de una forma un poco más fácil y que te permitirán disfrutar del juego de maneras diferentes según tu propio estilo de juego.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¡Descarga Pokémon Shuffle Mobile en el <span className="texto-celeste">App Store</span> y <span className="texto-celeste">Google Play</span> hoy mismo y ponte a jugar!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Publicado por The Pokémon Company International.</p>
            </div>
          </>
        }

        imagen="/img/app-trece.jpg"

        imagenLogo="/img/pokemon-shuffle-uno.jpg"
        cuerpoLogo={
          <>
            <p>Fecha de lanzamiento: <strong>20 de enero de 2016</strong></p>
            <p>Genero: <strong>Rompecabezas</strong></p>
            <p>Dispositivos: <strong>iPhone y iPad</strong></p>
            <p>Jugadores: <strong>1</strong></p>
          </>
        }

        cuerpoGooglePlay={
          <>
            <p>Fecha de lanzamiento: <strong>20 de enero de 2016</strong></p>
            <p>Dispositivo: <strong>Android</strong></p>
          </>
        }

      />

    </>
  )
}
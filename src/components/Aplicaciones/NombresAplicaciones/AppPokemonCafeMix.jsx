import { Link } from "react-router-dom";
import StructureApp from "../StructureApp.jsx";


export default function AppPokemonCafeMix() {
  return (
    <>

      <StructureApp

      cuerpoDeLaApp={
        <>
         <div className="el-titulo-de-apps">
              <h2>Pokémon Sleep</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">E</span>n este juego de descarga gratuita, podrás hacer amigos Pokémon y completar rompecabezas para preparar deliciosas recetas y servirlas en tu Pokémon Café.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Para resolver los rompecabezas, tendrás que encadenar fichas de Pokémon que sean iguales para eliminarlas de la pantalla. Cada rompecabezas tiene sus propios objetivos, de modo que tendrás que pensar cada movimiento cuidadosamente. Conforme tu cafetería crezca, conseguirás nuevas recetas y nuevos componentes para elaborarlas. Presta atención a los componentes que aparecen en el área de preparación y prueba nuevas estrategias para retirarlos de la pantalla.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">El personal de la cafetería está formado por Pokémon muy trabajadores y siempre dispuestos a ayudarte. Sus destrezas hosteleras te vendrán de lujo para superar los rompecabezas. Eevee será tu primer empleado Pokémon y se unirá al equipo cuando abras la cafetería. Continúa resolviendo rompecabezas para elaborar recetas inspiradas en Pokémon tan bonitas que casi da pena comérselas y, antes de que te des cuenta, ¡nuevos Pokémon querrán unirse al equipo!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">La cafetería se irá ampliando cuanto más juegues, y se añadirán nuevas salas y mejoras. Conforme vayas sirviéndoles recetas deliciosas a tus clientes Pokémon, tu afinidad con ellos irá aumentando. Cuando alcancen el primer nivel de afinidad, se unirán al equipo. No dejes de remodelar tu cafetería para que cada vez se animen a visitarte más Pokémon nuevos.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Ya puedes descargar Pokémon Café Mix. ¡Visita la <span className="texto-celeste"> <a href="https://cafemix.pokemon.com/es-mx/" target="_blank"> página oficial </a></span> para no perderte ni un detalle! </p>
            </div>
        </>
      }

        imagen="/img/app-siete.jpg"

        imagenLogo="/img/pokemon-cafe-uno.jpg"
        cuerpoLogo={
          <>
            <p>Fecha de lanzamiento: <strong>24 de junio de 2020</strong></p>
            <p>Genero: <strong>Rompecabezas</strong></p>
            <p>Plataforma: <strong>iOS</strong></p>
            <p>Jugadores: <strong>1</strong></p>
          </>
        }

        cuerpoGooglePlay={
          <>
            <p>Fecha de lanzamiento: <strong>24 de junio de 2020</strong></p>
            <p>Plataforma: <strong>Dispositivos Android</strong></p>
          </>
        }

      />

    </>
  )
}
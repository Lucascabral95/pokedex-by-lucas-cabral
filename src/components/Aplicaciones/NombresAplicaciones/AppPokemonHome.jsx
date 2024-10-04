import { Link } from "react-router-dom";
import StructureApp from "../StructureApp.jsx";


export default function AppPokemonHome() {
  return (
    <>

      <StructureApp

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Pokémon Home</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">P</span>okémon HOME es un servicio que te permitirá tener a todos los Pokémon de tu colección en el mismo lugar. Este programa diseñado para Nintendo Switch, y también disponible como aplicación para dispositivos móviles, te permitirá almacenar los Pokémon de distintos juegos de la serie. ¡Aquí podrás admirar toda tu colección e intercambiar Pokémon con Entrenadores de todo el mundo!</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡El sueño de los campeones!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Puedes transferir Pokémon desde los juegos más recientes a Pokémon HOME y llevarlos a otros juegos con los que sean compatibles. Pokémon HOME es compatible con los siguientes títulos para Nintendo Switch:</p>
            </div>
            <div className="lista-de-aplicaciones">
              <ul>
                <li>
                  <a href="" target="_blank" title="Pokemon Scarlet">
                    Pokémon Scarlet
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Pokemon Violet">
                    Pokémon Violet
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Pokemon Legends: Arceus">
                    Pokémon Legends: Arceus
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Pokemon Brilliant Diamond">
                    Pokémon Brilliant Diamond
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Pokemon Shinning Pearl">
                    Pokémon Shinning Pearl
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Pokemon Sword">
                    Pokémon Sword
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Pokemon Shield">
                    Pokémon Shield
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Pokemon: Let's Go, Pikachu">
                    Pokémon: Let's Go, Pikachu
                  </a>
                  !</li>
                <li>
                  <a href="" target="_blank" title="Pokemon: Let's Go, Eevee">
                    Pokémon: Let's Go, Eevee
                  </a>
                  !</li>
              </ul>
            </div>
            <div className="parrafo" style={{ marginTop: "20px" }}>
              <p className="texto-normal">Tambien escompatible con <span className="texto-celeste">Pokemon GO</span> en dispositivos iOS y Android.</p>
            </div>
            <div className="imagen-con-marco">
              <div className="marco-img">
                <img src="/public/img/pokemon-home-tress.png" alt="Todos los juegos de Pokemon" />
              </div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Es posible que haya restricciones a la hora de mover ciertos Pokémon. Los juegos de Pokémon para Nintendo Switch sólo son compatibles con la versión de Pokémon HOME para Nintendo Switch. </p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Intercambia Pokémon</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Existen cuatro formas de intercambiar Pokémon en Pokémon HOME usando un dispositivo móvil. Podrás hacerlo donde quieras y cuando quieras.</p>
            </div>
            <div className="lista-normal">
              <ul>
                <li>Si depositas un Pokémon en la caja prodigiosa, ¡se intercambiará con gente de todo el mundo en un abrir y cerrar de ojos! El intercambio se producirá aunque no estés usando Pokémon HOME.</li>
                <li>En el GTS puedes indicar qué Pokémon quieres intercambiar y cuál te gustaría recibir a cambio. Una vez decidido, se te emparejará con un Entrenador cuya petición se adapte a la tuya. </li>
                <li>En el intercambio en grupo podrás intercambiar Pokémon con un grupo de hasta 20 personas.</li>
                <li>El intercambio con amigos te permite intercambiar Pokémon con otros Entrenadores que hayas añadido a tu lista de amigos de Pokémon HOME.</li>
              </ul>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Consulta todos los datos de tus Pokémon</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Aquí no sólo tienes acceso a las entradas de la Pokédex. Ahora también puedes modificar la pantalla de datos de un Pokémon para que en ella aparezca la información de otros juegos en los que haya estado. Además, la pantalla de datos de los Pokémon trasladados desde el <span className="texto-celeste">Banco de Pokémon</span> que aparecerá en la versión para dispositivos móviles de Pokémon HOME también mostrará las características e información tal y como aparecían en el Banco de Pokémon.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Recibe regalos misteriosos en cualquier momento</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¡En la versión de Pokémon HOME para dispositivos móviles podrás recibir regalos misteriosos! Gracias a esta función, podrás obtener aquí los regalos misteriosos de juegos Pokémon para Nintendo Switch. Los Pokémon que recibas en Pokémon HOME se guardarán automáticamente en una de las cajas.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">También podrás obtener códigos o contraseñas para conseguir objetos u otros regalos, que después podrás usar en algunos juegos Pokémon para Nintendo Switch. </p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Aún más funciones</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">En Pokémon HOME encontrarás muchas más funciones para conectar tus juegos de la serie Pokémon. Al transferir Pokémon a Pokémon HOME, conseguirás puntos Pokémon HOME que podrás convertir en puntos de batalla (PB) en Pokémon Sword y Pokémon Shield o en puntos de liga (PL) en Pokémon Scarlet y Pokémon Violet.</p>
            </div>
            <div className="img-img-normal" style={{ widows: "100%" }}>
              <img style={{ width: "100%", height: "auto" }} src="/public/img/pokemon-home-cuatro.png" alt="Vista Global de Pokemon Home" />
            </div>
            <div className="parrafo">
              <p className="texto-normal" style={{ fontSize: "14.4px" }}>En la vista global, podrás ver los Pokémon que hayas depositado en Pokémon HOME, así como sus habilidades y movimientos. Cuando envíes Pokémon de Pokémon HOME a otro juego conectado también podrás cambiar sus movimientos. Con el plan prémium de pago podrás acceder a la función Juez.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Información sobre los planes básico y prémium</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="img-img-normal" style={{ widows: "100%" }}>
              <img style={{ width: "100%", height: "auto" }} src="/public/img/pokemon-home-cinco.jpg" alt="Vista Global de Pokemon Home" />
            </div>
            <div className="parrafo">
              <p className="texto-normal" style={{ fontSize: "14.4px" }}> Con el plan prémium de pago, se añadirán algunas funciones y otras se ampliarán. </p>
            </div>
            <div className="img-img-normal" style={{ widows: "100%" }}>
              <img style={{ width: "100%", height: "auto" }} src="/public/img/pokemon-home-seis.jpg" alt="Vista Global de Pokemon Home" />
            </div>
            <div className="parrafo">
              <p className="texto-normal" style={{ fontSize: "14.4px" }}>Algunas funciones no estarán disponibles para todos los usuarios, de acuerdo con la política de privacidad y las condiciones de uso de Pokémon HOME.</p>
            </div>
            <div className="parrafo" style={{ marginTop: "20px 0px" }}>
              <p className="texto-normal"> <span className="texto-celeste">
                <a href="https://home.pokemon.com/es-mx/" target="_blank">
                  ¡Visita el sitio web oficial de Pokémon HOME para obtener más información!
                </a>
              </span> </p>
            </div>
          </>
        }

        imagen="/public/img/app-seis.jpg"

        imagenLogo="/public/img/pokemon-home-siete.jpg"
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
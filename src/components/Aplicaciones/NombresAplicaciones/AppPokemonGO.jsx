import { Link } from "react-router-dom";
import StructureApp from "../StructureApp.jsx";


export default function AppPokemonGO() {
  return (
    <>

      <StructureApp

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Pokemon GO</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">V</span>iaja entre el mundo real y el mundo virtual de Pokémon con Pokémon GO, para dispositivos iPhone y Android. Con Pokémon GO descubrirás Pokémon en un mundo completamente nuevo, ¡tu propio mundo! Pokémon GO te da la oportunidad de explorar lugares reales y de buscar Pokémon por todos lados. Más y más Pokémon siguen apareciendo por todo el mundo, incluyendo Pokémon legendarios únicos y poderosos.</p>
            </div>
            <div className="app-img">
              <img src="/img/pokemon-go-tres.jpg" alt="Pokemon Go Plus" />
            </div>
            <div className="parrafo">
              <p className="texto-normal">A medida que te muevas por el lugar donde vives y los sitios que visites, tu smartphone podrá vibrar para hacerte saber que estás cerca de un Pokémon. Una vez que te encuentres con un Pokémon, apunta mirando la pantalla táctil de tu smartphone y lanza una Poké Ball para atraparlo, ¡pero ten cuidado, porque podría salir huyendo! También puedes buscar Poképaradas situadas en lugares interesantes, como instalaciones de arte, puntos históricos y monumentos públicos, donde puedes recoger más Poké Balls y otros objetos.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Combate contra otros Entrenadores</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¿Estás listo para un emocionante desafío? Ahora puedes enfrentarte a otro Entrenador cuando quieras en Pokémon GO. Con los combates de Entrenador, puedes enfrentarte a otro Entrenador usando un código de combate y combatir usando un equipo de tres Pokémon. Cuando el combate termina, ambos participantes reciben excelentes recompensas, incluyendo la oportunidad de conseguir objetos de evolución poco comunes.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Estos combates de ritmo acelerado se juegan en tiempo real, y tus Pokémon pueden usar tanto sus ataques rápidos como sus ataques cargados. Estate pendiente de los ataques de tu rival y usa un escudo protector para evitar que tus Pokémon reciban daño crítico. Pero ten cuidado, porque solo tienes una cantidad limitada de escudos protectores antes de que tus Pokémon se queden sin defensa ante grandes ataques.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Generalmente, tu rival tendrá que estar cerca de ti para que puedas iniciar un combate de Entrenador, pero puedes desafiar a Entrenadores con los que tengas una ultraamistad o una amistad sin igual a cualquier distancia. ¡Buena suerte!</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Haz amigos, envía regalos e intercambia Pokémon</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Conéctate con tus amigos de la vida real e interactúa con ellos de muchas maneras emocionantes. Después de intercambiar los códigos de Entrenador, verás a tus amigos en tu lista de amigos.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Una manera en la que puedes jugar con tus amigos en Pokémon GO es enviando regalos. Al hacer girar un fotodisco en una Poképarada o Gimnasio, tienes la oportunidad de conseguir un regalo especial. Aunque tú no puedes abrir estos regalos, podrás enviarlos a alguien de tu lista de amigos. Los regalos contienen una gran variedad de objetos útiles (algunas veces Huevos especiales) y vienen con una postal en la que se muestra dónde se obtuvo el regalo.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Puedes aumentar tu nivel de amistad con otros enviando regalos o participando con ellos en una incursión o en un combate de Gimnasio. A medida que tu nivel de amistad aumenta, puedes desbloquear bonus.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Hay otra manera de aumentar tu nivel de amistad, ¡y es intercambiando Pokémon! Si estás cerca de un amigo y tienes un nivel de Entrenador 10 o superior, puedes intercambiar Pokémon con esta persona. Se necesitan Polvos Estelares para realizar un intercambio, pero recibirás un bonus de Caramelos por el Pokémon que hayas enviado, y ese bonus aumenta si los Pokémon que ambos estén intercambiando fueron capturados en lugares alejados el uno del otro.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Cuando intercambies Pokémon con tus amigos, ¡puede que ocurra algo misterioso y fascinante! Cada Pokémon intercambiado podría convertirse en un Pokémon con suerte. Sabrás inmediatamente si esto ocurrió gracias a una nueva apariencia resplandeciente. Estos Pokémon con suerte también requieren menos Polvos Estelares para tener más poder y pueden ser detectados por la Pokédex, por lo que podrás hacer un seguimiento de ellos. Cuanto más tiempo hayas tenido almacenado a un Pokémon, mayor probabilidad habrá de que se convierta en un Pokémon con suerte al intercambiarlo. </p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Personaliza a tu Entrenador</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Cuando juegues a Pokémon GO por primera vez, podrás personalizar a tu Entrenador, eligiendo prendas y accesorios para darle un look a todo dar. Tu Entrenador personalizado aparecerá cuando te muevas por el mapa y también en tu perfil. Otros jugadores verán a tu Entrenador cuando visiten un Gimnasio que controles tú o cuando interactuén contigo como amigos (ver más abajo).</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Completa tu Pokédex</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">En Pokémon GO, irás adquiriendo niveles como Entrenador. Cuanto mayor sea tu nivel, más poderosos serán los Pokémon que podrás atrapar para completar tu Pokédex. También tendrás acceso a objetos más poderosos para curar a tus Pokémon después del combate, a Poké Balls mejoradas que te ayudarán a tener más probabilidades de atrapar Pokémon y a útiles Bayas. ¡Sigue explorando y atrapando Pokémon para subir de nivel!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Existen otras maneras de agregar Pokémon a tu Pokédex. Si atrapas la misma especie de Pokémon un número de veces suficiente, podrás hacerlo evolucionar. Es posible que encuentres Huevos Pokémon en Poképaradas, los cuales eclosionarán cuando estén en una incubadora y hayas caminado cierta distancia. Esto podría tener como resultado que consigas un Pokémon que no hayas visto antes en el juego.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Mientras estés afuera explorando, estate pendiente del clima del mundo real, ya que influirá en el tipo de Pokémon que puedas descubrir. Por ejemplo, es más probable que haya más Pokémon de tipo Agua durante un tiempo lluvioso.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Únete a un equipo y combate</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">En cierto punto del juego, te pedirán que te unas a uno de tres equipos. Una vez que te unas a un equipo, podrás asignar tus Pokémon a Gimnasios vacíos, o a uno en el que un compañero de tu equipo ya haya colocado a uno de sus Pokémon. Cada jugador puede colocar solo un Pokémon por Gimnasio, por lo que deberás trabajar con los miembros de tu equipo para lograr una defensa fuerte. Al igual que las Poképaradas, los Gimnasios pueden encontrarse en lugares del mundo real.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Si un Gimnasio fue reclamado como suyo por un equipo rival, puedes desafiar a ese Gimnasio usando tus Pokémon para combatir contra los Pokémon que lo estén defendiendo. Tú eliges cuál de tus Pokémon se unirá al combate. Cada Pokémon tiene dos clases de ataques y puede esquivar los ataques del Pokémon defensor si deslizas el dedo a izquierda o derecha. Si los Pokémon de tu equipo ganan, la motivación de los Pokémon defensores disminuye. Si la motivación de cada Pokémon defensor llega a cero, el equipo defensor pierde el control del Gimnasio, y tú u otro jugador pueden entonces tomar el control asignando un Pokémon para protegerlo.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Incursiones</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Enfréntate a poderosos Pokémon individuales en emocionantes incursiones en determinados Gimnasios. Estos jefes de incursión son más difíciles de vencer que los Pokémon que normalmente atraparías en estado salvaje, así que necesitarás unirte a otros Entrenadores para derrotar a uno de ellos. Si derrotas al jefe de incursión, tendrás la oportunidad de agregar a este poderoso Pokémon a tu equipo y conseguirás objetos extremadamente raros de encontrar.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Investigaciones de campo e investigaciones especiales</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">El Profesor Willow, tu guía en el mundo de Pokémon GO, necesita colaboradores que le ayuden con su investigación mientras estudia misteriosos sucesos por todo el mundo. Hay dos tipos de investigaciones con las que los Entrenadores pueden ayudar: de campo y especiales. Las tareas de investigación de campo se pueden encontrar haciendo girar los fotodiscos en las Poképaradas y en los Gimnasios, donde recibirás algunos objetivos que deberás completar, como descubrir y capturar ciertos Pokémon o participar en combates. El mismo Profesor Willow será quien presente las tareas de investigación especial mediante actividades centradas en historias que involucrarán aún más a los Entrenadores con el mundo de Pokémon GO.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">No hay límite en el número de tareas de investigación que se pueden completar diariamente, y estas te otorgarán recompensas, como objetos útiles. Cuanto más difícil sea la tarea, mayor será la recompensa, así que los Entrenadores que trabajen duro conseguirán mayores beneficios.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Poké Ball Plus y Nintendo Switch</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Un pequeño dispositivo llamado Poké Ball Plus te permite disfrutar del juego incluso cuando no estés usando tu smartphone. El dispositivo se conecta a tu teléfono celular a través de Bluetooth y, mediante una luz led y vibraciones, te avisa de acontecimientos del juego, como, por ejemplo, la aparición de un Pokémon en las proximidades. Además, puedes atrapar Pokémon o realizar otras acciones sencillas simplemente presionando el botón en el dispositivo.</p>
            </div>
            <div className="app-img">
              <img src="/img/pokemon-go-cuatro.jpg" alt="Pokemon Go Plus" />
            </div>
            <div className="parrafo">
              <p className="texto-normal">Hay también una fuerte conexión entre Pokémon GO y Pokémon: Let's Go, Pikachu! y Pokémon: Let's Go, Eevee!. Puedes llevar los Pokémon originalmente descubiertos en la región de Kanto que hayas capturado en Pokémon GO a estos dos nuevos juegos para Nintendo Switch.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Conectar Pokémon GO a Pokémon: Let's Go, Pikachu! o Pokémon: Let's Go, Eevee! es también una buena manera para encontrarte con el nuevo Pokémon singular Meltan y su forma evolucionada, Melmetal. Enviar Pokémon de Pokémon GO a uno de los juegos de Nintendo Switch hará que obtengas algunos objetos en la aplicación, como Caramelos para la especie de Pokémon que hayas enviado. Y la primera vez que envíes un Pokémon, también podrás recibir un objeto muy especial: ¡una Caja Misteriosa!</p>
            </div>
            <div className="app-img">
              <img src="/img/pokemon-go-cinco.jpg" alt="Pokemon Go Plus" />
            </div>
            <div className="parrafo">
              <p className="texto-normal">Abrir una Caja Misteriosa en Pokémon GO hace que Meltan aparezca por un tiempo limitado. Toca un Meltan que veas en el mapa y después intenta atraparlo con una Poké Ball. Al coleccionar 400 Caramelos Meltan, podrás hacer que este Pokémon de tipo Acero evolucione al poderoso Melmetal.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Sincroaventura</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Explorar en Pokémon GO es fácil con Sincroaventura. Con esta función, podrás hacer un seguimiento de la distancia recorrida incluso mientras Pokémon GO esté inactivo. Además, seguirás ganando Caramelos por caminar con tu compañero y seguirás progresando para poder hacer eclosionar Huevos Pokémon mientras caminas.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Recibirás notificaciones cuando tu compañero Pokémon encuentre Caramelos para ti y cuando un Huevo esté a punto de eclosionar. Después, al final de cada semana, Sincroaventura te ofrecerá un resumen de tus actividades, incluyendo cuántos Caramelos conseguiste y qué distancia recorriste. Conseguirás recompensas incluso por cada objetivo de distancia que superes.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Puedes optar por usar Sincroaventura en cualquier momento, y la función se conecta tanto con la aplicación Salud en dispositivos Apple como con Google Fit en dispositivos Android.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Modo RA+ de iPhone</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Únete a la diversión de los encuentros Pokémon con el modo RA+ de iPhone, una función que está disponible en el iPhone 6s y en los modelos más recientes que tengan iOS 11 o superior. El modo RA+ lleva la realidad aumentada de Pokémon GO aún más allá, al poner en escena justo frente a ti al Pokémon con el que te encuentres. Con RA+ podrás acercarte más al Pokémon, lo que te permitirá atraparlo más fácilmente o conseguir una fotografía perfecta. ¡Pero ten cuidado cuando te acerques al Pokémon, porque podrías espantarlo! </p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡Juega de forma gratuita!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Pokémon GO puede descargarse de forma gratuita en el App Store y Google Play. Jugar a Pokémon GO es gratis, con montones de cosas divertidas que hacer y Pokémon que descubrir en cada esquina. Los jugadores que quieran mejorar su experiencia con Pokémon GO aún más, podrán acceder a ciertos objetos y funciones mediante compras en la aplicación. Los jugadores podrán gastar dinero real en Pokémonedas, la moneda utilizada dentro de Pokémon GO. Después, las Pokémonedas podrán ser intercambiadas por mejoras, objetos extras y otras cosas </p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>¡Diviértete haciendo fotos!</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="app-img">
              <img src="/img/pokemon-go-seis.jpg" alt="Pokemon Go Plus" />
            </div>
            <div className="parrafo">
              <p className="texto-normal">Cuando te encuentres con un Pokémon salvaje, podrás encender la función de la cámara para que el Pokémon aparezca en el lugar real al que apunta tu cámara. Centra la imagen y oprime el botón para sacar la foto. Puedes guardar la imagen junto con las fotos de tu smartphone para que la puedas compartir como quieras.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Música de Junichi Masuda </h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Pokémon GO tiene música totalmente nueva compuesta por Junichi Masuda, de GAME FREAK. El Sr. Masuda ha trabajado en los juegos de Pokémon desde sus orígenes y ha compuesto muchas de las canciones clásicas y memorables que han servido de inspiración a nuestros fans durante décadas.</p>
            </div>
            <div className="titulo-con-linea-azul">
              <div className="titulo-app">
                <h3>Pokémon compañero</h3>
              </div>
              <div className="linea-azul"></div>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Con la función del Pokémon compañero, puedes elegir a un Pokémon de tu colección para que viaje a tu lado, abriendo así recompensas y experiencias en el juego. Tu Pokémon compañero aparecerá al lado de tu Entrenador en la pantalla de tu perfil y te recompensará con útiles premios, incluyendo Caramelos, a medida que camines con él.</p>
            </div>
            <div className="parrafo">

              <p className="texto-normal" style={{ margin: "26px 0px", fontSize: "14.4px" }}> <span className="texto-celeste">
                <a href="https://pokemongolive.com/?hl=es" target="_blank">
                  Visita el sitio web oficial de Pokémon GO para obtener más información.
                </a>
              </span> </p>
            </div>
            <div className="parrafo">
              <p style={{ fontSize: "14.4px", margin: "26px 0px" }} className="texto-normal"> ©2018 Niantic, Inc. ©2018 Pokémon. ©1995-2018 Nintendo/Creatures Inc./GAME FREAK inc. </p>
            </div>
          </>
        }

        imagen="/img/app-cuatro.jpg"
        imagenLogo="/img/pokemon-go-uno.jpg"
        cuerpoLogo={
          <>
            <p>Fecha de lanzamiento: <strong>6 de julio de 2016</strong></p>
            <p>Genero: <strong>Aventura en el mundo real</strong></p>
            <p>Dispositivo: <strong>IOS</strong></p>
            <p>Jugadores: <strong>Un jugador o Multijugador</strong></p>
          </>
        }

        cuerpoGooglePlay={
          <>
            <p>Fecha de lanzamiento: <strong>6 de julio de 2016</strong></p>
            <p>Dispositivo: <strong>Android</strong></p>
          </>
        }

      />

    </>
  )
}
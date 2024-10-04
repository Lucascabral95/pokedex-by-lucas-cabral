import StructureApp from "../StructureApp";

export default function AppPokemonCasaJuegos() {
  return (
    <>

      <StructureApp

        cuerpoDeLaApp={
          <>
            <div className="el-titulo-de-apps">
              <h2>Casa de Juegos Pokémon</h2>
            </div>
            <div className="parrafo">
              <p className="texto-normal"><span className="resal">D</span>escubre las divertidas actividades de la Casa de Juegos Pokémon, una aplicación oficial Pokémon para fans más jóvenes de Pokémon, creada por The Pokémon Company International. Descárgala y juega de forma gratuita, sin ninguna compra dentro de la aplicación.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">En la Casa de Juegos Pokémon, tu hijo puede interactuar con todo tipo de adorables Pokémon mientras estos exploran diferentes lugares, incluyendo una torre, un spa comedor y un jardín. Cada lugar dentro de la Casa de Juegos Pokémon contiene actividades diseñadas específicamente para fans más jóvenes de Pokémon, como la actividad en la que pueden cuidar Pokémon o la actividad de mirar las estrellas para identificar Pokémon en el cielo.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Para ver la apariencia característica de los Pokémon en la Casa de Juegos Pokémon, tu hijo puede verlos jugar en nuevos cuentos. ¡Dirígete al cuarto de juegos para escuchar un cuento y ver a los adorables Pokémon disfrutando de nuevas y emocionantes aventuras!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Cuando tu hijo empiece a jugar por primera vez en la Casa de Juegos Pokémon, recibirá un Huevo Pokémon para cuidarlo. A medida que explore la Casa de Juegos Pokémon y complete actividades, ¡el Huevo Pokémon eclosionará y revelará un nuevo Pokémon!</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">Dado que la aplicación está diseñada para niños de 3 a 5 años, no se requiere de lectura ni cálculos matemáticos para completar las actividades. Un simpático personaje humano narrará todas las actividades para que tu hijo pueda disfrutar todos los aspectos de la Casa de Juegos Pokémon independientemente de su nivel de aprendizaje.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">La aplicación Casa de Juegos Pokémon no guarda ninguna información personal ni incluye compras dentro de la aplicación.</p>
            </div>
            <div className="parrafo">
              <p className="texto-normal">¡Descarga la aplicación de forma gratuita y deja que tu hijo empiece a explorar hoy mismo la maravillosa Casa de Juegos Pokémon!</p>
            </div>
          </>
        }

        imagen="/img/app-once.jpg"

        imagenLogo="/img/pokemon-casa-juegos-uno.jpg"
        cuerpoLogo={
          <>
            <p>Fecha de lanzamiento: <strong>21 de septiembre de 2017</strong></p>
            <p>Genero: <strong>Entretenimiento</strong></p>
            <p>Dispotivos: <strong>iPad, iPhoneo iPod touch</strong></p>
            <p>Jugadores: <strong>1</strong></p>
          </>
        }

        cuerpoGooglePlay={
          <>
            <p>Fecha de lanzamiento: <strong>21 de septiembre de 2017</strong></p>
            <p>Dispositivo:<strong> Android</strong></p>
          </>
        }

        cuerpoAmazon={
          <>
            <p>Fecha de lanzamiento: <strong>21 de septiembre de 2017</strong></p>
            <p>Dispositivos:<strong> Kindle Fire</strong></p>
          </>
        }


      />

    </>
  )
}
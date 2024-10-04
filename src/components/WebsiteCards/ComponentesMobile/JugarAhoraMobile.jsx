import "./JugarAhoraMobile.scss"

export default function JugarAhoraMobile() {
    return (
        <div className="jugar-ahora-mobile" style={{ display: "none" }}>
            <div className="contenedor">

                <div className="imagen-pokemon-live">
                    <div className="img">
                        <img src="/public/img/pokemon-live-footer.png" alt="Pokemon Live" />
                    </div>
                </div>

                <div className="contenido">
                    <div className="texto">
                        <p>¡Desafía a los jugadores a combates de JCC Pokémon en cualquier momento y lugar con JCC Pokémon Live y las nuevas cartas de la expansión Escarlata y Púrpura-Fuerzas Temporales! ¿Quieres reforzar tus barajas favoritas con el poder prehistórico de las cartas del pasado o diseñar novedosas estrategias con el toque futurista de las cartas del futuro? ¿O tal vez buscas la pieza que te falta con el regreso de las cartas de AS TÁCTICO? Sea cual sea el caso, hay mucho que descubrir mientras amplías tu colección usando las cartas con código de JCC Pokémon Live.</p>
                    </div>
                    <div className="boton">
                        <div className="bot">
                            <button> ¡JUGAR AHORA! </button>
                        </div>
                    </div>
                </div>

                <div className="imagenes-avatars-consola">
                    <div className="img-avatar">
                        <img src="/public/img/avatar-uno.png" alt="Avatar 1" />
                    </div>
                    <div className="img-consola">
                        <img src="/public/img/consola.png" alt="Consola Nintendo" />
                    </div>
                    <div className="img-avatar">
                        <img src="/public/img/avatar-dos.png" alt="Avatar 2" />
                    </div>
                </div>

            </div>
        </div>
    )
}
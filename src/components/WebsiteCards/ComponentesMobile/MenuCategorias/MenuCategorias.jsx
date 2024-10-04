import "./MenuCategorias.scss"

export default function MenuCategorias() {
    return (
        <div className="menu-categorias-cartas">
            <div className="categoria" onClick={() => window.location.href = "#cartasDestacadas"}>
                <div className="categoria-interior" >
                    <h4>CARTAS DESTACADAS</h4>
                </div>
            </div>
            <div className="categoria" onClick={() => window.location.href = "#destacados"}>
                <div className="categoria-interior">
                    <h4>PRODUCTOS DESTACADOS</h4>
                </div>
            </div>
            <div className="categoria" onClick={() => window.location.href = "#novedades"}>
                <div className="categoria-interior">
                    <h4>NOVEDADES DE LA EXPANSION </h4>
                </div>
            </div>
            <div className="categoria" onClick={() => window.location.href = "#protagonistas"}>
                <div className="categoria-interior">
                    <h4> POKEMONS PROTAGONISTAS</h4>
                </div>
            </div>
            <div className="categoria" onClick={() => window.location.href = "#fondos"}>
                <div className="categoria-interior">
                    <h4> FONDOS DE ESCRITORIO</h4>
                </div>
            </div>
        </div>
    )
}
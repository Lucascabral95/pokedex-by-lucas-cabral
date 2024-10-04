import "./Carousel.scss"

export default function Carousel(props) {
    return (
        <div className="contenedor-carousel-destacados">
            <div className="contenedor">

                <div className="pokemones-destacados">
                    <div className="titulo">
                        <h3> {props.titulo} </h3>
                    </div>
                </div>

                <div className="contenedor-carousel">
                    <div className="contenedor-pokemon">
                        {props.carousel}
                    </div>
                </div>

            </div>
        </div>
    )
}
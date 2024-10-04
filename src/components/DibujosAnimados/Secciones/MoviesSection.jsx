import StructureCartoon from "./StructureCartoon.jsx";
import Peliculas from "../../../JSON/Peliculas.json"

export default function MoviesSection() {
    return (

        <StructureCartoon

            imagen={"/img/dibujo-diez.png"}
            titulo={"¡Descubre dónde puedes ver Pokémon!"}
            subtitulo={"Consulta todos los lugares en los que puedes ver episodios, peliculas y especiuales de Pokemon en tu region."}
            mapeo={Peliculas}

        />

    )
}
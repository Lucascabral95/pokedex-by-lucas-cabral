import StructureCartoon from "./StructureCartoon.jsx";
import Series from "../../../JSON/Series.json"
import { useState } from "react";

export default function SeriesSection() {
    //  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    return (
        <>

            <StructureCartoon

                imagen={"/img/dibujo-diez.png"}
                titulo={"¡Descubre dónde puedes ver Pokémon!"}
                subtitulo={"Consulta todos los lugares en los que puedes ver episodios, peliculas y especiuales de Pokemon en tu region."}
                mapeo={Series}

            />

        </>
    )
}
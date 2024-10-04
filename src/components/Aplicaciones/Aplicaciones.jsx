import StructureCartoon from "../DibujosAnimados/Secciones/StructureCartoon";
import Apps from "../../JSON/Aplicaciones.json"

export default function Aplicaciones() {
    return (
        <>

            <StructureCartoon

                imagen={"/img/pokemon-live-azul.png"}
                titulo={"Juego de Cartas Coleccionables Pokemon Live"}
                mapeo={Apps}

            />

        </>
    )
}
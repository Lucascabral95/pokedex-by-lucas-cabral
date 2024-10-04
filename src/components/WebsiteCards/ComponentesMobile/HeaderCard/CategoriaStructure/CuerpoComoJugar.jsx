import CategoriaStructure from "./CategoriaStructure";
import { TbLink } from "react-icons/tb";

export default function CuerpoComoJugar() {
    return (
        <>

            <CategoriaStructure

                nombreCategoria="CÓMO JUGAR"

                primerosPasos={
                    <>
                        <p> Mi primer Combate </p>
                        <p> Guia para padres y tutores </p>
                        <p> Aprende a jugar </p>
                        <p style={{ margin:'0' }}> Academia Top Deck </p>
                    </>
                }
                
                recursos={
                    <>
                        <p> Libro de reglas <TbLink className="icon" /> </p>
                        <p style={{ margin:'0' }}> Base de datos de cartas de JCC <TbLink className="icon" /> </p>
                    </>
                }

                otrasFormasDeJugar={
                    <>
                        <p> Pokécartura </p>
                        <p style={{ margin:'0' }}> Incursión Max </p>
                    </>
                }

            />

        </>
    )
}
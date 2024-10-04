import CategoriaStructure from "./CategoriaStructure.jsx";

export default function CuerpoExpansiones() {
    return (
        <>

            <CategoriaStructure

                nombreCategoria="EXPANSIONES"
                galeriasRecientes={
                    <>
                        <p> Escarlata y Purpura-Fuerzas Temporales de JCC Pokemon </p>
                        <p> Escarlata y Purpura-Destinos de Paldea de JCC Pokemon </p>
                        <p style={{ margin: '0' }}> Escarlata y Purpura-Brecha Paradojica de JCC Pokemon </p>
                    </>
                }
                galeriasAnteriores={
                    <>
                        <p> Escarlata y Purpura-151 de JCC Pokemon </p>
                        <p> Escarlata y Purpura-Llamas Obsidianas de JCC Pokemon </p>
                        <p> Escarlata y Purpura-Evoluciones en Paldea de JCC Pokemon </p>
                        <p> Escarlata y Purpura de JCC Pokemon </p>
                        <p> Espada y Escudo-Cenit Supremo de JCC Pokemon </p>
                        <p style={{ margin: '0' }}> Ver todas las expansiones </p>
                    </>
                }


            />

        </>
    )
}
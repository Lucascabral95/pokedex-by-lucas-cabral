import CategoriaStructure from "./CategoriaStructure";
import { TbLink } from "react-icons/tb";

export default function CuerpoJCCPokemon() {
    return (
        <>

            <CategoriaStructure

                nombreCategoria=" JCC POKÉMON LIVE "
                resumen={
                    <>
                        <p> Pase de combate </p>
                        <p> Actualizaciones </p>
                        <p> Notas de parches <TbLink className="icon" /> </p>
                        <p style={{ margin: '0' }} > Canjea códigos <TbLink className="icon" />  </p>
                    </>
                }

            />

        </>
    )
}
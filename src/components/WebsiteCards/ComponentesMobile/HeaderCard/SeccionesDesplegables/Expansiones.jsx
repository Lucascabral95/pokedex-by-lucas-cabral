import DesplegableHeader from "../DesplegableHeader";

export default function ExpansionesHeaderCard() {
    return (
        <>
            <DesplegableHeader

                cuerpo={
                    <>

                        <div className="div div-expansiones">
                            <div className="titulo">
                                <h3> EXPANSIONES RECIENTES </h3>
                            </div>
                            <div className="imagen-detalle">
                                <div className="img">
                                    <img src="/img/fuerzas-temporaless.png" alt="Fuerzas Temporales" />
                                </div>
                                <div className="detalle">
                                    <h4>Escarlata y Purpura-Fuerzas Temporales de JCC Pokemon</h4>
                                </div>
                            </div>
                            <div className="imagen-detalle">
                                <div className="img">
                                    <img src="/img/destinos-paldea.png" alt="Destinos de Paldea" />
                                </div>
                                <div className="detalle">
                                    <h4>Escarlata y Purpura-Destinos de Paldea de JCC Pokemon</h4>
                                </div>
                            </div>
                            <div className="imagen-detalle">
                                <div className="img">
                                    <img src="/img/brecha-paradojica.png" alt="Destinos de Paldea" />
                                </div>
                                <div className="detalle">
                                    <h4>Escarlata y Purpura-Brecha Paradojica de JCC Pokemon</h4>
                                </div>
                            </div>
                        </div>

                        <div className="div div-expansiones">
                            <div className="titulo">
                                <h3> EXPANSIONES ANTERIORES </h3>
                            </div>
                            <div className="tipo">
                                <h4> Escarlata y Purpura-151 de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Escarlata y Pupura-Llamas Obsidianas de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Escarlata y Pupura-Evoluciones en Paldea de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Escarlata y Purrpura de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Espada y Escudo-Cenitt Supremo de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Ver todas las expansiones </h4>
                            </div>
                        </div>

                    </>
                }

            />

        </>
    )
}
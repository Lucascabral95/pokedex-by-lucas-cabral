import DesplegableHeader from "../DesplegableHeader.jsx";

export default function CartasDesplegable() {
    return (
        <>

            <DesplegableHeader

                cuerpo={
                    <>

                        <div className="div div-expansiones">
                            <div className="titulo">
                                <h3> EXPANSIONES RECIENTES </h3>
                            </div>
                            <div className="imagen-detalle imagen-detalle-cartas">
                                <div className="img">
                                    <img src="/img/pack-cartas-uno.png" alt="Fuerzas Temporales" />
                                </div>
                                <div className="detalle">
                                    <h4> Escarlata y Purpura-Feruzas Temporales de JCC Pokemon </h4>
                                </div>
                            </div>
                            <div className="imagen-detalle imagen-detalle-cartas">
                                <div className="img">
                                    <img src="/img/pack-cartas-dos.png" alt="Destinos de Paldea" />
                                </div>
                                <div className="detalle">
                                    <h4> Escarlata y Purpura_Destinos de Paldea de JCC Pokemon </h4>
                                </div>
                            </div>
                            <div className="imagen-detalle imagen-detalle-cartas">
                                <div className="img">
                                    <img src="/img/pack-cartas-tres.png" alt="Destinos de Paldea" />
                                </div>
                                <div className="detalle">
                                    <h4> Escarlata y Purpura-Brecha Paradojica de JCC Pokemon </h4>
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
                                <h4> Escarlata y Purpura de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Cenitt Supremo de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Espada y Escudo-Tempestad Plateada de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Espada y Escudo-Origen Perdido de JCC Pokemon </h4>
                            </div>
                            <div className="tipo">
                                <h4> Ver todas las galerias de cartas </h4>
                            </div>
                        </div>

                    </>
                }

            />

        </>
    )
}
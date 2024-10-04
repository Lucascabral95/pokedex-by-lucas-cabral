import React from 'react';
import { CgClose } from 'react-icons/cg';
import './MaximizarImagen.scss';
import storeZustand from '../../zustand.jsx';
import { Link } from 'react-router-dom';

export default function MaximizarImagen(props) {
    const { setAgrandarImagen } = storeZustand()

    return (
        <div className="maximizar-imagen" onClick={() => setAgrandarImagen('')} >
            <div className="contenedor">
                {props.imagen && (
                    <>
                        <div className="icono" onClick={() => setAgrandarImagen('')}>
                            <CgClose className="icon" />
                        </div>
                        <div className="img">
                            {/* <img src={props.imagen} alt="Carta seleccionada" /> */}
                            {props.link ?
                                <Link to={props.link}> <img src={props.imagen} alt="Carta seleccionada" /> </Link>
                                :
                                <img src={props.imagen} alt="Carta seleccionada" />
                            }
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

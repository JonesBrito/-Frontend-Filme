import React from 'react';
import { NavLink } from 'react-router-dom';
import EditableList from '../../../components/EditableList';
import './styles.css';

function Sobre(props) {
    let data = [
        { info: 'Informacao', id: 0 }
    ];
    return (
        <>
            <body id='paginafilmes'>
                <br></br>
                <h2 id='promo'>
                   Sobre Nós: 
                </h2>
                <div>
                    <p id='sobre-nos'>
                        JSFlix é uma provedora nacional de filmes e séries de televisão via streaming sediada em Cachoeiro de Itapemirim, Espiríto Santo. Fundada em 2022 no Brasil, a empresa surgiu como um serviço de entrega de DVD dentro de um sistema hoteleiro.
                    </p>
                    <br></br>
               </div>
            </body>


        </>
    );
}

export default Sobre;
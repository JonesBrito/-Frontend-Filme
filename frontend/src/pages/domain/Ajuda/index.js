import React from 'react';
import { NavLink } from 'react-router-dom';
import EditableList from '../../../components/EditableList';
import './styles.css';

function Ajuda(props) {
    let data = [
        { info: 'Informacao', id: 0 }
    ];
    return (
            <body id='paginaajuda'>
                <br></br>
                <h2 id='promo'>
                    Ajuda:
                </h2>
                <div id='ajudar'> 
                    <ul id='ulajuda'>
                        <li><a href='' id='ajuda1'>Perguntas Frequentes</a></li>
                        <br></br>
                        <br></br>
                        <li ><a href='' id='ajuda2'>Como assistir à JSFlix</a></li>
                    </ul>

                    <br></br>
                </div>
            </body>
    );
}

export default Ajuda;
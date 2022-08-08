import React from 'react';
import { NavLink } from 'react-router-dom';
import EditableList from '../../../components/EditableList';
import './styles.css';

function Filme(props) {
    let data = [
        { info: 'Informacao', id: 0 }
    ];
    return (
        <>
            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to='/cadastrar-filme'>Cadastrar Filme</NavLink>
                    </li>
                    <li>
                        <NavLink to='/mostrar-filme'>Filmes Disponíveis</NavLink>
                    </li>
                </ul>
            </nav>

            <body id='paginafilmes'>
                <br></br>
                <h2 id='promo'>
                    Promoção Semanal
                </h2>
                <br></br>
                <div class="box">
                    <img id='img1' src="https://i.pinimg.com/originals/0f/5b/fa/0f5bfacda6921a51234cd48f3606d45f.jpg" />
                    <h3>Carros 1</h3>
                </div>
                <div class="box">
                    <img id='img2' src="https://www.ocamundongo.com.br/wp-content/uploads/2011/06/carros-2-poster-final.jpg" />
                    <h3>Carros 2</h3>
                </div>
                <div class="box">
                    <video id='img3' src="https://youtu.be/OxMQORNh2E4" />
                    <h3>Carros 3</h3>
                </div>
            </body>

        </>
    );
}

export default Filme;

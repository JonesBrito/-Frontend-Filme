import React from 'react';
import { NavLink } from 'react-router-dom';
import EditableList from '../../../components/EditableList';
import './styles.css';

function Quarto(props) {
    let data = [
        { info: 'Informacao', id: 0 }
    ];
    return (
        <>
            <nav className='navigator'>
                <ul>
                    <li>
                        <NavLink to='/cadastrar-filme'>Cadastrar Novo Filme</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Relatórios dos Filmes</NavLink>
                    </li>
                </ul>
            </nav>

            <body>
                <h2 id='t1'>Teste</h2>
            </body>

            {/* <EditableList title='Quartos' data={data}/> */}
        </>
    );
}

export default Quarto;
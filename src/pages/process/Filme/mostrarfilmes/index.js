import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import api from '../../../../services/api';
import './styles.css';


const MostrarFilme = () => {

    const [listFilmes, setListFilmes] = useState([]);

    useEffect(() => {

        api.get('/filme/find').then(res => {
            setListFilmes(res.data)
        }).catch(() => {
            alert('e.response.data.message');
        })

    }, []);

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

                <div >
                    <br></br>
                    <h2 id='mostrar' color='black'>Lista de Filmes</h2>
                    <br></br>
                <ul>
                    {
                        listFilmes.map((filme, i) => {
                            return <div className="data" key={i}>
                                <fieldset>
                                    <ul id='listafilmes'>
                                        <li>{`Filme: ${filme.nome}.`}</li>
                                        <li>{`Descrição: ${filme.descricao}.`}</li>
                                        <li>{`Genero: ${filme.genero}.`}</li>
                                        <li>{`Ano de lançamento: ${filme.anolancamento}.`}</li>
                                        <li>{`Preço: ${filme.preco}.`}</li>
                                    </ul>
                                </fieldset>
                            </div>
                        })
                    }
                </ul>

            </div>
        </>
    )
}

export default MostrarFilme;
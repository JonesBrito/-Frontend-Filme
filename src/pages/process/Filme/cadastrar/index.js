import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import api from '../../../../services/api';

function CadastrarFilme(props) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [produtora, setProdutora] = useState('');
    const [genero, setGenero] = useState('');
    const [preco, setPreco] = useState('');
    const [anolancamento, setAnolancamento] = useState('');

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        console.log('Cadastrar');

        const data = {
            nome: nome,
            descricao: descricao,
            produtora: produtora,
            anolancamento: anolancamento,
            genero: genero,
            preco: preco,
        }

        api.post('filme/insert', data).then(res => {
            navigate('/filme');
        })
            .catch(e => {
                alert(e.response.data.message);
            })
    }

    return (
        <>
            <form onSubmit={e => submit(e)} method="POST">
                <h2 id='titulo'>Cadastrar Filme</h2>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" name='nome' value={nome} onChange={e => setNome(e.target.value)} required /><br />

                <label htmlFor="descricao">Descrição</label><br />
                <input type="text" name='descricao' value={descricao} onChange={e => setDescricao(e.target.value)} required /><br />

                <label htmlFor="produtora">Produtora</label><br />
                <input type="text" name='produtora' value={produtora} onChange={e => setProdutora(e.target.value)} required />

                <label htmlFor="anolancamento">Ano de Lançamento</label><br />
                <input type="text" name='anolancamento' value={anolancamento} onChange={e => setAnolancamento(e.target.value)} required />



                <label htmlFor="genero">Gênero</label><br />
                <select name="genero" id="genero" value={genero} onChange={e => setGenero(e.target.value)} required>
                    <option value="">Escolha uma opção</option>
                    <option value="acao">Ação</option>
                    <option value="animação">Animação</option>
                    <option value="drama">Drama</option>
                    <option value="comedia">Comédia</option>
                    <option value="terror">Terror</option>
                </select>
                <br />

                <label htmlFor="number">Preço</label><br />
                <input type="float" name='preco' value={preco} onChange={e => setPreco(e.target.value)} required />
                <br />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}

export default CadastrarFilme;
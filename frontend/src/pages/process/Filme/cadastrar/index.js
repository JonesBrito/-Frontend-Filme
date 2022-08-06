import React from 'react';
import './styles.css';

function CadastrarFilme(props) {
    function submit(e) {
        e.preventDefault();
        console.log('Cadastrar');
    }

    return (
        <>
            <form onSubmit={e => submit(e)} method="POST">
                <h2>Cadastrar Filme</h2>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" name='nome' /><br />
                <label htmlFor="descricao">Descrição</label><br />
                <input type="text" name='descricao' /><br />
                <label htmlFor="produtora">Produtora</label><br />
                <input type="text" name='produtora' />
                <label htmlFor="anolancamento">Gênero</label><br />
                <select name="cidade" id="cidade">
                    <option value="acao">Ação</option>
                    <option value="animação">Animação</option>
                    <option value="drama">Drama</option>
                    <option value="comedia">Comédia</option>
                    <option value="terror">Terror</option>
                </select>
                <br />
                <label htmlFor="number">Preço</label><br />
                <input type="number" name='preco' />
                <br />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}

export default CadastrarFilme;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login(props) {
    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        localStorage.setItem('login', true);
        navigate('/');
        window.location.reload();
    }

    return (
        <>
            <form id='login' onSubmit={e => submit(e)}>
                <h2>Entrar</h2>
                <div >
                <fieldset id='usuario'>
                    <h4 id='usu'>Tipo de Usuário:</h4>
                    <input type="radio" name='usertype' id='gerente' value='gerente' />
                    <label htmlFor="gerente"> Gerente</label><br />
                    <input type="radio" name='usertype' id='cliente' value='cliente' />
                    <label htmlFor="cliente"> Cliente</label><br />
                    </fieldset>
                </div>
                <br />
                <br />
                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
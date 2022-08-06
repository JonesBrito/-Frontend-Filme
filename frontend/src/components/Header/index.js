import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import './styles.css';

function Header() {
    let [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('login') == null || !localStorage.getItem('login') ? false : localStorage.getItem('login'));
        // setInterval(() => {
        //     setIsLoggedIn(localStorage.getItem('login') == null || !localStorage.getItem('login') ? false : localStorage.getItem('login'));
        // }, 4000);
    }, [])

    function logout() {
        setIsLoggedIn(false);
        localStorage.setItem('login', false);
    }

    return (
        <header>
            <NavLink to='/'>
                <h1>JS <span>Flix</span></h1>
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/entrar" className={isLoggedIn ? 'login' : ''}>Entrar</NavLink>
                </li>
                <li>
                    <NavLink to="/criar-conta" className={isLoggedIn ? 'login' : ''}>Criar conta</NavLink>
                </li>

                <li>
                    <a onClick={logout} className={!isLoggedIn ? 'login' : ''}>Sair</a>
                </li>
            </ul>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/filme' className={!isLoggedIn ? 'login' : ''}>Filmes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sobre-nos' className={!isLoggedIn ? 'login' : ''}>Sobre nós</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ajuda' className={!isLoggedIn ? 'login' : ''}>Ajuda</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
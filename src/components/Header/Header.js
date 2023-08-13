import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const isAuthenticated = true;

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Todos</Link></li>
                    <li><Link to="/add">Add Todo</Link></li>
                    <li><Link to="/edit/2">edit Todo</Link></li>
                    <li><Link to="/todo/20">show Todo</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
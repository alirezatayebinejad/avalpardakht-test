import React from 'react';
import { Link } from 'react-router-dom';
import { logout, isLoggedIn, getUserData } from '../../services/auth';
import { Avatar } from '@mui/material';

const Header = () => {
    const auth = isLoggedIn();
    const userData = getUserData();

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Todos</Link></li>
                    <li><Link to="/add">Add Todo</Link></li>
                    <li><Link to="/edit/2">edit Todo</Link></li>
                    <li><Link to="/todo/20">show Todo</Link></li>
                </ul>
            </nav>

            <div>
                {userData &&
                    <div>
                        <Avatar sx={{ bgcolor: "gray" }} alt={userData.name} src={userData.image}></Avatar>
                        <p>{userData.name}</p>
                    </div>
                }
                {auth ? <button onClick={() => logout}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
            </div>
        </header >
    );
};

export default Header;
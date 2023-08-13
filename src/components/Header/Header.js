import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import { Avatar } from '@mui/material';
import { UserContext } from "../../contexts/userContext";

const Header = () => {
    const { isAuth, userData, updateAuthStatus } = useContext(UserContext);

    const logoutHandler = () => {
        logout();
        updateAuthStatus();
    }

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
                {isAuth ? <button onClick={logoutHandler}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
            </div>
        </header >
    );
};

export default Header;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import { Avatar } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import styles from './Header.module.css';

const Header = () => {
    const { isAuth, userData, updateAuthStatus } = useContext(UserContext);

    const logoutHandler = () => {
        logout();
        updateAuthStatus();
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.navContainer}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink}>Todos</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/add" className={styles.navLink}>Add Todo</Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.userInfo}>
                    {userData && (
                        <div className={styles.userWrapper}>
                            <p className={styles.userName}>{userData.name}</p>
                            <Avatar
                                className={styles.avatar}
                                sx={{ bgcolor: 'gray' }}
                                alt={userData.name}
                                src={userData.image}
                            ></Avatar>
                        </div>
                    )}
                    {isAuth ? (
                        <button className={styles.logoutBtn} onClick={logoutHandler}>
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className={styles.loginLink}>
                            <button className={styles.loginBtn}>Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

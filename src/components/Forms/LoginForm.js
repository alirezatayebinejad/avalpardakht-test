import React, { useContext, useState } from 'react';
import { login, logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import styles from './LoginForm.module.css';

function LoginForm() {
  const navigate = useNavigate();
  const { isAuth, userData, updateAuthStatus } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setError(null);
      setEmail('');
      setPassword('');
      navigate('/');
      updateAuthStatus();
    } catch (error) {
      setError(error.message);
    }
  };

  const logoutHandler = () => {
    logout();
    updateAuthStatus();
  };

  if (isAuth) {
    return (
      <div className={styles.login_form}>
        <h3>You are already logged in as:</h3>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <button className={styles.button} onClick={logoutHandler}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <form className={styles.login_form}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.form_group}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.form_group}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="true"
        />
      </div>
      <div>
        <button className={styles.button} onClick={handleLogin}>
          Log In
        </button>
      </div>
      <h1 className="text-3xl font-bold underline">sdfsddf</h1>
    </form>
  );
}

export default LoginForm;

import React, { useContext, useState } from 'react';
import { login, logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/userContext";

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
      setPassword('')
      navigate('/');
      updateAuthStatus();
    } catch (error) {
      setError(error.message);
    }
  };

  const logoutHandler = () => {
    logout();
    updateAuthStatus();
  }
  if (isAuth)
    return (
      <div>
        <h3>You are already logged in as:</h3>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <button onClick={() => logoutHandler()}>Logout</button>
      </div>
    )
  return (
    <form>
      {error && <div className="error">{error}</div>}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Log In</button>
      </div>
    </form>
  );
}

export default LoginForm;

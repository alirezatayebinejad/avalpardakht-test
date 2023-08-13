import React, { useState } from 'react';
import { login, logout, isLoggedIn, getUserData } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState(isLoggedIn());
  const [userData, setUserData] = useState(getUserData());

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setError(null);
      setEmail('');
      setPassword('')
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };
  const handleLogout = () => {
    logout();
    setAuth(false);
    setUserData(null);
  };

  if (auth)
    return (
      <div>
        <h3>You are already logged in as:</h3>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <button onClick={handleLogout}>Logout</button>
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

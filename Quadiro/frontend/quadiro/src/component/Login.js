import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };
    try {
      const res = await fetch('https://internshala-weld.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }

      const data = await res.json();
      localStorage.setItem('token', data.token); // Save token in local storage
      navigate('/home'); // Redirect to home page after login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h3>Assignmnet for Quadiro Technologies</h3>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <button className="signup-button" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;

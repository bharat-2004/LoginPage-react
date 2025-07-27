import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('All fields are required.');
      return;
    }
    const success = login(username, password);
    if (!success) setError('Invalid credentials.');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Welcome to Uniqus Solutions</h2>
        <p className="subheading">Secure Role-Based Login Portal</p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="new-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

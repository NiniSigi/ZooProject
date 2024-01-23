import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem('username');
    if (loggedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'testUser' && password === 'IdmEia=0dsfjewe') {
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
      navigate('/'); // Weiterleitung zur Hauptseite nach dem Login
    } else {
      alert('Falscher Benutzername oder Passwort');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="container mt-5 text-center">
        <h2>Eingeloggt als {localStorage.getItem('username')}</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Benutzername</label>
                  <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Passwort</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Einloggen</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Login;

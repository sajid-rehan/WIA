import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier könntest du den Login-Prozess ausführen und die Eingaben überprüfen
    if (!username || !password) {
      setError('Bitte fülle alle Felder aus.');
    } else {
      // Login erfolgreich, setze error zu null
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Benutzername:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Passwort:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Einloggen</button>
    </form>
  );
};

export default LoginForm;
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier kommt die Logik zum Überprüfen des Benutzernamens und Passworts hin
    console.log('Benutzername:', username);
    console.log('Passwort:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Benutzername:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="password">Passwort:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Anmelden</button>
    </form>
  );
};

export default LoginForm;
import React, { createContext, useState, useContext } from 'react';

// Criando o contexto do usuário
const UserContext = createContext();

// Provedor do contexto do usuário
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Componente de Login
const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuário:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

// Componente de Perfil
const Profile = () => {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    return <p>Você não está logado.</p>;
  }

  return (
    <div>
      <p>Usuário logado: {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

// Componente principal Login_user
const Login_user = () => {
  return (
    <UserProvider>
      <div>
        <Login />
        <Profile />
      </div>
    </UserProvider>
  );
};

export default Login_user;
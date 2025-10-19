import React from 'react';
import { Route, Routes } from 'react-router';
import AuthLayout from './pages/AuthLayout.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;

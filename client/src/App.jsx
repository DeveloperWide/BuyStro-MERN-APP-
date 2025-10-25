import React from 'react';
import { Route, Routes } from 'react-router';
import AuthLayout from './pages/AuthLayout.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import GetMe from './pages/GetMe.jsx';
import { Products } from './pages/Products.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path='/me' element={<GetMe />}/>
      <Route path='/products' element={<Products />}/>
    </Routes>
  );
};

export default App;

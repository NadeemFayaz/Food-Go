// App.js
import './App.css';
import Home from './screens/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Login from './screens/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createuser" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

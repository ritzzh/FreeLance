import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import SignUp from './component/SignUp'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

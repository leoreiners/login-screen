import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NeedHelp from './components/NeedHelp';
import ForgotPassword from './components/ForgotPassword';
import './App.css'

const App: React.FC = () => {
  return (
    <div className='content'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/need-help" element={<NeedHelp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


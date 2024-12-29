import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordPage from './PasswordPage';
import SecretPage from './SecretPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route path="/secret" element={<SecretPage />} />
      </Routes>
    </Router>
  );
};

export default App;

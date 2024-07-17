import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './Pages/Signup';
import SignInForm from './Pages/Login';
import Searching from './Pages/SearchingPage';
import SavedList from './Pages/ListingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Searching />} />
        <Route path="/savedlist" element={<SavedList />} />
        <Route path="*" element={<SignInForm />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
// import Dashboard from './components/Dashboard';
import Landinganime from './components/Landinganime';
function App() {
  return (
<div>
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landinganime />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
};

export default App;
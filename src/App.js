import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landinganime from './components/Landinganime';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Landinganime />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;

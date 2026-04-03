import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="blob-1"></div>
        <div className="blob-2"></div>

        <header className="glass">
          <div className="logo">Praveen Sarikonda</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="glass">
          <p>© 2026 Sarikonda Praveen Kumar Raju | Data Analyst Portfolio</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
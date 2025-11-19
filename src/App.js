import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Charles S. Carreon</h1>
      <p>Hi! I am Charles S. Carreon.</p>
      <p>I am a 3rd Year BS Computer Science student from Pamantasan ng Cabuyao.</p>
      <p>You can contact me through the following platforms: </p>
      <ul>
          <li>Facebook: <a href="https://www.facebook.com/csharlec" target="_blank">Charles Carreon</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/feed/" target="_blank">Charles Carreon</a></li>
          <li>GitHub: <a href="https://github.com/CSselrahC" target="_blank">Charles Carreon</a></li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is a sample React app containerized with Docker.</p>
      <p>Features:</p>
      <ul>
        <li>React 18</li>
        <li>React Router</li>
        <li>Hot reload in development</li>
        <li>Production-ready builds</li>
      </ul>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = "Charles Carreon";
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>

        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

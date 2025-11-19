import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Charles Carreon";
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" variant="dark" bg="black" className="custom-navbar" collapseOnSelect>
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
              Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" end className="nav-link-custom">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/projects" className="nav-link-custom">
                  Projects
                </Nav.Link>
                <Nav.Link as={NavLink} to="/skills" className="nav-link-custom">
                  Skills
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

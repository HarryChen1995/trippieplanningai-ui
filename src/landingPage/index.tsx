import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mission from "../Mission";
import Home from "../Home";
import AboutUs from "../About";

import { Navbar, Nav, Container } from "react-bootstrap";

const TripiePlanningAI: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold">
              TripiePlanningAI
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" className="fw-semibold">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about" className="fw-semibold">
                    About Us
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/mission" className="fw-semibold">
                    Our Mission
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="container" style={{ minHeight: "70vh", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </div>

        <footer className="bg-dark text-light py-3 text-center mt-auto">
          <p className="fw-light mb-0">
            &copy; 2025 TripiePlanningAI. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default TripiePlanningAI;

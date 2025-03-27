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
      <div className="d-flex flex-column min-vh-100">
        <Navbar 
          bg="dark" 
          variant="dark" 
          expand="lg" 
          className="py-3 shadow-sm"
          style={{
            background: "linear-gradient(to right, #1a1a1a, #2d2d2d) !important"
          }}
        >
          <Container>
            <Navbar.Brand 
              as={Link} 
              to="/" 
              className="fw-bold fs-4"
              style={{ 
                background: "linear-gradient(45deg, #00ff9d, #00b8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
              TripiePlanningAI
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item className="mx-3">
                  <Nav.Link 
                    as={Link} 
                    to="/" 
                    className="fw-semibold position-relative"
                    style={{
                      transition: "color 0.3s ease",
                      color: "#fff !important"
                    }}
                    onMouseOver={e => e.currentTarget.style.color = "#00ff9d !important"}
                    onMouseOut={e => e.currentTarget.style.color = "#fff !important"}
                  >
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Nav.Link 
                    as={Link} 
                    to="/about" 
                    className="fw-semibold position-relative"
                    style={{
                      transition: "color 0.3s ease",
                      color: "#fff !important"
                    }}
                    onMouseOver={e => e.currentTarget.style.color = "#00ff9d !important"}
                    onMouseOut={e => e.currentTarget.style.color = "#fff !important"}
                  >
                    About Us
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Nav.Link 
                    as={Link} 
                    to="/mission" 
                    className="fw-semibold position-relative"
                    style={{
                      transition: "color 0.3s ease",
                      color: "#fff !important"
                    }}
                    onMouseOver={e => e.currentTarget.style.color = "#00ff9d !important"}
                    onMouseOut={e => e.currentTarget.style.color = "#fff !important"}
                  >
                    Our Mission
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main className="flex-grow-1 py-4">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/mission" element={<Mission />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-dark text-light py-5 mt-auto">
          <Container>
            <div className="row g-4">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <h5 className="fw-bold mb-4">TripiePlanningAI</h5>
                <p className="text-muted mb-4">
                  Making travel planning effortless with AI. We're revolutionizing how people plan their trips, making it smarter, faster, and more personalized.
                </p>
                <div className="d-flex gap-3">
                  <a href="#" className="text-muted text-decoration-none">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-muted text-decoration-none">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-muted text-decoration-none">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="fw-bold mb-4">Quick Links</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">About Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">Our Mission</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">Features</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="fw-bold mb-4">Support</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">Help Center</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">Contact Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">FAQ</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted text-decoration-none">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h6 className="fw-bold mb-4">Newsletter</h6>
                <p className="text-muted mb-4">
                  Subscribe to our newsletter for the latest updates and travel planning tips.
                </p>
                <div className="input-group mb-3">
                  <input type="email" className="form-control bg-dark text-light border-secondary" placeholder="Enter your email" />
                  <button className="btn btn-outline-light" type="button">Subscribe</button>
                </div>
              </div>
            </div>
            <hr className="my-5 border-secondary" />
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="text-light mb-0">
                  &copy; 2025 TripiePlanningAI. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="d-flex justify-content-center justify-content-md-end gap-3">
                  <a href="#" className="text-light text-decoration-none">Terms of Service</a>
                  <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
                  <a href="#" className="text-light text-decoration-none">Contact</a>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </Router>
  );
};

export default TripiePlanningAI;

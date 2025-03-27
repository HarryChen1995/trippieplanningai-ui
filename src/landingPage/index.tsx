import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mission from "../Mission";
import Home from "../Home";
import AboutUs from "../About";



const TripiePlanningAI: React.FC = () => {
  return (
<Router basename={`${process.env.PUBLIC_URL}/trippieplanningai`}>
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-light mb-4 flex-grow-3">
          <div className="container">
            <Link className="navbar-brand text-light fw-bold" to="/">TripiePlanningAI</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-light fw-semibold" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light fw-semibold" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light fw-semibold" to="/mission">Our Mission</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container" style={{ minHeight: "70vh", width: "100%" }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </div>

        <footer className="bg-dark text-light py-3 text-center mt-auto">
          <p className="fw-light mb-0">&copy; 2025 TripiePlanningAI. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default TripiePlanningAI;

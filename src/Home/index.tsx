import "./home.css";
import homeImage from "../assets/homebackground.png";

const Home = () => (
  <div className="home-container">
    {/* Hero Section */}
    <div className="hero-section position-relative">
      <div 
        className="hero-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          width: '100%',
          position: 'relative'
        }}
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-lg-8 text-white">
              <h1 className="display-4 fw-bold mb-4">
                Plan Your Perfect Trip with AI
              </h1>
              <p className="lead mb-4">
                Experience the future of travel planning with our intelligent AI system
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg px-4 py-2">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="features-section py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-4">Why Choose TripiePlanningAI?</h2>
            <p className="lead text-muted">
              Our advanced AI system revolutionizes travel planning with intelligent features
              that make your journey planning effortless and enjoyable.
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-4">
                <i className="bi bi-geo-alt-fill display-4 text-primary"></i>
              </div>
              <h3 className="h5 fw-bold mb-3">Smart Location Planning</h3>
              <p className="text-muted">
                Intelligent route optimization and location suggestions based on your preferences
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-4">
                <i className="bi bi-calendar-check display-4 text-primary"></i>
              </div>
              <h3 className="h5 fw-bold mb-3">Personalized Itineraries</h3>
              <p className="text-muted">
                Custom travel plans tailored to your interests and travel style
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-4">
                <i className="bi bi-lightning-charge-fill display-4 text-primary"></i>
              </div>
              <h3 className="h5 fw-bold mb-3">Instant Recommendations</h3>
              <p className="text-muted">
                Get real-time suggestions for activities, restaurants, and attractions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="cta-section py-5 bg-light rounded-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-3">Ready to Transform Your Travel Planning?</h2>
            <p className="lead text-muted mb-0">
              Join thousands of travelers who are already experiencing the future of trip planning
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <button className="btn btn-primary btn-lg px-5 py-3">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

import "./home.css";
import homeImage from "../assets/homebackground.png";
const Home = () => (
  <div>
    <div className="card bg-transparent border-0 shadow-lg padding-10 rounded-10">
    <img className="card-img border-0 padding-2" src={homeImage} alt="Card image cap"/>
    <div className="card-body">
    <h2 className="fw-bolder">Plan Your Perfect Trip</h2>
    <p className="lead fw-semibold">
        Your AI-powered travel planner for effortless trip itineraries.
      </p>
    <p className="fw-semibold card-text">
      Let our advanced AI, powered by a sophisticated geo-reasoning model, work
      its magic to craft personalized itineraries designed specifically for your
      travel preferences. Whether you're planning a scenic road trip through
      winding highways or embarking on a flight-based adventure to faraway
      destinations, our intelligent system takes into account every detail—such
      as distance, optimal routes, and local attractions—to ensure your trip is
      seamless, enjoyable, and perfectly suited to your unique interests and
      needs. From exploring hidden gems to popular landmarks, we’ve got you
      covered at every step of the way, making your journey unforgettable.
    </p>
    <button className="btn btn-dark fw-semibold">Schedule Demo</button>
  </div>
  </div>
  </div>
);

export default Home;

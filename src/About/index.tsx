import me from "../assets/me.png";
const AboutUs = () => (
  <div className="mb-5 container d-flex  align-items-center justify-content-space-between">
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={me} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Hanin Chen - Co Founder</h5>
        <p className="card-text">
            Hanin is a co-founder of TripiePlanningAI. He is a passionate
            entrepreneur and a travel enthusiast. He has a background in computer
            science and has worked on numerous AI projects. Hanin is dedicated to
            making travel planning easier and more accessible to everyone.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Welcome to</p>

          <h1>Sibahle Day Care</h1>

          <p className="hero-text">
            A safe and supportive environment where children
            learn, play, grow and develop.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="primary-button">
              Contact Us
            </Link>

            <Link to="/about" className="secondary-button">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="home-about">
        <div className="section-container">
          <div className="about-content">
            <p className="section-label">ABOUT US</p>

            <h2>A Place to Learn, Play and Grow</h2>

            <p>
              Sibahle Day Care provides children with a supportive
              environment for learning, development, creativity
              and play.
            </p>

            <p>
              Our programmes focus on early childhood development
              and activities that support children's educational,
              creative and social development.
            </p>

            <Link to="/about" className="text-link">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="programmes">
        <div className="section-container">

          <div className="section-heading">
            <p className="section-label">OUR PROGRAMMES</p>
            <h2>What We Offer</h2>
            <p>
              Activities designed to support learning,
              development and play.
            </p>
          </div>

          <div className="programme-grid">

            <div className="programme-card">
              <div className="programme-icon">👶</div>
              <h3>Early Childhood Development</h3>
              <p>
                Activities that support children's early learning
                and development.
              </p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">📚</div>
              <h3>Educational Activities</h3>
              <p>
                Learning activities that encourage curiosity,
                knowledge and development.
              </p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">🎨</div>
              <h3>Creative Activities</h3>
              <p>
                Creative activities that encourage children to
                express themselves and develop new skills.
              </p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">⚽</div>
              <h3>Play & Recreation</h3>
              <p>
                Play and recreational activities that support
                physical and social development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="hours">
        <div className="section-container">

          <div className="hours-content">
            <div>
              <p className="section-label">OPERATING HOURS</p>
              <h2>We're Here During the Week</h2>
            </div>

            <div className="hours-list">
              <div>
                <span>Monday - Thursday</span>
                <strong>07:00 - 16:00</strong>
              </div>

              <div>
                <span>Friday</span>
                <strong>07:00 - 15:00</strong>
              </div>

              <div>
                <span>Saturday - Sunday</span>
                <strong>Closed</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="section-container">

          <p className="section-label">GET IN TOUCH</p>

          <h2>Interested in Sibahle Day Care?</h2>

          <p>
            Contact us for more information about our programmes
            and services.
          </p>

          <div className="contact-details">
            <p>📞 071 488 2967 / 067 250 5299</p>
            <p>✉ VioletMoroko99@gmail.com</p>
            <p>📍 3871 Monde Str, Lawley 2 Ext 9, Johannesburg, 1824</p>
          </div>

          <Link to="/contact" className="primary-button">
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Home;
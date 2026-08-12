import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="page-hero">
        <div>
          <p className="section-label">ABOUT US</p>
          <h1>Sibahle Day Care</h1>
          <p>
            A supportive environment where children learn, play,
            develop and grow.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="content-container">
          <div className="about-main">
            <p className="section-label">WHO WE ARE</p>

            <h2>A Place for Learning and Development</h2>

            <p>
              Sibahle Day Care provides a safe and supportive
              environment for children during their early years.
            </p>

            <p>
              Our activities support children's learning,
              creativity, physical activity and social development.
            </p>

            <p>
              We provide a range of activities designed to encourage
              children to learn through structured activities and play.
            </p>
          </div>

          <div className="about-info">
            <div>
              <h3>Our Location</h3>
              <p>
                3871 Monde Str, Lawley 2 Ext 9,
                Johannesburg, 1824
              </p>
            </div>

            <div className="hours-list">
  <div>
    <span>Monday</span>
    <strong>07:00 - 16:00</strong>
  </div>

  <div>
    <span>Tuesday</span>
    <strong>07:00 - 16:00</strong>
  </div>

  <div>
    <span>Wednesday</span>
    <strong>07:00 - 16:00</strong>
  </div>

  <div>
    <span>Thursday</span>
    <strong>07:00 - 16:00</strong>
  </div>

  <div>
    <span>Friday</span>
    <strong>07:00 - 15:00</strong>
  </div>

  <div>
    <span>Saturday</span>
    <strong>Closed</strong>
  </div>

  <div>
    <span>Sunday</span>
    <strong>Closed</strong>
  </div>
</div>

         

            <div>
              <h3>Contact</h3>
              <p>071 488 2967</p>
              <p>067 250 5299</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="content-container">
          <div className="section-heading">
            <p className="section-label">WHAT WE FOCUS ON</p>
            <h2>Supporting Children's Development</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h3>Learning</h3>
              <p>
                Educational activities support children's early
                learning and development.
              </p>
            </div>

            <div className="value-card">
              <h3>Creativity</h3>
              <p>
                Creative activities give children opportunities to
                explore ideas and express themselves.
              </p>
            </div>

            <div className="value-card">
              <h3>Play</h3>
              <p>
                Play and recreation support physical activity,
                interaction and social development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <h2>Learn More About Our Programmes</h2>
        <p>
          Explore the activities available at Sibahle Day Care.
        </p>
        <Link to="/programmes" className="primary-button">
          View Programmes
        </Link>
      </section>
    </main>
  );
}

export default About;
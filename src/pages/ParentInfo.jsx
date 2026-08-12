import { Link } from "react-router-dom";
import "./ParentInfo.css";

function ParentInfo() {
  return (
    <main className="parent-page">
      <section className="page-hero">
        <div>
          <p className="section-label">FOR PARENTS</p>
          <h1>Parent Information</h1>
          <p>
            Important information about Sibahle Day Care.
          </p>
        </div>
      </section>

      <section className="parent-section">
        <div className="content-container">

          <div className="parent-grid">

            <div className="parent-card">
              <span>🕐</span>
              <h2>Operating Hours</h2>

              <div className="info-row">
                <span>Monday - Thursday</span>
                <strong>07:00 - 16:00</strong>
              </div>

              <div className="info-row">
                <span>Friday</span>
                <strong>07:00 - 15:00</strong>
              </div>

              <div className="info-row">
                <span>Saturday - Sunday</span>
                <strong>Closed</strong>
              </div>
            </div>

            <div className="parent-card">
              <span>📚</span>
              <h2>Programmes</h2>

              <ul>
                <li>Early Childhood Development</li>
                <li>Educational Activities</li>
                <li>Creative Activities</li>
                <li>Play & Recreation</li>
              </ul>
            </div>

            <div className="parent-card">
              <span>📍</span>
              <h2>Location</h2>

              <p>
                3871 Monde Str,
                <br />
                Lawley 2 Ext 9,
                <br />
                Johannesburg, 1824
              </p>
            </div>

            <div className="parent-card">
              <span>📞</span>
              <h2>Contact</h2>

              <p>071 488 2967</p>
              <p>067 250 5299</p>
              <p>VioletMoroko99@gmail.com</p>
            </div>

          </div>

        </div>
      </section>

      <section className="parent-note">
        <div>
          <h2>Need More Information?</h2>
          <p>
            Contact Sibahle Day Care directly for additional
            information about the daycare and its programmes.
          </p>

          <Link to="/contact" className="primary-button">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ParentInfo;
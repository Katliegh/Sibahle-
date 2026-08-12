import { Link } from "react-router-dom";
import "./Programmes.css";

function Programmes() {
  const programmes = [
    {
      icon: "👶",
      title: "Early Childhood Development",
      description:
        "Activities that support children's early learning, development and foundational skills.",
    },
    {
      icon: "📚",
      title: "Educational Activities",
      description:
        "Learning activities designed to encourage curiosity, participation and knowledge development.",
    },
    {
      icon: "🎨",
      title: "Creative Activities",
      description:
        "Creative activities that give children opportunities to explore ideas and express themselves.",
    },
    {
      icon: "⚽",
      title: "Play & Recreation",
      description:
        "Play and recreational activities that support physical activity, interaction and social development.",
    },
  ];

  return (
    <main className="programmes-page">
      <section className="page-hero">
        <div>
          <p className="section-label">OUR PROGRAMMES</p>
          <h1>Learning Through Activity</h1>
          <p>
            Activities designed to support learning, creativity,
            development and play.
          </p>
        </div>
      </section>

      <section className="programmes-section">
        <div className="content-container">
          <div className="programme-list">
            {programmes.map((programme) => (
              <article className="programme-item" key={programme.title}>
                <div className="programme-large-icon">
                  {programme.icon}
                </div>

                <div>
                  <h2>{programme.title}</h2>
                  <p>{programme.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <h2>Have Questions?</h2>
        <p>
          Contact Sibahle Day Care for more information.
        </p>

        <Link to="/contact" className="primary-button">
          Contact Us
        </Link>
      </section>
    </main>
  );
}

export default Programmes;
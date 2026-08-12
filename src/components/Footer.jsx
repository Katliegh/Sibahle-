import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Sibahle Day Care
          </Link>

          <p>
            A supportive environment for children to learn,
            play and grow.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/parent-information">
            Parent Information
          </Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>071 488 2967</p>
          <p>067 250 5299</p>
          <p>VioletMoroko99@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Location</h3>

          <p>
            3871 Monde Str,
            <br />
            Lawley 2 Ext 9,
            <br />
            Johannesburg, 1824
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 Sibahle Day Care</p>
      </div>

    </footer>
  );
}

export default Footer;
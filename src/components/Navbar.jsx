import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Sibahle Day Care
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar-links ${
            menuOpen ? "navbar-links-open" : ""
          }`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>

          <Link to="/programmes" onClick={closeMenu}>
            Programmes
          </Link>

          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link to="/parent-information" onClick={closeMenu}>
            Parent Information
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
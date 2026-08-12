import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  to,
  variant = "primary",
  type = "button",
  onClick,
}) {
  if (to) {
    return (
      <Link to={to} className={`button button-${variant}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
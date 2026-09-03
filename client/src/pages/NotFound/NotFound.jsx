import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <div className="not-found-icon">🍽️</div>

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" className="not-found-home-btn">
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
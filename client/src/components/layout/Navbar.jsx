import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🍽️ RestaurantHub
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/orders">My Orders</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <Link to="/login">
        <button className="login-btn">
          Login
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
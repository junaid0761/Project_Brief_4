import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🍽️ RestaurantHub
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Menu
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          My Orders
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Profile
        </NavLink>
      </div>

      <NavLink to="/login">
        <button className="login-btn">Login</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
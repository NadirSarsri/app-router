import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function Navbar() {
  const auth = useAuth();
  console.log(auth);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink end to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="products" className="nav-link">
              Products
            </NavLink>

            {(localStorage.getItem("Username") || auth?.user) && (
              <NavLink to="profile" className="nav-link">
                Profile
              </NavLink>
            )}
            <NavLink
              to={
                localStorage.getItem("Username") || auth?.user
                  ? "logout"
                  : "login"
              }
              className="nav-link"
            >
              {localStorage.getItem("Username") || auth?.user
                ? "Logout"
                : "Login"}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

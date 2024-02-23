import { Link } from "react-router-dom";
import "./styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        Apitude Elevate
      </Link>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/MockTest" className="navbar__link">
            Mock Test
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/DriveInfo" className="navbar__link">
            Drives
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

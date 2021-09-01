import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return(
    <nav className="topNav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
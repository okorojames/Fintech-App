import { BiChevronDown } from "react-icons/bi";
import "./Navbar.css";
import Home from "./Home";

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="#" className="nav__logo">
          ZEND
        </a>
        <div className="navLinks">
          <a className="navLinks__link project" href="#product">
            Project <BiChevronDown className="nav__chevron" />
          </a>
          <a className="navLinks__link" href="#about">
            About
          </a>
          <a className="navLinks__link support" href="#support">
            Support
          </a>
          <a className="navLinks__link navLinks__btn register" href="#support">
            Register
          </a>
          <a className="navLinks__link navLinks__btn download" href="#support">
            Download
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

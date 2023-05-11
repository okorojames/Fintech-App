import { BiChevronDown } from "react-icons/bi";
import "./Navbar.css";
import Home from "./Home";
import { useRef } from "react";

const Navbar = () => {
  //
  const navLinks = useRef();
  const hamburger = useRef();
  //
  const handleToggleNav = () => {
    navLinks.current.classList.toggle("toggleNav");
    console.log(Array.of(hamburger)[0].current.children);
  };
  //
  return (
    <header>
      <nav>
        <a href="#" className="nav__logo">
          ZEND
        </a>
        <div className="navLinks" ref={navLinks}>
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
          <a
            className="navLinks__link navLinks__btn download__btn"
            href="#support"
          >
            Download
          </a>
        </div>
        <div className="hamburger" onClick={handleToggleNav} ref={hamburger}>
          <div className="burger burger__one"></div>
          <div className="burger burger__two"></div>
          <div className="burger burger__three"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

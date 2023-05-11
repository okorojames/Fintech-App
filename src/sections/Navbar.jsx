import { BiChevronDown } from "react-icons/bi";
import "./Navbar.css";
import Home from "./Home";
import { useRef } from "react";

const Navbar = () => {
  //
  const navLinks = useRef();
  const burger__one = useRef();
  const burger__two = useRef();
  const burger__three = useRef();
  const nav__overlay = useRef();
  //
  const handleToggleNav = () => {
    navLinks.current.classList.toggle("toggleNav");
    burger__one.current.classList.toggle("toggleNav");
    burger__two.current.classList.toggle("toggleNav");
    burger__three.current.classList.toggle("toggleNav");
    nav__overlay.current.classList.toggle("toggleNav");
  };
  //
  const handleCloseNav = () => {
    navLinks.current.classList.remove("toggleNav");
    burger__one.current.classList.remove("toggleNav");
    burger__two.current.classList.remove("toggleNav");
    burger__three.current.classList.remove("toggleNav");
    nav__overlay.current.classList.remove("toggleNav");
  };
  //
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1012) {
      navLinks.current.classList.remove("toggleNav");
      burger__one.current.classList.remove("toggleNav");
      burger__two.current.classList.remove("toggleNav");
      burger__three.current.classList.remove("toggleNav");
      nav__overlay.current.classList.remove("toggleNav");
    }
    // console.log(window.innerWidth);
  });
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
        <div className="hamburger" onClick={handleToggleNav}>
          <div className="burger burger__one" ref={burger__one}></div>
          <div className="burger burger__two" ref={burger__two}></div>
          <div className="burger burger__three" ref={burger__three}></div>
        </div>
        <div
          className="nav__overlay"
          onClick={handleCloseNav}
          ref={nav__overlay}
        ></div>
      </nav>
    </header>
  );
};

export default Navbar;

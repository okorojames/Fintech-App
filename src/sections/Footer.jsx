import "./Footer.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import img9 from "../assets/img/image-9.png";
import img10 from "../assets/img/image-10.png";
import img11 from "../assets/img/image-11.png";

const Footer = () => {
  const date = new Date().getFullYear();
  const link = "https://okorojames.netlify.app";
  return (
    <div className="footer__container">
      <div className="footer__row">
        <div className="footer__col1">
          <p
            className="footer__col1_p"
            style={{ fontWeight: "700", fontSize: "24px" }}
          >
            ZEND
          </p>
          <p className="footer__col1_p">Zend@gmail.com</p>
          <div className="footer download">
            <a href="#" className="footer download__btn">
              <IoLogoGooglePlaystore className="download__icon" />
              <div className="footer downaload__context">
                <p>Download on:</p>
                <p>Google Playstore</p>
              </div>
            </a>
            <a href="#" className="footer download__btn">
              <SiAppstore className="footer download__icon" />
              <div className="footer downaload__context">
                <p>Download on:</p>
                <p>App Store</p>
              </div>
            </a>
          </div>
        </div>
        <div className="footer__col2">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
          <a href="#">Product</a>
        </div>
        <div className="footer__col3">
          <img src={img11} alt="" />
          <img src={img10} alt="" />
          <img src={img9} alt="" />
        </div>
      </div>
      <div className="footer__context">
        <p>&copy;bossman{date}. All rights reserved</p>
        <p>
          built by <a href={link}>jamextech</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

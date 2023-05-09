import "./Cto.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import img4 from "../assets/img/image-4.png";
import img5 from "../assets/img/image-5.png";

const Cto = () => {
  return (
    <div className="cto__container">
      <div className="cto__context">
        <h2 className="cto__context__h2">Everything AIRTIME/DATA</h2>
        <p className="cto__context__p">
          With our Airtime feature you can now get your airtime fast and easy
          with just a click of a button.
        </p>
        <div className="cto download">
          <a href="#" className="cto download__btn">
            <IoLogoGooglePlaystore className="cto download__icon" />
            <div className="cto downaload__context">
              <p>Download on:</p>
              <p>Google Playstore</p>
            </div>
          </a>
          <a href="#" className="cto download__btn">
            <SiAppstore className="cto download__icon" />
            <div className="cto downaload__context">
              <p>Download on:</p>
              <p>App Store</p>
            </div>
          </a>
        </div>
      </div>
      <img src={img4} className="cto__img" alt="" />
      <img src={img5} alt="" className="cto__floatImg" />
    </div>
  );
};

export default Cto;

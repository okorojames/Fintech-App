import "./HomeCol1.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import profileImg from "../assets/img/image-2.png";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const HomeCol1 = () => {
  //
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Today!", "Now!"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 100,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  //
  return (
    <div className="col1__wrapper">
      <h2 className="col1__h2">
        Revolutionize your <span className="finances">Finances:</span>{" "}
        Experience the Future of Banking <span ref={el}></span>
      </h2>
      <p className="col1__p">
        Join the Fintech Movement and Take Control <br /> of Your Financial
        Future with Our Cutting-Edge Solutions
      </p>
      <div className="download">
        <a href="#" className="download__btn">
          <IoLogoGooglePlaystore className="download__icon" />
          <div className="downaload__context">
            <p>Download on:</p>
            <p>Google Playstore</p>
          </div>
        </a>
        <a href="#" className="download__btn">
          <SiAppstore className="download__icon" />
          <div className="downaload__context">
            <p>Download on:</p>
            <p>App Store</p>
          </div>
        </a>
      </div>
      <div className="users">
        <div className="users__profiles">
          <img src={profileImg} alt="" />
        </div>
        <div className="users__context">
          <h2 className="users__context__h2">More than 10M+ users worldwide</h2>
          <p className="users__context__p">
            4.9{" "}
            <span>
              <BsStarFill className="users__star" />
            </span>{" "}
            Ratings on playstore and appstore
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCol1;

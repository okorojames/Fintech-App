import "./HomeCol2.css";
import svgIcon from "../assets/img/Group-14.svg";

const HomeCol2 = () => {
  return (
    <div className="col2__wrapper">
      <div className="circle__circle">
        <div className="circle__innerCircle"></div>
      </div>
      <div className="circle__dotted"></div>
      <div className="circle__two">
        <div className="circle__inner__two"></div>
      </div>

      <img src={svgIcon} alt="" className="phone__img" />
    </div>
  );
};

export default HomeCol2;

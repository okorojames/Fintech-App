import "./HomeCol2.css";
import img from "../assets/img/image-1.png";

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

      <img src={img} alt="" className="phone__img" />
    </div>
  );
};

export default HomeCol2;

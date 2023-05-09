import "./Cta.css";
import img3 from "../assets/img/image-3.png";
import { BsChevronRight } from "react-icons/bs";

const Cta = () => {
  return (
    <div className="cta__container">
      <img src={img3} alt="" className="cta__img" />
      <div className="cta__context">
        <h2 className="cta__context__h2">
          In just one click see all your transactions full organized
        </h2>
        <p className="cta__context__p">
          All you need to do is have a business account, a card available in the
          app,
          <br /> and everything would be organized for you.
        </p>
        <a href="#" className="cta__btn">
          Get Started <BsChevronRight />
        </a>
      </div>
    </div>
  );
};

export default Cta;

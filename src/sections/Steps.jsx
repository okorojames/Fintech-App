import "./Steps.css";
import img6 from "../assets/img/image-6.png";
import img7 from "../assets/img/image-7.png";
import img8 from "../assets/img/image-8.png";

const Steps = () => {
  return (
    <div className="steps__container">
      <div className="steps__context">Simple steps to get Zend </div>
      <div className="steps__row">
        <div className="stepsCard">
          <img src={img6} alt="" className="stepsCard__img" />
          <h2 className="stepsCard__h2">
            Download Zend on <br /> playstore or App store
          </h2>
        </div>
        <div className="stepsCard">
          <img src={img7} alt="" className="stepsCard__img" />
          <h2 className="stepsCard__h2">
            Register your details
            <br /> on the App
          </h2>
        </div>
        <div className="stepsCard">
          <img src={img8} alt="" className="stepsCard__img" />
          <h2 className="stepsCard__h2">
            Enjoy the thrilling <br /> features in the App.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Steps;

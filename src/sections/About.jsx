import "./About.css";
import { IoMdCloudDownload, IoMdCloudUpload } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { RiShoppingBasket2Line } from "react-icons/ri";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__context">
        <h2 className="about__context__h2">For your finances</h2>
        <p className="about__context__p">
          "Empower Your Financial Life: Simplifying Your Search for the Perfect
          Fintech <br /> App to Transform the Way You Bank, buy airtime, and
          Manage Your Money!
        </p>
      </div>
      <div className="about__rows">
        {/*  */}
        <div className="featCard">
          <IoMdCloudDownload className="featCard__icon" />
          <div className="featCard__context">
            <h2 className="featCard__context__h2">Deposit Money</h2>
            <p className="featCard__context__p">
              Receiving of money has been made easier <br /> with
              <span className="feat__zend">&nbsp;Zend.</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="featCard">
          <IoMdCloudUpload className="featCard__icon" />
          <div className="featCard__context">
            <h2 className="featCard__context__h2">Withdraw Money</h2>
            <p className="featCard__context__p">
              Sending of money has been made easier <br /> with
              <span className="feat__zend">&nbsp;Zend.</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="featCard">
          <IoCallOutline className="featCard__icon" />
          <div className="featCard__context">
            <h2 className="featCard__context__h2">Airtime Purchase</h2>
            <p className="featCard__context__p">
              You can buy and sell your Airtime with ease with <br /> our all
              new features in
              <span className="feat__zend">&nbsp;Zend.</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="featCard">
          <FaUsers className="featCard__icon" />
          <div className="featCard__context">
            <h2 className="featCard__context__h2">Referral System</h2>
            <p className="featCard__context__p">
              You can now earn if you refer a friend or <br /> family to use
              <span className="feat__zend">&nbsp;Zend.</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="featCard">
          <BiWallet className="featCard__icon" />
          <div className="featCard__context">
            <h2 className="featCard__context__h2">Card</h2>
            <p className="featCard__context__p">
              You have access to 3 different card types: <br /> Mastercard,
              Visa, Verve with
              <span className="feat__zend">&nbsp;Zend.</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="featCard">
          <RiShoppingBasket2Line className="featCard__icon" />
          <div className="featCard__context">
            <h2 className="featCard__context__h2">Shopping</h2>
            <p className="featCard__context__p">
              With our app you now have access to <br /> shopping freely.
              <span className="feat__zend">&nbsp;Zend.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import "./Home.css";
import HomeCol1 from "./HomeCol1";
import HomeCol2 from "./HomeCol2";

const Home = () => {
  return (
    <div className="home__container">
      <HomeCol1 />
      <HomeCol2 />
    </div>
  );
};

export default Home;

import About from "./sections/About";
import Cta from "./sections/Cta";
import Cto from "./sections/Cto";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import Steps from "./sections/Steps";

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Home />
      <About />
      <Cta />
      <Cto />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;

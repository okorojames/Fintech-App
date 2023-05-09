import About from "./sections/About";
import Cta from "./sections/Cta";
import Cto from "./sections/Cto";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Home />
      <About />
      <Cta />
      <Cto />
    </div>
  );
}

export default App;

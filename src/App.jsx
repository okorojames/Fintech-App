import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

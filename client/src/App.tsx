import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      {/* <TechStack /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

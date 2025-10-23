import { useEffect } from 'react';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progress = document.getElementById('progress-bar');
      if (progress) {
        progress.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div id="progress-bar"></div>
      <Navigation />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8"> {/* Reduced padding from 16 to 8 */}
          <About />
          <div className="section-divider"></div>
          <Experience />
          <div className="section-divider"></div>
          <Education />
          <div className="section-divider"></div>
          <Skills />
          <div className="section-divider"></div>
          <Projects />
          <div className="section-divider"></div>
          <ContactInfo />
        </div>
      </main>
    </div>
  );
};

export default App;

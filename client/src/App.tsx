import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactInfo from './components/ContactInfo';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactInfo />
      </main>
    </div>
  );
};

export default App;

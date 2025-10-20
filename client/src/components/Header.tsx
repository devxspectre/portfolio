import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 border-b border-gray-700 fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white">Sourav</h1>
          <p className="text-gray-400 text-sm md:text-base">Developer & Blockchain Engineer</p>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-gray-300 hover:text-white font-medium transition-colors">About</a></li>
            <li><a href="#experience" className="text-gray-300 hover:text-white font-medium transition-colors">Experience</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-white font-medium transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white font-medium transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white font-medium transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-4 border-t border-gray-700">
          <ul className="space-y-3">
            <li><a href="#about" className="block text-gray-300 hover:text-white font-medium" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" className="block text-gray-300 hover:text-white font-medium" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#skills" className="block text-gray-300 hover:text-white font-medium" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="block text-gray-300 hover:text-white font-medium" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="block text-gray-300 hover:text-white font-medium" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
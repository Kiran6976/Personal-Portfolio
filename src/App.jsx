import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * Manages dark/light mode and renders all sections
 */
export function App() {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(true);
  
  // State for scroll position (used for navbar styling)
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen dark-transition ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>
      {/* Navigation Bar */}
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        scrolled={scrolled} 
      />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero darkMode={darkMode} />
        
        {/* About Section */}
        <About darkMode={darkMode} />
        
        {/* Skills Section */}
        <Skills darkMode={darkMode} />
        
        {/* Projects Section */}
        <Projects darkMode={darkMode} />
        
        {/* Experience & Education Section */}
        <Experience darkMode={darkMode} />
        
        {/* Resume Download Section */}
        <Resume darkMode={darkMode} />
        
        {/* Contact Section */}
        <Contact darkMode={darkMode} />
      </main>
      
      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

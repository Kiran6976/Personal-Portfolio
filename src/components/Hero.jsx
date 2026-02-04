import { ArrowDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

/**
 * Hero Section Component
 * Main landing section with name, title, tagline, and CTA buttons
 */
const Hero = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float ${
          darkMode ? 'bg-indigo-600/20' : 'bg-indigo-400/30'
        }`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float delay-200 ${
          darkMode ? 'bg-purple-600/20' : 'bg-purple-400/30'
        }`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
          darkMode ? 'bg-fuchsia-600/10' : 'bg-fuchsia-400/20'
        }`} />
        
        {/* Grid Pattern */}
        <div 
          className={`absolute inset-0 ${darkMode ? 'opacity-10' : 'opacity-5'}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? '#6366f1' : '#4f46e5'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <p 
          className={`text-lg md:text-xl font-medium mb-4 animate-fade-in-up opacity-0 ${
            darkMode ? 'text-indigo-400' : 'text-indigo-600'
          }`}
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          👋 Hello, I'm
        </p>

        {/* Name */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <span className="gradient-text">Kiran Samanta</span>
        </h1>

        {/* Title */}
        <h2 
          className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 animate-fade-in-up opacity-0 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Full Stack Developer
        </h2>

        {/* Tagline */}
        <p 
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Crafting beautiful, performant, and user-centric web experiences 
          with modern technologies. Let's build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <a 
            href="#resume" 
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a 
            href="#contact" 
            className={`btn-secondary px-8 py-4 rounded-full font-semibold flex items-center gap-2 ${
              darkMode ? 'text-white' : 'text-indigo-600'
            }`}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`social-icon p-3 rounded-full ${
              darkMode ? 'bg-slate-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`social-icon p-3 rounded-full ${
              darkMode ? 'bg-slate-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`social-icon p-3 rounded-full ${
              darkMode ? 'bg-slate-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;

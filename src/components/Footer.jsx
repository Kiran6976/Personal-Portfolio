import { Heart, ArrowUp, Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

/**
 * Footer Component
 * Site footer with copyright, navigation, and social links
 */
const Footer = ({ darkMode }) => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Footer navigation links
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Social links
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:kiran.samanta@example.com', label: 'Email' },
  ];

  return (
    <footer className={`relative pt-16 pb-8 ${
      darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-gray-200'
    }`}>
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-indigo-500" />
              <span className="text-xl font-bold gradient-text">Kiran Samanta</span>
            </a>
            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer crafting beautiful and functional web experiences. 
              Let's build something amazing together.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon p-2 rounded-lg transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-800 text-gray-400 hover:bg-indigo-600 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-indigo-500 hover:text-white'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h3>
            <div className={`space-y-3 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p>📧 kiransamanta88@gmail.com</p>
              <p>📱 +91 8837296648</p>
              <p>📍 Agartala, Tripura, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${
          darkMode ? 'border-slate-800' : 'border-gray-200'
        }`} />

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Kiran Samanta. All rights reserved.
          </p>

          {/* Made with love */}
          <p className={`text-sm flex items-center gap-1 ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-800 text-gray-300 hover:bg-indigo-600 hover:text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-indigo-500 hover:text-white'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useRef, useState } from 'react';
import { Download, FileText, Eye, CheckCircle } from 'lucide-react';

/**
 * Resume Section Component
 * Displays resume preview and download options
 */
const Resume = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simulate download function
 const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Resume.pdf";
  link.download = "Kiran_Samanta_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  // Resume highlights
  const highlights = [
    
    'Expert in React, Node.js & MongoDB',
    '5+ projects completed',
    'Team leadership experience',
    'Strong problem-solving skills',
    'Excellent communication abilities',
  ];

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className={`py-20 md:py-32 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`section-title text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Resume
          </h2>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Download my resume to learn more about my qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Resume Preview Card */}
          <div 
            className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <div className={`relative p-8 rounded-2xl ${
              darkMode ? 'bg-slate-700/50' : 'bg-gray-100'
            }`}>
              {/* Mock Resume Preview */}
              <div className={`aspect-[8.5/11] rounded-lg overflow-hidden shadow-2xl ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              }`}>
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center pb-4 border-b border-dashed border-gray-300 dark:border-gray-600">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                      darkMode ? 'bg-indigo-600' : 'bg-indigo-500'
                    }`}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Kiran Samanta
                    </h3>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Full Stack Developer
                    </p>
                  </div>

                  {/* Content Placeholder Lines */}
                  <div className="flex-1 py-4 space-y-3">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className={`h-2 rounded ${
                          darkMode ? 'bg-slate-700' : 'bg-gray-200'
                        }`}
                        style={{ width: `${70 + Math.random() * 30}%` }}
                      />
                    ))}
                    <div className="pt-2">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i}
                          className={`h-2 rounded mt-2 ${
                            darkMode ? 'bg-slate-700' : 'bg-gray-200'
                          }`}
                          style={{ width: `${60 + Math.random() * 40}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-dashed border-gray-300 dark:border-gray-600">
                    <div className="flex justify-center gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-16 h-2 rounded ${
                            darkMode ? 'bg-indigo-600/50' : 'bg-indigo-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full blur-2xl opacity-30" />
            </div>
          </div>

          {/* Resume Info & Download */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Resume Highlights
            </h3>

            {/* Highlights List */}
            <ul className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.4s ease ${0.3 + index * 0.1}s`
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {downloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download PDF
                  </>
                )}
              </button>
              <a
  href="/Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className={`btn-secondary px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 ${
    darkMode ? 'text-white' : 'text-indigo-600'
  }`}
>
  <Eye className="w-5 h-5" />
  View Online
</a>

            </div>

            {/* File Info */}
            <p className={`mt-6 text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              📄 PDF Format • Updated January 2026 • 2 Pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

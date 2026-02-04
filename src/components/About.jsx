import { useEffect, useRef, useState } from 'react';
import { User, Target, Briefcase, Coffee, MapPin, Calendar } from 'lucide-react';

/**
 * About Section Component
 * Displays bio, skills summary, and career objective
 */
const About = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  // Quick facts about the developer
  const quickFacts = [
    { icon: MapPin, label: 'Location', value: 'Agartala, India' },
    { icon: Calendar, label: 'Experience', value: '1 Year' },
    { icon: Coffee, label: 'Projects Done', value: '2+' },
    { icon: Briefcase, label: 'Status', value: 'Final Year Student' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 md:py-32 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`section-title text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get to know me and my journey as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className={`relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden ${
                darkMode ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-gradient-to-br from-indigo-500 to-purple-500'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-32 h-32 text-white/50" />
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-2xl transform rotate-6" />
              </div>
              
              {/* Floating Badge */}
              <div className={`absolute -bottom-4 -right-4 px-6 py-3 rounded-xl shadow-lg ${
                darkMode ? 'bg-slate-700' : 'bg-white'
              }`}>
                <p className="font-mono text-indigo-500 font-semibold">
                  {'< Developer />'}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Bio */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <User className="w-5 h-5 text-indigo-500" />
                Who I Am
              </h3>
              <div className={`leading-relaxed space-y-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>
                  I’m a MERN Stack Developer with 1 year of hands-on experience in building full-stack web applications. I have successfully developed 2 MERN stack projects so far, focusing on creating scalable, user-friendly, and efficient solutions. I’m always eager to build more projects, explore new technologies, and sharpen my development skills.
                </p>
                <p>
                  Currently, I’m a final-year B.Tech CSE student at Techno College of Engineering, Agartala, where I continuously strengthen my foundation in computer science while applying my knowledge to real-world projects. I enjoy turning ideas into working products and thrive in environments that encourage learning and innovation.
                </p>
              </div>
            </div>

            {/* Career Objective */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <Target className="w-5 h-5 text-indigo-500" />
                Career Objective
              </h3>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                To leverage my technical expertise and creative problem-solving skills 
                in a dynamic environment where I can contribute to innovative projects, 
                continue learning cutting-edge technologies, and help build products 
                that positively impact millions of users.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-default ${
                    darkMode 
                      ? 'bg-slate-700/50 hover:bg-slate-700 hover:shadow-xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30' 
                      : 'bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/10 border border-transparent hover:border-indigo-100'
                  }`}
                >
                  <fact.icon className="w-6 h-6 text-indigo-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {fact.label}
                  </p>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

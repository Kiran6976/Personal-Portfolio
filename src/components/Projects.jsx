import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';
import { FaBicycle } from "react-icons/fa";


/**
 * Projects Section Component
 * Displays project cards with descriptions, tech stack, and links
 */
const Projects = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Project Data
  const projects = [
    {
      id: 1,
      title: 'Bike Rental Services',
      description: 'A MERN stack bike rental platform with secure authentication, real-time booking, and admin management.',
      image: '🚴‍♂️',
      techStack: ['React', 'Node.js', 'MongoDB', 'Razorpay','ExpressJs'],
      category: 'fullstack',
      githubUrl: 'https://github.com/Kiran6976/Bike-Scooty-Rental-Services.git',
      featured: true,
    },
    {
      id: 2,
      title: 'Fake News Detection',
      description: 'A fake news detection system using machine learning and NLP techniques to identify misleading or false news articles.',
      image: '📋',
      techStack: ['Python', 'Numpy', 'Tailwind CSS', 'Pandas', 'Scikit-learn'],
      category: 'backend',
      githubUrl: 'https://github.com/Kiran6976/Fake-News-Detection.git',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website for a Client',
      description: 'A full-stack portfolio website for a client using MERN, with admin-controlled content management, project gallery, and secure backend APIs.',
      image: '🌐',
      techStack: ['React', 'Express', 'NodeJs', 'CSS3', 'MongoDB','Cloudinary','JWT'],
      category: 'frontend',
      liveUrl: 'https://www.pcdesignz.in/',
      featured: false,
    },
    {
      id: 4,
      title: 'Time Series Forecasting using Fuzzy Logic',
      description: 'A time series forecasting model using Rough Set Theory and Intuitionistic Fuzzy Logic to handle uncertainty and improve prediction accuracy.',
      image: '⌛',
      techStack: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Scikit-learn','Streamlit','Fuzzy Logic'],
      category: 'backend',
      githubUrl: 'https://github.com/Kiran6976/Time-Series-Forecasting-using-Fuzzy.git',
      featured: false,
    },
    
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  // Filtered projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 md:py-32 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`section-title text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Projects
          </h2>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A selection of projects I've worked on
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : darkMode
                    ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-hover rounded-2xl overflow-hidden ${
                darkMode ? 'bg-slate-700/50' : 'bg-gray-50 shadow-lg'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease ${index * 0.1}s`
              }}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 flex items-center justify-center text-6xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-indigo-600/20 to-purple-600/20' 
                  : 'bg-gradient-to-br from-indigo-100 to-purple-100'
              }`}>
                <span className="animate-float">{project.image}</span>
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500 text-yellow-900 text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <Folder className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                </div>

                {/* Description */}
                <p className={`text-sm mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode 
                          ? 'bg-slate-600 text-indigo-300' 
                          : 'bg-indigo-100 text-indigo-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      darkMode 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      darkMode 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Server, 
  Wrench, 
  Users,
  Boxes,
  Database,
  Globe,
  Palette,
  GitBranch,
  Terminal,
  Cloud,
  MessageSquare,
  Lightbulb,
  Clock,
  Heart
} from 'lucide-react';

/**
 * Skills Section Component
 * Displays technical and soft skills with progress bars and icons
 */
const Skills = ({ darkMode }) => {
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

  // Frontend Skills
  const frontendSkills = [
    { name: 'React.js', level: 95, icon: Boxes },
    { name: 'JavaScript', level: 92, icon: Code },
    { name: 'HTML/CSS', level: 95, icon: Globe },
  ];

  // Backend Skills
  const backendSkills = [
    { name: 'Node.js', level: 90, icon: Server },
    { name: 'Express.js', level: 88, icon: Server },
    { name: 'MongoDB', level: 85, icon: Database },
    { name: 'REST APIs', level: 92, icon: Globe },
  ];

  // Tools & Technologies
  const tools = [
    { name: 'Git', icon: GitBranch },
    { name: 'VS Code', icon: Terminal },
    { name: 'Figma', icon: Palette },
    { name: 'Postman', icon: Globe },
  ];

  // Soft Skills
  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Communication', icon: MessageSquare },
    { name: 'Teamwork', icon: Users },
    { name: 'Time Management', icon: Clock },
    { name: 'Adaptability', icon: Wrench },
    { name: 'Passion', icon: Heart },
  ];

  // Progress Bar Component
  const ProgressBar = ({ skill, index }) => (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="w-4 h-4 text-indigo-500" />
          <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {skill.name}
          </span>
        </div>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {skill.level}%
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${
        darkMode ? 'bg-slate-700' : 'bg-gray-200'
      }`}>
        <div 
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 progress-bar"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 0.1}s`
          }}
        />
      </div>
    </div>
  );

  // Skill Icon Card Component
  const SkillCard = ({ skill, index }) => (
    <div 
      className={`skill-icon p-3 rounded-xl text-center flex flex-col items-center justify-center h-full ${
        darkMode ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 0.1}s`
      }}
    >
      <skill.icon className="w-8 h-8 text-indigo-500 mx-auto mb-2 flex-shrink-0" />
      <p className={`text-xs sm:text-sm font-medium break-words w-full ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {skill.name}
      </p>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 md:py-32 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`section-title text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Skills
          </h2>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Frontend Skills */}
          <div className={`p-6 rounded-2xl ${
            darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
          } ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Code className="w-6 h-6 text-indigo-500" />
              Frontend Development
            </h3>
            {frontendSkills.map((skill, index) => (
              <ProgressBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Backend Skills */}
          <div className={`p-6 rounded-2xl ${
            darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
          } ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Server className="w-6 h-6 text-indigo-500" />
              Backend Development
            </h3>
            {backendSkills.map((skill, index) => (
              <ProgressBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Tools & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tools */}
          <div className={`p-6 rounded-2xl ${
            darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Wrench className="w-6 h-6 text-indigo-500" />
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <SkillCard key={tool.name} skill={tool} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`p-6 rounded-2xl ${
            darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Users className="w-6 h-6 text-indigo-500" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

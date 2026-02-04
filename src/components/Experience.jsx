import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= DATA ================= */

  const experiences = [
    {
      id: 1,
      title: 'Intern',
      company: 'Ardent Computech Pvt. Ltd.',
      location: 'Salt Lake, Sector V, Kolkata',
      period: 'June 2025 - August 2025',
      description: [
        'Built full-stack applications using MERN stack',
        'Worked with MongoDB for database operations',
        'Implemented authentication using JWT',
        'Used Git for version control and team collaboration',
      ],
      technologies: ['React', 'Node.js', 'ExpressJs', 'JWT', 'MongoDB', 'Git'],
    },
    {
      id: 2,
      title: 'Intern',
      company: 'CTTC Bhubaneswar',
      location: 'Bhubaneswar, Odisha',
      period: 'July 2024 - August 2024',
      description: [
        'Built REST APIs with Django REST Framework',
        'Worked with Django ORM for database operations',
        'Implemented authentication and authorization',
        'Used Git for version control and collaboration',
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'JWT'],
    },
  ];

  const education = [
    {
      id: 1,
      title: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Techno College of Engineering Agartala',
      location: 'Agartala, Tripura',
      period: '2022 - 2026',
      description: [
        'Specialization in Software Engineering',
        'CGPA: 6.5 / 10',
        'Object-Oriented Programming (OOPs)',
        'Computer Networks and network protocols',
        'Database Management Systems (DBMS) and SQL',
        'Computer Architecture & Organization',
        'Operating Systems and process management',
        'Data Structures & Algorithms',
      ],
      achievements: ["Hackathon"],
    },
    {
      id: 2,
      title: 'Higher Secondary Education',
      institution: 'Modern Higher Secondary School',
      location: 'Agartala, Tripura',
      period: '2020 - 2022',
      description: [
        'Science Stream with Physics, Chemistry, Mathematics, and Computer Science',
        'Percentage: 85%',
      ],
      achievements: ['Science'],
    },
  ];

  /* ================= COMPONENTS ================= */

  const TimelineItem = ({ item, index, type }) => (
    <div
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-12"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.5s ease ${index * 0.15}s`,
      }}
    >
      {/* Dot */}
      <div
        className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 transform md:-translate-x-1/2 ${
          darkMode ? 'bg-slate-900 border-indigo-500' : 'bg-white border-indigo-500'
        }`}
      />

      {/* Desktop Left */}
      <div className={`hidden md:block ${index % 2 === 0 ? 'text-right pr-12' : 'order-2 pl-12'}`}>
        {index % 2 === 0 ? (
          <TimelineContent item={item} type={type} />
        ) : (
          <TimelineMeta item={item} />
        )}
      </div>

      {/* Desktop Right */}
      <div className={`hidden md:block ${index % 2 === 0 ? 'pl-12' : 'order-1 text-right pr-12'}`}>
        {index % 2 === 0 ? (
          <TimelineMeta item={item} />
        ) : (
          <TimelineContent item={item} type={type} />
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <TimelineContent item={item} type={type} />
        <TimelineMeta item={item} className="mt-2" />
      </div>
    </div>
  );

  const TimelineContent = ({ item, type }) => (
    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-700/50' : 'bg-white shadow-lg'}`}>
      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {item.title}
      </h3>

      <p className="text-indigo-500 font-medium mb-4">
        {type === 'experience' ? item.company : item.institution}
      </p>

      {/* ✅ FIXED BULLETS */}
      <ul
        className={`list-disc list-outside pl-5 space-y-2 mb-4 text-sm text-left marker:text-indigo-500 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {item.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {(type === 'experience' ? item.technologies : item.achievements)?.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-1 rounded text-xs font-medium ${
              darkMode
                ? 'bg-slate-600 text-indigo-300'
                : 'bg-indigo-100 text-indigo-600'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const TimelineMeta = ({ item, className = '' }) => (
    <div className={className}>
      <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">{item.period}</span>
      </div>
      <div className={`flex items-center gap-2 mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{item.location}</span>
      </div>
    </div>
  );

  const currentData = activeTab === 'experience' ? experiences : education;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`py-20 md:py-32 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className={`section-title text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience & Education
          </h2>
          <p className={`mt-6 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey and academic background
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : darkMode
                ? 'bg-slate-800 text-gray-300'
                : 'bg-white text-gray-600 shadow'
            }`}
          >
            <Briefcase className="w-5 h-5" /> Experience
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : darkMode
                ? 'bg-slate-800 text-gray-300'
                : 'bg-white text-gray-600 shadow'
            }`}
          >
            <GraduationCap className="w-5 h-5" /> Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-fuchsia-500 transform md:-translate-x-1/2" />
          {currentData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} type={activeTab} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

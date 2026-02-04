import { useEffect, useRef, useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

/**
 * Contact Section Component
 * Contact form and social media links
 */
const Contact = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kiransamanta88@gmail.com',
      href: 'mailto:kiransamanta88@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+918837296648',
      href: 'tel:+918837296648'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Agartala, Tripura, India',
      href: '#'
    },
  ];

  // Social links
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kiran6976', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kiran-samanta-9466b5246/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:kiransamanta88@gmail.com', label: 'Email' },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 md:py-32 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`section-title text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className={`form-input w-full px-4 py-3 rounded-xl outline-none ${
                        darkMode 
                          ? 'bg-slate-700 text-white border border-slate-600 placeholder-gray-500' 
                          : 'bg-gray-100 text-gray-900 border border-gray-200 placeholder-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`form-input w-full px-4 py-3 rounded-xl outline-none ${
                        darkMode 
                          ? 'bg-slate-700 text-white border border-slate-600 placeholder-gray-500' 
                          : 'bg-gray-100 text-gray-900 border border-gray-200 placeholder-gray-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label 
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className={`form-input w-full px-4 py-3 rounded-xl outline-none ${
                      darkMode 
                        ? 'bg-slate-700 text-white border border-slate-600 placeholder-gray-500' 
                        : 'bg-gray-100 text-gray-900 border border-gray-200 placeholder-gray-400'
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`form-input w-full px-4 py-3 rounded-xl outline-none resize-none ${
                      darkMode 
                        ? 'bg-slate-700 text-white border border-slate-600 placeholder-gray-500' 
                        : 'bg-gray-100 text-gray-900 border border-gray-200 placeholder-gray-400'
                    }`}
                  />
                </div>

                {/* Status Message */}
                {formStatus.message && (
                  <div className={`flex items-center gap-2 p-4 rounded-xl ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {formStatus.type === 'success' 
                      ? <CheckCircle className="w-5 h-5" />
                      : <AlertCircle className="w-5 h-5" />
                    }
                    {formStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Contact Information */}
            <div className={`p-8 rounded-2xl mb-8 ${
              darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      darkMode 
                        ? 'bg-slate-700/50 hover:bg-slate-700' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {info.label}
                      </p>
                      <p className={`font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-slate-800/50' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      darkMode 
                        ? 'bg-slate-700/50 text-gray-300 hover:bg-indigo-600 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-indigo-500 hover:text-white'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className={`mt-6 p-4 rounded-xl ${
                darkMode ? 'bg-green-500/10' : 'bg-green-50'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className={`font-medium ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

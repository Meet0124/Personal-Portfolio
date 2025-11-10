import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Portfolio = () => {
  const { isDark, toggleTheme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: isDark ? ['#60a5fa', '#a78bfa', '#ec4899'] : ['#3b82f6', '#8b5cf6', '#ec4899'],
      },
      links: {
        color: isDark ? '#60a5fa' : '#3b82f6',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.05,
        },
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle', 'polygon'],
        polygon: {
          sides: 6,
        },
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ['grab', 'bubble'],
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
            color: isDark ? '#a78bfa' : '#8b5cf6',
          },
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation with Theme Toggle */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Meet Adlakha
              </motion.span>
              <div className="flex items-center space-x-8">
                <div className="hidden md:flex space-x-8">
                  {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.1, color: '#3b82f6' }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9, rotate: 15 }}
                  onClick={toggleTheme}
                  className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: isDark ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="mb-8"
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                  MA
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Meet Adlakha
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
              >
                Full-Stack Developer & AI Enthusiast
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Computer Science Engineering Student at VIT Bhopal | Building innovative solutions with modern web technologies
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:meetadlakha1@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Meet0124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
                >
                  View GitHub
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">🎓 Education</h3>
                <div className="space-y-6">
                  {[
                    { school: 'VIT Bhopal University', degree: 'B.Tech in Computer Science & Engineering', details: 'CGPA: 8.96/10', period: 'Nov 2022 – Present', color: 'blue' },
                    { school: 'Delhi Public School', degree: 'Senior Secondary (XII) – 95.4%', details: 'High School (X) – 91%', period: 'Mar 2022 & Mar 2020', color: 'purple' }
                  ].map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      whileHover={{ scale: 1.03, x: 10 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className={`font-bold text-lg text-${edu.color}-600 dark:text-${edu.color}-400`}>{edu.school}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.degree}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.details}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{edu.period}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">🏆 Certifications</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', color: 'blue' },
                    { name: 'AWS Solutions Architect', issuer: 'Ethnus', color: 'purple' }
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      whileHover={{ scale: 1.03, x: 10 }}
                      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-${cert.color}-500 hover:shadow-lg transition-all duration-300`}
                    >
                      <h4 className="font-bold text-gray-800 dark:text-gray-100">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{cert.issuer}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                >
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-3">🎯 Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {['⚽ Football', '🏸 Badminton', '🏎️ Formula 1', '🏔️ Trekking'].map((hobby, i) => (
                      <motion.span
                        key={hobby}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm cursor-default"
                      >
                        {hobby}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 dark:text-gray-400 mb-16"
            >
              Some of my recent work
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '💻', title: 'SyncDesk', subtitle: 'Real-Time Collaboration Platform', description: 'Real-time collaborative editor with WebSocket technology, Monaco Editor integration, and role-based access control.', tags: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'], gradient: 'from-blue-500 to-blue-700', achievement: '✨ 40% efficiency improvement' },
                { icon: '🤖', title: 'TaskMind.AI', subtitle: 'AI-Powered Content Platform', description: 'Full-stack AI platform with content generation, resume analysis, and image creation using Gemini & Clipdrop APIs.', tags: ['PERN Stack', 'AI APIs', 'Clerk'], gradient: 'from-purple-500 to-pink-600', achievement: '✨ 99% uptime on Vercel' },
                { icon: '🔍', title: 'Project Satya', subtitle: 'Fake News Detection', description: 'ML model using TF-IDF and Logistic Regression for fake news classification with Flask web integration.', tags: ['Python', 'scikit-learn', 'Flask'], gradient: 'from-green-500 to-teal-600', achievement: '✨ 92% accuracy, <200ms latency' }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <div className="text-white text-6xl">{project.icon}</div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{project.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          whileHover={{ scale: 1.15 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{project.achievement}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: '💻 Languages', skills: ['C++', 'JavaScript', 'Python', 'HTML/CSS', 'SQL'], color: 'blue' },
                { title: '⚡ Frameworks', skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS'], color: 'purple' },
                { title: '🗄️ Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL'], color: 'green' },
                { title: '🛠️ Tools', skills: ['Git/GitHub', 'Docker', 'Vercel', 'Postman', 'VS Code'], color: 'orange' }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {[
                { title: '🎯 Event Management Lead', description: 'Coordinated national-level events with 1,000+ participants, managing logistics, planning, and promotion.' },
                { title: '🎭 Cultural & Sports Coordinator', description: 'Directed large-scale campus events enhancing engagement by 25% through efficient team collaboration.' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-900 dark:to-pink-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-12"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: '📧', title: 'Email', value: 'meetadlakha1@gmail.com', href: 'mailto:meetadlakha1@gmail.com' },
                { icon: '📱', title: 'Phone', value: '+91 88270 12222', href: 'tel:+918827012222' }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-5xl mb-3">{contact.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                  <p className="text-sm">{contact.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6"
            >
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/in/meet-adlakha' },
                { name: 'GitHub', href: 'https://github.com/Meet0124' }
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm font-semibold"
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              © 2024 Meet Adlakha. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm"
            >
              Built with React, Tailwind CSS, Framer Motion & Particles.js ❤️
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

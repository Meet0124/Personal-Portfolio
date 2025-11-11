import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiSun,
  HiMoon,
  HiArrowDown,
  HiMail,
  HiPhone,
  HiCode,
  HiDownload,
  HiLightningBolt,
} from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import ContactForm from "../components/ContactForm";

const Portfolio = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const titles = [
    "Full-Stack Developer & AI Enthusiast",
    "Problem Solver & Creative Thinker",
    "Tech Explorer & Innovation Driver"
  ];

  const projects = [
    {
      icon: "💻",
      title: "SyncDesk",
      subtitle: "Real-Time Collaboration Platform",
      description:
        "Real-time collaborative editor with WebSocket technology, Monaco Editor integration, and role-based access control.",
      tags: ["React.js", "Socket.io", "Node.js", "MongoDB"],
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      achievement: "✨ 40% efficiency improvement",
    },
    {
      icon: "🤖",
      title: "TaskMind.AI",
      subtitle: "AI-Powered Content Platform",
      description:
        "Full-stack AI platform with content generation, resume analysis, and image creation using Gemini & Clipdrop APIs.",
      tags: ["PERN Stack", "AI APIs", "Clerk"],
      gradient: "from-purple-500 via-pink-500 to-pink-600",
      achievement: "✨ 99% uptime on Vercel",
    },
    {
      icon: "🔍",
      title: "Project Satya",
      subtitle: "Fake News Detection",
      description:
        "ML model using TF-IDF and Logistic Regression for fake news classification with Flask web integration.",
      tags: ["Python", "scikit-learn", "Flask"],
      gradient: "from-green-500 via-teal-500 to-cyan-600",
      achievement: "✨ 92% accuracy, <200ms latency",
    },
    {
      icon: "🔎",
      title: "Horizon",
      subtitle: "AI Code Reviewer",
      description:
        "Intelligent code review platform powered by Gemini API that analyzes code quality, suggests improvements, and identifies potential bugs.",
      tags: ["React.js", "Gemini API", "AI"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      achievement: "✨ AI-powered code analysis",
    },
  ];

  // Typewriter effect for titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Smooth mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize Particles.js with matching portfolio colors
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 140,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: isDark
              ? [
                  "#60a5fa",
                  "#a78bfa",
                  "#ec4899",
                  "#10b981",
                  "#f59e0b",
                  "#06b6d4",
                ]
              : [
                  "#3b82f6",
                  "#8b5cf6",
                  "#ec4899",
                  "#06b6d4",
                  "#f59e0b",
                  "#10b981",
                ],
          },
          shape: {
            type: ["circle", "triangle", "edge", "polygon"],
            stroke: {
              width: 0,
            },
            polygon: {
              nb_sides: 6,
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: isDark ? "#60a5fa" : "#3b82f6",
            opacity: 0.4,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: true,
              rotateX: 1200,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"],
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.8,
                color: isDark ? "#ec4899" : "#f43f5e",
              },
            },
            bubble: {
              distance: 250,
              size: 8,
              duration: 2,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            push: {
              particles_nb: 6,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-all duration-700">
      {/* Particles.js Container */}
      <div
        id="particles-js"
        className="fixed inset-0 z-0"
        style={{ background: "transparent" }}
      />

      {/* Animated Gradient Mesh Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{
            background: isDark
              ? [
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                ]
              : [
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        />
      </div>

      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full blur-3xl pointer-events-none mix-blend-screen z-0"
          style={{
            width: 400 + i * 50,
            height: 400 + i * 50,
            background: isDark
              ? `radial-gradient(circle, ${
                  [
                    "rgba(59,130,246,0.2)",
                    "rgba(168,85,247,0.2)",
                    "rgba(236,72,153,0.2)",
                    "rgba(16,185,129,0.2)",
                    "rgba(245,158,11,0.2)",
                  ][i]
                } 0%, transparent 70%)`
              : `radial-gradient(circle, ${
                  [
                    "rgba(59,130,246,0.15)",
                    "rgba(168,85,247,0.15)",
                    "rgba(236,72,153,0.15)",
                    "rgba(16,185,129,0.15)",
                    "rgba(245,158,11,0.15)",
                  ][i]
                } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 100 * (i % 2 ? 1 : -1), 50 * (i % 2 ? -1 : 1), 0],
            y: [0, 80 * (i % 2 ? 1 : -1), 40 * (i % 2 ? -1 : 1), 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          initial={{
            left: `${10 + i * 20}%`,
            top: `${15 + i * 15}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        {/* Ultra-Premium Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="fixed top-0 w-full z-50"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border-b border-white/20 dark:border-gray-700/20 shadow-2xl" />

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex justify-between items-center h-24">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    x: mousePosition.x * 0.5,
                    y: mousePosition.y * 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                >
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Meet Adlakha
                  </span>
                </motion.div>

                <div className="flex items-center space-x-12">
                  <div className="hidden lg:flex space-x-10">
                    {["Home", "About", "Projects", "Skills", "Contact"].map(
                      (item, i) => (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                          className="relative group"
                        >
                          <motion.span
                            whileHover={{ y: -3 }}
                            className="text-gray-700 dark:text-gray-300 font-bold text-lg transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                          >
                            {item}
                          </motion.span>

                          <motion.span
                            className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      )
                    )}
                  </div>

                  <motion.button
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9, rotate: 180 }}
                    onClick={toggleTheme}
                    className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 text-white shadow-2xl overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <motion.div
                      animate={{ rotate: isDark ? 360 : 0 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* HERO SECTION */}
        <section
          id="home"
          className="relative pt-40 pb-32 px-6 sm:px-8 lg:px-12 min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center relative">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-7xl md:text-9xl font-black mb-10 leading-tight"
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Meet Adlakha
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-6"
              >
                <motion.p
                  key={currentTitle}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-3"
                >
                  {titles[currentTitle]}
                </motion.p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-14 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                Computer Science Engineering Student at VIT Bhopal | Building
                innovative solutions with modern web technologies
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-8"
              >
                <motion.a
                  whileHover={{ scale: 1.1, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Meet_Adlakha_Resume.pdf"
                  download="Meet_Adlakha_Resume.pdf"
                  className="group relative px-12 py-6 rounded-2xl font-black text-xl text-white overflow-hidden shadow-2xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-50 blur-xl"
                    transition={{ duration: 0.3 }}
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    <HiDownload size={28} />
                    Download Resume
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group relative px-12 py-6 rounded-2xl font-black text-xl text-white bg-gray-900 dark:bg-gray-700 overflow-hidden shadow-2xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    <HiMail size={28} />
                    Contact Me
                  </span>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
              >
                <HiArrowDown
                  size={32}
                  className="text-gray-400 dark:text-gray-500"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <motion.h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-2 w-32 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm someone who loves to create, explore, and learn — the kind of person who can spend hours chasing an idea just to see it come to life. Whether it's experimenting with a new framework, building something with AI, or fixing that one stubborn bug at 2 a.m., I enjoy the process as much as the outcome.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Technology, to me, isn't just code — it's a way to express creativity, solve real problems, and keep pushing what's possible. I'm driven by curiosity, powered by coffee, and always looking for the next thing to build or understand.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not behind the screen, you'll probably find me talking football strategies, catching an F1 race, or diving into a good podcast — anything that keeps the mind moving and the ideas flowing.
                </p>
              </div>
            </motion.div>

            {/* Education & Certifications Section */}
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileHover={{ y: -20, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(59,130,246,0.3), rgba(168,85,247,0.3), rgba(236,72,153,0.3))",
                      filter: "blur(20px)",
                      zIndex: -1,
                    }}
                  />

                  <div className="flex items-center gap-4 mb-10">
                    <div className="text-5xl">🎓</div>
                    <h3 className="text-4xl font-black text-gray-800 dark:text-gray-100">
                      Education
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {[
                      {
                        school: "VIT Bhopal University",
                        degree: "B.Tech in Computer Science & Engineering",
                        details: "CGPA: 8.96/10",
                        period: "Nov 2022 – Present",
                        gradient: "from-blue-500 to-blue-700",
                      },
                      {
                        school: "Delhi Public School",
                        degree: "Senior Secondary (XII) – 95.4%",
                        details: "High School (X) – 91%",
                        period: "Mar 2022 & Mar 2020",
                        gradient: "from-purple-500 to-purple-700",
                      },
                    ].map((edu, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border-l-8 border-blue-500 dark:border-blue-400 overflow-hidden group/item"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                        <div
                          className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.gradient} text-white text-sm font-bold rounded-full mb-4 shadow-lg`}
                        >
                          {edu.period}
                        </div>

                        <h4 className="font-black text-2xl text-gray-800 dark:text-gray-100 mb-3">
                          {edu.school}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mb-2">
                          {edu.degree}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.details}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Certifications & Interests Card */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileHover={{ y: -20, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3), rgba(245,158,11,0.3))",
                      filter: "blur(20px)",
                      zIndex: -1,
                    }}
                  />

                  <div className="flex items-center gap-4 mb-10">
                    <div className="text-5xl">🏆</div>
                    <h3 className="text-4xl font-black text-gray-800 dark:text-gray-100">
                      Certifications
                    </h3>
                  </div>

                  <div className="space-y-6 mb-12">
                    {[
                      {
                        name: "Machine Learning Specialization",
                        issuer: "DeepLearning.AI",
                        icon: "🤖",
                        gradient: "from-blue-500 to-cyan-500",
                      },
                      {
                        name: "AWS Solutions Architect",
                        issuer: "Ethnus",
                        icon: "☁️",
                        gradient: "from-orange-500 to-red-500",
                      },
                    ].map((cert, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border-l-8 border-purple-500 dark:border-purple-400 overflow-hidden group/item"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl">{cert.icon}</span>
                          <div
                            className={`px-4 py-2 bg-gradient-to-r ${cert.gradient} text-white text-sm font-bold rounded-full shadow-lg`}
                          >
                            Certified
                          </div>
                        </div>

                        <h4 className="font-black text-2xl text-gray-800 dark:text-gray-100 mb-2">
                          {cert.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {cert.issuer}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">🎯</span>
                      <h4 className="font-black text-2xl text-gray-800 dark:text-gray-100">
                        Interests
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {[
                        "⚽ Football",
                        "🏸 Badminton",
                        "🏎️ Formula 1",
                        "🏔️ Trekking",
                      ].map((hobby, i) => (
                        <motion.span
                          key={hobby}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-base font-bold cursor-pointer shadow-lg hover:shadow-xl"
                        >
                          {hobby}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50/90 to-blue-50/90 dark:from-gray-900/50 dark:to-blue-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <motion.h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </motion.h2>
              <motion.p className="text-2xl text-gray-600 dark:text-gray-400 font-medium">
                Some of my recent work
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-2 w-32 mx-auto mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              />
            </motion.div>

            {/* Projects Grid with Side Navigation */}
            <div className="relative flex items-center gap-8">
              {/* Left Navigation Button */}
              <motion.button
                onClick={() => {
                  setDirection(-1);
                  setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
                }}
                whileHover={{ scale: 1.15, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-4 border-white/20 dark:border-gray-700/20 z-10"
              >
                <span className="text-4xl font-bold">←</span>
              </motion.button>

              {/* 3 Projects Grid with AnimatePresence */}
              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={currentProject}
                    custom={direction}
                    initial={{ 
                      x: direction > 0 ? 1000 : -1000,
                      opacity: 0 
                    }}
                    animate={{ 
                      x: 0,
                      opacity: 1 
                    }}
                    exit={{ 
                      x: direction > 0 ? -1000 : 1000,
                      opacity: 0 
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="grid md:grid-cols-3 gap-8"
                  >
                    {projects.slice(currentProject, currentProject + 3).concat(
                      projects.slice(0, Math.max(0, (currentProject + 3) - projects.length))
                    ).map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{
                          y: -30,
                          scale: 1.05,
                          rotateY: 5,
                          transition: { duration: 0.4 },
                        }}
                        className="group relative rounded-3xl overflow-hidden shadow-2xl"
                        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                      >
                        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 h-full">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                          >
                            <motion.div
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.3, 1],
                              }}
                              transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute inset-0 opacity-20"
                              style={{
                                backgroundImage:
                                  "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                                backgroundSize: "30px 30px",
                              }}
                            />

                            <motion.div
                              className="text-8xl relative z-10"
                              whileHover={{ scale: 1.3, rotate: 15 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {project.icon}
                            </motion.div>

                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ["-200%", "200%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 2,
                              }}
                            />
                          </motion.div>

                          <div className="p-10">
                            <h3 className="text-3xl font-black mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-base text-blue-600 dark:text-blue-400 mb-6 font-bold">
                              {project.subtitle}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                              {project.tags.map((tag, i) => (
                                <motion.span
                                  key={tag}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: i * 0.1,
                                    type: "spring",
                                  }}
                                  whileHover={{ scale: 1.15, y: -3 }}
                                  className={`px-5 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-bold shadow-md hover:shadow-xl`}
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </div>

                            <div className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-300 font-bold bg-gray-100 dark:bg-gray-700 px-6 py-3 rounded-xl">
                              <HiLightningBolt
                                className="text-yellow-500"
                                size={20}
                              />
                              {project.achievement}
                            </div>
                          </div>
                        </div>

                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl -z-10`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Navigation Button */}
              <motion.button
                onClick={() => {
                  setDirection(1);
                  setCurrentProject((prev) => (prev + 1) % projects.length);
                }}
                whileHover={{ scale: 1.15, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-4 border-white/20 dark:border-gray-700/20 z-10"
              >
                <span className="text-4xl font-bold">→</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="relative py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <motion.h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-2 w-32 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
              {[
                {
                  title: "💻 Languages",
                  skills: ["C++", "JavaScript", "Python", "HTML/CSS", "SQL"],
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "⚡ Frameworks",
                  skills: [
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "Flask",
                    "Tailwind CSS",
                  ],
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "🗄️ Databases",
                  skills: ["MongoDB", "MySQL", "PostgreSQL"],
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "🛠️ Tools",
                  skills: [
                    "Git/GitHub",
                    "Docker",
                    "Vercel",
                    "Postman",
                    "VS Code",
                  ],
                  gradient: "from-orange-500 to-red-500",
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -20,
                    scale: 1.08,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                  }}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl font-black mb-8 text-gray-800 dark:text-gray-100"
                  >
                    {category.title}
                  </motion.h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                        whileHover={{ x: 15, scale: 1.05 }}
                        className={`bg-gradient-to-r ${category.gradient} text-white rounded-xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "🎯 Event Management Lead",
                  description:
                    "Coordinated national-level events with 1,000+ participants, managing logistics, planning, and promotion.",
                  gradient: "from-blue-500 to-purple-500",
                },
                {
                  title: "🎭 Cultural & Sports Coordinator",
                  description:
                    "Directed large-scale campus events enhancing engagement by 25% through efficient team collaboration.",
                  gradient: "from-pink-500 to-orange-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden group"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-black rounded-full mb-6 text-base shadow-lg`}
                  >
                    Leadership
                  </div>

                  <h3 className="text-4xl font-black mb-6 text-gray-800 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT FORM (opens mail client) */}
        <section id="contact-form" className="relative py-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 overflow-hidden"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5 dark:bg-indigo-500/10 blur-3xl"
              style={{
                width: 600 + i * 200,
                height: 600 + i * 200,
              }}
              animate={{
                x: [0, 100 * (i % 2 ? 1 : -1), 0],
                y: [0, 100 * (i % 2 ? -1 : 1), 0],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              initial={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 25}%`,
              }}
            />
          ))}

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.h2
                className="text-6xl md:text-7xl font-black mb-10 text-white"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Let's Work Together
              </motion.h2>
              <motion.p className="text-2xl md:text-3xl text-white/90 mb-20 font-medium leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <HiMail size={50} />,
                  title: "Email",
                  value: "meetadlakha1@gmail.com",
                  href: "mailto:meetadlakha1@gmail.com",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "💼",
                  title: "LinkedIn",
                  value: "Connect with me",
                  href: "https://www.linkedin.com/in/meet-adlakha-785ab224a/",
                  gradient: "from-blue-600 to-indigo-600",
                },
                {
                  icon: "💻",
                  title: "GitHub",
                  value: "View my code",
                  href: "https://github.com/Meet0124",
                  gradient: "from-gray-700 to-gray-900",
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.5, y: 80 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -15,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                  }}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl overflow-hidden"
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} 
                  />

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: contact.title === "Email" ? 0 : 5 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 mb-6 flex justify-center items-center"
                  >
                    {typeof contact.icon === 'string' ? (
                      <div className="text-5xl">{contact.icon}</div>
                    ) : (
                      <div className="text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        {contact.icon}
                      </div>
                    )}
                  </motion.div>

                  <h3 className="relative z-10 font-black text-2xl mb-3 text-gray-800 dark:text-gray-100">
                    {contact.title}
                  </h3>
                  <p className={`relative z-10 text-base text-gray-600 dark:text-gray-400 font-medium group-hover:bg-gradient-to-r group-hover:${contact.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {contact.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div className="mt-16 flex justify-center">
              {/* Social links are now integrated in the cards above */}
              {false && [].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  whileHover={{ scale: 1.15, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-5 bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white rounded-2xl font-black text-xl shadow-2xl overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-3xl">{social.icon}</span>
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-gray-400 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.p className="mb-4 text-xl font-bold">
              © 2024 Meet Adlakha. All rights reserved.
            </motion.p>
            <motion.p className="text-lg flex items-center justify-center gap-2">
              Built with React, Tailwind CSS, Framer Motion & Particles.js
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ❤️
              </motion.span>
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

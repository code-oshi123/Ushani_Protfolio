import React from 'react';
import { motion } from 'framer-motion';

export default function Strengths() {
  const whatIBring = [
    {
      num: "01",
      title: "Analytical Thinking",
      desc: "I break problems down and investigate them carefully.",
      icon: "🧠"
    },
    {
      num: "02",
      title: "Attention to Detail",
      desc: "I notice inconsistencies that can affect the user experience.",
      icon: "👁️"
    },
    {
      num: "03",
      title: "Problem Solving",
      desc: "I approach issues logically and look for practical solutions.",
      icon: "💡"
    },
    {
      num: "04",
      title: "Team Collaboration",
      desc: "I enjoy working closely with developers and team members.",
      icon: "🤝"
    },
    {
      num: "05",
      title: "Continuous Learning",
      desc: "I'm always developing my technical and QA knowledge.",
      icon: "⚡"
    },
    {
      num: "06",
      title: "Quality Mindset",
      desc: "I care about reliability, usability and the overall product experience.",
      icon: "🎯"
    }
  ];

  const compactProjects = [
    {
      name: "Urban Harvest PWA",
      stack: "PWA • React • Node.js • MySQL",
      role: "Developer & QA",
      desc: "PWA platform connecting sustainable events, workshops and community initiatives."
    },
    {
      name: "Urban Harvest 101",
      stack: "React Native • Node.js • MySQL",
      role: "Developer & QA",
      desc: "Food delivery mobile app with real-time order tracking and restaurant management."
    },
    {
      name: "Bloomy Twist — Handmade Flower Shop (Demo)",
      stack: "HTML • Tailwind CSS (CDN) • Vanilla JavaScript",
      role: "Developer & QA",
      desc: "A modern, responsive demo web app for a handmade flower shop called Bloomy Twist."
    },
    {
      name: "Supplier Management System",
      stack: "React • Node.js • MySQL",
      role: "Developer & QA",
      desc: "Web application for supplier management, feedback tracking, and performance analytics."
    }
  ];

  const exploringTags = [
    "Quality Assurance",
    "Software Testing",
    "API Testing",
    "UI/UX Quality",
    "Full-Stack Development",
    "Agile Collaboration"
  ];

  return (
    <section 
      id="strengths" 
      className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-12"
    >
      {/* Background Ambient Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-1/4 left-1/10 text-themeAccent/25 text-xl select-none"
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
      </div>

      {/* SECTION: WHAT I BRING ✦ */}
      <div className="space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
            CORE STRENGTHS ✦
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight">
            What I Bring <span className="text-[#8B5CF6]">✦</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2633]/70 max-w-md mx-auto">
            Beyond technical capabilities — the mindset, communication, and work ethic I bring to every team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIBring.map((item, idx) => (
            <motion.div
              key={item.num}
              className="bg-[#FAF8FE] border border-[#ECE4FA] p-6 rounded-3xl shadow-2xs hover:shadow-md hover:border-[#8B5CF6]/50 transition-all duration-300 flex flex-col justify-between gap-4 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl p-2.5 rounded-2xl bg-white border border-[#EDE4FA] shadow-2xs group-hover:scale-110 transition-transform select-none">
                  {item.icon}
                </span>
                <span className="text-xs font-bold text-[#8B5CF6] tracking-wider font-mono">
                  {item.num}
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-serif font-bold text-[#3B1C54] group-hover:text-[#5D3EA8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[12.5px] text-[#2D2633]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION: BUILT, TESTED & EXPLORED 🚀 */}
      <div className="space-y-8 relative z-10 pt-6">
        <div className="text-center space-y-2">
          <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
            PORTFOLIO OVERVIEW 🚀
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight">
            Built, Tested &amp; Explored <span className="text-[#8B5CF6]">✦</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2633]/70 max-w-md mx-auto">
            A quick summary of project contributions bridging full-stack development and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {compactProjects.map((proj, idx) => (
            <motion.div
              key={proj.name}
              className="bg-[#FAF8FE] border border-[#ECE4FA] p-5 rounded-2xl shadow-2xs hover:shadow-md hover:border-[#8B5CF6]/45 transition-all duration-200 flex flex-col justify-between gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -3 }}
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-start gap-1">
                  <h3 className="text-sm sm:text-[14.5px] font-serif font-bold text-[#3B1C54] group-hover:text-[#5D3EA8] transition-colors leading-snug">
                    {proj.name}
                  </h3>
                  <span className="text-[9px] font-bold text-[#5D3EA8] bg-white border border-[#DDD3F5] px-2 py-0.5 rounded-full whitespace-nowrap shadow-2xs">
                    {proj.role}
                  </span>
                </div>
                <p className="text-[11.5px] text-[#2D2633]/75 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#ECE4FA]">
                <span className="text-[10px] font-semibold text-[#8B6EED]">
                  {proj.stack}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION: CURRENTLY EXPLORING 🌙 */}
      <motion.div 
        className="bg-gradient-to-r from-[#FAF8FE] via-[#F5EFFE] to-[#FAF8FE] border border-[#ECE4FA] p-8 rounded-[32px] shadow-2xs relative z-10 text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg select-none">🌙</span>
          <h3 className="text-xl sm:text-2xl font-serif text-[#3B1C54] font-medium">
            Currently Exploring
          </h3>
          <motion.span 
            className="text-sm text-[#8B5CF6] select-none"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✦
          </motion.span>
        </div>

        <p className="text-xs sm:text-[13px] text-[#2D2633]/70 max-w-lg mx-auto">
          Actively expanding my expertise across testing automation, REST API architecture, and scalable software quality.
        </p>

        <div className="flex flex-wrap gap-2.5 justify-center max-w-2xl mx-auto pt-2">
          {exploringTags.map((tag) => (
            <span 
              key={tag}
              className="text-xs font-semibold text-[#3B1C54] bg-white border border-[#DDD3F5] hover:border-[#8B5CF6] hover:bg-[#FAF8FE] px-4 py-2 rounded-full shadow-2xs transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Count-up animated counter component
function AnimatedCounter({ target, duration = 1.2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalSteps = 30;
    const increment = end / totalSteps;
    const stepTime = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    {
      id: "qa",
      title: "QA & Testing",
      icon: "⚙️",
      subtitle: "Software Quality & Verification",
      description: "Comprehensive testing methodologies across manual verification, API contracts, and automated suites.",
      skills: [
        "Manual Testing",
        "Test Case Design & Traceability",
        "Bug Reporting & Defect Lifecycle",
        "API Testing with Postman",
        "Automated Testing with Playwright",
        "Functional & Regression Testing",
        "UI/UX & Responsive Layout Checks",
        "SDLC: Agile (Scrum) & Waterfall"
      ]
    },
    {
      id: "dev",
      title: "Development",
      icon: "💻",
      subtitle: "Web & Object-Oriented Engineering",
      description: "Frontend & backend programming for responsive, interactive, and modern digital applications.",
      skills: [
        "JavaScript (ES6+)",
        "React.js & React Native",
        "Node.js & Express",
        "Python",
        "C# (OOP & Systems)",
        "HTML5 & Semantic Structure",
        "CSS3 & Tailwind CSS",
        "RESTful API Integration"
      ]
    },
    {
      id: "tools",
      title: "Databases & Tools",
      icon: "🛠️",
      subtitle: "Data & Workflow Infrastructure",
      description: "Database persistence, version control, API testing tools, and project management ecosystems.",
      skills: [
        "Postman (API Collections & Tests)",
        "Git & GitHub Version Control",
        "MySQL Database",
        "PostgreSQL Database",
        "Playwright Automation",
        "Trello & Agile Task Boards",
        "Linux OS Environment",
        "AWS Cloud (Foundations)"
      ]
    }
  ];

  const certifications = [
    { name: "Ethical Hacking", icon: "🛡️", issuer: "Security Fundamentals" },
    { name: "Python Programming", icon: "🐍", issuer: "Core Software Logic" },
    { name: "Database Management", icon: "🗄️", issuer: "SQL & Data Modeling" },
    { name: "Linux Administration", icon: "🐧", issuer: "System & Server CLI" },
    { name: "Networking Fundamentals", icon: "🌐", issuer: "Protocols & IP Routing" },
    { name: "Project Management (PM)", icon: "📋", issuer: "Agile & Team Coordination" }
  ];

  const filteredCategories = activeTab === "all" 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <section 
      id="skills" 
      className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Background Ambient Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-1/3 right-1/10 text-themeAccent/25 text-2xl select-none"
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-12 left-1/12 text-[#C4B2FF]/35 text-2xl select-none"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ✧
        </motion.div>
      </div>

      {/* Section Header */}
      <div className="text-center space-y-3 mb-12 sm:mb-16 relative z-10">
        <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
          TECHNICAL TOOLKIT ✦
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight">
          Skills &amp; Certifications <span className="text-[#8B5CF6]">💻</span>
        </h2>
        <p className="text-sm sm:text-base text-[#2D2633]/75 max-w-xl mx-auto leading-relaxed">
          A verified technical foundation spanning testing methodologies, programming languages, and industry certifications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
        {[
          { id: "all", label: "All Skills" },
          { id: "qa", label: "⚙️ QA & Testing" },
          { id: "dev", label: "💻 Development" },
          { id: "tools", label: "🛠️ Databases & Tools" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#5D3EA8] text-white shadow-md shadow-[#5D3EA8]/25 scale-105'
                : 'bg-white/80 text-[#3B1C54] border border-[#ECE4FA] hover:bg-white hover:border-[#8B5CF6]/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3 Dedicated Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FAF8FE] border border-[#ECE4FA] hover:border-[#8B5CF6]/60 p-7 sm:p-8 rounded-[32px] shadow-2xs hover:shadow-[0_16px_35px_rgba(139,92,246,0.12)] transition-all duration-300 flex flex-col justify-between group"
              whileHover={{ y: -6 }}
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="space-y-2 pb-4 border-b border-[#ECE4FA]">
                  <div className="flex items-center gap-3">
                    {/* Icon with gentle scaling & rotation on hover */}
                    <motion.span 
                      className="text-2xl p-2.5 rounded-2xl bg-white border border-[#EDE4FA] shadow-2xs select-none inline-block origin-center"
                      whileHover={{ scale: 1.25, rotate: 12 }}
                      transition={{ type: "spring", stiffness: 350, damping: 12 }}
                    >
                      {cat.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#3B1C54] group-hover:text-[#5D3EA8] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-[#8B6EED] font-semibold">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#2D2633]/70 leading-relaxed pt-1">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Checklist */}
                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <motion.li 
                      key={skill}
                      className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2D2633]/85 font-medium group-hover/item:text-[#3B1C54] transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <span className="w-4 h-4 rounded-full bg-white border border-[#DDD3F5] text-[#8B5CF6] font-bold text-[10px] flex items-center justify-center shrink-0 shadow-2xs">
                        ✓
                      </span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent Decor with Animated Counter */}
              <div className="pt-6 mt-4 border-t border-[#ECE4FA]/80 flex justify-between items-center text-[#8B6EED] text-xs">
                <span className="tracking-widest uppercase text-[10px] font-bold font-mono flex items-center gap-1">
                  <AnimatedCounter target={cat.skills.length} /> SPECIALIZATIONS
                </span>
                <span className="group-hover:rotate-45 transition-transform">✦</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CERTIFICATIONS STRIP (Official from CV) */}
      <motion.div 
        className="mt-12 bg-white/85 backdrop-blur-md border border-[#ECE4FA] rounded-[32px] p-6 sm:p-8 shadow-sm relative overflow-hidden z-10 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-[#ECE4FA]">
          <div className="flex items-center gap-2">
            <span className="text-lg select-none">📜</span>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#3B1C54]">
              Industry Certifications &amp; Training
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#8B6EED] uppercase tracking-wider font-mono">
            <AnimatedCounter target={certifications.length} /> Verified Credentials
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              className="p-3.5 rounded-2xl bg-[#FAF8FE] border border-[#ECE4FA] hover:border-[#8B5CF6]/50 hover:bg-white transition-all duration-200 text-center flex flex-col items-center justify-center gap-1.5 shadow-2xs group cursor-default"
              whileHover={{ y: -4, scale: 1.04 }}
            >
              <motion.span 
                className="text-2xl select-none inline-block"
                whileHover={{ scale: 1.25, rotate: 10 }}
              >
                {cert.icon}
              </motion.span>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#3B1C54] line-clamp-1">
                  {cert.name}
                </h4>
                <p className="text-[10px] text-[#2D2633]/65 leading-tight">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

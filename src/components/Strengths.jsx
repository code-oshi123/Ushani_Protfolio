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

  const exploringTags = [
    "Selenium Automation",
    "Playwright",
    "Postman & REST API",
    "Cypress E2E",
    "Performance Testing (JMeter)",
    "CI/CD Quality Gates",
    "BDD / Cucumber",
    "Test Planning & Strategy"
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
          <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] dark:text-[#C4B5FD] uppercase block">
            CORE STRENGTHS ✦
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] dark:text-[#F5EFFB] font-medium tracking-tight">
            What I Bring <span className="text-[#8B5CF6] dark:text-[#A78BFA]">✦</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2633]/70 dark:text-[#C5B9D3] max-w-md mx-auto">
            Beyond technical capabilities — the mindset, communication, and work ethic I bring to every team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIBring.map((item, idx) => (
            <motion.div
              key={item.num}
              className="bg-[#FAF8FE] dark:bg-[#1D1629] border border-[#ECE4FA] dark:border-[#2D2140] p-6 rounded-3xl shadow-2xs hover:shadow-md hover:border-[#8B5CF6]/50 dark:hover:border-[#A78BFA]/50 transition-all duration-300 flex flex-col justify-between gap-4 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl p-2.5 rounded-2xl bg-white dark:bg-[#261D35] border border-[#EDE4FA] dark:border-[#2D2140] shadow-2xs group-hover:scale-110 transition-transform select-none">
                  {item.icon}
                </span>
                <span className="text-xs font-bold text-[#8B5CF6] dark:text-[#A78BFA] tracking-wider font-mono">
                  {item.num}
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-serif font-bold text-[#3B1C54] dark:text-[#F5EFFB] group-hover:text-[#5D3EA8] dark:group-hover:text-[#A78BFA] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[12.5px] text-[#2D2633]/75 dark:text-[#C5B9D3] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION: CURRENTLY EXPLORING 🌙 */}
      <motion.div 
        className="bg-gradient-to-r from-[#FAF8FE] via-[#F5EFFE] to-[#FAF8FE] dark:from-[#1D1629] dark:via-[#17111F] dark:to-[#1D1629] border border-[#ECE4FA] dark:border-[#2D2140] p-8 rounded-[32px] shadow-2xs relative z-10 text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg select-none">🌙</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] dark:text-[#F5EFFB] font-medium tracking-tight">
            Currently Exploring <span className="text-[#8B5CF6] dark:text-[#A78BFA]">✦</span>
          </h2>

          <motion.span 
            className="text-sm text-[#8B5CF6] dark:text-[#A78BFA] select-none"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✦
          </motion.span>
        </div>

        <p className="text-xs sm:text-[13px] text-[#2D2633]/70 dark:text-[#C5B9D3] max-w-lg mx-auto">
          Actively expanding my expertise across testing automation, REST API architecture, and scalable software quality.
        </p>

        <div className="flex flex-wrap gap-2.5 justify-center max-w-2xl mx-auto pt-2">
          {exploringTags.map((tag) => (
            <span 
              key={tag}
              className="text-xs font-semibold text-[#3B1C54] dark:text-[#F5EFFB] bg-white dark:bg-[#261D35] border border-[#DDD3F5] dark:border-[#2D2140] hover:border-[#8B5CF6] dark:hover:border-[#A78BFA] hover:bg-[#FAF8FE] dark:hover:bg-[#1D1629] px-4 py-2 rounded-full shadow-2xs transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

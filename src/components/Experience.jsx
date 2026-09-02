import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  const experiences = [
    {
      id: "neirah",
      type: "work",
      badge: "CURRENT ROLE",
      role: "Intern QA Engineer",
      organization: "Neirah Tech Solution (Pvt) Ltd.",
      location: "Colombo, Sri Lanka",
      period: "July 2026 — Present",
      icon: "💼",
      highlight: "Enterprise ERP Quality Assurance & API Validation",
      bullets: [
        "Testing ERP system modules, user workflows, and complex business logic.",
        "Preparing, documenting, and executing comprehensive manual test cases.",
        "Performing UI/UX validation, cross-browser, and cross-device testing.",
        "Validating RESTful APIs, request payloads, and status codes using Postman.",
        "Identifying, documenting, and tracking defects throughout the bug lifecycle.",
        "Collaborating with developers and cross-functional teams to resolve issues rapidly.",
        "Ensuring release stability, regression readiness, and high end-user satisfaction."
      ],
      tags: ["ERP Testing", "Postman", "Manual Testing", "Test Case Design", "Defect Tracking", "Agile"]
    },
    {
      id: "flower-shop",
      type: "work",
      badge: "CLIENT PROJECT",
      role: "Developer & QA — E-Commerce Flower Shop",
      organization: "First Client Project (Commercial Web App)",
      location: "Sri Lanka",
      period: "2026",
      icon: "🌸",
      highlight: "E-Commerce Web Application & UX Testing",
      bullets: [
        "Built and tested a full-featured e-commerce platform for a local floral boutique to showcase and sell products online.",
        "Conducted end-to-end testing of customer navigation, product catalog filters, order inquiry forms, and content display.",
        "Identified UI/UX usability issues, proposed responsive design optimizations, and validated cross-device layouts."
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Testing", "E-Commerce", "Form Validation"]
    },
    {
      id: "delivery-system",
      type: "work",
      badge: "AGILE LEAD",
      role: "Team Lead & QA — Delivery Management System",
      organization: "Agile Project",
      location: "APIIT Sri Lanka",
      period: "2025",
      icon: "🚚",
      highlight: "Agile Team Leadership & Playwright Automated Testing",
      bullets: [
        "Led an Agile-trained engineering team to plan, coordinate, and track sprint deliverables through iterative development cycles.",
        "Authored and executed automated test suites using Playwright to accelerate end-to-end testing.",
        "Facilitated clear team communication, tracked sprint velocity, and ensured timely delivery of stable releases."
      ],
      tags: ["Playwright Automation", "Agile / Scrum", "Node.js", "JavaScript", "Team Leadership", "E2E Testing"]
    },
    {
      id: "ticket-system",
      type: "work",
      badge: "SYSTEMS QA",
      role: "Developer & QA — Ticket Management System",
      organization: "Academic Software Project",
      location: "APIIT Sri Lanka",
      period: "2025",
      icon: "🎟️",
      highlight: "Object-Oriented Programming & Regression Testing",
      bullets: [
        "Designed and implemented core application logic using C# and Object-Oriented Programming (OOP) principles.",
        "Reviewed application data flow, verified content accuracy, and conducted regression testing on updated modules.",
        "Identified edge-case calculation bugs, debugged logic flaws, and validated fixes."
      ],
      tags: ["C#", "OOP", "Regression Testing", "Flow Validation", "Bug Fixing"]
    },
    {
      id: "bsc-degree",
      type: "education",
      badge: "3RD YEAR UNDERGRADUATE",
      role: "BSc (Hons) Computer Science",
      organization: "University of Staffordshire (UK) in partnership with APIIT Sri Lanka",
      location: "Colombo, Sri Lanka",
      period: "2024 — Present (3rd Year)",
      icon: "🎓",
      highlight: "Specializing in Software Quality Assurance, Systems Architecture & Software Engineering",
      bullets: [
        "Final year undergraduate focused on Software Quality Assurance, SDLC, Enterprise Application Development, and Distributed Systems.",
        "Consistently applying industry-standard testing methodologies and engineering best practices to academic and client projects."
      ],
      tags: ["Staffordshire University", "APIIT Sri Lanka", "Software Engineering", "SDLC", "SQA"]
    },
    {
      id: "foundation",
      type: "education",
      badge: "FOUNDATION DIPLOMA",
      role: "Computing Foundation",
      organization: "APIIT Sri Lanka",
      location: "Colombo, Sri Lanka",
      period: "Feb 2024 — Oct 2024 / 2023",
      icon: "🏫",
      highlight: "Foundations of Computer Systems, Database Architecture & Algorithmic Problem Solving",
      bullets: [
        "Completed comprehensive pre-degree curriculum covering structured programming, database modeling, and computer systems.",
        "Built a strong foundation in computational thinking, software design principles, and academic research."
      ],
      tags: ["APIIT Sri Lanka", "Programming Foundations", "Database Design", "Computer Systems"]
    },
    {
      id: "ol",
      type: "education",
      badge: "ACADEMIC EXCELLENCE",
      role: "G.C.E. Ordinary Level (O/L)",
      organization: "National Examination Board",
      location: "Sri Lanka",
      period: "2022 / 2023",
      icon: "🏅",
      highlight: "Passed with 9 A's (Distinctions across all 9 subjects)",
      bullets: [
        "Achieved top-tier academic distinction with straight 'A' grades in all 9 registered subjects.",
        "Demonstrated exceptional discipline, analytical problem solving, and consistent academic diligence."
      ],
      tags: ["9 A's Distinction", "Mathematics", "Science", "English", "Information Technology"]
    }
  ];

  const references = [
    {
      name: "K.M. Shani Alwis",
      role: "Lecturer",
      institution: "APIIT Sri Lanka",
      phone: "0771036300",
      email: "shani@apiit.lk"
    },
    {
      name: "Tharaka Dulaj",
      role: "Lecturer",
      institution: "APIIT Sri Lanka",
      phone: "0705954188",
      email: "tharaka@apiit.lk"
    }
  ];

  const filteredItems = activeTab === "all"
    ? experiences
    : experiences.filter(item => item.type === activeTab);

  return (
    <section 
      id="experience" 
      className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Background Ambient Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-10 right-1/6 text-themeAccent/25 text-3xl select-none"
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/8 text-[#C4B2FF]/30 text-2xl select-none"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ✧
        </motion.div>
      </div>

      {/* SECTION HEADER */}
      <div className="text-center space-y-3 mb-12 sm:mb-16 relative z-10">
        <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
          CAREER &amp; EDUCATION ✦
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight">
          Where I'm Growing <span className="text-[#8B5CF6]">🎓</span>
        </h2>
        <p className="text-sm sm:text-base text-[#2D2633]/75 max-w-xl mx-auto leading-relaxed">
          Real-world industry experience paired with academic excellence at Staffordshire University &amp; APIIT Sri Lanka.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
        {[
          { id: "all", label: "🌟 All Experience & Education" },
          { id: "work", label: "💼 Industry & Client Work (4)" },
          { id: "education", label: "🎓 Academic Milestones (3)" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#5D3EA8] text-white shadow-md shadow-[#5D3EA8]/25 scale-105'
                : 'bg-white/80 text-[#3B1C54] border border-[#ECE4FA] hover:bg-white hover:border-[#8B5CF6]/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TIMELINE LIST OF CARDS */}
      <div className="space-y-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#FAF8FE] border border-[#ECE4FA] rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xs hover:shadow-md hover:border-[#8B5CF6]/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -3 }}
            >
              {/* Top Row: Badge, Role, Organization & Period */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-5 border-b border-[#ECE4FA]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl p-2 rounded-xl bg-white border border-[#EDE4FA] shadow-2xs select-none">
                      {item.icon}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#5D3EA8] text-white text-[9.5px] font-bold tracking-widest uppercase shadow-xs">
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#8B6EED] font-semibold">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3B1C54] pt-1">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D3EA8] font-medium flex flex-wrap items-center gap-2">
                    <span className="font-bold">{item.organization}</span>
                    <span className="text-xs text-[#8B5CF6]">•</span>
                    <span className="text-xs text-[#2D2633]/70">{item.location}</span>
                  </p>
                </div>

                <div className="px-4 py-2 rounded-full bg-white border border-[#DDD3F5] text-xs font-bold text-[#5D3EA8] shadow-2xs shrink-0">
                  📅 {item.period}
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="pt-5 space-y-3">
                <ul className="space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#2D2633]/85 leading-relaxed font-medium"
                    >
                      <span className="text-[#8B5CF6] text-xs mt-0.5 select-none shrink-0">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech & Competency Badges */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] font-semibold text-[#3B1C54] bg-white border border-[#ECE4FA] hover:border-[#8B5CF6]/40 px-2.5 py-1 rounded-full shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ACADEMIC REFERENCES STRIP (From CV) */}
      <motion.div 
        className="mt-14 bg-white/85 backdrop-blur-md border border-[#ECE4FA] rounded-[32px] p-6 sm:p-8 shadow-sm relative overflow-hidden z-10 space-y-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-[#ECE4FA]">
          <div className="flex items-center gap-2">
            <span className="text-lg select-none">👥</span>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#3B1C54]">
              Academic &amp; Professional References
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#8B6EED] uppercase tracking-wider">
            APIIT Sri Lanka Faculty
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {references.map((ref) => (
            <div 
              key={ref.name}
              className="p-4 rounded-2xl bg-[#FAF8FE] border border-[#ECE4FA] flex flex-col justify-between gap-2"
            >
              <div>
                <h4 className="text-sm font-serif font-bold text-[#3B1C54]">
                  {ref.name}
                </h4>
                <p className="text-xs text-[#8B6EED] font-semibold">
                  {ref.role} • {ref.institution}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-[#2D2633]/80 border-t border-[#ECE4FA]">
                <span className="flex items-center gap-1">
                  📞 {ref.phone}
                </span>
                <span className="flex items-center gap-1">
                  ✉️ <a href={`mailto:${ref.email}`} className="text-[#5D3EA8] hover:underline font-semibold">{ref.email}</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

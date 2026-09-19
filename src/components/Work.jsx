import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project01 from "../assets/project_card_01.png";
import project02 from "../assets/project_card_02.png";
import project03 from "../assets/project_card_03.png";
import project04 from "../assets/project_card_04.png";
import project05 from "../assets/project_card_05.png";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const projects = [
    {
      id: "01",
      category: "web",
      title: "Urban Harvest Hub",
      role: "Developer & QA",
      tagline: "Sustainable Community & Harvest Platform",
      description:
        "Progressive Web App connecting local communities to urban farming workshops, sustainable harvest events, and eco-initiatives.",
      fullDetails:
        "Architected as an offline-capable PWA with dynamic event registration, geo-based harvest listings, and community workshops. Implemented comprehensive manual test suites, verified service worker caching, and validated responsive layouts across iOS and Android viewports.",
      link: "https://urban-harvest-pwa.vercel.app/",
      repoLink: "https://github.com/code-oshi123/Urban_Harvest_PWA.git",
      tech: ["PWA", "React", "Node.js", "MySQL", "Tailwind CSS"],
      qaHighlights: [
        "Service worker caching & offline access verification",
        "Form input boundary value and validation testing",
        "Cross-device mobile UI/UX and touch event testing",
      ],
      image: project01,
    },
    {
      id: "02",
      category: "web",
      title: "Bloomy Twist — Handmade Flower Shop (Demo)",
      role: "Developer & QA",
      tagline: "Local flower market & E-commerce demo",
      description:
        "Cross-platform web application for local users with ordering, browsing, and purchasing handmade flower arrangements from Bloomy Twist.",
      fullDetails:
        "Developed a responsive e-commerce demo with product catalog, shopping cart, and checkout flow. Conducted functional testing on order processing, discount calculations, and low-bandwidth scenarios. Validated cross-browser compatibility and mobile responsiveness.",
      link: "https://bollom-twiat-your-flower-shop.netlify.app/",
      repoLink: "https://github.com/code-oshi123/flower-shop.git",
      tech: ["HTML", "Tailwind CSS (CDN)", "Vanilla JavaScript"],
      qaHighlights: [
        "Real-time order state transition validation",
        "Cart price calculation & edge case discount testing",
        "Low-bandwidth & mobile responsiveness validation",
      ],
      image: project02,
    },
    {
      id: "03",
      category: "website",
      title: " Urban Harvest 101",
      role: "Developer & QA",
      tagline: "Inventory & Prescription Billing Platform",
      description:
        "A modern, responsive Single Page Application (SPA) for a sustainable lifestyle platform that connects eco-conscious communities with eco-friendly products, educational workshops, and local community events.",
      fullDetails:
        "Urban Harvest Hub is a sustainable lifestyle web platform designed to promote eco-friendly living by providing Eco-friendly products,Educational workshops, Community events , Real-time weather information , Multi-language support (English & Sinhala), Dark/Light mode toggle",
      link: "https://urban-harvst-hub.vercel.app/",
      repoLink: "https://github.com/code-oshi123/Urban_Harvst_Hub.git",
      tech: [
        "React 18",
        "Vite",
        "React Router DOM",
        "Axios",
        "Tailwind CSS",
        "OpenWeather API ",
      ],
      qaHighlights: [
        "JWT token expiry & unauthorized route access testing",
        "Form input validation & error message verification",
        "Multi-language translation & localization verification",
      ],
      image: project03,
    },
    {
      id: "04",
      category: "system",
      title: "Supplier Management System",
      role: "QA & Developer & PM & BA",
      tagline: "Procurement Analytics & Vendor Tracking",
      description:
        "Web application for enterprise supplier onboarding, performance feedback tracking, and vendor procurement SLA monitoring.",
      fullDetails:
        "Built a vendor management portal offering procurement analytics, supplier rating scorecards, and contract renewal alerts. Tested API endpoints using Postman, verified CSV report export schemas, and confirmed role-based access control.",
      link: "https://nestle-dms-frontend.vercel.app/",
      repoLink: "https://github.com/code-oshi123/nestle-dms-frontend.git",
      tech: ["React", "Node.js", "MySQL", "Postman", "Chart.js"],
      qaHighlights: [
        "Postman API payload validation for vendor endpoints",
        "Data filtering, sorting, and pagination test cases",
        "SLA status calculation boundary condition checks",
      ],
      image: project04,
    },
    {
      id: "05",
      category: "web",
      title: "stemoras-shop.vercel.app",
      role: "QA & Developer",
      tagline: "Local Flower shop for pipe cleaning and flower arrangements",
      description:
        "An interactive web application designed to sell handmade pipe flower arrangements and provide a seamless shopping experience for local customers.",
      fullDetails:
        "Developed a responsive e-commerce platform with product catalog, shopping cart, and checkout flow. Conducted functional testing on order processing, payment gateway integration, and user authentication. Validated cross-browser compatibility and mobile responsiveness.",
      link: "https://stemoras-shop.vercel.app/",
      repoLink: "https://github.com/code-oshi123/Stemoras.git",
      tech: ["HTML", "Tailwind CSS (CDN)", "Vanilla JavaScript"],
      qaHighlights: [
        "Real-time order state transition validation",
        "Cart price calculation & edge case discount testing",
        "Low-bandwidth & mobile responsiveness validation",
      ],
      image: project05,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Floating Sparkles in Work Section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-6 text-themeAccent/25 text-2xl select-none"
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-8 text-[#C4B2FF]/40 text-2xl select-none"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✧
        </motion.div>
      </div>

      {/* Section Header with Category Filter Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 gap-6 relative z-10">
        <div className="space-y-2">
          <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
            MY WORK ✦
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight">
            Selected Work <span className="text-[#8B5CF6]">✦</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2633]/70 max-w-md">
            Click any project card below to inspect testing scenarios,
            architecture, and engineering details.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "🌐 Web & PWA" },
            { id: "mobile", label: "📱 Mobile Apps" },
            { id: "systems", label: "💻 Systems" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === tab.id
                  ? "bg-[#5D3EA8] text-white shadow-md scale-105"
                  : "bg-white text-[#3B1C54] border border-[#ECE4FA] hover:border-[#8B5CF6]/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Projects Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="group relative bg-[#FAF8FE] border border-[#ECE4FA] hover:border-[#8B5CF6] hover:ring-2 hover:ring-[#8B5CF6]/25 p-4.5 rounded-[28px] shadow-2xs hover:shadow-[0_20px_40px_rgba(139,92,246,0.18)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveProjectModal(project)}
            >
              <div className="space-y-3.5">
                {/* Number Badge & Mockup Preview Container */}
                {/* <div className="relative h-40 rounded-2xl bg-white border border-[#EDE4FA] overflow-hidden flex items-center justify-center p-2 shadow-inner">
                  <span className="absolute top-2.5 left-2.5 z-10 w-6 h-6 rounded-full bg-[#5D3EA8] text-white font-bold text-[10px] flex items-center justify-center font-sans select-none shadow-xs group-hover:scale-110 transition-transform">
                    {project.id}
                  </span>

                  <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[9px] font-bold text-[#8B6EED] border border-[#ECE4FA] shadow-2xs">
                    QA &amp; Dev
                  </span>

                  {project.link ? (
                    <iframe
                      src={project.link}
                      title={`${project.title} live preview`}
                      className="w-full h-full rounded-xl border-0"
                      loading="lazy"
                      scrolling="no"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                </div> */}

                {/* Number Badge & Aesthetic Browser Preview */}
                <div className="relative h-40 rounded-2xl bg-white border border-[#EDE4FA] overflow-hidden shadow-inner">
                  {/* Browser Header */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-[#F3EEFC] border-b border-[#EDE4FA] flex items-center px-3 gap-1.5 z-20">
                    <span className="w-2 h-2 rounded-full bg-[#C4B2FF]" />
                    <span className="w-2 h-2 rounded-full bg-[#D8C6F0]" />
                    <span className="w-2 h-2 rounded-full bg-[#E8DDFD]" />

                    <span className="ml-2 text-[8px] text-[#8B6EED] truncate">
                      {project.title}
                    </span>
                  </div>

                  {/* Project Number */}
                  <span className="absolute top-8 left-2.5 z-20 w-6 h-6 rounded-full bg-[#5D3EA8] text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                    {project.id}
                  </span>

                  {/* QA Badge */}
                  <span className="absolute top-8 right-2.5 z-20 px-2 py-0.5 rounded-full bg-white/90 text-[9px] font-bold text-[#8B6EED] border border-[#ECE4FA]">
                    QA &amp; Dev
                  </span>

                  {/* Website Preview */}
                  {project.link ? (
                    <div className="absolute inset-x-0 top-6 bottom-0 overflow-hidden">
                      <iframe
                        src={project.link}
                        title={`${project.title} preview`}
                        loading="lazy"
                        scrolling="no"
                        tabIndex={-1}
                        className="absolute top-0 left-0 border-0 pointer-events-none"
                        style={{
                          width: "400%",
                          height: "400%",
                          transform: "scale(0.25)",
                          transformOrigin: "top left",
                        }}
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Text Content with Title Slide-In on hover */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-serif text-[#3B1C54] font-bold group-hover:text-[#5D3EA8] group-hover:translate-x-1.5 transition-all duration-300 leading-snug flex items-center gap-1.5">
                    <span>{project.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-[#8B5CF6] text-xs transition-opacity duration-300">
                      ✦
                    </span>
                  </h3>
                  <p className="text-[11.5px] text-[#2D2633]/75 leading-relaxed line-clamp-3 min-h-[48px]">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold text-[#3B1C54]/80 bg-white border border-[#E8DDFD] px-2 py-0.5 rounded-md uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10.5px] font-semibold text-[#5D3EA8] hover:text-[#8B5CF6] transition-colors"
                >
                  View Project →
                </a>
              </div>

              <div>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10.5px] font-semibold text-[#5D3EA8] hover:text-[#8B5CF6] transition-colors"
                >
                  View GitHub Repository →
                </a>
              </div> */}

              {/* Card Footer: Role & Diagonal Arrow */}
              <div className="pt-3.5 mt-3 border-t border-[#ECE4FA] flex justify-between items-center gap-2">
                <span className="text-[10.5px] font-semibold text-[#3B1C54]/80">
                  Role: {project.role}
                </span>

                <div className="w-8 h-8 rounded-full bg-white border border-[#EDE4FA] text-[#5D3EA8] flex items-center justify-center group-hover:bg-[#5D3EA8] group-hover:text-white group-hover:border-[#5D3EA8] transition-all duration-300 shadow-2xs shrink-0">
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* INTERACTIVE PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F0C31]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#FAF8FE] border border-[#ECE4FA] rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#DDD3F5] text-[#3B1C54] hover:bg-[#5D3EA8] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#5D3EA8] text-white text-[10px] font-bold tracking-widest uppercase">
                    PROJECT {activeProjectModal.id}
                  </span>
                  <span className="text-xs font-semibold text-[#8B6EED]">
                    Role: {activeProjectModal.role}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3B1C54]">
                  {activeProjectModal.title}
                </h3>
                <p className="text-xs font-medium text-[#8B6EED]">
                  {activeProjectModal.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-[13.5px] text-[#2D2633]/85 leading-relaxed">
                {activeProjectModal.fullDetails}
              </p>

              {/* QA Test Highlights */}
              <div className="space-y-2.5 bg-white p-4 rounded-2xl border border-[#ECE4FA]">
                <h4 className="text-xs font-bold text-[#5D3EA8] uppercase tracking-wider">
                  🔍 Quality Assurance &amp; Testing Highlights:
                </h4>
                <ul className="space-y-1.5">
                  {activeProjectModal.qaHighlights.map((qa, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#2D2633]/85 flex items-start gap-2"
                    >
                      <span className="text-[#8B5CF6] font-bold">✓</span>
                      <span>{qa}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#3B1C54]/75 uppercase tracking-wider block">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-white border border-[#DDD3F5] text-xs font-semibold text-[#5D3EA8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links - Same Line */}
              {/* <div className="flex flex-wrap items-center gap-3 pt-2">
                {activeProjectModal.link && (
                  <a
                    href={activeProjectModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2
                 px-5 py-2.5 rounded-full
                 bg-[#5D3EA8] text-white
                 text-xs font-semibold
                 hover:bg-[#4C3090] transition-colors"
                  >
                    Visit Live Website ↗
                  </a>
                )}

                {activeProjectModal.repoLink && (
                  <a
                    href={activeProjectModal.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2
                 px-5 py-2.5 rounded-full
                 bg-[#8a2be2] text-white
                 text-xs font-semibold
                 hover:bg-[#4C3090] transition-colors"
                  >
                    Visit GitHub Repository ↗
                  </a>
                )}
              </div> */}

              {/* <div className="pt-2 flex justify-end">
                
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-6 py-2.5 rounded-full bg-[#5D3EA8] hover:bg-[#4C3090] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div> */}
              {/* Project Links + Close Button */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Live Website - Light Purple */}
                  {activeProjectModal.link && (
                    <a
                      href={activeProjectModal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-5 py-2.5
                   rounded-full bg-[#A78BFA] text-white
                   text-xs font-semibold
                   hover:bg-[#5D3EA8] transition-colors"
                    >
                      Visit Live Website ↗
                    </a>
                  )}

                  {/* GitHub - Medium Purple */}
                  {activeProjectModal.repoLink && (
                    <a
                      href={activeProjectModal.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-5 py-2.5
                   rounded-full bg-[#8A2BE2] text-white
                   text-xs font-semibold
                   hover:bg-[#5D3EA8] transition-colors"
                    >
                      Visit GitHub Repository ↗
                    </a>
                  )}
                </div>

                {/* Close Preview - Deep Purple */}
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-6 py-2.5 rounded-full
               bg-[#5D3EA8] text-white text-xs
               font-semibold
               hover:bg-[#5D3EA8] transition-colors
               cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

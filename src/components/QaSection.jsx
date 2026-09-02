import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QaSection() {
  const [activeStep, setActiveStep] = useState(0);

  const qaSteps = [
    {
      id: "01",
      name: "EXPLORE",
      title: "Requirements Analysis & Scenario Mapping",
      tagline: "Understanding the 'Why' before testing the 'How'",
      desc: "Deeply review functional specifications, user stories, and acceptance criteria. Map out user journeys and brainstorm potential edge conditions, boundary limits, and negative test paths.",
      activities: [
        "User Story & Requirement Deconstruction",
        "Edge-Case & Negative Scenario Brainstorming",
        "Test Scope Definition & Traceability Matrix",
        "Risk-Based Testing Prioritization"
      ],
      icon: "🧭"
    },
    {
      id: "02",
      name: "TEST",
      title: "Methodical Test Execution",
      tagline: "Verifying logic across manual, API & automated layers",
      desc: "Execute structured manual test suites and automated scripts using Playwright and Postman. Validate UI responsiveness, cross-browser compatibility, and REST API contract compliance.",
      activities: [
        "Manual & Functional Test Execution",
        "REST API Validation (Status, Schema, Payloads) in Postman",
        "Automated Test Script Execution with Playwright",
        "Cross-Browser & Cross-Device Compatibility Checks"
      ],
      icon: "🧪"
    },
    {
      id: "03",
      name: "FIND",
      title: "Defect Isolation & Root Cause Analysis",
      tagline: "Pinpointing subtle inconsistencies that others miss",
      desc: "Identify UI/UX glitches, business logic discrepancies, broken endpoints, and performance bottlenecks. Replicate defects reliably and isolate specific error triggers.",
      activities: [
        "Uncovering Hidden Edge-Case Bugs",
        "UI/UX Layout & Accessibility Inconsistencies",
        "Browser Console & Network Error Inspection",
        "API Error Response & Exception Verification"
      ],
      icon: "🔍"
    },
    {
      id: "04",
      name: "REPORT",
      title: "Crystal-Clear Defect Documentation",
      tagline: "Transforming bugs into actionable developer tickets",
      desc: "Log comprehensive, well-structured bug reports with exact reproduction steps, expected vs. actual outcomes, environment configurations, network logs, and visual evidence.",
      activities: [
        "Step-by-Step Reproduction Instructions",
        "Expected vs. Actual Outcome Comparison",
        "Attaching Network Payloads, Logs & Screenshots",
        "Assigning Severity & Priority in Tracking Tools"
      ],
      icon: "📝"
    },
    {
      id: "05",
      name: "IMPROVE",
      title: "Regression & Continuous Enhancement",
      tagline: "Ensuring long-term product stability with every release",
      desc: "Retest resolved tickets, run full regression test suites to guarantee zero side-effects, and collaborate with engineering to strengthen test coverage.",
      activities: [
        "Fix Verification & Regression Testing",
        "Smoke & Sanity Testing for Release Candidates",
        "Continuous Feedback Loop with Dev Team",
        "Test Suite Maintenance & Optimization"
      ],
      icon: "✨"
    }
  ];

  const qaSkillTags = [
    { name: "Manual Testing", category: "Core QA" },
    { name: "Test Case Design", category: "Core QA" },
    { name: "Bug Reporting & Tracking", category: "Core QA" },
    { name: "API Testing (Postman)", category: "API" },
    { name: "Automated Testing (Playwright)", category: "Automation" },
    { name: "UI/UX Testing", category: "Design QA" },
    { name: "Regression Testing", category: "Core QA" },
    { name: "Cross-Device Testing", category: "Mobile/Web" },
    { name: "Agile & Waterfall SDLC", category: "Process" }
  ];

  return (
    <section 
      id="qa" 
      className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Background Ambient Lights & Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-12 left-1/4 text-themeAccent/25 text-3xl select-none"
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-1/6 text-[#C4B2FF]/30 text-2xl select-none"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ✧
        </motion.div>
      </div>

      {/* SECTION HEADER */}
      <div className="text-center space-y-3 mb-14 sm:mb-18 relative z-10">
        <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
          QA MINDSET ✦
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight">
          Behind the Screen <span className="text-[#8B5CF6]">🔍</span>
        </h2>
        <p className="text-sm sm:text-base text-[#2D2633]/75 max-w-xl mx-auto leading-relaxed">
          "I look for what others might miss." — exploring applications with curiosity, rigor, and a quality-driven engineering mindset.
        </p>
      </div>

      {/* INTERACTIVE QA WORKFLOW CONTAINER */}
      <motion.div 
        className="bg-[#FAF8FE] border border-[#ECE4FA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-themeLavender/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-10 relative z-10">
          
          {/* Top Bar: Explanatory Tag */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-6 border-b border-[#ECE4FA]">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#8B6EED] uppercase block">
                INTERACTIVE QA LIFE CYCLE
              </span>
              <p className="text-xs text-[#2D2633]/70 pt-0.5">
                Click any phase below to inspect the testing methodology and deliverables.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#EDE4FA] text-xs font-bold text-[#5D3EA8] shadow-2xs">
              <span>Phase {qaSteps[activeStep].id} of 05</span>
              <span className="text-[#8B5CF6]">✦</span>
            </div>
          </div>

          {/* 5-Step Clickable Interactive Process Buttons with Animated Progress Line */}
          <div className="relative">
            {/* Animated Progress Connecting Line */}
            <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#EDE4FA] pointer-events-none z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#5D3EA8] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
              {qaSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between gap-3 relative border cursor-pointer group ${
                      isActive
                        ? 'bg-white border-[#8B5CF6] shadow-md -translate-y-1 ring-2 ring-[#8B5CF6]/20'
                        : 'bg-white/70 border-[#ECE4FA] hover:border-[#8B5CF6]/50 hover:bg-white hover:shadow-xs'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#5D3EA8] text-white shadow-xs scale-110' 
                          : 'bg-[#FAF8FE] border border-[#DDD3F5] text-[#5D3EA8] group-hover:bg-[#5D3EA8] group-hover:text-white'
                      }`}>
                        {step.id}
                      </span>
                      
                      {/* Bouncing / Pulsing Icon on Hover */}
                      <motion.span 
                        className="text-lg select-none inline-block origin-center"
                        whileHover={{ scale: 1.35, rotate: [0, -12, 12, 0] }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {step.icon}
                      </motion.span>
                    </div>

                    <div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase block ${
                        isActive ? 'text-[#8B5CF6]' : 'text-[#8B6EED]/80'
                      }`}>
                        {step.name}
                      </span>
                      <span className="text-xs font-serif font-bold text-[#3B1C54] line-clamp-1">
                        {step.title}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div 
                        layoutId="activeStepIndicator"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#8B5CF6] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Deep-Dive Showcase Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 border border-[#ECE4FA] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-[#ECE4FA]/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FAF8FE] border border-[#DDD3F5] text-[10px] font-bold text-[#5D3EA8] uppercase tracking-widest font-mono">
                      STAGE {qaSteps[activeStep].id} • {qaSteps[activeStep].name}
                    </span>
                    <span className="text-sm select-none">{qaSteps[activeStep].icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3B1C54]">
                    {qaSteps[activeStep].title}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-medium text-[#8B6EED]">
                    "{qaSteps[activeStep].tagline}"
                  </p>
                </div>

                <div className="shrink-0 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF8FE] border border-[#ECE4FA] text-xs font-semibold text-[#3B1C54]">
                  <span>🔍 Quality Inspection</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <h4 className="text-xs font-bold text-[#3B1C54] uppercase tracking-wider">
                    How I Approach This Stage
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#2D2633]/85 leading-relaxed">
                    {qaSteps[activeStep].desc}
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <h4 className="text-xs font-bold text-[#3B1C54] uppercase tracking-wider">
                    Key Deliverables &amp; Artifacts
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {qaSteps[activeStep].activities.map((act, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF8FE] border border-[#EDE4FA] text-xs text-[#2D2633]/85 font-medium"
                      >
                        <span className="text-[#8B5CF6] font-bold text-xs mt-0.5">✓</span>
                        <span className="leading-snug">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testing Skills Matrix (Pills) */}
          <div className="pt-6 border-t border-[#ECE4FA] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2.5 text-center md:text-left">
              <span className="text-[11px] font-bold text-[#3B1C54]/75 uppercase tracking-wider block">
                Testing Specializations &amp; Methodologies
              </span>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {qaSkillTags.map((tag) => (
                  <span 
                    key={tag.name}
                    className="text-xs font-semibold text-[#3B1C54] bg-white border border-[#ECE4FA] hover:border-[#8B5CF6]/50 hover:bg-[#FAF8FE] px-3.5 py-1.5 rounded-full shadow-2xs transition-all hover:scale-105 cursor-default"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating Magnifying Glass Badge */}
            <div className="shrink-0 flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#ECE4FA] shadow-2xs">
              <motion.span 
                className="text-3xl select-none"
                animate={{ rotate: [-5, 8, -5], y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                🔍
              </motion.span>
              <div className="text-left pr-2">
                <div className="text-xs font-bold text-[#3B1C54]">Detail-Oriented</div>
                <div className="text-[10px] text-[#8B6EED] font-semibold">Zero-Bug Standard</div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

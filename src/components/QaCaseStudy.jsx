import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import QaCaseStudyModal from './QaCaseStudyModal';

export default function QaCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tags = [
    "Manual Testing",
    "Functional Testing",
    "Negative Testing",
    "Test Case Design",
    "Web Testing"
  ];

  return (
    <section 
      id="qa-case-study" 
      className="py-10 sm:py-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
    >
      {/* Background Ambient Lights & Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-10 right-16 text-themeAccent/25 text-3xl select-none"
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.div>
        <motion.div 
          className="absolute bottom-8 left-12 text-[#C4B2FF]/30 text-2xl select-none"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ✧
        </motion.div>
      </div>

      {/* SECTION HEADER */}
      <div className="text-center space-y-2.5 mb-10 sm:mb-12 relative z-10">
        <span className="text-[12px] tracking-[0.28em] font-semibold text-[#8B6EED] uppercase block">
          FEATURED QA CASE STUDY ✦
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3B1C54] font-medium tracking-tight">
          Quality Assurance Projects <span className="text-[#8B5CF6]">✦</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#2D2633]/70 max-w-xl mx-auto leading-relaxed">
          Explore my hands-on QA projects, including manual testing, test case design, API testing, and test automation as I continue to develop my skills.
        </p>
      </div>

      {/* QA PROJECT CARD CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group bg-[#FAF8FE] border border-[#ECE4FA] hover:border-[#8B5CF6] hover:ring-2 hover:ring-[#8B5CF6]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 lg:p-11 shadow-sm hover:shadow-[0_20px_45px_rgba(139,92,246,0.16)] transition-all duration-300 overflow-hidden z-10"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-themeLavender/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT: Card Visual Preview with Browser Mock */}
          <div className="lg:col-span-5">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer group/preview relative rounded-2xl bg-white border border-[#EDE4FA] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Browser Header Bar */}
              <div className="h-8 bg-[#F3EEFC] border-b border-[#EDE4FA] flex items-center px-3.5 gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C4B2FF]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8C6F0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8DDFD]" />
                <span className="ml-2 text-[10px] font-mono text-[#8B6EED] truncate">
                  saucedemo.com/login
                </span>
                <span className="ml-auto text-[9px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  Verified Report
                </span>
              </div>

              {/* Graphic Mockup Area */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-[#FAF8FE] via-white to-[#F3EEFC]/40 flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#5D3EA8] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs">
                    CASE STUDY #01
                  </span>
                  <span className="text-[10px] font-bold text-[#8B6EED] bg-white border border-[#EDE4FA] px-2.5 py-1 rounded-full shadow-2xs flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#8B5CF6]" />
                    Manual QA
                  </span>
                </div>

                <div className="my-4 p-3.5 rounded-xl bg-white/90 border border-[#ECE4FA] shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#3B1C54]">Execution Pass Rate</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      100% (4 / 4)
                    </span>
                  </div>
                  <div className="w-full bg-[#EDE4FA] h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#8B5CF6] to-emerald-500 h-full w-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#2D2633]/65 pt-0.5">
                    <span>AUTH-01 to AUTH-04</span>
                    <span>0 Defects / 0 Blockers</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <span className="inline-block w-6 h-6 rounded-full bg-purple-100 border border-white text-[9px] font-bold text-[#5D3EA8] flex items-center justify-center">
                      TC1
                    </span>
                    <span className="inline-block w-6 h-6 rounded-full bg-purple-200 border border-white text-[9px] font-bold text-[#5D3EA8] flex items-center justify-center">
                      TC2
                    </span>
                    <span className="inline-block w-6 h-6 rounded-full bg-purple-300 border border-white text-[9px] font-bold text-[#5D3EA8] flex items-center justify-center">
                      TC3
                    </span>
                    <span className="inline-block w-6 h-6 rounded-full bg-purple-400 border border-white text-[9px] font-bold text-white flex items-center justify-center">
                      TC4
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#5D3EA8] group-hover/preview:text-[#8B5CF6] flex items-center gap-1">
                    Inspect Report Details ↗
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Card Text, Tags & Primary Action Button */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-100 text-[#5D3EA8] border border-purple-200 text-[11px] font-bold">
                  Authentication &amp; Access Control
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified Evidence
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3B1C54] leading-tight">
                SauceDemo Login Functionality — Manual Testing
              </h3>

              <p className="text-xs sm:text-[14px] text-[#2D2633]/85 leading-relaxed">
                A manual QA case study documenting positive and negative testing of the SauceDemo login functionality, including test execution results and validation messages.
              </p>
            </div>

            {/* Tags Required: Manual Testing, Functional Testing, Negative Testing, Test Case Design */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#3B1C54]/75 uppercase tracking-wider block">
                Testing Competencies &amp; Scope:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-[#3B1C54] bg-white border border-[#EDE4FA] px-3 py-1 rounded-lg shadow-2xs hover:border-[#8B5CF6]/50 transition-colors"
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics & Highlights */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              <div className="bg-white/80 border border-[#ECE4FA] p-2.5 rounded-xl text-center">
                <span className="block text-base sm:text-lg font-serif font-bold text-[#3B1C54]">4 Cases</span>
                <span className="text-[10px] text-[#2D2633]/65 font-medium">Executed Suite</span>
              </div>
              <div className="bg-white/80 border border-[#ECE4FA] p-2.5 rounded-xl text-center">
                <span className="block text-base sm:text-lg font-serif font-bold text-emerald-600">100% Pass</span>
                <span className="text-[10px] text-[#2D2633]/65 font-medium">Expected Outcome</span>
              </div>
              <div className="bg-white/80 border border-[#ECE4FA] p-2.5 rounded-xl text-center">
                <span className="block text-base sm:text-lg font-serif font-bold text-[#5D3EA8]">0 Defects</span>
                <span className="text-[10px] text-[#2D2633]/65 font-medium">Accurate Validation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Primary "View QA Case Study" Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#5D3EA8] to-[#8B5CF6] text-white text-xs sm:text-sm font-semibold hover:from-[#4C3090] hover:to-[#7C3AED] shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_25px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>View QA Case Study</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>

              {/* Direct PDF Report Link */}
              <a
                href="/SauceDemo_test_report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white border border-[#DDD3F5] text-[#5D3EA8] hover:text-[#3B1C54] hover:bg-[#FAF8FE] hover:border-[#8B5CF6] text-xs font-semibold shadow-2xs transition-all duration-200"
              >
                <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Source PDF Report</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

        </div>
      </motion.div>

      {/* QA Case Study Interactive Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <QaCaseStudyModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
